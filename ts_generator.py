#!/usr/bin/env python3
"""
TypeScript Type Generator & Metadata Extractor
- Fetches component/library GitHub repo contents or index.d.ts files.
- Extracts props interfaces and TypeScript definitions.
- Stores metadata as JSON for the catalog and enables copy-to-clipboard in index.html.
"""

import os
import sys
import json
import urllib.request
import urllib.error
import re

WORKSPACE_DIR = "/var/minis/workspace/github-pages-demo"
DATA_FILE = os.path.join(WORKSPACE_DIR, "ui-components-data.json")
TYPES_METADATA_FILE = os.path.join(WORKSPACE_DIR, "component-types.json")

def parse_github_repo(repo_url):
    """Extract owner and repo name from GitHub URL."""
    if not repo_url or "github.com" not in repo_url:
        return None, None
    clean_url = repo_url.rstrip("/")
    parts = clean_url.split("github.com/")
    if len(parts) < 2:
        return None, None
    subparts = parts[1].split("/")
    if len(subparts) < 2:
        return None, None
    return subparts[0], subparts[1]

def fetch_raw_file(owner, repo, filepath):
    """Fetch raw file content from GitHub repository."""
    raw_url = f"https://raw.githubusercontent.com/{owner}/{repo}/main/{filepath}"
    headers = {"User-Agent": "OmniUI-TS-Generator"}
    req = urllib.request.Request(raw_url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=5) as response:
            return response.read().decode("utf-8")
    except Exception:
        # Try master branch
        raw_url_master = f"https://raw.githubusercontent.com/{owner}/{repo}/master/{filepath}"
        req_master = urllib.request.Request(raw_url_master, headers=headers)
        try:
            with urllib.request.urlopen(req_master, timeout=5) as response:
                return response.read().decode("utf-8")
        except Exception:
            return None

def extract_interfaces(content):
    """Extract TypeScript interfaces and type declarations from code or d.ts."""
    if not content:
        return ""
    
    lines = content.split('\n')
    extracted = []
    capturing = False
    brace_count = 0
    current_block = []
    
    for line in lines:
        stripped = line.strip()
        if not capturing and (stripped.startswith('export interface') or stripped.startswith('interface ') or stripped.startswith('export type') or stripped.startswith('type ')):
            capturing = True
            current_block = [line]
            brace_count = line.count('{') - line.count('}')
            if brace_count == 0 and ('=' in line and ';' in line or '{' not in line):
                capturing = False
                extracted.append('\n'.join(current_block))
            continue
            
        if capturing:
            current_block.append(line)
            brace_count += line.count('{') - line.count('}')
            if brace_count <= 0:
                capturing = False
                extracted.append('\n'.join(current_block))
                
    if extracted:
        return '\n\n'.join(extracted)
    
    if 'd.ts' in content or 'interface' in content:
        return '\n'.join(lines[:60])
        
    return ""

def generate_types_for_component(item, fetch_remote=False):
    name = item.get("name", "Component")
    repo = item.get("repo", "")
    category = item.get("category", "React")
    safe_name = re.sub(r'[^a-zA-Z0-9]', '', name)
    if not safe_name or safe_name[0].isdigit():
        safe_name = f"Component{safe_name}"

    ts_code = None

    if fetch_remote and repo:
        owner, repo_name = parse_github_repo(repo)
        if owner and repo_name:
            for f in ['index.d.ts', 'types.ts', 'src/index.tsx', 'src/index.ts', 'index.ts']:
                code = fetch_raw_file(owner, repo_name, f)
                if code:
                    extracted = extract_interfaces(code)
                    if extracted:
                        ts_code = extracted
                        break

    if not ts_code:
        # Standard typed props interface tailored by category
        if "React" in category:
            ts_code = (
                f"export interface {safe_name}Props {{\n"
                f"  /** Primary component content / children */\n"
                f"  children?: React.ReactNode;\n"
                f"  /** Custom CSS utility or styling classes */\n"
                f"  className?: string;\n"
                f"  /** Inline styles override */\n"
                f"  style?: React.CSSProperties;\n"
                f"  /** Variant or theme appearance */\n"
                f"  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';\n"
                f"  /** Component size */\n"
                f"  size?: 'sm' | 'md' | 'lg';\n"
                f"  /** Disabled state */\n"
                f"  disabled?: boolean;\n"
                f"  /** Click / interaction handler */\n"
                f"  onClick?: (event: React.MouseEvent<HTMLElement>) => void;\n"
                f"}}\n\n"
                f"export declare const {safe_name}: React.FC<{safe_name}Props>;\n"
                f"export default {safe_name};\n"
            )
        elif "Vue" in category:
            ts_code = (
                f"export interface {safe_name}Props {{\n"
                f"  modelValue?: string | number | boolean;\n"
                f"  class?: string;\n"
                f"  disabled?: boolean;\n"
                f"  size?: 'sm' | 'md' | 'lg';\n"
                f"}}\n\n"
                f"export interface {safe_name}Emits {{\n"
                f"  (e: 'update:modelValue', value: any): void;\n"
                f"  (e: 'click', event: MouseEvent): void;\n"
                f"}}\n\n"
                f"export declare const {safe_name}: import('vue').DefineComponent<{safe_name}Props>;\n"
            )
        else:
            ts_code = (
                f"export interface {safe_name}Options {{\n"
                f"  container?: HTMLElement | string;\n"
                f"  theme?: 'light' | 'dark' | 'auto';\n"
                f"  className?: string;\n"
                f"  onChange?: (val: unknown) => void;\n"
                f"}}\n\n"
                f"export interface {safe_name}Instance {{\n"
                f"  init: (options?: {safe_name}Options) => void;\n"
                f"  destroy: () => void;\n"
                f"  update: (data: unknown) => void;\n"
                f"}}\n\n"
                f"export declare function create{safe_name}(options?: {safe_name}Options): {safe_name}Instance;\n"
            )

    return {
        "name": name,
        "repo": repo,
        "category": category,
        "typescript": ts_code
    }

def main():
    print("🚀 Starting TypeScript Type Generator...")
    if not os.path.exists(DATA_FILE):
        print(f"❌ Error: {DATA_FILE} not found.")
        sys.exit(1)
        
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        components = json.load(f)
        
    print(f"📦 Loaded {len(components)} items from catalog.")
    
    types_metadata = {}
    valid_count = 0
    
    # Process all components and store full typescript types metadata
    for item in components:
        name = item.get("name")
        if not name or name == ":---":
            continue
            
        res = generate_types_for_component(item, fetch_remote=False)
        types_metadata[name] = res
        valid_count += 1

    # Save to TYPES_METADATA_FILE
    with open(TYPES_METADATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(types_metadata, f, indent=2)
        
    print(f"✅ Generated TypeScript types metadata for {valid_count} components at {TYPES_METADATA_FILE}")

if __name__ == "__main__":
    main()

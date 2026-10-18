#!/usr/bin/env node
/**
 * Node.js Dependency Checker Utility for Component Repositories
 * Fetches package.json from GitHub API and outputs formatted dependencies.
 */

const https = require('https');

function parseRepo(input) {
    input = input.trim().replace(/\/$/, '');
    if (input.startsWith('http://') || input.startsWith('https://')) {
        const parts = input.split('/');
        return { owner: parts[parts.length - 2], repo: parts[parts.length - 1] };
    }
    const parts = input.split('/');
    if (parts.length === 2) {
        return { owner: parts[0], repo: parts[1] };
    }
    return null;
}

async function fetchPackageJson(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/package.json`;
    const headers = {
        'User-Agent': 'Minis-Dependency-Checker-Node',
        'Accept': 'application/vnd.github.v3+json'
    };
    if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
        headers['Authorization'] = `token ${process.env.GITHUB_TOKEN || process.env.GH_TOKEN}`;
    }

    return new Promise((resolve, reject) => {
        https.get(url, { headers }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    return reject(new Error(`GitHub API returned status ${res.statusCode}: ${data}`));
                }
                try {
                    const json = JSON.parse(data);
                    if (json.content && json.encoding === 'base64') {
                        const buffer = Buffer.from(json.content, 'base64');
                        const pkg = JSON.parse(buffer.toString('utf8'));
                        resolve(pkg);
                    } else {
                        reject(new Error('Invalid package.json content format from GitHub API'));
                    }
                } catch (err) {
                    reject(err);
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('Usage: node dependency_checker.js <github_url_or_owner/repo>');
        process.exit(1);
    }

    const repoInput = args[0];
    const parsed = parseRepo(repoInput);
    if (!parsed) {
        console.error(`Invalid repository: ${repoInput}`);
        process.exit(1);
    }

    console.log(`Fetching package.json for ${parsed.owner}/${parsed.repo}...`);
    try {
        const pkg = await fetchPackageJson(parsed.owner, parsed.repo);
        const report = {
            name: pkg.name || parsed.repo,
            version: pkg.version || 'unknown',
            dependencies: pkg.dependencies || {},
            devDependencies: pkg.devDependencies || {},
            peerDependencies: pkg.peerDependencies || {}
        };
        console.log(JSON.stringify(report, null, 2));
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

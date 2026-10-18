const fs = require('fs');
const path = require('path');

const markdownPath = '/var/minis/workspace/UI_Components_1000.md';

// Read the markdown file
let content = fs.readFileSync(markdownPath, 'utf8');

// Extract table rows using regex
const tableRegex = /\| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|/g;
let entries = [];
let match;

while ((match = tableRegex.exec(content)) !== null) {
  const name = match[1].trim();
  const website = match[2].trim();
  const docs = match[3].trim();
  const repo = match[4].trim();
  const license = match[5].trim();

  entries.push({
    name,
    website,
    docs,
    repo,
    license,
    category: detectCategory(name),
  });
}

function detectCategory(name) {
  const lower = name.toLowerCase();
  if (lower.includes('react')) return 'React';
  if (lower.includes('vue')) return 'Vue';
  if (lower.includes('angular')) return 'Angular';
  if (lower.includes('svelte')) return 'Svelte';
  if (lower.includes('nuxt')) return 'Nuxt';
  if (lower.includes('chakra')) return 'UI Frameworks';
  if (lower.includes('antd')) return 'UI Frameworks';
  if (lower.includes('mui')) return 'UI Frameworks';
  if (lower.includes('tailwind')) return 'UI Libraries';
  if (lower.includes('framer')) return 'Animation';
  if (lower.includes('lottie')) return 'Animation';
  if (lower.includes('swiper')) return 'Carousel';
  if (lower.includes('tabs')) return 'Tabs';
  if (lower.includes('form')) return 'Forms';
  if (lower.includes('table')) return 'Tables';
  if (lower.includes('chart')) return 'Charts';
  if (lower.includes('data')) return 'Data Grid';
  if (lower.includes('icon')) return 'Icons';
  if (lower.includes('card')) return 'Cards';
  if (lower.includes('button')) return 'Buttons';
  if (lower.includes('modal')) return 'Modals';
  return 'Other';
}

// Sort entries alphabetically by name
entries.sort((a, b) => a.name.localeCompare(b.name));

// Create output file
const output = JSON.stringify(entries, null, 2);
fs.writeFileSync('/var/minis/workspace/github-pages-demo/ui-components-data.json', output);
console.log(`Parsed ${entries.length} entries and saved to ui-components-data.json`);

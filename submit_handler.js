const fs = require('fs');

const SUBMISSIONS_FILE = '/var/minis/workspace/github-pages-demo/community_submissions.json';

// Simple validation logic
function validateRepo(repoUrl) {
    // In a real scenario, this would fetch the repo or check GitHub API
    // For this demo, we check if it's a valid GitHub URL and contains common React/TS patterns
    const isGithub = repoUrl.includes('github.com');
    const isReactOrTS = repoUrl.toLowerCase().includes('react') || repoUrl.toLowerCase().includes('typescript') || repoUrl.toLowerCase().includes('ts');
    return {
        valid: isGithub,
        isPriority: isGithub && isReactOrTS
    };
}

function handleSubmission(data) {
    let submissions = [];
    if (fs.existsSync(SUBMISSIONS_FILE)) {
        submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'));
    }

    const validation = validateRepo(data.repo);
    const newEntry = {
        ...data,
        ...validation,
        timestamp: new Date().toISOString()
    };

    submissions.push(newEntry);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    return newEntry;
}

// Export for usage
module.exports = { handleSubmission };

#!/usr/bin/env node

const open = require('open');

async function generateCodeSandboxUrl(githubURL) {
    // Extract username and repository name from the GitHub URL
    const [_, username, repo] = githubURL.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    try {
        const codesandboxUrl = `https://codesandbox.io/p/github/${username}/${repo}`;
        // Open in the default browser
        await open(codesandboxUrl);
    } catch (error) {
        console.error('Error generating CodeSandbox URL:', error.message);
    }
}

// Accept GitHub URL as a command-line argument
const githubURL = process.argv[2];
generateCodeSandboxUrl(githubURL);

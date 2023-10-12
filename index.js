const open = require('open');
const readline = require('readline');

const promptSTRING = "\n1: open repo in chrome \n2: navigate down to directory containing package.json \n3: copy paste URL at that level. \n4: Paste it here \n5: press ENTER \n"

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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

readlineInterface.question(promptSTRING, githubURL => {
    generateCodeSandboxUrl(githubURL);
    readlineInterface.close();
});

// code for a cli
// example input: :https://github.com/aymanfarhat/js13k-starter"
// expected output : "https://codesandbox.io/p/github/aymanfarhat/js13k-starter"opened in new browser window

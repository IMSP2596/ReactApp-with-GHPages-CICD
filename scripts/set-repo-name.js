const { execSync } = require('child_process');
const fs = require('fs');

const repoName = execSync('powershell -Command "$url = git remote get-url origin; $repoName = ($url -split \'/\')[4]; Write-Host $repoName"').toString().trim();



// Update the package.json file
const packageJsonPath = '../package.json';
const packageJson = require(packageJsonPath);
packageJson.name = repoName;


console.log(repoName,fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2)));
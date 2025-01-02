const branchName = require('child_process')
  .execSync('git symbolic-ref --short HEAD')
  .toString()
  .trim();

const branchRegex = /^(feature|bugfix|hotfix|release)\/[a-z0-9._-]+$/;

if (!branchRegex.test(branchName)) {
  console.error(
    `❌ Invalid branch name "${branchName}". Please use a branch name following the convention "type/description" (e.g., feature/add-login).`
  );
  process.exit(1);
} else {
  console.log(`✅ Branch name "${branchName}" is valid.`);
}

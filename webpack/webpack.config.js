const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

// Create a placeholder object to hold the value of REPO_NAME
let sharedData = { REPO_NAME: '' };

module.exports = (envVars) => {
    const { env, repo_name } = envVars;
    sharedData.REPO_NAME = repo_name; // Dynamically set the value
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
};

// Export the sharedData object
module.exports.sharedData = sharedData;

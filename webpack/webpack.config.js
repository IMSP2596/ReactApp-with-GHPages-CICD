const {merge}=require('webpack-merge');

const commonConfig=require('./webpack.common');
module.exports=(envVars)=>{
    const {env,repo_name}=envVars;
    const REPO_NAME = repo_name;
    console.log(REPO_NAME)
    const envConfig=require(`./webpack.${env}.js`)
    const config=merge(commonConfig,envConfig);    
    return config
}
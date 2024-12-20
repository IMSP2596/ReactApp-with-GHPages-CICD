# {{repo_name}}

1 Modify below settings to run the workflow successfully after clone.🛠️

 - go to settings -> Actions -> General scroll down to Workflow permissions select Read and write permissions & check Allow GitHub Actions to create and approve pull requests to run the workflow.
 - then go to Actions tab & re-run all failed jobs.♻️
   
2 Run below command & genrate private key & public key.🔐

 - add deploy keys & private key
 - ssh-keygen -t rsa -m pem -b 4096 -C "youremailhere@example.com" -N ""
 - add public key to Deploy keys
 - add private key to Secrets and Variables -> Actions -> Repository secret
   
3 Run npm install command to install all dependencies of current project.📦

4 run npm start to spin up the development server. 🚀

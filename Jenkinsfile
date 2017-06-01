#!groovy
node {
   
   stage 'Descargando GitHub'
    
   sh 'rm -rf *'
   checkout scm
 
  stage 'Desplegando'
  sh 'kill -9 $(ps -fea|grep node|grep index.js|cut -d " " -f 5)'
  sh 'npm install'
  sh 'nohup node index.js &'

}

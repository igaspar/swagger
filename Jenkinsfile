#!groovy
node {
   
   stage 'Descargando GitHub'
    
   sh 'rm -rf *'
   checkout scm
 
  stage 'Desplegando'
  sh 'chmod 777 comando.sh'
  sh './comando.sh'	
  sh 'npm install'
  sh 'nohup  npm index.js &'

}

#!groovy
node {
   
   stage 'Descargando GitHub'
     
	 sh 'rm -rf *'
	 checkout scm
 
  stage 'Desplegando'
  
  sh 'kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')'	
  sh 'npm install'
  sh 'nohup  node start &'

}

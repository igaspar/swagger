#!groovy
node {
   
   stage 'Descargando GitHub'
     
	 sh 'rm -rf *'
	 checkout scm
 
  stage 'Desplegando'
  
 
  sh ' sudo killall node'
  sh 'npm install'
  sh 'nohup  npm start &'

}

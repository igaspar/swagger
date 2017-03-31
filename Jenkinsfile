#!groovy
node {
   
   stage 'Descargando GitHub'
     
	 sh 'rm -rf *'
	 checkout scm
 
  stage 'Desplegando'
  sh 'npm install'
  sh 'nohup  npm start &'

}

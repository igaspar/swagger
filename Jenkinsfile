#!groovy
node {
   
   stage 'Descargando GitHub'
     
	 sh 'rm -rf *'
	 checkout scm
 
  stage 'Desplegando'
  
  sh 'sudo chmod 777 -R /var/lib/jenkins/workspace/swagger_master-LFIVBPFV5QJTYATWQ2I6YX2NQMU5NHBWV4ZFH3ZDGTAS3IM2JHXQ/'
  sh ' sudo killall node'
  sh 'npm install'
  sh 'nohup  npm start &'

}

pipeline {

	agent { label 'linux-angular-build-node' }
	parameters {
        string(name: 'DEPLOYMENT_SERVER', defaultValue: params.DEPLOYMENT_SERVER ?: 'dvadmin@192.168.117.109:/var/www/html/storybook/', description: 'deployment server and directory')
        string(name: 'DEPLOYMENT_PATH', defaultValue: params.DEPLOYMENT_PATH ?: '/var/www/html/storybook/*', description: 'deployment directory')
		
    }
	environment {  
       
        DEPLOYMENT_PATH = "${params.DEPLOYMENT_PATH}"
	
    }
	stages {
		stage('Setup Environment') {
			steps {
				sh 'npm install'
			
			}
		}
			stage('Build') {
			steps {
				sh 'npm run build-storybook'
			}
		}
		
		 stage('Delete old files') {
      steps {
        script {
          def remote = [:]
          remote.name = "storybook-dev-node"
          remote.host = "192.168.117.109"
          remote.allowAnyHosts = true
          withCredentials([usernamePassword(credentialsId: 'refl-internal-linux-creds', passwordVariable: 'password', usernameVariable: 'userName')]) {
            remote.user = userName
            remote.password = password
	        sshCommand remote: remote, command:"sudo rm -rf ${env.DEPLOYMENT_PATH}"
	        
          }
        }
      }
     }
		
		stage('Deploy') {
			steps {
			
				sh "cd storybook-static && scp -r  * ${env.DEPLOYMENT_SERVER}"
			}
		}
	
	}
	
	

}

pipeline {
    agent any

    stages {
        stage('Pre build') {
            steps {
                echo 'INSTALL ENVIRONMENT'
                sh 'sudo apt -y install npm'
            }
        }
        stage('Build') {
            steps {
                echo 'pulled git repo'
                // Run Maven on a Unix agent.
                echo 'Start building project'

                echo 'INSTALLING DEPENDENCIES'
                sh 'npm install'
                echo 'DEPENDENCIES INSTALLED'

                echo 'BUILDING ARTIFACT'
                
                echo 'ARTIFACT BUILT'

                echo 'finished building'
                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }
        }
        stage('Create Docker Image') {
            steps {
                echo 'CREATING DOCKER IMAGE'
                sh 'users'
                sh 'sudo chmod 777 /var/run/docker.sock'
                sh 'sudo usermod -aG docker jenkins'
                sh 'docker build -t webservice:current .'
            }

        }
        stage('Deploy on Docker Swarm') {
            steps {
                echo 'DEPLOY ON DOCKER SWARM'
                sh 'echo date'
            }
        }
    }
}

pipeline {
    agent any
    environment {
        NEW_VERSION = '1.0'
    }
    stages {
        stage('build') {
            steps {
                echo 'building the application...'
                echo "built with version ${NEW_VERSION}"
            }
        }
        stage('test') {
            steps {
                echo 'testing the application...'
                // Credentials should not be used directly here unless inside a withCredentials block.
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying the application...'
                withCredentials([usernamePassword(credentialsId: 'server-credentials', usernameVariable: 'USER', passwordVariable: 'PWD')]) {
                    echo "deployed with ${USER} and ${PWD}"
                }
            }
        }
    }
}



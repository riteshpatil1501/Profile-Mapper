pipeline {
    agent any
    environment {
        NEW_VERSION  = '1.0'
        SERVER_CREDENTIALS = credentials('server-credentials')
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
                echo "tested with ${SERVER_CREDENTIALS}"
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying the application...'
                withCredentials([usernamePassword(credentials:'server-credentials', usernameVariable: USER, passwordVariable: PWD)]) {
                    echo "deplayed with ${USER} and ${PWD}"
                }
            }
        }
    }
}

credentials plugin
credentials binding plugin


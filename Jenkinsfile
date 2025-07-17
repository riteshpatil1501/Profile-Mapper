pipeline {
    agent any
    environment {
        BRANCH_NAME = 'main'
    }
    stages {
        stage('build') {
            steps {
                echo 'building the application...'
            }
        }
        stage('test') {
            when {
                expression {
                    BRANCH_NAME != 'main'   // Skip test stage for main branch
                }
            }
            steps {
                echo 'testing the application...'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying the application...'
            }
        }
    }
}



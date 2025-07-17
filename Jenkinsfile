pipeline {
    agent any
    environment {
        BRANCH_NAME = 'branch_name'
    }
    stages {
        stage('build') {
            when {
                expression {
                    BRANCH_NAME != 'branch_name'   // Skip build stage for branch_name branch
                }
            }
            steps {
                echo 'building the application...'
            }
        }
        stage('test') {
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



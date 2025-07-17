CODE_CHANGES = getGitChanges()
pipeline {
    agent any
    stages {
        stage('Build') {
            when {
                expression {
                    BRANCH_NAME = 'main' && CODE_CHANGES = true
                }
            }
            steps {
                echo 'Building the application...'
                // your build commands
            }
        }
        stage('Test') {
            when {
                expression {
                    BRANCH_NAME = ''
                }
            }
            steps {
                echo 'Running tests...'
                // your test commands
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // your deploy commands
            }
        }
    }
}


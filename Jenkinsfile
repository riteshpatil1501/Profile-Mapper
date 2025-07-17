CODE_CHANGES = getGitChanges()
pipeline {
    agent any
    stages {
        stage('Build') {
            when {
                expression {
                    return BRANCH_NAME == 'main' && CODE_CHANGES == true
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
                    return BRANCH_NAME == 'Branch_name'
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


pipeline {
    agent any

    parameters {
        string(name: 'GREETING_NAME', defaultValue: 'BranchUser', description: 'Name to greet from branchname')
    }

    stages {
        stage('Greet from Branch') {
            steps {
                echo "Hello from BRANCHNAME branch, ${params.GREETING_NAME}!"
            }
        }
    }
}




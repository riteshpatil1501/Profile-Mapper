pipeline {
    agent any

    parameters {
        string(name: 'GREETING_NAME', defaultValue: 'MainUser', description: 'Name to greet from main branch')
    }

    stages {
        stage('Greet from Main') {
            steps {
                echo "Hello from MAIN branch, ${params.GREETING_NAME}!"
            }
        }
    }
}



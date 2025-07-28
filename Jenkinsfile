pipeline {
    agent any

    parameters {
        string(name: 'GREETING_NAME', defaultValue: 'Ritesh', description: 'Ritesh Patil')
    }

    stages {
        stage('Greet from Main') {
            steps {
                echo "Hello from MAIN branch, ${params.GREETING_NAME}!"
            }
        }
    }
}



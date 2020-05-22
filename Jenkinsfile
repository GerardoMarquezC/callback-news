pipeline {
    agent any
    tools {
        nodejs '>=10.13.0'
    }
    stages {
        stage('init') {
            steps {
                sh 'node -v'
                sh 'npm install'

            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
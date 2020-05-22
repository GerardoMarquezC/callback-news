pipeline {
    agent any

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
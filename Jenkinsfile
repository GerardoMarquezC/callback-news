pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                sh 'node -v'
                sh 'ls'
                echo 'init..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
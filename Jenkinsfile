pipeline {
    agent any
    environment {
        GOOGLE_PROJECT_ID = 'callback-news';
        GOOGLE_SERVICE_ACCOUNT_KEY = credentials('google_cloud');
    }
    tools {
        nodejs 'NodeJS 14.3.0'
    }
    stages {
        stage('init') {
            steps {
                sh 'node -v'
                echo "this is the project id environment"+GOOGLE_PROJECT_ID;
                echo "THis is the credentails:${GOOGLE_SERVICE_ACCOUNT_KEY}";
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
                echo 'npm run build '
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
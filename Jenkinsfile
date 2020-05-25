pipeline {
    agent any
    environment {
        GOOGLE_PROJECT_ID = 'callback-demons';
        GOOGLE_SERVICE_ACCOUNT_KEY = credentials('google_cloud');
    }
    tools {
        nodejs 'NodeJS 14.3.0'
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
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh """
					#!/bin/bash
					ssh gerardo_marquez_carmona@callback-news.com -p 2222 
                    cd callback-news
                    npm install
                    npm run build 
					
				"""
            }
        }
    }
}

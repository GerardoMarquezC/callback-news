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
                echo "this is the project id environment "+GOOGLE_PROJECT_ID;
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
                sh """
					#!/bin/bash 
					echo "deploy stage";
					curl -o /tmp/google-cloud-sdk.tar.gz https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-225.0.0-linux-x86_64.tar.gz;
					tar -xvf /tmp/google-cloud-sdk.tar.gz -C /tmp/;
					/tmp/google-cloud-sdk/install.sh -q;
                    			
                    			source /tmp/google-cloud-sdk/path.bash.inc;
					
					
					 gcloud config set project ${GOOGLE_PROJECT_ID};
					 gcloud auth activate-service-account --key-file ${GOOGLE_SERVICE_ACCOUNT_KEY};
					 
					 gcloud config list;
				"""
            }
        }
    }
}
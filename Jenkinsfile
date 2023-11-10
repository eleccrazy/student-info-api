pipeline {
    agent any
    tools {
            nodejs '20.9.0'
        }
    stages {
        stage('Clone Repo') {
            steps {
            git branch: 'main', url: 'https://github.com/eleccrazy/student-info-api'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
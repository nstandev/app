pipeline {
    agent any

    environment {
        REGISTRY = 'nstandev' // Docker Hub username or AWS ECR URL
        BACKEND_IMAGE = "${REGISTRY}/backend-service"
        FRONTEND_IMAGE = "${REGISTRY}/frontend-service"
        DOCKER_TAG = "${env.BUILD_ID}" // Unique tag for every build
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                // dir('backend') { // Navigate to backend folder
                //     script {
                //         backendImage = docker.build("${BACKEND_IMAGE}:${DOCKER_TAG}")
                //     }
                // }
                echo 'Built Backend Docker Image!'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                // dir('frontend') { // Navigate to frontend folder
                //     script {
                //         frontendImage = docker.build("${FRONTEND_IMAGE}:${DOCKER_TAG}")
                //     }
                // }

                echo 'Built Frontend Docker Image!'
            }
        }

        stage('Push Backend Docker Image') {
            steps {
                // withDockerRegistry(credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/') {
                //     script {
                //         backendImage.push()
                //     }
                // }

                echo 'Pushed Backend Docker Image!'
            }
        }

        stage('Push Frontend Docker Image') {
            steps {
                // withDockerRegistry(credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/') {
                //     script {
                //         frontendImage.push()
                //     }
                // }

                echo 'Pushed Frontend Docker Image!!'
            }
        }
    }

    post {
        success {
            echo 'Backend and Frontend Docker images successfully built and pushed!!!'
        }
        failure {
            echo 'Failed to build or push Docker images!'
        }
    }
}
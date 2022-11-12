pipeline{
    agent any
    
    parameters{
        string(name:"SPEC", defaultValue:"cypress/e2e/pom/**", description: "Enter mask for scenarios file location");
        choice(name: "BROWSER", choices: ['chrome','firefox','edge'], description: "Browser name" )
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Deploying'){
            steps{
                echo "Building application"
            }
            
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage("DEPLOYING"){
            steps{
                echo "Deploying the application"
            }
        }
    }

        post{
            steps{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }

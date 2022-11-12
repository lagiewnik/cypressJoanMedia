pipeline{
    agent any
    
    parameters{
        string(name:'SPEC', defaultValue:'cypress/e2e/pom/**', description:'Enter mask for scenarios file location');
        choice(name:'BROWSER', choices: ['chrome','firefox','edge'], description:'Browser name')
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Deploying'){
            steps{
                echo "Building application"
                // script{
                //     withCredentials([string(credentialsId: 'telegramToken', variable: 'TOKEN'), string(credentialsId: 'telegramChatId', variable: 'CHAT_ID')]){
                //         telegramSend(messsage:'test message',chatId:${CHAT_ID})
                //         }
                //     }
                telegramSend(message: 'Hello World', chatId: 351242908)
                emailext body: 'qwerqwe', subject: 'test', to: 'marsen1@o2.pl'
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
            always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
        
    }

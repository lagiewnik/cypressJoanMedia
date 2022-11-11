#Base image from: https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
FROM cypress/included:10.10.0
#Create folder where our project will be stored
RUN mkdir /docker-cypress-project
#make it as workdirectory
WORKDIR /docker-cypress-project
#Copy some files that we MUST use to run our scripts
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#install dependency in workdir 
RUN npm install
#Executable commands 
ENTRYPOINT [ "npx","cypress","run" ]
CMD [""]
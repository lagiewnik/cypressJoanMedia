# cypressJoanMedia

kurs:
https://www.youtube.com/playlist?list=PLYDwWPRvXB8-8LG2hZv25HO6C3w_vezZb

## todos aplication

todos aplication for API testing from: https://github.com/cypress-io/testing-workshop-cypress

## Docker integration
### 1. download image

    docker pull cypress/included:10.10.0


### 2. run images

    docker run -it --entrypoint=cypress cypress/included:10.10.0 info

### 3. run tests 

    docker run -it -v "C:\D\tutoriale\cypressJoanMedia":/e2e -w /e2e cypress/included:10.10.0 --spec cypress/e2e/pom/*cy.js --browser chrome

Wyłaczyć wczesniej mochawesome reports!

## TAGS
    https://github.com/cypress-io/cypress/tree/develop/npm/grep
    
    npm i -D @cypress/grep

    npx cypress run --env grepTags=@sanityTag

## Docker build your own image from Dockerfile
    docker build -t cypress-image:1.0.0 .


## cucumber with cypress 10
https://blog.emumba.com/getting-started-with-cypress-10-and-cucumber-6b43ff68633b
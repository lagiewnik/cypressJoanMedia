Feature: Login Feature
    Feature: 

    Background: 
    Given User open the login page
    Scenario: Success login
        When  User enter the username "standard_user"
        And  User enter the password "secret_sauce"
        And User clicks on the login button
        Then User will be logged in

    Scenario: Failed login
        When  User enter the username "locked_out_user"
        And  User enter the password "secret_sauce"
        And User clicks on the login button
        Then User will be receiving "Epic sadface: Sorry, this user has been locked out." message

    Scenario: Incorrect login
        When  User provides incorrect credencials
        |username|password      |
        |testUser|secret_sauce  |
        And User clicks on the login button
        Then User will be receiving "Epic sadface: Username and password do not match any user in this service" message

    Scenario: Incorrect password
        When  User provides incorrect credencials
        |username|password      |
        |standard_user|testpasswordfake  |
        And User clicks on the login button
        Then User will be receiving "Epic sadface: Username and password do not match any user in this service" message


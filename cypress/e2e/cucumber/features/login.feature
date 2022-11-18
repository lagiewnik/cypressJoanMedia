Feature: Login Feature
    Feature: 
    Scenario: Success login
        Given User open the login page
        When  User enter the username "standard_user"
        And  User enter the password "secret_sauce"
        And User clicks on the login button
        Then User will be logged in

    Scenario: Failed login
        Given User open the login page
        When  User enter the username "locked_out_user"
        And  User enter the password "secret_sauce"
        And User clicks on the login button
        Then User will be receiving failed message




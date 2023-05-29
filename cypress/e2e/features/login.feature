Feature: Login

    Feature Validate posibility to login

    Background:
        Given I visit home page
    Scenario: Success sign in
        When I open login page
        Then I sign in

    Scenario: Success stabed sign in
        When I open login page
        Then I stabed sign in
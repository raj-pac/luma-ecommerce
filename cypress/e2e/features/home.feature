Feature: Home Page

    Feature Validate posibility to visit home page

    Scenario: Success visit
        When I visit home page
        Then I see page was successfully loaded

    Scenario: Success stubed visit
        When I visit home page
        Then I see stubed page was successfully loaded
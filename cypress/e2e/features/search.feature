Feature: Search

    Feature Validate posibility to search

    Background:
        Given I visit home page
    Scenario: Success searching
        When I search for "Phoebe Zipper Sweatshirt"
        Then I verify search result "Phoebe Zipper Sweatshirt"

    Scenario: Success stubed searching
        Then I verify stubed search result
Feature: Task 2

Scenario: Validate the negative path of enquiring the highest price at Mercedes-Benz
    Given the user open the Mercedes-Benz Shop used cars in Australian market
    When the user insert all information at Please select your location
    And the user click in the pre-owned option
    And the user select a color
    And user navigate to the Vehicle Details of the most expensive car on the filtered results
    And user click on Enquire Now and Fill form with some invalid data
    Then the user click on proceed and validate all errors

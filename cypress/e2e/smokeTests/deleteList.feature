Feature: Delete a List

    Scenario: Validate that the user can archive a list.
        When The user clicks on List actions button
        And Chooses Archive this list option
        And Clicks on menu 
        And Clicks on Archived items
        And Clicks on Switch to lists
        And Clicks on Trash Icon
        And Clicks on Delete button
        Then The list will be deleted successfully. 
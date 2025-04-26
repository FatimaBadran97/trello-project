///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import SherdActions from '../../../pageObjects/shared/actions.cy';
import DeleteListActions from '../../../pageObjects/deleteList/actions.cy';
import DeleteListAssertions from '../../../pageObjects/deleteList/assertions.cy';

const sherdActions = new SherdActions();
const boardName = 'My First Board';
const listName = 'List 1';
const deleteListActions = new DeleteListActions();
const deleteListAssertions = new DeleteListAssertions();

before(() => {
  cy.login();
  sherdActions.createBoard(boardName);
  sherdActions.createList(listName);
});

When('The user clicks on List actions button', () => {
  deleteListActions.clickOnListActionsBtn();
});
When('Chooses Archive this list option', () => {
  deleteListActions.chooseArchiveThisListOption();
});
When('Clicks on menu', () => {
  deleteListActions.clicksOnMenu();
});
When('Clicks on Archived items', () => {
  deleteListActions.clicksOnArchivedItems();
});
When('Clicks on Switch to lists', () => {
  deleteListActions.clicksOnSwitchToLists();
});
When('Clicks on Trash Icon', () => {
  deleteListActions.clicksOnTrashIcon();
});
When('Clicks on Delete button', () => {
  deleteListActions.clickOnDeleteButton();
});
Then('The list will be deleted successfully.', () => {
  deleteListAssertions.checkListInArchivedItems(listName);
});

after(() => {
  cy.wait(2000);
  sherdActions.deleteCurrentBoard();
});

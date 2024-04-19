///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import SherdActions from '../../../pageObjects/shard/actions.cy';
import CreateListActions from '../../../pageObjects/createList/actions.cy';
import CreateListAssertions from '../../../pageObjects/createList/assertions.cy';

const sherdActions = new SherdActions();
const boardName = 'My First Board';
const createListActions = new CreateListActions();
const listName = 'List 1';
const createListAssertions = new CreateListAssertions();

before(() => {
  cy.login();
  sherdActions.createBoard(boardName);
});

When('The user types list title in Enter List Title textarea field', () => {
  cy.wait(2000);
  createListActions.typeListTitleInTextareaField(listName);
});
When('Clicks on Add list button', () => {
  createListActions.clickOnAddListBtn();
});
Then('The list will be created successfully.', () => {
  createListAssertions.checkListVisibilityAndContainsListName(listName);
});

after(() => {
  sherdActions.deleteCurrentBoard();
});

import CreateBoardActions from '../createBoard/actions.cy';
import CreateListActions from '../createList/actions.cy';

const createBoardActions = new CreateBoardActions();
const createListActions = new CreateListActions();

class SharedActions {
  createBoard(boardName) {
    createBoardActions.clickOnCreateBtnInNavbar();
    createBoardActions.chooseCreateBoardOption();
    createBoardActions.typeBoardTitleInInputField(boardName);
    createBoardActions.clickOnCreateBtn();
  }
  createList(listName) {
    createListActions.typeListTitleInTextareaField(listName);
    createListActions.clickOnAddListBtn();
  }
  deleteCurrentBoard() {
    cy.wait(2000);
    cy.get('[aria-label="Show menu"]').click();
    cy.contains('Close board').click();
    cy.findByTestId('popover-close-board-confirm').click();
    cy.get('[aria-label="Show menu"]').click();
    cy.findByTestId('close-board-delete-board-button').click();
    cy.findByTestId('close-board-delete-board-confirm-button').click();
  }

  openBoard(url) {
    cy.visit(url);
    return this;
  }
  closeCardModule() {
    cy.findByTestId('CloseIcon').first().click();
  }
  randomNumber(max) {
    //random number except 0
    const random = Math.floor(Math.random() * max);
    if (random == 0) {
      return 1;
    }
    return random;
  }
}
export default SharedActions;

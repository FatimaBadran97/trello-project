class DeleteListActions {
  clickOnListActionsBtn() {
    cy.wait(2000);
    cy.findByTestId('list-edit-menu-button').click();
    return this;
  }
  chooseArchiveThisListOption() {
    cy.findByTestId('list-actions-archive-list-button').click();
    return this;
  }

  //     And Clicks on Trash Icon
  clicksOnMenu() {
    cy.get('[aria-label="Show menu"]').click();
  }
  clicksOnArchivedItems() {
    cy.contains('Archived items').click();
  }
  clicksOnSwitchToLists() {
    cy.contains('Switch to lists').click();
  }
  clicksOnTrashIcon() {
    cy.findByTestId('TrashIcon').click();
  }
  clickOnDeleteButton() {
    cy.contains('button', 'Delete').click();
  }
}

export default DeleteListActions;

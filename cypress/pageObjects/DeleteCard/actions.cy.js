class DeleteCardActions {
  clickOnCardName(cardName) {
    cy.contains(cardName).click();
    return this;
  }
  clickOnArchiveLink() {
    cy.wait(1500);
    cy.contains('Archive').click();
    return this;
  }
  clickOnDeleteLink() {
    cy.wait(1500);
    cy.contains('Delete').click();
    return this;
  }
  clickOnDeleteButton() {
    cy.wait(1500);
    cy.findByTestId('popover-confirm-button').click();
    return this;
  }
}

export default DeleteCardActions;

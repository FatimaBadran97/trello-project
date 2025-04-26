class MoveTemplateActions {
  rightClicksOnTemplateTitle() {
    cy.findByTestId('card-name').rightclick();
    return this;
  }

  clicksOnMoveButton() {
    cy.findByTestId('quick-card-editor-move').click();
    return this;
  }

  typeTheList(destinationListName) {
    cy.findByTestId('move-card-popover-select-list-destination').type(
      destinationListName
    );
    return this;
  }

  clicksOnMoveSubmitInput() {
    cy.findByTestId('move-card-popover-move-button').click();
    return this;
  }
}

export default MoveTemplateActions;

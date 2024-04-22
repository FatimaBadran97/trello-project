class HideTemplateActions {
  openBoard(url) {
    cy.visit(url);
    return this;
  }

  clicksOnTemplateName() {
    cy.findByTestId('card-name').click();
    return this;
  }

  clicksOnHideFromListLink() {
    cy.contains('Hide from list').click();
    cy.findByTestId('CloseIcon').first().click();
  }
}

export default HideTemplateActions;

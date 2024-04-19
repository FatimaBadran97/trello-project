class CreateCardTemplateActions {
  openBoard(url) {
    cy.visit(url);
    return this;
  }
  clicksOnCreateTemplateIconButton() {
    cy.findByTestId('card-template-list-button').first().click();
    return this;
  }
  clicksOnCreateANewTemplateButton() {
    cy.findByTestId('create-new-template-card-button').click();
    return this;
  }
  typesTemplateTitleInTextareaField(templateName) {
    cy.findByTestId('create-template-card-composer').type(templateName);
    return this;
  }
  clicksOnAddButton() {
    cy.findByTestId('new-template-card-submit-button').click();
  }
}

export default CreateCardTemplateActions;

class UpdateTemplateNameActions {
  openBoard(url) {
    cy.visit(url);
    return this;
  }
  clicksOnTemplateTitle() {
    cy.findByTestId('card-name').click();
    return this;
  }
  typesTheNewNameInTextareaField(updatedName) {
    cy.get('.js-card-detail-title-input')
      .focus()
      .clear()
      .type(updatedName + '{enter}');
  }
}

export default UpdateTemplateNameActions;

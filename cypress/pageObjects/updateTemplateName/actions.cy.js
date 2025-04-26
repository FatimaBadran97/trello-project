class UpdateTemplateNameActions {
  clicksOnTemplateTitle() {
    cy.findByTestId('card-name').click();
    return this;
  }
  typesTheNewNameInTextareaField(updatedName) {
    cy.findByTestId('card-back-title-input')
      .focus()
      .clear()
      .type(updatedName + '{enter}');
  }
}

export default UpdateTemplateNameActions;

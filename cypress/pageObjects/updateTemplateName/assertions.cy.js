class UpdateTemplateNameAssertions {
  checkUpdatedNameInPopUP(updatedName) {
    cy.get('.js-card-detail-title-input').should('have.value', updatedName);
    return this;
  }
  checkUpdatedNameInList(updatedName) {
    cy.findByTestId('CloseIcon').first().click();
    cy.findByTestId('card-name').should('contain', updatedName);
    return this;
  }
}
export default UpdateTemplateNameAssertions;

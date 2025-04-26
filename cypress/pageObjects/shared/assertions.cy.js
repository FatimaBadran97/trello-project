class SharedAssertions {
  checkCardOrTemplateTitleInModule(title) {
    cy.findByTestId('card-back-title-input').should('have.value', title);
  }

  checkCardOrTemplateAbsence(listId, cardOrTemplateId) {
    cy.get(`[data-list-id = ${listId}]`)
      .find(cardOrTemplateId)
      .should('not.exist');
  }
}

export default SharedAssertions;

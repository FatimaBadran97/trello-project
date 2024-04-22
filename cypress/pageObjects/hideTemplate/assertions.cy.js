class HideTemplateAssertions {
  checkTemplateInList(listId, templateId) {
    cy.get(`[data-list-id = ${listId}]`).find(templateId).should('not.exist');
    return this;
  }
}

export default HideTemplateAssertions;

class MoveTemplateAssertions {
  checkOriginalList(originalListId, templateId) {
    cy.get(`[data-list-id = ${originalListId}]`)
      .find(templateId)
      .should('not.exist');
    return this;
  }

  // templateId is not equal when moveing it to another template????????
  checkTheDestinationList(destinationListId, templateName) {
    cy.get(`[data-list-id = ${destinationListId}]`)
      .find('li')
      .should('contain', templateName);
  }
}

export default MoveTemplateAssertions;

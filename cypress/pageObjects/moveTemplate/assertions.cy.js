import SharedAssertions from '../shared/assertions.cy';

const sharedAssertions = new SharedAssertions();

class MoveTemplateAssertions {
  checkOriginalList(originalListId, templateId) {
    sharedAssertions.checkCardOrTemplateAbsence(originalListId, templateId);
    return this;
  }

  checkTheDestinationList(destinationListId, templateName) {
    cy.get(`[data-list-id = ${destinationListId}]`)
      .find('li')
      .should('contain', templateName);
  }
}

export default MoveTemplateAssertions;

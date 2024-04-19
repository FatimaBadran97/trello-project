class CreateCardTemplateAssertions {
  checkPopUpTitle() {
    cy.wait(3000);
    cy.get('h3').should('contain', 'This is a Template card.');
    return this;
  }
  checkTemplateTitleInPopUp(templateName) {
    cy.get('.js-card-detail-title-input').should('have.value', templateName);
    return this;
  }
  checkTemplateLinkHaveGreenCheckInPopUp() {
    cy.get('[title="Convert this template back to a normal card."]')
      .find('.icon-check.light')
      .should('exist');
    return this;
  }
  checkTemplateBadgeInCard() {
    cy.findByTestId('CloseIcon').first().click();
    cy.findByTestId('badge-card-template').should(
      'contain',
      'This card is a template.'
    );
    return this;
  }
}

export default CreateCardTemplateAssertions;

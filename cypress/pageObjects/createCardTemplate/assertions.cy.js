import SharedActions from '../shared/actions.cy';
import SharedAssertions from '../shared/assertions.cy';

const sharedActions = new SharedActions();
const sharedAssertions = new SharedAssertions();

class CreateCardTemplateAssertions {
  checkPopUpTitle() {
    cy.wait(3000);
    cy.get('h3').should('contain', 'This is a Template card.');
    return this;
  }
  checkTemplateTitleInPopUp(templateName) {
    sharedAssertions.checkCardOrTemplateTitleInModule(templateName);
    return this;
  }
  checkTemplateLinkInPopUp() {
    cy.findByTestId('card-back-make-template-button').should(
      'contain',
      'Template'
    );
    return this;
  }
  checkTemplateBadgeInCard() {
    sharedActions.closeCardModule();
    cy.findByTestId('badge-card-template').should(
      'contain',
      'This card is a template.'
    );
    return this;
  }
}

export default CreateCardTemplateAssertions;

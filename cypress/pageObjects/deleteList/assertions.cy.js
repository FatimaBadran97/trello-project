class DeleteListAssertions {
  checkListInArchivedItems(listName) {
    cy.contains(listName).should('not.exist');
    cy.findByTestId('popover-close').click();
  }
}
export default DeleteListAssertions;

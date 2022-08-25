describe('Search newly created Test task issue card', () => {

    before(() => {
        cy.visit('https://jira.trungk18.com/')

    });
    it('Creates new issue card', () => {
        cy.createIssueCard();
    });
    it('Clicks on search boxs and inputs search query "Test task"', () => {
        cy.get('.input').click().type('Test task');
    });

    it('It verifies that "Test task" is found and visible', () => {
        cy.get('div[class="issue-wrap"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Test task') {

                cy.wrap($ele).should('be.visible');
            }
        });
    });

});
describe('Verifying the Create Issue form has all neccessery fields', () => {

    before(() => {
        cy.visit('https://jira.trungk18.com/')
    })

    it('verifies that click on a "plus sign" icon opens the Create Issue form', () => {
        cy.get(':nth-child(3) > .itemIcon > .anticon > svg').click();
        cy.get('.py-3 > .text-xl').should('contain', "Create issue");
    })
    it('verifies that Create Issue form has Issue type label and field', () => {
        cy.get(':nth-child(1) > .label').should('contain', "Issue type");
        cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').should('be.visible');
    })
    it('verifies that Create Issue form has Issue priority label and field', () => {
        cy.get(':nth-child(2) > .label').should('contain', "Issue priority");
        cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').should('be.visible');
    })
    it('verifies that Create Issue form has Short summary label and field', () => {
        cy.get(':nth-child(3) > .label').should('contain', "Short summary");
        cy.get(':nth-child(3) > .form-input').should('be.visible');
    })
    it('verifies that Create Issue form has Description label and field', () => {
        cy.get(':nth-child(4) > .label').should('contain', "Description");
        cy.get('.ql-container').should('be.visible');
    })
    it('verifies that Create Issue form has Reporter label and field', () => {
        cy.get(':nth-child(5) > .label').should('contain', "Reporter");
        cy.get('j-user.ng-star-inserted > .flex').should('be.visible');
    })
    it('verifies that Create Issue form has Assignees label and field', () => {
        cy.get(':nth-child(6) > .label').should('contain', "Assignees");
        cy.get('issue-assignees-select > .ant-select > .ant-select-selector').as("assigneesField").scrollIntoView();
        cy.get('@assigneesField').should('be.visible');
    })
    it('verifies that Create Issue form has Create Issue button which is disabled', () => {
        cy.get('[classname="btn-primary mr-2"] > .btn').should('contain', "Create Issue");
        cy.get('[classname="btn-primary mr-2"] > .btn').should('be.disabled');
    })
    it('verifies that Create Issue form has Cancel button which is enabled', () => {
        cy.get('.mt-5 > [classname="btn-empty"] > .btn').should('contain', "Cancel");
        cy.get('.mt-5 > [classname="btn-empty"] > .btn').should('not.be.disabled');
    })
    it('verifies that button Create Issue is enabled after entering text in Short Summary field', () => {
        cy.get(':nth-child(3) > .form-input').type("some text");
        cy.get('[classname="btn-primary mr-2"] > .btn').should('not.be.disabled');
    })
});
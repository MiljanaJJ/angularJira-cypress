// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('createIssueCard', () => {


    cy.get(':nth-child(3) > .itemIcon > .anticon > svg').click();



    cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
    cy.wait(2000);
    cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

        if (($ele.text()) === 'Task') {

            cy.wrap($ele).click();
        }
    });

    cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
    cy.wait(2000);
    cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

        if (($ele.text()) === 'Highest') {
            cy.wrap($ele).click();
        }
    });

    cy.get(':nth-child(3) > .form-input').focus().click().type("Test task");

    cy.get('.ql-container').click()
    cy.get('.ql-editor > p').type("Some description");

    cy.get('issue-assignees-select > .ant-select > .ant-select-selector').as("assigneesField").scrollIntoView();
    cy.get('@assigneesField').click();
    cy.wait(2000);
    cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

        if (index == 4) {
            cy.wrap($ele).click();
        }

    });
    cy.wait(2000);

    cy.get('[classname="btn-primary mr-2"] > .btn').click();


})
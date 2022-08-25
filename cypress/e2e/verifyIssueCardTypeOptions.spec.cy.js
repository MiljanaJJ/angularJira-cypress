describe('Verifying that on Create Issue form Issue type options are: Bug, Story, Task', () => {

    before(() => {
        cy.visit('https://jira.trungk18.com/')
    });

    it('verifies that click on a "plus sign" icon opens the Create Issue form', () => {
        cy.get(':nth-child(3) > .itemIcon > .anticon > svg').click();
        cy.get('.py-3 > .text-xl').should('contain', "Create issue");
    })

    it('verifies that Issue type has value option Task', () => {
        cy.get(':nth-child(1) > .label').should('contain', "Issue type");
        cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Task');
    })

    it('verifies that Issue type has value option Story', () => {
        cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Story') {

                cy.wrap($ele).click();
                cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Story');
            };
        });
    })

    it('verifies that Issue type has value option Bug', () => {
        cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Bug') {
                cy.wrap($ele).click();
                cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Bug');
            }
        });
    })

});


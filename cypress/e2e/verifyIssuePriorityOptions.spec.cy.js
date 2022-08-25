describe('Verifying that on Create Issue form Issue priority options are: Lowest, Low, Medium, High, Highest', () => {

    before(() => {
        cy.visit('https://jira.trungk18.com/')
    });

    it('verifies that click on a "plus sign" icon opens the Create Issue form', () => {
        cy.get(':nth-child(3) > .itemIcon > .anticon > svg').click();
        cy.get('.py-3 > .text-xl').should('contain', "Create issue");
    })

    it('verifies that Issue priority has value option Medium', () => {
        cy.get(':nth-child(2) > .label').should('contain', "Issue priority");
        cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Medium');
    })

    it('verifies that Issue priority has value option Lowest', () => {
        cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Lowest') {

                cy.wrap($ele).click();
                cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Lowest');
            };
        });
    })

    it('verifies that Issue priority has value option Low', () => {
        cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Low') {
                cy.wrap($ele).click();
                cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Low');
            }
        });
    })
    it('verifies that Issue priority has value option High', () => {
        cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'High') {
                cy.wrap($ele).click();
                cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'High');
            }
        })
    });
    it('verifies that Issue priority has value option Highest', () => {
        cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Highest') {
                cy.wrap($ele).click();
                cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Highest');
            }
        });
    })
});


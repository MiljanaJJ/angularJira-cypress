describe('Moves newly added issue from Backlog to column Done', () => {

    before(() => {
        cy.visit('https://jira.trungk18.com/')

    });

    it('Creates new issue card', () => {
        cy.createIssueCard();
    });

    it('Clicks on search boxs and inputs search query "Test task"', () => {
        cy.get('.input').click().type('Test task');
    });

    it('It finds "Test task" issue and clicks on it', () => {
        cy.get('.issue').contains('Test task').click();
    });

    it('It change Status to Done', () => {
        cy.get('issue-status > .ant-dropdown-trigger > .btn').click();
        cy.get('span[class="ml-3 font-semibold uppercase text-textMedium text-13"]').each(function ($ele, index, list) {

            if (index == 2) {
                cy.wrap($ele).click();
                cy.get('issue-status > .ant-dropdown-trigger > .btn').contains('Done');
            }

        });
    });
});
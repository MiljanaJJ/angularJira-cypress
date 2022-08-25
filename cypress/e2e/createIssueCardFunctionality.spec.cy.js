
describe('Verifying that Create Issue functionality creates a new card on Kanban board', () => {

    before(() => {
        cy.visit('https://jira.trungk18.com/')
    });

    it('verifies that click on a "plus sign" icon opens the Create Issue form', () => {
        cy.get(':nth-child(3) > .itemIcon > .anticon > svg').click();
        cy.get('.py-3 > .text-xl').should('contain', "Create issue");
    });

    it('Picks Task from Issue type and verifies it', () => {
        cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Task') {

                cy.wrap($ele).click();
                cy.get('issue-type-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Task');
            }
        });
    });

    it('Picks Highest value option from Issue priority and verifies it', () => {
        cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Highest') {
                cy.wrap($ele).click();
                cy.get('issue-priority-select > .ant-select > .ant-select-selector > .ant-select-selection-item > .flex > .ml-3').should('contain', 'Highest');
            }
        });
    });

    it('Inputs "Test task" text to Short summary field', () => {
        cy.get(':nth-child(3) > .form-input').focus().click().type("Test task");
    });

    it('Inputs "Some description" text to Description field', () => {
        cy.get('.ql-container').click()
        cy.get('.ql-editor > p').type("Some description");
    });

    it('Picks Captain assignee from Assignees field', () => {

        cy.get('issue-assignees-select > .ant-select > .ant-select-selector').as("assigneesField").scrollIntoView();
        cy.get('@assigneesField').click();
        cy.wait(2000);
        cy.get('div[class="ant-select-item-option-content"]').each(function ($ele, index, list) {

            if (index == 2) {
                cy.wrap($ele).click();
            }

        });
        cy.wait(2000);
    });

    it('Clicks on Create Issue button which', () => {
        cy.get('[classname="btn-primary mr-2"] > .btn').click();

    });

    it('Clicks on Captain icon on Kanban board to filter only his tasks and issues', () => {
        var captainIcon = cy.xpath('//*[@id="content"]/board/div/board-filter/div/div/div[3]/j-avatar/div');
        captainIcon.click();
    });


    it('Finds the Test task issue card on the board', () => {

        cy.xpath('//*[@id="Backlog"]/issue-card/div/div/p').each(function ($ele, index, list) {

            if (($ele.text()) === 'Test task') {
                cy.wrap($ele).click();
                cy.get('div[class="pb-3 text-15 text-textDarkest"]').should('contain', 'Test task');
            }

        });
    });



});


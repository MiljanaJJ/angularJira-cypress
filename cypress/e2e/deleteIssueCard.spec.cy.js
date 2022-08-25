describe('Deletes newly added issue card and checks if it is deleted for real', () => {

    before(() => {
        cy.visit('https://jira.trungk18.com/')

    });

    it('Creates new issue card', () => {
        cy.createIssueCard();
    });

    it('Clicks on Spider Man icon on Kanban board to filter only his tasks and issues', () => {
        var spiderManIcon = cy.xpath('//*[@id="content"]/board/div/board-filter/div/div[1]/div[5]/j-avatar/div');
        spiderManIcon.click();
    });

    it('Finds the Test task issue card on the board and clicks on it', () => {
        cy.get(':nth-child(2) > .issue-wrap > .issue').click();
    });

    it('Clicks on trash icon and confirms on dialog to delete the card', () => {

        cy.get('[icon="trash"] > .btn > .ng-star-inserted > svg').click();
        cy.get('button[class="btn btn-primary mr-2"]').click();

    });

    it('Clicks on Spider Man icon on Kanban board to filter only his tasks and issues', () => {
        var spiderManIcon = cy.xpath('//*[@id="content"]/board/div/board-filter/div/div[1]/div[5]/j-avatar/div');
        spiderManIcon.click();
    });
    it('Verifies that Test task card is not visible on the Spider Man backlog any more', () => {
        cy.get('div[class="issue-wrap"]').each(function ($ele, index, list) {

            if (($ele.text()) === 'Test task') {

                cy.wrap($ele).should('not.be.visible');
            }
        });
    });

});
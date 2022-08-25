describe('Updates newly added issue card and checks if the update is saved', () => {

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

    it('Picks Story from Issue type and verifies it', () => {
        cy.get('.ant-dropdown-trigger > .btn > .with-padding').click().scrollIntoView();
        cy.wait(2000);
        cy.get('span[class="ml-3 font-semibold uppercase text-textMedium text-13"]').each(function ($ele, index, list) {

            if (index == 1) {

                cy.wrap($ele).click();
                cy.get('.ant-dropdown-trigger > .btn > .with-padding').should('contain', 'Story');
            }
        });
    });

    it('Closes the issue card', () => {
        cy.get('[icon="times"] > .btn > .ng-star-inserted > svg').click();
    });

    it('Finds the Test task issue card on the board and clicks on it to verify that changes are saved', () => {

        cy.get(':nth-child(2) > .issue-wrap > .issue').click();
        cy.get('.ant-dropdown-trigger > .btn > .with-padding').should('contain', 'Story');

    });


});




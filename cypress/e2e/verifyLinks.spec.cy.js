describe('Verifying the links are working properly', () => { 

    before(() => {
       cy.visit('https://jira.trungk18.com/')
         })
    
    it('verifies the link "Project Settings" opens Project Settings page', () => {
           cy.get(':nth-child(3) > .link > .pt-px').click();
           cy.get('.mb-6').should('contain',"Project Settings");
    });
   
    it('verifies the link "Kanban board" opens Kanban page', () => {
           cy.get(':nth-child(2) > .link > .pt-px').click();
           cy.get('.text-2xl').should('contain',"Kanban board");
    });
});   
describe('Task 3 ' , () =>{

    it('Task 3', () => {

        cy.visit('https://demoqa.com/');


        cy.contains('Book Store Application').click({ force: true });
        cy.contains('Book Store').should('be.visible');
        cy.contains('Book Store').click({ force: true });

        cy.contains('Understanding ECMAScript 6').click({ force: true });
        
       cy.intercept({
      method: 'GET',
      url: 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574',
    }).as('getBookDetails');


    
    cy.wait('@getBookDetails').its('response.body')
      .should('deep.equal', {
        isbn: '9781593277574',
        title: 'Understanding ECMAScript 6',
        subTitle: 'The Definitive Guide for JavaScript Developers',
        author: 'Nicholas C. Zakas',
        publish_date: '2016-09-03T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 352,
        description:
          'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E',
        website: 'https://leanpub.com/understandinges6/read',
      });
 





})

})
describe('Task 2 ' , () =>{

    it('Task 2', () => {

        
        cy.visit('https://demoqa.com/');
    cy.viewport(1280, 720);
 
    cy.contains("Interactions").click();

    cy.get(".element-list.collapse.show li");
    cy.contains("Elements").click();
    cy.contains("Forms").click();
    cy.contains("Alerts, Frame & Windows").click();
    cy.contains('Interactions').click({force: true});
    

    cy.contains('Book Store Application').click({force: true});
    cy.scrollTo('center');
    cy.get(':nth-child(5) > .group-header > .header-wrapper > .header-text').click({force: true});
   
cy.get(':nth-child(5) > .element-list > .menu-list > #item-2 > .text').click({force: true});
cy.get("#resizableBoxWithRestriction").should("have.css", "height", "200px").should("have.css", "width", "200px");

cy.get('#resizableBoxWithRestriction > .react-resizable-handle') .trigger("mousedown", { which: 1, pageX: 0, pageY: 0 })
      .trigger("mousemove", { clientX: 1000, clientY: 200 })
      .trigger("mouseup", { force: true });

      cy.scrollTo('center'); 
      cy.get('#resizable > .react-resizable-handle').trigger("mousedown", { which: 1, pageX: 0, pageY: 0 })
      .trigger("mousemove", { clientX: 1000, clientY: 200 })
      .trigger("mouseup", { force: true });   


  
})
})
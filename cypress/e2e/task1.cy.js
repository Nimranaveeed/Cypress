

describe('Task 1 ' , () =>{

    it('Task 1', () => {
    
        cy.visit('https://demoqa.com/');
 
        
 cy.viewport(1280, 720);

cy.scrollTo(0, 500)

cy.contains("Forms").click()
cy.contains("Practice Form").click()

cy.get("#firstName").type("Cowlar");
    cy.get("#lastName").type("Developer");

    cy.get("#userEmail").type("qaengineer@cowlar.com");

    cy.get("[for='gender-radio-1']").click();
    cy.get("#userNumber").type("0123456789");
   
    cy.get("#subjectsInput").type("Computer Science").type("{enter}");

    cy.get("[for='hobbies-checkbox-3']").click();

    cy.get("#currentAddress").type("Address 1");
    cy.contains("Alerts, Frame & Windows").click();
    cy.scrollTo(0, 1000);
   
    cy.get('#state').click({force:true});
    cy.scrollTo(0, 1000);
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click({force:true});
    
    cy.get('#react-select-3-option-0').click({force:true});
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click({force:true});
     cy.get(".css-1wa3eu0-placeholder").click().type("Delhi{enter}");
     cy.get("#submit").click();
     cy.contains("Cowlar Developer");
     cy.contains("qaengineer@cowlar.com");
     cy.contains("Male");
     cy.contains("0123456789");
     
     cy.contains("Computer Science");
     cy.contains("Music");
     cy.contains("Address 1");
     cy.contains("NCR Delhi");
     cy.get("#closeLargeModal").click({force:true});
})
})
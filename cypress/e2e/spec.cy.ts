describe('Home Page Spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.contains('Start');

    cy.contains('Start').click();

    cy.url().should('include', '/start');
  });
});

describe('Start Page Spec', () => {
  describe('Visit start page with name and age', () => {
    it("Shouldn't calculate or do anything", () => {
      cy.visit('/start');
      cy.get('h3').should('have.text', 'Enter age to see your premium.');
    });
  });

  describe('Visit start page with name and NO age', () => {
    it('Should show age is required', () => {
      cy.visit('/start');
      cy.get('input[name="name"]').type('John Doe');
      cy.contains('Next').click();
      cy.get('h3').should('have.text', 'Enter age to see your premium.');
      cy.get('p#age').should('have.text', 'This field is required');
    });
  });

  describe('Visit start page with NO name and with age', () => {
    it('Should show name is required', () => {
      cy.visit('/start');
      cy.get('input[name="age"]').type('50');
      cy.contains('Next').click();
      cy.get('p#name').should('have.text', 'This field is required');
    });
  });

  describe('Complete form inputs', () => {
    it('Should show the correct premium for Hong Kong', () => {
      cy.visit('/start');
      cy.get('input[name="name"]').type('John Doe');

      cy.get('input[name="age"]').type('10');
    });

    it('HK premium should be 100 for 10yrs old - regular', () => {
      cy.get('h3').should('have.text', 'Your premium is: 100.00 HKD');
    });

    it('HK premium should be 150 for 10yrs old - sale', () => {
      cy.get('input[value="sale"]').click();
      cy.get('h3').should('have.text', 'Your premium is: 150.00 HKD');
    });

    it('HK premium should be 175 for 10yrs old - safe', () => {
      cy.get('input[value="safe"]').click();
      cy.get('h3').should('have.text', 'Your premium is: 175.00 HKD');
    });

    it('Should show the correct premium for US', () => {
      cy.visit('/start');
      cy.get('input[name="name"]').type('John Doe');

      cy.get('input[name="age"]').type('10');

      cy.get('select[name="country"]').select('us');
      cy.get('h3').should('have.text', 'Your premium is: 200.00 USD');
    });

    it('US premium should be 300 for 10yrs old - sale', () => {
      cy.get('input[value="sale"]').click();
      cy.get('h3').should('have.text', 'Your premium is: 300.00 USD');
    });

    it('US premium should be 350 for 10yrs old - safe', () => {
      cy.get('input[value="safe"]').click();
      cy.get('h3').should('have.text', 'Your premium is: 350.00 USD');
    });

    it('Should show the correct premium for AU', () => {
      cy.visit('/start');
      cy.get('input[name="name"]').type('John Doe');

      cy.get('input[name="age"]').type('10');

      cy.get('select[name="country"]').select('au');
      cy.get('h3').should('have.text', 'Your premium is: 300.00 AUD');
    });

    it('AU premium should be 450 for 10yrs old - sale', () => {
      cy.get('input[value="sale"]').click();
      cy.get('h3').should('have.text', 'Your premium is: 450.00 AUD');
    });

    it('AU premium should be 525 for 10yrs old - safe', () => {
      cy.get('input[value="safe"]').click();
      cy.get('h3').should('have.text', 'Your premium is: 525.00 AUD');
    });

  });

  describe('Summary Page Spec', () => {
    describe('Visit summary page with 525.00 AUD', () => {
      it("Should get the correct summary", () => {
        cy.contains("Next").click()
        cy.url().should('include', '/summary');
        cy.get('p#name').should('contain.text', 'John Doe');
        cy.get('p#age').should('contain.text', '10');
        cy.get('p#country').should('contain.text', 'Australia');
        cy.get('p#total').should('contain.text', '525.00 AUD');
      });
    });

    describe('Clicking Back button', () => {
      it("Should prepopulate the form", () => {
        cy.contains("Back").click()
        cy.url().should('include', '/start');
        cy.get('input[name="name"]').should('have.value','John Doe');
        cy.get('input[name="age"]').should('have.value','10');
        cy.get('select[name="country"]').should('have.value','au');
        cy.get('h3').should('have.text', 'Your premium is: 525.00 AUD');
      });
    });

    describe('Clicking Next button', () => {
      it("Should buy the premium the form", () => {
        cy.contains("Next").click()
        cy.url().should('include', '/summary');
        cy.contains("Buy").click()
        cy.url().should('equal', 'http://localhost:3000/');
      });
    });
  })

  describe('Invalid Page',()=>{
    it('Should show invalid page if user age is more than 100', () => {
      cy.visit('/start');
      cy.get('input[name="name"]').type('John Doe');

      cy.get('input[name="age"]').type('101');
      cy.contains("Next").click()
      cy.url().should('include', '/invalid-age');
      cy.contains("Ok").click()
      cy.url().should('equal', 'http://localhost:3000/');
    });
  })

});

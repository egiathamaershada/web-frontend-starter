describe('testing main sample application', function() {
  context('loading the page', function() {
    it('successfully loads', function() {
      cy.visit('/')
    })

    it('shows "Hello, World"', function() {
      cy.get('#display')
        .should('contain', 'Hello, World')
    })
  })

  context('input "Name"', function() {
    it('shows "Hello, Name"', function() {
      cy.get('#inputName')
        .type('Name')
        .get('#display')
        .should('contain', 'Hello, Name')
    })
  })

  context('clear input', function() {
    it('shows "Hello, World"', function() {
      cy.get('#inputName')
        .clear()
        .get('#display')
        .should('contain', 'Hello, World')
    })
  })

  context('input "secret"', function() {
    it('shows a quote by Buddha', function() {
      cy.get('#inputName')
        .type('secret')
        .get('#display')
        .should('contain', 'the sun, the moon and the truth')
    })
  })

  context('input "made"', function() {
    it('shows creator note', function() {
      cy.get('#inputName')
        .clear()
        .type('made')
        .get('#display')
        .should('contain', 'by egiathamaershada')
    })
  })
})
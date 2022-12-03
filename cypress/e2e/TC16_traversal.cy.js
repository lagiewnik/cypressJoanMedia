//Examples from: https://example.cypress.io/commands/traversal

context('Traversal demo', () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/traversal")
    });

    it('.children()', () => {
        cy.get('.traversal-breadcrumb')
            .children('.active')
            .should('contain', 'Data')
    });

    it('.closest()', () => {
        cy.get('.traversal-badge')
            .closest('ul')
            .should('have.class', 'list-group')
    });

    it('.eq()', () => {
        cy.get('.traversal-list>li')
            .eq(1).should('contain', 'siamese')
    });

    it.only('.filter()', () => {
        cy.get('.traversal-nav>li')
            .filter('.active').should('contain', 'About')
    });

    it.skip('find() instead of .filter()', () => {
        //not working because find() searches by element name
        cy.get('.traversal-nav>li')
            .find('.active').should('contain', 'About')
    });

    it('.find()', () => {
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
    });

    it.skip('filter instead of .find()', () => {
        //not working because filter() not search by webelement name 
        cy.get('.traversal-pagination').filter('li').filter('a').should('have.length', 7)
    });


    it('.first()', () => {
        cy.get('.traversal-table td')
            .first().should('contain', '1')
    });

    it('.last()', () => {
        cy.get('.traversal-buttons .btn')
            .last().should('contain', 'Submit')
    });

    it('.next()', () => {
        cy.get('.traversal-ul')
            .contains('apples').next().should('contain', 'oranges')
    });

    it('.nextAll()', () => {
        cy.get('.traversal-next-all')
            .contains('oranges')
            .nextAll().should('have.length', 3)
    });

    it('.nextUntil()', () => {
        cy.get('#veggies')
            .nextUntil('#nuts').should('have.length', 3)
    });

    it('.not()', () => {
        cy.get('.traversal-disabled .btn')
            .not('[disabled]').should('not.contain', 'Disabled')
    });

    it('.parent()', () => {
        cy.get('.traversal-mark')
            .parent().should('contain', 'Morbi leo risus')
    });

    it('.parents()', () => {
        cy.get('.traversal-cite')
            .parents().should('match', 'blockquote')
    });

    it('.parentsUntil()', () => {
        cy.get('.clothes-nav')
            .find('.active')
            .parentsUntil('.clothes-nav')
            .should('have.length', 2)
    });

    it('.prev()', () => {
        cy.get('.birds').find('.active')
            .prev().should('contain', 'Lorikeets')
    });

    it('.prevAll()', () => {
        cy.get('.fruits-list').find('.third')
            .prevAll().should('have.length', 2)
    });

    it('.prevUntil()', () => {
        cy.get('.foods-list').find('#nuts')
            .prevUntil('#veggies').should('have.length', 3)
    });

    it('.siblings()', () => {
        cy.get('.traversal-pills .active')
            .siblings().should('have.length', 2)
    });

});
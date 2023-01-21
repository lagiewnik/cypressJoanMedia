import "cypress-real-events";

describe('Drag drop angular example', () => {
    beforeEach(() => {
        cy.visit('https://material.angular.io/cdk/drag-drop/overview#cdk-drag-drop-connected-sorting-group');
        cy.viewport(1920,1080);
    });

    it('Drag&Drop angular1', () => {
        cy.get("#cdk-drop-list-3").within($table=>{
            cy.contains('Get to work')
            .realMouseDown({ button: 'left', position: 'center' })
            .realMouseMove(0, 100, { position: 'center' });
        })
            
        cy.get("#cdk-drop-list-4 > div:nth-child(3)" )
            .realMouseMove(0, 0, { position: 'center' })
            .realMouseUp();
        cy.get("#cdk-drop-list-4 > div:nth-child(3)" ).should('contain','Get to work')
    });
    


});
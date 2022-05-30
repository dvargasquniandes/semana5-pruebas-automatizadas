import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 18', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, entrar a configuraciones en la seccion Design, entrar a Homepage, cambiar el Feed Layout a List, darle guardar, ir a view site y verificar que el Homepage tenga el layout en Lista', function () {
        let indiceImagen = 0;

        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Modificar Color Boton Inferior
        utils.modificarPublicationFeedLayout();
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar que el feed layout de la pagina ahora es de tipo List
        cy.visit(`${url}`);
        cy.wait(1000);
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('.post-feed.list').should('have.css', 'row-gap', '39.6px');
        cy.get('.post-feed.list').should('have.css', 'max-width', '940px');
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

    })
})
import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 9', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, editar usuario, salir y loguearse con el nuevo usuario', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))

        // Editar usuario
        cy.get('.gh-nav').then(($nav) => {
            const condition = Boolean($nav.find('a[class="gh-nav-bottom-tabicon"]').length);
            if (condition) {
                cy.get('a[class="ember-view gh-nav-bottom-tabicon"]').click()
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('a').contains('Staff').click()
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('div[class="apps-grid-cell tooltip-centered"]').first().click()
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('#user-name').clear().type(faker.name.findName(), {force: true})
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('#user-location').clear().type(faker.address.city(), {force: true})
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('button').contains("Save").click()
                cy.screenshot("imagen_" + (indiceImagen++))
            } else {
                cy.get('.ember-view').contains("Staff").first().click()
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('div[class="apps-grid-cell tooltip-centered"]').first().click()
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('#user-name').clear().type(faker.name.findName(), {force: true})
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('#user-location').clear().type(faker.address.city(), {force: true})
                cy.screenshot("imagen_" + (indiceImagen++))
                cy.get('button').contains("Save").click()
                cy.screenshot("imagen_" + (indiceImagen++))
            }
        })
        
    })
})



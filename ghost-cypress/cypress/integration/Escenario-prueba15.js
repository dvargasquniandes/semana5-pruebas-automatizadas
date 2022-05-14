import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 15', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, Modificar el header en code injection y verificar si aparece en la página', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))

        // Crear miembro
        utils.modificarCodeInjection('code-injection-header','code-injection-footer')
        cy.screenshot("imagen_" + (indiceImagen++))


        // Verificar header y footer creado
        cy.visit(`${url}/about/`);
        cy.wait(1000);
        cy.screenshot("imagen_" + (indiceImagen++))
        cy.get('hr.code-injection-header').should("exist")
        cy.get('hr.code-injection-footer').should("exist")
        cy.screenshot("imagen_" + (indiceImagen++))
    })
})



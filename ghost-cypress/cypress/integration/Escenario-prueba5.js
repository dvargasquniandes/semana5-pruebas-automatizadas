import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 5', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear una página, salir del admin, y revisar que esté la página', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))

        // Crear página
        utils.crearPagina(`Escenario de prueba 5 - ${id}`, "Este es un test para el escenario de prueba 5");
        cy.screenshot("imagen_" + (indiceImagen++))
        utils.publicarPagina()
        cy.screenshot("imagen_" + (indiceImagen++))

        // Verificar página creada
        cy.get('button[title="Settings"]').click()
        cy.screenshot("imagen_" + (indiceImagen++))
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                cy.get("h1").should("have.text", `Escenario de prueba 5 - ${id}`)
            });
            cy.screenshot("imagen_" + (indiceImagen++))
    })
})



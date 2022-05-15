import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 1', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear post, salir del admin, y revisar que esté el post', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Crear post
        utils.crearPost(`Escenario de prueba 1 - ${id}`, "Este es un test para el escenario de prueba 1")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        utils.publicarPost()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar post creado
        cy.get('button[title="Settings"]').click()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                cy.get("h1").should("have.text", `Escenario de prueba 1 - ${id}`)
            });
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})



import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 6', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, editar una página, salir del admin y revisar que esté editada', function () {
        // Login
        utils.autenticar(user)

        // Editar página
        utils.editarPagina(`Post editado - ${id}`, )

        // Verificar página editada
        cy.get('button[class="post-settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                cy.get(".post-full-title").should("have.text", `Post editado - ${id}`)
            });
    })
})



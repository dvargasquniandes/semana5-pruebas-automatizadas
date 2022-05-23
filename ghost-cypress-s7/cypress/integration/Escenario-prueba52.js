import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 52', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('editar una página con datos fake, salir del admin y revisar que esté editada', function () {
        // Editar página
        const titulo = faker.lorem.sentence();
        const descripcion = faker.lorem.paragraphs(2);
        const excerpt = faker.lorem.paragraph();
        PagesUtils.editarPagina(titulo, descripcion, excerpt);
        PagesUtils.publicarPagina()

        // Verificar página editada
        cy.get('button[title="Settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                if (titulo) cy.get("h1").should("have.text", titulo)
            });
    })
})



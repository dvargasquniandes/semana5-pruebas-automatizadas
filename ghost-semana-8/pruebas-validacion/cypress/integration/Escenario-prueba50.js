import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 50', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/tags_slug_invalido.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('Crear una página con datos traidos por api - datos extensos, eliminarla, salir del admin, y revisar que no esté la página', function () {
        let dataSelected = this.data[Math.floor(Math.random()*this.data.length)];
        cy.visit(`${url}/ghost/#/pages`);
        // Crear página
        PagesUtils.crearPagina(dataSelected.slug, dataSelected.slug, dataSelected.slug);
        PagesUtils.publicarPagina()

        // Eliminar página
        PagesUtils.eliminarPagina()

        // Verificar que la página no está en el listado
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(dataSelected.slug).should("not.exist")
    })
})



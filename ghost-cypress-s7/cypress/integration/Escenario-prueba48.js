import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 48', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/usuarios_falsos.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('Crear una página con datos traidos por api solo alfanumericos, eliminarla, salir del admin, y revisar que no esté la página', function () {
        let dataSelected = this.data[Math.floor(Math.random()*this.data.length)];
        cy.visit(`${url}/ghost/#/pages`);
        // Crear página
        PagesUtils.crearPagina(dataSelected.password, dataSelected.password, dataSelected.password);
        PagesUtils.publicarPagina()

        // Eliminar página
        PagesUtils.eliminarPagina()

        // Verificar que la página no está en el listado
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(dataSelected.password).should("not.exist")
    })
})



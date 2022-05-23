import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 46', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/usuarios_falsos.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('editar una página con datos traidos por api solo alfanumericos, salir del admin y revisar que esté editada', function () {
        // Editar página
        let dataSelected = this.data[Math.floor(Math.random()*this.data.length)];
        PagesUtils.editarPagina(dataSelected.password, dataSelected.password, dataSelected.password);
        PagesUtils.publicarPagina()

        // Verificar página editada
        cy.get('button[title="Settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                if (dataSelected.password) cy.get("h1").should("have.text", dataSelected.password)
            });
    })
})



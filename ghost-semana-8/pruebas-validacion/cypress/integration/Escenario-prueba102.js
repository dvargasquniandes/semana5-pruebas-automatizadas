import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 102', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/tags_positivo.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Set pseudo-aleatorio por API, Creación de un tag válido', function () {
        let testData = this.data[Math.floor(Math.random()*this.data.length)];
        cy.log(testData);
        utils.autenticar(user.email, user.password);
        // Crear tag
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
        // Modificar tag
        utils.modificarTag(testData.slug,testData.nombreModificado)
        // Verificar tag creado
        cy.get('a[href="#/tags/"]:first').click();
        cy.wait(1000);
        cy.get('a[href="#/tags/' + testData.slug + '/"]:first').click()
    	cy.wait(1000);
        cy.get('#tag-name').should("have.value", testData.nombreModificado)
    	cy.wait(1000);    })
})
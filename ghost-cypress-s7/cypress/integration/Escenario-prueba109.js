import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 109', function () {
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
    it('Set pseudo-aleatorio por API, Creación de un tag repetido', function () {
        let testData = this.data[Math.floor(Math.random()*this.data.length)];
        cy.log(testData);
        utils.autenticar(user.email, user.password);
        // Crear tag
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
    	cy.wait(1000);    
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
        // Verificar que el tag  pueda ser creado porque el sistema autompaticamente corrige el slug
        cy.get('div.form-group.error').should("not.exist")
    	cy.wait(1000);    
    })
})
import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 105', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/tags_nombre_largo.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Set pseudo-aleatorio por API, Creación de un tag con nombre muy largo y luego corregirlo', function () {
        let testData = this.data[Math.floor(Math.random()*this.data.length)];
        cy.log(testData);
        utils.autenticar(user.email, user.password);
        // Crear tag
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
        // Verificar que el tag no pueda ser creado 
        cy.get('span.error>p.response').contains("Tag names cannot be longer than 191 characters.").should("exist")
        utils.corregirNombreTag(testData.nombreModificado)
        /// Se valida que el mensaje de error no aparezca luego de la corrección
        cy.get('span.error>p.response').contains("Tag names cannot be longer than 191 characters.").should("not.exist")

    	cy.wait(1000);    
    })
})
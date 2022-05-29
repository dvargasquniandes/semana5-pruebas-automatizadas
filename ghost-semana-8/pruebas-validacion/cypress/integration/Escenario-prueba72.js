import { utils } from '../plugins/utils_inicio_sesion';
import {utilsMiembros} from "../plugins/utils_creacion_miembro";

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 72', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/usuarios_falsos.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Set pseudo-aleatorio por API, Creacion de miembro con correo sin arroba', function () {
        let testUser = this.data[Math.floor(Math.random()*this.data.length)];
        testUser.replace("@", "-")
        utilsMiembros.autenticar(user.email, user.password);
        utilsMiembros.crearMiembro(testUser.nombre, testUser.correo.replace("@","#"), testUser.notes)
        cy.contains("Invalid Email.")
    })
})

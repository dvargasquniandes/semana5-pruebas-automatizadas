function autenticar(username, password) {
    cy.get('input[name="identification"]').clear();
    if (username !== null && username !== ""){
        cy.get('input[name="identification"]').type(username);
    }
    cy.get('input[name="password"]').clear();
    if (password !== null && password !== ""){
        cy.get('input[name="password"]').type(password, { parseSpecialCharSequences: false});
    }
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
}

function crearTagNuevo(nombre, slug, color, descripcion) {
    cy.get('a[href="#/tags/"]:first').click();
    cy.wait(1000); 
    cy.get('a[href="#/tags/new/"]').click();
    cy.wait(1000);
    cy.get('#tag-name').type(nombre,{force: true});
    cy.wait(1000);
    cy.get('[name="accent-color"]:first').type(color,{force: true});
    cy.wait(1000);
    cy.get('#tag-slug').clear().type(slug,{force: true});
    cy.wait(1000);
    cy.get('#tag-description').type(descripcion,{force: true});
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function corregirNombreTag(nombre) {
    cy.get('#tag-name').clear().type(nombre,{force: true});
    cy.wait(1000);
    cy.get('#tag-slug').focus();
}

function corregirColorTag(color) {
    cy.get('[name="accent-color"]:first').type(color,{force: true});
    cy.wait(1000);
    cy.get('#tag-slug').focus();
}

function modificarTag(slug, nuevoNombre) {
    cy.get('a[href="#/tags/"]:first').click();
    cy.wait(1000);
    cy.get('a[href="#/tags/' + slug + '/"]:first').click()
    cy.wait(1000);
    cy.get('#tag-name').clear();
    cy.get('#tag-name').type(nuevoNombre,{force: true});
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function eliminarTag(slug) {
    cy.get('a[href="#/tags/"]:first').click();
    cy.wait(1000);
    cy.get('a[href="#/tags/' + slug + '/"]:first').click()
    cy.wait(1000);
    cy.get('button.gh-btn-red').click();
    cy.wait(500);
    cy.get('.modal-footer>button.gh-btn-red').click();
    cy.wait(1000);
}

function crearPost(nombre, descripcion) {
    cy.get('a[title="New post"]').click()
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(nombre)
    cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(descripcion)
    cy.wait(1000)
}

function crearPostBad(nombre, descripcion) {
    cy.get('a[title="New post"]').click()
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(nombre)
    cy.wait(1000);
    cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(descripcion)
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(nombre)
    cy.wait(1000)
}

function publicarPost() {
    cy.get('div[class="gh-publishmenu ember-view"]').click()
    cy.wait(1000);
    cy.get('button').contains("Publish").click()
    cy.get('body').then((body) => {
        if (body.find('gh-btn:contains("Publish")')) {
            cy.get('button').contains("Publish").click()
        }
    })
    cy.wait(1000)
}

export const utils = {
    autenticar,
    crearTagNuevo,
    corregirNombreTag,
    modificarTag,
    corregirColorTag,
    eliminarTag,
    crearPost,
    publicarPost,
    crearPostBad
}

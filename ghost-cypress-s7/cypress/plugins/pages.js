function autenticar(user) {
    cy.get('input[name="identification"]').type(user.email)
    cy.get('input[name="password"]').type(user.password)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
}

function crearPagina(nombre, descripcion, excerpt) {
    cy.wait(1000);
    cy.get('a').contains("New page").click({ force: true })
    cy.wait(1000);
    if (nombre) cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(nombre)
    cy.wait(1000);
    if (descripcion) cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(descripcion)
    cy.wait(1000);
    if (excerpt) {
        cy.get('button[title="Settings"]').click()
        cy.get('textarea[name="post-setting-custom-excerpt"]').type(excerpt)
        cy.get('button[title="Settings"]').click()
    } 
    cy.wait(1000)
}

function editarPagina(nombre, descripcion, excerpt) {
    cy.get('li').contains("Pages").first().click()
    cy.wait(1000);
    cy.get('li[class="gh-list-row gh-posts-list-item"]').first().click()
    cy.wait(1000);
    if (nombre) cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').clear().type(nombre)
    cy.wait(1000);
    if (descripcion) cy.get('div[class="koenig-editor__editor __mobiledoc-editor"]').clear().type(descripcion)
    cy.wait(1000);
    if (excerpt) {
        cy.get('button[title="Settings"]').click()
        cy.get('textarea[name="post-setting-custom-excerpt"]').clear().type(excerpt)
        cy.get('button[title="Settings"]').click()
    } 
    cy.wait(1000)
}

function eliminarPagina() {
    cy.get('button[title="Settings"]').click()
    cy.wait(1000);
    cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click()
    cy.wait(1000);
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains("Delete").click()
    cy.wait(1000);
}

function publicarPagina() {
    cy.get('div[class="gh-publishmenu ember-view"]').click()
    cy.wait(1000);
    cy.get('button').contains("Publish").click()
    cy.wait(1000)
}

export const PagesUtils = {
    autenticar,
    crearPagina,
    editarPagina,
    eliminarPagina,
    publicarPagina,
}

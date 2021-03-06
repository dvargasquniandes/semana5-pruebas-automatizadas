function autenticar(user) {
    cy.get('input[name="identification"]').type(user.email)
    cy.get('input[name="password"]').type(user.password)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
}

function crearPost(nombre, descripcion) {
    cy.get('a[title="New post"]').click()
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(nombre)
    cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(descripcion)
    cy.wait(1000)
}

function editarPost(nombre) {
    cy.get('li').contains("Posts").first().click()
    cy.wait(1000);
    cy.get('li[class="gh-list-row gh-posts-list-item"]').first().click()
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').clear().type(nombre)
    cy.wait(1000)
}

function eliminarPost() {
    cy.get('button[title="Settings"]').click()
    cy.wait(1000);
    cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click()
    cy.wait(1000);
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains("Delete").click()
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

function crearPagina(nombre, descripcion) {
    cy.get('li').contains("Pages").first().click()
    cy.wait(1000);
    cy.get('a').contains("New page").click()
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(nombre)
    cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(descripcion)
    cy.wait(1000)
}

function crearTag(nombre, descripcion) {
    cy.get('li').contains("Tags").first().click()
    cy.wait(1000);
    cy.get('a').contains("New tag").click()
    cy.wait(1000);
    cy.get('#tag-name').type(nombre)
    cy.get('#tag-description').type(descripcion)
    cy.get('button').contains("Save").click()
    cy.wait(1000)
}

function editarPagina(nombre) {
    cy.get('li').contains("Pages").first().click()
    cy.wait(1000);
    cy.get('li[class="gh-list-row gh-posts-list-item"]').first().click()
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').clear().type(nombre)
    cy.get('div[class="gh-publishmenu ember-view"]').click()
    cy.wait(1000);
    cy.get('button').contains("Publish").click()
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

function crearTagNuevo(nombre, slug, color, descripcion) {
    cy.get('a[href="#/tags/"]:first').click();
    cy.wait(1000); 
    cy.get('a[href="#/tags/new/"]').click();
    cy.wait(1000);
    cy.get('#tag-name').type(nombre,{force: true});
    cy.get('[name="accent-color"]:first').type(color,{force: true});
    cy.wait(1000);
    cy.get('#tag-description').type(descripcion,{force: true});
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
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

function crearNuevoMiembro(nombre, correo) {
    cy.get('a[href="#/members/"]:first').click();
    cy.wait(1000);
    cy.get('a[href="#/members/new/"]:first').click();
    cy.wait(1000);
    cy.get('#member-name').type(nombre,{force: true});
    cy.get('#member-email').type(correo,{force: true});
    cy.wait(1000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function crearNuevoEnlaceNavegacion(nombre, urlEnlace) {
    cy.get('a[href="#/settings/"]:first').click();
    cy.wait(2000);
    cy.get('a[href="#/settings/navigation/"]:first').click();
    cy.wait(2000);
    cy.get('#settings-navigation>div.gh-blognav-item>div>span.gh-blognav-label>input').type(nombre,{force: true});
    cy.get('#settings-navigation>div.gh-blognav-item>div>span.gh-blognav-url>input').clear({force: true}).type(urlEnlace,{force: true});
    cy.wait(1000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function modificarCodeInjection(header, footer) {
    cy.wait(2000);
    cy.get('a[href="#/settings/"]:first').click();
    cy.wait(2000);
    cy.get('a[href="#/settings/code-injection/"]:first').click();
    cy.wait(2000);
    cy.get('#ghost-head>div>div>textarea').clear({force: true}).type('<hr class="' + header + '"></hr>',{force: true});
    cy.get('#ghost-foot>div>div>textarea').clear({force: true}).type('<hr class="' + footer + '"></hr>',{force: true});
    cy.wait(1000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function modificarColorBotonInferior(color) {
    cy.wait(2000);
    cy.get('a[href="#/settings/"]:first').click();
    cy.wait(2000);
    cy.get('a[href="#/settings/design/"]:first').click();
    cy.wait(2000);
    cy.get('button').contains("Brand").click();
    cy.wait(2000);
    cy.get('#accent-color').clear({force: true}).type(color, {force: true});
    cy.wait(2000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function modificarColorSchemeDark() {
    cy.wait(2000);
    cy.get('a[href="#/settings/"]:first').click();
    cy.wait(2000);
    cy.get('a[href="#/settings/design/"]:first').click();
    cy.wait(2000);
    cy.get('button').contains("Site-wide").click();
    cy.wait(2000);
    cy.get('select').eq(2).select('Dark');
    cy.wait(2000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function modificarPublicationFeedLayout() {
    cy.wait(2000);
    cy.get('a[href="#/settings/"]:first').click();
    cy.wait(2000);
    cy.get('a[href="#/settings/design/"]:first').click();
    cy.wait(2000);
    cy.get('button').contains("Homepage").click();
    cy.wait(2000);
    cy.get('select').eq(1).select('List');
    cy.wait(2000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function modificarSiteDescription(descripcion) {
    cy.wait(2000);
    cy.get('a[href="#/settings/"]:first').click();
    cy.wait(2000);
    cy.get('a[href="#/settings/design/"]:first').click();
    cy.wait(2000);
    cy.get('button').contains("Brand").click();
    cy.wait(2000);
    cy.get('#site-description').clear({force: true}).type(descripcion, {force: true});
    cy.wait(2000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
}

function modificarPostEmailText(newText) {
    cy.wait(2000);
    cy.get('a[href="#/settings/"]:first').click();
    cy.wait(2000);
    cy.get('a[href="#/settings/design/"]:first').click();
    cy.wait(2000);
    cy.get('button').contains("Post").click();
    cy.wait(2000);
    cy.get('input[name="emailSignupText"]').clear({force: true}).type(newText);
    cy.wait(8000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

export const utils = {
    autenticar,
    crearPagina,
    crearPost,
    crearTag,
    editarPagina,
    editarPost,
    eliminarPagina,
    eliminarPost,
    publicarPagina,
    publicarPost,
    crearTagNuevo,
    modificarTag,
    eliminarTag,
    crearNuevoMiembro,
    crearNuevoEnlaceNavegacion,
    modificarCodeInjection,
    modificarColorBotonInferior,
    modificarColorSchemeDark,
    modificarPublicationFeedLayout,
    modificarSiteDescription,
    modificarPostEmailText
}

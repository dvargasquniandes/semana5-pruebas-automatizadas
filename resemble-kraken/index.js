const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const { version } = require("os");

const { viewportHeight, viewportWidth, browsers, options } = config;
const versionAnterior = "/ghost-3.42.0";
const versionActual = "/ghost-4.47.1";

async function executeTest(){
    let datetime = new Date().toISOString().replace(/:/g,".");
    let resultInfo = {};
    if (!fs.existsSync(`./results/${datetime}`)){
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }
    let directorioScreenshots = "../kraken/screenshots/"
    let reporteHtml = `<!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Reporte</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
              </head><body><h2>Reporte de regresión visual Ghost ${versionActual} contra ${versionAnterior}<h2><h3>${datetime}</h3><p>De clic en una imágen para ampliarla</p>`;
    /// Lista los escenarios en la carpeta de screenshots
    let listadoEscenarios = fs.readdirSync(directorioScreenshots, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
    reporteHtml += `<table class="table table-condensed">`;
    /// Itera los escenarios y verifica si tienen imágenes de las dos versiones
    for(let escenario of listadoEscenarios){
        console.log("Verificando escenario en: " + directorioScreenshots + escenario);
        reporteHtml += `<tr><th colspan="3">Escenario ${escenario}</th></tr><tr><td>${versionAnterior}</td><td>${versionActual}</td><td>Comparación</td></tr>`;
        if (fs.existsSync(directorioScreenshots + escenario + versionAnterior) && fs.existsSync(directorioScreenshots + escenario + versionActual)){
            /// Busca las imágenes en versión actual, itera y verifica si en la versión anterior la imágen existe (alineación de imágenes de las 2 versiones)
            let listadoImagenes = fs.readdirSync(directorioScreenshots+ escenario + versionActual, { withFileTypes: true })
            .filter((item) => !item.isDirectory())
            .map((item) => item.name);
            for (let imagen of listadoImagenes){
                console.log("    Comparando " + imagen);
                if (fs.existsSync(directorioScreenshots+ escenario + versionAnterior + "/" + imagen)){
                    const data = await compareImages(
                        fs.readFileSync(`${directorioScreenshots}${escenario}${versionAnterior}/${imagen}`),
                        fs.readFileSync(`${directorioScreenshots}${escenario}${versionActual}/${imagen}`),
                        options
                    );
                    if (!fs.existsSync(`./results/${datetime}/${escenario}`)){
                        fs.mkdirSync(`./results/${datetime}/${escenario}`, { recursive: true });
                    }
                    fs.copyFileSync(`${directorioScreenshots}${escenario}${versionAnterior}/${imagen}`,`./results/${datetime}/${escenario}/${versionAnterior}-${imagen}`);
                    fs.copyFileSync(`${directorioScreenshots}${escenario}${versionActual}/${imagen}`,`./results/${datetime}/${escenario}/${versionActual}-${imagen}`);
                    fs.writeFileSync(`./results/${datetime}/${escenario}/compare-${imagen}`, data.getBuffer());
                    reporteHtml += `<tr><td width="33%"><img src="${escenario}/${versionAnterior}-${imagen}" class="pop" width="100%"/></td><td width="33%"><img src="${escenario}/${versionActual}-${imagen}"  class="pop" width="100%"/></td><td width="33%"><img src="${escenario}/compare-${imagen}"  class="pop" width="100%"/></td></tr>`;
                } else {
                    console.log("        La imágen no existe en la versión " + versionAnterior);
                }
            }
        } else {
            console.log("El escenario en " + directorioScreenshots + escenario + " no tiene las imágenes para las dos versiones de ghost");
        }
    }
    reporteHtml += `</table>
    <div id="ex1" class="modal" style="width: 90%; max-width: unset !important;" >
    <img src="" class="imagepreview" style="width: 100%;" >
</div>
    
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

 <!-- jQuery Modal -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script><script type="text/javascript">$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).attr('src'));
        $('#ex1').modal();
    });     
});</script></body>`;
    fs.writeFileSync(`./results/${datetime}/index.html`, reporteHtml);
    console.log('------------------------------------------------------------------------------------')
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();
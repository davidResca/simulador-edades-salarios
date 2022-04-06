// VARIABLES GLOBALES
const $btnContinuar = document.querySelector('#btn-continuar');
const $btnReset = document.querySelector('#btn-reset');
const $btnSalarios = document.querySelector('#btn-agregar-salarios');
const $btnObjeto = document.querySelector('#btn-objeto');

const $btnCalcularEdades = document.querySelector('#btn-calcular');
const $btnCalcularSalarios = document.querySelector('#btn-calcular-salarios');

const $contenedorResultadosEdades = document.querySelector('#cont-res-edades');
const $contenedorResultadoSalarios = document.querySelector('#cont-res-salarios');

const $btnCerrarResultadoEdades = document.querySelector('#btn-cerrar-res-edades');
const $btnCerrarResultadoSalarios = document.querySelector('#btn-cerrar-res-salarios');

// BOTONES - EVENT HANDLER
$btnContinuar.addEventListener('click', (event)=>{ 
    const $cantidadFamiliares = document.querySelector('#cantidad-familiares');
    const cantidadFamiliares = Number($cantidadFamiliares.value);
    
    removerFamiliares();
    crearFamiliares(cantidadFamiliares);

    event.preventDefault();
});

$btnReset.addEventListener('click', ()=>{
    resetear();
});

$btnCalcularEdades.addEventListener('click', ()=>{
    const numeros = obtenerEdadesIntegrantes();
    
    mostrarEdad('mayor', calcularMayorEdad(numeros));
    mostrarEdad('menor', calcularMenorEdad(numeros));
    mostrarEdad('promedio', calcularPromedioEdades(numeros));

    mostrarResultadosEdades();

    return false;
});

$btnSalarios.addEventListener('click', (event)=>{

    crearInputSalario();

    ocultarBtnSalarios();
    mostrarBtnCalcularSalarios();

    mostrarBtnCrearObjeto();

    $btnCalcularSalarios.style.backgroundColor = "red";
    
    event.preventDefault();
})

$btnCalcularSalarios.addEventListener('click', (event)=>{
    const salarios = obtenerSalarioIntegrantes();

    ocultarBtnSalarios();
    mostrarResultadoSalarios();
    
    
    mostrarSalarios('mayor', calcularMayorSalario(salarios));
    mostrarSalarios('menor', calcularMenorSalario(salarios));
    mostrarSalarios('promedio', calcularSalarioPromedio(salarios));

    event.preventDefault();
});

$btnCerrarResultadoEdades.addEventListener('click', (event)=>{
    ocultarResultadosEdades();
    
    event.preventDefault();
});

$btnCerrarResultadoSalarios.addEventListener('click', (event)=>{
    ocultarResultadoSalarios();

    event.preventDefault();
});


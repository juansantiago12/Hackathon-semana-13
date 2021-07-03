const cargar = document.getElementById('btnGet');
const listado = document.querySelector('.container-cards');


cargar.addEventListener('click', getInfo);
listado.addEventListener('click', deleteInfo);
let articulosPerritos = [];

function getInfo(){
    let template = '';
    infoPerritos.forEach((infoPerrito) => {
        template += `
            <div class="card">
                <a href="#" class="borrar">X</a>
                <img src=${infoPerrito.imagen} alt="perro 1">
                <h3>Nombre: <span>${infoPerrito.nombre}</span></h3>
                <h3>Telefono: <span>${infoPerrito.telefono}</span></h3>
                <h3>Pais: <span>${infoPerrito.pais}</span></h3>
                <p>${infoPerrito.about}</p>
            </div>
        `;
    });
    listado.innerHTML = template;
}

function deleteInfo(e){
    if(e.target.classList.contains('borrar')){
        swal({
            title: "Estas seguro?",
            text: "'Esta seguro que quiere eliminar esta mascota'",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                const articuloActual = e.target.parentElement;
                articuloActual.remove();
                swal("Tu mascota a sido eliminada",{
                icon: "success",
                });
            }
        });
    }
}
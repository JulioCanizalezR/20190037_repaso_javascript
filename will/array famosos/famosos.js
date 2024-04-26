// Arreglo de objetos con información de favoritos
const favoritos = [
    { nombre: "Taylos Switf", profesion: "Catante"},
    { nombre: "Willfredo Granados", deporte: "Fútbol"},
    { nombre: "Jennifer Lopez", profesion: "Cantante"},
    { nombre: "Emma Watson", profesion: "Actriz "},
    { nombre: "Myke Towers", profesion: "Cantante"},
    { nombre: "Bill Gates", profesion: "Empresario"},
    { nombre: "Rihanna", deporte: "Cantante"},
    { nombre: "Lionel Messi", profesion: "Fútbol" },
    { nombre: " Jennifer Lawrence ", profesion: "Actriz" },
    { nombre: "Kylie Jenner", profesion: "Empresaria "}
  ];
  
  // Función para mostrar la información en la página
  function mostrarInformacion() {
    const contenedor = document.getElementById("favoritos");
  
    favoritos.forEach(favorito => {
      const div = document.createElement("div");
      div.classList.add("col-md-4", "mb-4");
      div.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${favorito.nombre}</h5>
            <p class="card-text">Profesión: ${favorito.profesion }</p>
          </div>
        </div>
      `;
      contenedor.appendChild(div);
    });
  }
  
  // Llamar a la función para mostrar la información al cargar la página
  window.onload = mostrarInformacion;
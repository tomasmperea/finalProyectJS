// SELECTORES / VARIABLES

const cardContainer = document.querySelector("#cardContainer");

// const darkButton = document.querySelector("#darkMode");
// const lightButton = document.querySelector("#lightMode");

// Capturando datos del archivo .Json y renderizándolo en el index como cards

fetch("./js/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    const renderizarProductos = () => {
      productos.forEach((producto) => {
        const nuevaCard = document.createElement("div");
        const contenedorCards = document.createElement("div");
        const cardBody = document.createElement("div");
        const nombreProducto = document.createElement("h6");
        const precio = document.createElement("h4");
        const aniadirCarrito = document.createElement("button");

        contenedorCards.classList.add("p-4");
        nombreProducto.classList.add("p-2");
        nuevaCard.classList.add("card");
        cardBody.classList.add("card-body");
        aniadirCarrito.classList.add("aniadirCarrito");
        aniadirCarrito.classList.add("p-2");
        aniadirCarrito.setAttribute("data-id", producto.id);
        aniadirCarrito.textContent = "Añadir al carrito";
        nombreProducto.textContent = `${producto.nombre}`;
        precio.textContent = `$${producto.precio}`;

        nuevaCard.innerHTML = `
      
          <img src= ${producto.foto} alt= ${producto.nombre}>
          <a href="#">
          </a>
      
      `;
        cardContainer.append(contenedorCards);
        contenedorCards.append(nuevaCard);
        nuevaCard.append(nombreProducto);
        nuevaCard.append(precio);
        nuevaCard.append(cardBody);
        cardBody.append(aniadirCarrito);
      });

      const buttonCarrito = document.querySelectorAll(".aniadirCarrito");
      buttonCarrito.forEach((button) => {
        button.addEventListener("click", agregarCarrito);
      });
    };
    renderizarProductos();
  })
  .catch((error) => {
    setTimeout(() => {
      Toastify({
        text: `Se ha producido un error. Inténtelo nuevamente más tarde!`,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#c75b5b",
        },
        onClick: function () {},
      }).showToast();
      console.log(error);
    }, 3000);
  });

// Mixin de toasts

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

// FUNCIONES

// LISTENERS

// EJECUTORES

// Bienvenida de la página una vez que nos fuimos y volvemos o actualizamos la page

if (localStorage.getItem("user")) {
  Toast.fire({
    title: `¡Bienvenido de nuevo, ${localStorage.getItem("user")}!`,
  });
} else {
  Swal.fire("Bienvenido a King-On");
}

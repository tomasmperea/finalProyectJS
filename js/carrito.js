// SELECTORES / VARIABLES

// Validación de carrito posterior a salida de la page

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const consultarCarrito = document.querySelector("#consultarCarrito");
const modalCarrito = document.querySelector("#modalCarrito");
const itemsCarrito = document.querySelector("#itemsEnCarrito");


// FUNCIONES

// Agrega cada producto al carrito

const agregarCarrito = (e) => {
  const idProducto = e.target.getAttribute("data-id");
  const idElegido = productos.find((producto) => producto.id === idProducto);
  const idRepetido = carrito.some((repeatId) => repeatId === idElegido);

  if (idRepetido) {
    Toastify({
      text: "Añadido al carrito",
      duration: 3000,
      destination: "",
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#bebaba",
      },
      onClick: function () {},
    }).showToast();

    carrito.map((product) => {
      if (product.id === idElegido.id) {
        idElegido.cantidad++;
      }
    });
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    Toastify({
      text: "Añadido al carrito",
      duration: 3000,
      destination: "",
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#bebaba",
      },
      onClick: function () {},
    }).showToast();

    carrito.push(idElegido);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("El carrito contiene: ", carrito);
  }

  itemsCarritoNavBar();
};

// Renderiza el carrito

const renderizarCarrito = () => {
  modalCarrito.innerHTML = ``;
  modalCarrito.style.display = "block";


  // Header carrito
  const headerCarrito = document.createElement("div");

  headerCarrito.classList.add("headerCarrito");
  headerCarrito.innerHTML = `

    <img class = "iconoHeader" src = "./img/tiger.png" alt = "logo" />
    <h5 class = "tituloModal" >Carrito</h5>
    <button class = "cerrarCarrito" id = "cerrarCarrito" >X</button>
    `;

  modalCarrito.append(headerCarrito);

  // Body carrito

  carrito.forEach((producto) => {
    const bodyCarrito = document.createElement("div");
    const agregarCantidad = document.createElement("span");
    const removerCantidad = document.createElement("span");

    agregarCantidad.classList.add("agregarCantidad");
    removerCantidad.classList.add("removerCantidad");
    bodyCarrito.classList.add("bodyCarrito");

    agregarCantidad.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor" /></svg>
    `;
    removerCantidad.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor" /></svg>
    `;
    bodyCarrito.innerHTML = `
    
    <img class="fotosCarrito" src="${producto.foto}"</img>
    <p class= "nombreProducto">${producto.nombre}<p>
    <h3 class= "precioProducto" >$${producto.precio * producto.cantidad}</h3>

    `;

    const cantidadItems = document.createElement('h3');
    cantidadItems.classList.add("cantidadItems")
    cantidadItems.innerText = `${producto.cantidad}`
    modalCarrito.append(bodyCarrito);
    bodyCarrito.append(agregarCantidad);
    bodyCarrito.append(cantidadItems);
    bodyCarrito.append(removerCantidad);

    const removerItem = document.createElement("span");
    removerItem.classList.add("removerItem");
    removerItem.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="red" /><path d="M9 9H11V17H9V9Z" fill="red" /><path d="M13 9H15V17H13V9Z" fill="red" /></svg>
      `;
    bodyCarrito.append(removerItem);

    removerItem.addEventListener("click", eliminarItem);

    agregarCantidad.addEventListener("click", () => {
      producto.cantidad++;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarCarrito();
    });
    removerCantidad.addEventListener("click", () => {
      producto.cantidad--;
      if(producto.cantidad === 0) {
        eliminarItem();
        renderizarCarrito();
      } else {
        localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarCarrito();
      }
    });
  });

  // Total carrito

  const totalCarrito = carrito.reduce(
    (acumulador, carrito) => acumulador + carrito.precio * carrito.cantidad,
    0
  );

  //   Footer carrito

  const footerCarrito = document.createElement("div");

  footerCarrito.classList.add("footerCarrito");
  footerCarrito.innerHTML = `
    <div class= "footer">
      <h2>Total: $${totalCarrito}</h2>
      <button class = "finalizarCompra" id="finalizarCompra" > Finalizar compra </button>
    </div>
    `;
  modalCarrito.append(footerCarrito);

  // botonFinalizarCompra = document.createElement("button");
  // botonFinalizarCompra.classList.add("finalizarCompra");
  // botonFinalizarCompra.innerText = "Finalizar compra";

  // footerCarrito.append(botonFinalizarCompra);

  const cerrarCarrito = document.querySelector("#cerrarCarrito");
  cerrarCarrito.addEventListener("click", () => {
    modalCarrito.style.display = "none";
  });

  const finalizarCompra = document.querySelector("#finalizarCompra");
  finalizarCompra.addEventListener("click", () => {
    Swal.fire({
      title: '¿Desea finalizar su compra?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Comprar',
      denyButtonText: `Me arrepentí`,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Su pedido se ha ingresado con éxito!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Volviendo al carrito...', '', 'info')
      }
    })
  });
};

// Eliminar ítem carrito

const eliminarItem = () => {
  const idEliminar = carrito.find((producto) => producto.id);

  carrito = carrito.filter((idCarrito) => {
    return idCarrito !== idEliminar;
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito();
  itemsCarritoNavBar();
};


// Renderizar cantidad ítems carrito NavBar

const iconoCarrito = document.createElement("span");
iconoCarrito.classList.add("iconoCarrito");
itemsCarrito.append(iconoCarrito);

const itemsCarritoNavBar = () => {
  let valorCarrito = carrito.length;
  iconoCarrito.style.display = "block";
  localStorage.setItem("valorCarrito", valorCarrito);
  iconoCarrito.innerText = `${valorCarrito}`;
};
// LISTENERS

// Consultar/renderizar el carrito

consultarCarrito.addEventListener("click", renderizarCarrito);

// EJECUTORES

itemsCarritoNavBar();

console.log("El carrito contiene: ", carrito);

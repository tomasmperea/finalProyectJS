
// SELECTORES / VARIABLES

const cardContainer1 = document.querySelector("#cardContainer1")
const cardContainer2 = document.querySelector("#cardContainer2")
const botonLogin = document.querySelector("#botonLogin")
const consultarCarrito = document.querySelector("#consultarCarrito")

let carrito;
// let arrayUsuarios;

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
  carrito = []
}

// Pensando en un posible registro de usuarios queda esto comentado

// if (localStorage.getItem("arrayUsuarios")) {
//   arrayUsuarios = JSON.parse(localStorage.getItem("arrayUsuarios"))
// } else {
//   arrayUsuarios = []
// }

// console.log(arrayUsuarios);

// Bienvenida de la página una vez que nos fuimos y volvemos o actualizamos la page

const usuario = JSON.stringify(localStorage.getItem("user"))

if (localStorage.getItem("user")) {
  Swal.fire(
    `Bienvenido de nuevo ${localStorage.getItem("user")}`
  )

} else {
  Swal.fire(
      'Bienvenido a King-On'
    )
}

// Me falta entender como poder mostrar el carrito en un Swal o modal cuando vuelve el usuario a ingresar a la page

console.log("El carrito contiene: ", carrito);


// FUNCIONES

// Renderiza todas las cards con los productos

const renderizarProductos = () => {
  remeras.forEach(remera => {
    const nuevaCard1 = document.createElement("div");
    const contenedorCards = document.createElement("div");
    const cardBody = document.createElement("div")
    const nombreRemera = document.createElement("h6")
    const precio = document.createElement("h4")
    const aniadirCarrito = document.createElement("button")

    contenedorCards.classList.add("p-4")
    nombreRemera.classList.add("p-2")
    nuevaCard1.classList.add("card")
    cardBody.classList.add("card-body")
    aniadirCarrito.classList.add("aniadirCarrito")
    aniadirCarrito.classList.add("p-2")
    aniadirCarrito.setAttribute("data-id", remera.id)
    aniadirCarrito.textContent = "Añadir al carrito"
    nombreRemera.textContent = `${remera.nombre}`
    precio.textContent = `$${remera.precio}`

    nuevaCard1.innerHTML = `
    
        <img src= ${remera.foto} alt= ${remera.nombre}>
        <a href="#">
        </a>
    
    `
    cardContainer1.append(contenedorCards);
    contenedorCards.append(nuevaCard1);    
    nuevaCard1.append(nombreRemera);
    nuevaCard1.append(precio);
    nuevaCard1.append(cardBody);
    cardBody.append(aniadirCarrito);
  });
  

  medias.forEach(media => {
    const nuevaCard2 = document.createElement("div");
    const contenedorCards = document.createElement("div");
    const cardBody = document.createElement("div")
    const nombreMedia = document.createElement("h6")
    const precio = document.createElement("h4")
    const aniadirCarrito = document.createElement("button")

    contenedorCards.classList.add("p-4")
    nombreMedia.classList.add("p-2")
    nuevaCard2.classList.add("card")
    cardBody.classList.add("card-body")
    aniadirCarrito.classList.add("aniadirCarrito")
    aniadirCarrito.classList.add("p-2")
    aniadirCarrito.setAttribute("data-id", media.id)
    aniadirCarrito.textContent = "Añadir al carrito"
    nombreMedia.textContent = `${media.nombre}`
    precio.textContent = `$${media.precio}`

    nuevaCard2.innerHTML = `
    
        <img src= ${media.foto} alt= ${media.nombre}>
        <a href="#">
        </a>
    
    `
    cardContainer2.append(contenedorCards);
    contenedorCards.append(nuevaCard2);
    nuevaCard2.append(nombreMedia);
    nuevaCard2.append(precio);
    nuevaCard2.append(cardBody);
    cardBody.append(aniadirCarrito);
  });
  
  const buttonCarrito = document.querySelectorAll(".aniadirCarrito")
  buttonCarrito.forEach((button) => {
    button.addEventListener("click", agregarCarrito)
  })
}

// Agrega cada producto al carrito

const agregarCarrito = (e) => {
  const idProducto = e.target.getAttribute("data-id");
  const idElegido = productos.find((producto) => producto.id === idProducto)
  
  Toastify({
    text: "Añadido al carrito",
    duration: 3000,
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#bebaba",
    },
    onClick: function(){} // Callback after click
  }).showToast();

  carrito.push(idElegido)
  localStorage.setItem("carrito", JSON.stringify(carrito))
  console.log("El carrito contiene: ", carrito);

}

// puedo mejorar la seguridad del login 

const loginUser = () => { 
  const nombreUsuarioStorage = localStorage.getItem("user")

  if (nombreUsuarioStorage){
    botonLogin.innerText = "Cerrar sesión"

    // Swal.fire(
    //   'Bienvenido'
    // )

    alert(`${nombreUsuarioStorage} ya has iniciado sesión :)`)

  } else {
    
    let user = prompt("Ingrese su usuario: ");
    let pass = prompt("Ingrese su contraseña: ");

    while (user === "" || pass === "") {
      alert("Usuario y/o contraseña incorrecta: ingrese nuevamente sus datos ");
      if (user === "") {
        user = prompt("Ingrese su usuario: ");
      } else {
        pass = prompt("Ingrese su contraseña: ");
      }
    }

    localStorage.setItem("user", user)
    botonLogin.innerText = "Cerrar sesión"

    // Swal.fire(
    //   'Bienvenido'
    // )

    alert(`Bienvenido humano ${user}`)
  }
  
}

// Posibles ideas que quedan comentadas para que no se eliminen

// const agregarUsuarios = (e) => {
//   nombreUsuario = e.target.getAttribute("nombre");
//   nombreElegido = arrayUsuarios.find((usuario) => usuario.nombre === nombreUsuario);

//   arrayUsuarios.push(nombreElegido);
//   localStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
//   console.log("arrayUsuarios");
// }

// const loginUser = () => { 
//   const nombreUsuario = localStorage.getItem("usuario")

//   if (nombreUsuario){
//     botonLogin.innerText = "Cerrar sesión"
//     alert(`Bienvenido humano ${nombreUsuario}`)
//   } else {
    
//     let usuario = prompt("Ingrese su usuario: ");
//     let password = prompt("Ingrese su contraseña: ");

//     while (usuario === "" || password === "") {
//       alert("Usuario y/o contraseña incorrecta: ingrese nuevamente sus datos ");
//       if (usuario === "") {
//         usuario = prompt("Ingrese su usuario: ");
//       } else {
//         password = prompt("Ingrese su contraseña: ");
//       }
//     }

//     localStorage.setItem("usuario", usuario)
//     botonLogin.innerText = "Cerrar sesión"
//     alert(`Bienvenido humano ${usuario}`)
//   }

// }

// const logoutUser = () => {
//   Swal.fire({
//     title: 'Estás seguro que deseas cerrar la sesión?',
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Si, estoy seguro',
//     denyButtonText: `Fue un error`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       botonLogin.innerText = "Iniciar sesión"
//       localStorage.removeItem("user")
//       Swal.fire('Hasta pronto!', '', 'success')
//     } else if (result.isDenied) {
//       Swal.fire('Nos alegramos que sigas en nuestro sitio', '', 'info')
//     }
//   })
// }

// LISTENERS

botonLogin.addEventListener("click", loginUser)

consultarCarrito.addEventListener("click", () => {
  const totalCarrito = carrito.reduce((acumulador, carrito) => acumulador + carrito.precio, 0);

  Toastify({
    text: `El valor total del carrito es: $${parseFloat(totalCarrito*1.21)}`,
    duration: 3000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#a7ce96",
    },
    onClick: function(){} // Callback after click
  }).showToast();

// alert("El valor total del carrito es: " + "$" + parseFloat(totalCarrito*1.21) + " IVA Final")

})

// Necesito resolver como poder cerrar sesión también

// botonLogin.addEventListener("click", logoutUser)


// EJECUTORES

renderizarProductos();

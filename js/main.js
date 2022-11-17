
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

// if (localStorage.getItem("arrayUsuarios")) {
//   arrayUsuarios = JSON.parse(localStorage.getItem("arrayUsuarios"))
// } else {
//   arrayUsuarios = []
// }

// console.log(arrayUsuarios);

console.log("El carrito contiene: ", carrito);

// FUNCIONES

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

const agregarCarrito = (e) => {
  const idProducto = e.target.getAttribute("data-id");
  const idElegido = productos.find((producto) => producto.id === idProducto)

  carrito.push(idElegido)
  localStorage.setItem("carrito", JSON.stringify(carrito))
  console.log("El carrito contiene: ", carrito);

}

// puedo mejorar la seguridad del login ESTA ES LA VERSION QUE FUNCIONA

const loginUser = () => { 
  const nombreUsuarioStorage = localStorage.getItem("user")

  if (nombreUsuarioStorage){
    botonLogin.innerText = "Cerrar sesión"
    alert(`Bienvenido humano ${nombreUsuarioStorage}`)
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
    alert(`Bienvenido humano ${user}`)
  }
}

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
//   localStorage.removeItem("usuario")
//   alert(`Hasta la próxima ${usuario}! Esperamos verte de nuevo por aquí :)`)
// }

// LISTENERS

botonLogin.addEventListener("click", loginUser)

consultarCarrito.addEventListener("click", () => {
  const totalCarrito = carrito.reduce((acumulador, carrito) => acumulador + carrito.precio, 0);

alert("El valor total del carrito es: " + "$" + parseFloat(totalCarrito*1.21) + " IVA Final")

})

// botonLogin.addEventListener("click", logoutUser)


// EJECUTORES

renderizarProductos();


// SELECTORES /VARIABLES

const cardContainer1 = document.querySelector("#cardContainer1")
const cardContainer2 = document.querySelector("#cardContainer2")
const botonLogin = document.querySelector("#botonLogin")
const consultarCarrito = document.querySelector("#consultarCarrito")

// FUNCIONES

remeras.forEach(remera => {
  const nuevaCard1= document.createElement("div");
  nuevaCard1.className = "card";
  nuevaCard1.innerHTML = `
  
      <img src= ${remera.foto}>
      <div class="card-body">
      <h5> ${remera.nombre} </h5>
      <span> Precio: $${remera.precio} </span>
      <br>
      <br>
      <button id="aniadirCarrito" class= p-1> Añadir al carrito </button
      <a href="#">
      </a>
  
  `
  cardContainer1.append(nuevaCard1);
});


medias.forEach(media => {
  const nuevaCard2= document.createElement("div");
  nuevaCard2.className = "card";
  nuevaCard2.innerHTML = `
  
      <img src= ${media.foto}>
      <div class="card-body">
      <h5> ${media.nombre} </h5>
      <span> Precio: $${media.precio} </span>
      <br>
      <br>
      <button id="aniadirCarrito" class= p-1> Añadir al carrito </button
      <a href="#">
      </a>
  
  `
  cardContainer2.append(nuevaCard2);

});

// LISTENERS

botonLogin.addEventListener("click", () => { 
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
  botonLogin.innerText = "Bienvenido " + user;

  let consultaUsuario = prompt("Seleccione remeras o medias para ver el stock disponible: ").toLowerCase();

if (consultaUsuario === "remeras" || consultaUsuario === "Remeras" || consultaUsuario === "REMERAS") {
  remeras.forEach(remera => {
    alert(remera.nombre + " " + " Precio sin IVA: " + "$"+ remera.precio)});
  } else if (consultaUsuario === "medias" || consultaUsuario === "medias" || consultaUsuario === "MEDIAS") {
    medias.forEach(media => {
    alert(media.nombre + " " + " Precio sin IVA: " + "$"+ media.precio)})
  } else {
    alert("No comercializamos los productos ingresados.");
  
  }
})

consultarCarrito.addEventListener("click", () => {
  const totalCarrito = carrito.reduce((acumulador, carrito) => acumulador + carrito, 0);

alert("El valor total del carrito es: " + "$" + (totalCarrito*1.21) + " IVA Final")

})

// EJECUTORES


// function aniadirCarrito() {
//   alert("Usted ha seleccionado un ítem. Total carrito: " + "$" + carrito);
//   medioPago = prompt(
//     "Seleccione su medio de pago: efectivo o tarjeta"
//   ).toLowerCase();
//   while (medioPago == "") {
//     alert("No ha ingresado una opción. Vuelva a intentarlo");
//     medioPago = prompt(
//       "Seleccione su medio de pago: efectivo o tarjeta"
//     ).toLowerCase();
//   }
//   if (medioPago === !"efectivo" && medioPago === !"tarjeta") {
//     alert("No ha ingresado una opción. Vuelva a intentarlo");
//     medioPago = prompt(
//       "Seleccione su medio de pago: efectivo o tarjeta"
//     ).toLowerCase();
//   } else if (medioPago === "tarjeta") {
//     tarjeta = prompt(
//       "Seleccione su tarjeta: santander, amex, nacion, otras: "
//     ).toLowerCase();
//     switch (tarjeta) {
//       case "santander":
//         alert("Valor total con 75% de descuento: " + "$" + carrito * 0.25);
//         break;

//       case "amex":
//         alert("Valor total con 50% de descuento: " + "$" + carrito * 0.5);
//         break;

//       case "nacion":
//         alert("Valor total con 25% de descuento: " + "$" + carrito * 0.75);
//         break;

//       default:
//         alert(
//           "La tarjeta que ingresó no posee descuentos: su pago total es de: " +
//             "$" +
//             carrito
//         );
//     }
//   } else {
//     alert("Su pago en efectivo es de: " + "$" + carrito);
//   }
// }

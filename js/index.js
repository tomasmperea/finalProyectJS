// simular inicio de sesión del ecommerce

function iniciarSesion() {
  let user = prompt("Ingrese su usuario: ");
  console.log(user);
  let pass = prompt("Ingrese su contraseña: ");
  console.log(pass);

  while (user === "" || pass === "") {
    alert("Usuario y/o contraseña incorrecta: ingrese nuevamente sus datos ");
    if (user === "") {
      user = prompt("Ingrese su usuario: ");
    } else {
      pass = prompt("Ingrese su contraseña: ");
    }
  }

  alert("Welcome to King On " + user);
}

// simular selección de ítem

let carrito = 5000;
let medioPago;
let tarjeta;

function aniadirCarrito() {
  alert("Usted ha seleccionado un ítem. Total carrito: " + "$" + carrito);
  medioPago = prompt("Seleccione su medio de pago: efectivo o tarjeta").toLowerCase();
  while (medioPago == "") {
    alert("No ha ingresado una opción. Vuelva a intentarlo")
    medioPago = prompt("Seleccione su medio de pago: efectivo o tarjeta").toLowerCase();
  } 
  if (medioPago ===! "efectivo" && medioPago ===! "tarjeta") {
    alert("No ha ingresado una opción. Vuelva a intentarlo")
    medioPago = prompt("Seleccione su medio de pago: efectivo o tarjeta").toLowerCase();
  } else if (medioPago === "tarjeta") {
      tarjeta = prompt("Seleccione su tarjeta: santander, amex, nacion, otras: ").toLowerCase();
      switch (tarjeta) {
        case "santander":
          alert("Valor total con 75% de descuento: " + "$" + (carrito * 0.25));
          break;
  
        case "amex":
          alert("Valor total con 50% de descuento: " + "$" + (carrito * 0.5));
          break;
  
        case "nacion":
          alert("Valor total con 25% de descuento: " + "$" + (carrito * 0.75));
          break;
  
        default:
          alert("La tarjeta que ingresó no posee descuentos: su pago total es de: " + "$" + carrito);
      }
    } else {
      alert("Su pago en efectivo es de: " + "$" + carrito);
    }
  }



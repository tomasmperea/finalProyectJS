
// SELECTORES / VARIABLES

const botonLogin = document.querySelector("#botonLogin");
const inicioSesion = document.querySelector("#login-form");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


// FUNCIONES


function validarCredenciales (e) { 
  e.preventDefault();

  const usuarioStorage = localStorage.getItem("user")
  const passwordStorage = localStorage.getItem("password")

  if (usuarioStorage === usuario.value && passwordStorage === password.value) {
    
    Toastify({
      text: `¡Ya se inició una sesión con las mismas credenciales!`,
      duration: 3000,
      destination: "",
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right", 
      stopOnFocus: true, 
      style: {
        background: "#ccb24c",
      },
      onClick: function(){}
    }).showToast();

    // botonLogin.value = "Cerrar sesión"

  } else {
   
    localStorage.setItem("user", usuario.value)
    localStorage.setItem("password", password.value)

    // botonLogin.value = "Cerrar sesión"
    Toast.fire({
      title: `¡Bienvenido/a ${localStorage.getItem("user")}!`,
      icon: "success"
    })

  }

}

// Idea sobre logout comentada

// function validarCierreSesion (e) {
//   e.preventDefault();
//   if (botonLogin.value === "Cerrar sesion") {
//     Swal.fire({
//       title: 'Estás seguro que deseas cerrar la sesión?',
//       showDenyButton: true,
//       showCancelButton: true,
//       confirmButtonText: 'Si, estoy seguro',
//       denyButtonText: `Fue un error`,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         botonLogin.innerText = "Iniciar sesión"
//         localStorage.removeItem("user")
//         localStorage.removeItem("password")
//         Swal.fire('Hasta pronto!', '', 'success')
//       } else if (result.isDenied) {
//         Swal.fire('Nos alegramos que sigas en nuestro sitio', '', 'info')
//       }
//     })
//   }
// }

// LISTENERS

// Necesito resolver como poder cerrar sesión también

inicioSesion.addEventListener("submit", validarCredenciales)


// botonLogin.addEventListener("click", validarCierreSesion)

// EJECUCIONES



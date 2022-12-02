
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

// Valida las credenciales del login para que no se logueen +1 vez con el mismo user/pass

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

  } else {
   
    localStorage.setItem("user", usuario.value)
    localStorage.setItem("password", password.value)

    Toast.fire({
      title: `¡Bienvenido/a ${localStorage.getItem("user")}!`,
      icon: "success"
    })

  }

}

// LISTENERS

inicioSesion.addEventListener("submit", validarCredenciales)

// EJECUCIONES



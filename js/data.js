// ARRAY DE OBJETOS (PRODUCTOS)

class Remeras {
    constructor(id, nombre, precio, foto) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.foto = foto;
    }
  
    mostrarRemeras() {
      alert(
        "La remera seleccionada es " +
          this.nombre
      );
    }
  }
  
  const remera1 = new Remeras("remera1","SUDADERA META ART GALLERY FABA 03 [ BLANCO ]", 5025, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/titan-faba_03-blanco-dorso1-69532e3aecb19db81916650837607662-640-0.jpg");
  const remera2 = new Remeras("remera2","REMERA TITAN ART SUPPORT [ PIRANHA-3 BLANCO ]", 6500, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/551-ffbe9f11b54a809ab116566132918140-640-0.jpg");
  const remera3 = new Remeras("remera3","REMERA SUNWAVES [ PROCESO J02 ]", 7610, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-sunwaves-remera-batik-remera-procesada-remera-oversize-remeron-remera-manchada-remera-grande-91-1816729a6fb5eeb7a116643808165838-640-0.jpg");
  const remera4 = new Remeras("remera4","REMERA META ART GALLERY CASTIGLIONI 02 [ PROCESO ]", 8950, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-batik-estampada-aguila-dragon-21-81e2a5f9b602ca2c5916667100705047-640-0.jpg");

  
  
  class Medias {
    constructor(id, nombre, precio, foto) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.foto = foto;
    }
  
    mostrarMedias() {
      alert(
        "La media seleccionada es " +
          this.nombre
      );
    }
  }
  
  const media1 = new Medias("media1", "MEDIA SUNDAY [ PRINT 50 ]", 890, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/medias-negras-ojo2-21b6dc39a44e5ad83a16541968917487-640-0.jpg");
  const media2 = new Medias("media2", "MEDIA SUNDAY [ PRINT I- 1 ]", 890, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/medias-negras-rayas-blancas2-f4ca961fd3e72a1ab616594673246646-640-0.jpg");
  const media3 = new Medias("media3", "MEDIA SUNDAY [ PRINT 58 ]", 890, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/medias-negras-rosa-11-435370a69322c77cb616561738047654-640-0.jpg");
  const media4 = new Medias("media4", "MEDIA SUNDAY [ PRINT 67 ]", 890, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/medias-blancas-rayas-azul-roja2-0bd03ed791cc03119d16590187910756-640-0.jpg");
  
  
  const remeras = [
    remera1, remera2, remera3, remera4
  ];
  
  const medias = [
    media1, media2, media3, media4
  ];

  // const productos = remeras.concat(medias)

  let productos = [];




  


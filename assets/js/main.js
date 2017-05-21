var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
var fotos = document.getElementsByClassName('imagenes-varias')[0];

pictures.forEach(function(f){
	var imagen = document.createElement('img')
	imagen.setAttribute("src",f);
	imagen.setAttribute("class","los-pandas");
	fotos.appendChild(imagen);	
})

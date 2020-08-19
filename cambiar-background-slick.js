function getColorsRGB(elementImg) {

    var blockSize = 5, // only visit every 5 pixels
    defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'), // canvas.getContext &&
    data, width, height,
    rgb = {r:0,g:0,b:0};

    if (!context) {
        return defaultRGB;
    }
    // Obtenemos las dimensiones del canvas creado
    height = canvas.height; // = elementImg.naturalHeight || elementImg.offsetHeight || elementImg.height;
    width = canvas.width; // = elementImg.naturalWidth || elementImg.offsetWidth || elementImg.width;

    context.drawImage(elementImg, 0, 0, width, height);

    try {
        // Obtenenos la data de la imagen por 5 px
        data = context.getImageData(5, 5, width, height).data;
    } catch(e) {
        return defaultRGB;
    }

    rgb.r = data[0];
    rgb.g = data[1];
    rgb.b = data[2];

    return rgb;
}

// Funcion para aceder a cada elemento y asginar color
function cambiar_background(idImagen,idContainer) {
    // Obtenemos el color dominante de la imagen
    var rgb = getColorsRGB(document.getElementById(idImagen));
    // Asignamos el color al background del slider
    document.getElementById(idContainer).style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
}
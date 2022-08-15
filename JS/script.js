var canvas = document.getElementById("Output_Canvas"); //getting the canvas element
var ctx = canvas.getContext('2d'); //getting 2d instance of canvas

var loadFile = function(event) {
    
    console.log("loaded a new image");

    var preview_image = document.getElementById('output'); //accessing the preview image
    preview_image.src = URL.createObjectURL(event.target.files[0]); //setting its source
    
    preview_image.addEventListener('load',function() //after setting the image source , when the image is completely loaded
    {
        console.log(preview_image.naturalWidth + " " + preview_image.naturalHeight);
        canvas.width = preview_image.naturalWidth;
        canvas.height = preview_image.naturalHeight;
        ctx.drawImage(preview_image,0,0);
    });  
};





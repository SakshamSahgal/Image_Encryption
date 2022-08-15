var canvas = document.getElementById("Output_Canvas"); //getting the canvas element
var ctx = canvas.getContext('2d'); //getting 2d instance of canvas

var loadFile = function(event) {
    
    var preview_image = document.getElementById('preview'); //accessing the preview image
    preview_image.src = URL.createObjectURL(event.target.files[0]); //setting its source
    
    preview_image.addEventListener('load',function() //after setting the image source , when the image is completely loaded
    {
        console.log(preview_image.naturalWidth + " " + preview_image.naturalHeight);
        canvas.width = preview_image.naturalWidth; //setting canvas width same as the preview image width
        canvas.height = preview_image.naturalHeight; //setting canvas height same as the preview image height
        ctx.drawImage(preview_image,0,0); //drawing the image on the canvas starting from 0,0

        const scannedImage = ctx.getImageData(0,0,canvas.width,canvas.height); //scanning the canvas from (0,0) to (canvas.width , canvas.height) to get all pixel data
        console.log(scannedImage);
        const scannedData = scannedImage.data;

        for(var i=0;i<scannedData.length;i+=4)  //since i , i+1 , i+2 , i+3 correnponds to  RGBA values of a pixel 
        {
            var red = scannedData[i];
            var green = scannedData[i+1];
            var blue = scannedData[i+2];
            var alpha = scannedData[i+3];

            if(i%2 == 0)
            {
                scannedData[i] = (red+200)%256; //modifying the pixel data
                scannedData[i+1] = (green+30)%256;
                scannedData[i+2] = (blue+20)%256;
            }
            else
            {
                scannedData[i] =  (red-200)%256; //modifying the pixel data
                scannedData[i+1] = (green-20)%256;
                scannedData[i+2] = (blue-20)%256;
            }
        }

        scannedImage.data = scannedData; //overiding the pixel data
        ctx.putImageData(scannedImage,0,0); //redrawing on canvas

    });
};





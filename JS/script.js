var canvas = document.getElementById("Output_Canvas"); //getting the canvas element
var ctx = canvas.getContext('2d'); //getting 2d instance of canvas



function red_index(i,j,width)
{
    return (i*4*width + j*4);
}

function green_index(i,j,width)
{
    return (i*4*width + j*4 + 1);
}

function blue_index(i,j,width)
{
    return (i*4*width + j*4 + 2);
}

function alpha_index(i,j,width)
{
    return (i*4*width + j*4 + 3);
}

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
        const scannedData = scannedImage.data; //copying that image data into a 1D array 
        


        for(var i=0;i<preview_image.naturalHeight;i++)
        {
            for(var j=0;j<preview_image.naturalWidth;j++)
            {
                scannedData[red_index(i,j,preview_image.naturalWidth)] = 0;
                scannedData[green_index(i,j,preview_image.naturalWidth)] = 0;
                scannedData[blue_index(i,j,preview_image.naturalWidth)] = 25;
            }
        }

        scannedImage.data = scannedData; //overiding the pixel data
        ctx.putImageData(scannedImage,0,0); //redrawing on canvas

    });
};





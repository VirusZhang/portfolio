ctx.font = '20px Arial';
ctx.fillText('Hello world!', 350, 200);
ctx.font = '20px Tahoma';
ctx.fillText('Hello world!', 500, 250);

const img = new Image();
        img.src= 'penguin.jpg';
        img.onload = function() {
            ctx.drawImage(img, 500, 400)
        }

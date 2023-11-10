function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'rgb(255,0,0)';
        ctx.fillRect(0,0,200,200);
        ctx.fillStyle = 'rgb(0,0,0)'
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50,50,50,50);
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                setInterval(rectangle(i,j), 150000);
            }
        }
        function rectangle(i,j){
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
        
        
        var offset = 0;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.setLineDash([4, 2]);
            ctx.lineDashOffset = -offset;
            ctx.strokeRect(10, 10, 100, 100);
        }

        function march() {
            offset++;
            if (offset > 16) {
                offset = 0;
            }
        draw();
        setTimeout(march, 20);
        }

        march();

        
        
        // var img = new Image();   // Crée un nouvel élément Image
        // img.onload = function() {
        //     ctx.drawImage(img, 0, 0);
        //     ctx.beginPath();
        //     ctx.moveTo(30, 96);
        //     ctx.lineTo(70, 66);
        //     ctx.lineTo(103, 76);
        //     ctx.lineTo(170, 15);
        //     ctx.stroke();
        // };
        // img.src = 'Images/test.jpg';
    } else {
        alert("problème");
    }
}


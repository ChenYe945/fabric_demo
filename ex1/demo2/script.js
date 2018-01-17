var canvas = new fabric.Canvas('main');

var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 100,
    height: 100,
    opacity:0.1
});
rect.lockMovementX = true;
rect.lockMovementY = true;
var corner = ["tl", "ml", "bl", "mb", "br", "mr", "tr", "mt", "mtr"];
for (var i = 0; i < corner.length; i++) {
    rect.setControlVisible(corner[i], false);
}

var circle = new fabric.Circle({
    radius: 50,
    left: 200,
    top:100,
    fill:'green',
    height: 200
});

var triangle = new fabric.Triangle({
    width: 80,
    height: 100,
    fill: 'blue',
    left: 300,
    top: 300
})

canvas.add(rect);
canvas.add(circle);
canvas.add(triangle);
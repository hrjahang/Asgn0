// asgn0.js
function areaTriangle(v1, v2) {
  var cross = Vector3.cross(v1, v2);
  var m = cross.magnitude();
  console.log("Area: ", m/2);
}

function handleDrawOperationEvent() {
  // Get dropdown element
  var selectElement = document.getElementById("op");

  // Get val of selected option
  var op = selectElement.value;

  var x1 = document.getElementById("v1x").value;
  var y1 = document.getElementById("v1y").value;
  let v1 = new Vector3([x1, y1, 0]);

  var x2 = document.getElementById("v2x").value;
  var y2 = document.getElementById("v2y").value;
  let v2 = new Vector3([x2, y2, 0]); 

  var scalar = document.getElementById("scalar").value;

  handleDrawOperationEvent();

  if (op == "add") {
    let vec = new Vector3();
    vec.set(v1);
    vec.add(v2);
    drawVector(vec, "green");
    return;
  }

  else if (op == "subtract") {
    let vec = new Vector3();
    vec.set(v1);
    vec.sub(v2);
    drawVector(vec, "green");
    return;
  }

  else if (op == "multiply") {
    let vec1 = new Vector3();
    vec1.set(v1);
    vec1.mul(scalar);
    drawVector(vec1, "green");

    let vec2 = new Vector3();
    vec2.set(v2);
    vec2.mul(scalar);
    drawVector(vec2, "green");
    
    return;
  }

  else if (op == "divide") {
    let vec1 = new Vector3();
    vec1.set(v1);
    vec1.div(scalar);
    drawVector(vec1, "green");

    let vec2 = new Vector3();
    vec2.set(v2);
    vec2.div(scalar);
    drawVector(vec2, "green");
    
    return;
  }

  else if (op == "magnitude") {
    console.log("Magnitude v1: ", v1.magnitude());
    console.log("Magnitude v2: ", v2.magnitude());
    return;
  }

  else if (op == "normalize") {
    let vec1 = new Vector3();
    vec1.set(v1);
    vec1.normalize();
    drawVector(vec1, "green");
    
    let vec2 = new Vector3();
    vec2.set(v2);
    vec2.normalize();
    drawVector(vec2, "green");

    return;
  }

  else if (op == "angle") {
    var dop = Vector3.dot(v1, v2);
    var m1 = v1.magnitude();
    var m2 = v2.magnitude();
    var cos = dop / (m1 * m2);
    var ang = Math.acos(cos) * (180 / Math.PI);
    console.log("Angle: ", ang);
  }

  else if (op == "area") {
    areaTriangle(v1, v2);
    return;
  }
}

function handleDrawEvent() {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");
  // Fill a rectangle with the color
  ctx.fillRect(0, 0, 400, 400);

  var x1 = document.getElementById("v1x").value;
  var y1 = document.getElementById("v1y").value;

  let v1 = new Vector3([x1, y1, 0]);
  drawVector(v1, "red");

  var x2 = document.getElementById("v2x").value;
  var y2 = document.getElementById("v2y").value;

  let v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, "blue");
}

function drawVector(v, color) {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");

  // Set stroke color to provided color
  ctx.strokeStyle = color;
  
  // Begin new path
  ctx.beginPath();
  
  ctx.moveTo(200, 200);

  ctx.lineTo(200+v.elements[0]*20, 200+-v.elements[1]*20);

  ctx.stroke();
}

function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a black square
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, 400, 400);

  let vec = new Vector3([2.25, 2.25, 0]);
  drawVector(vec, 'red');
}

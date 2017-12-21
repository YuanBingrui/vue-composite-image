window.onload = function() {  
  draw();  
  var saveButton = document.getElementById("saveImageBtn");  
  bindButtonEvent(saveButton, "click", saveImageInfo);  
  var dlButton = document.getElementById("downloadImageBtn");  
  bindButtonEvent(dlButton, "click", saveAsLocalImage);  
}; 

function draw(){  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  console.log(document.images);
  for (var i = 0; i < document.images.length; i++) {
  	if(document.images[i].id === 'car' || document.images[i].id === 'controlBox' || document.images[i].id === 'ceilling' || document.images[i].id === 'floor'){
  		ctx.drawImage(document.images[i], 0, 0, 150, 300);
  	}
  }
 	// var imgCar = document.getElementById('car');
 	// ctx.drawImage(imgCar, 10, 10, 150, 300);

	// var imgControlBox = document.getElementById('controlBox');
	// ctx.drawImage(imgControlBox, 10, 10, 150, 300);

	// var imgCeillingr = document.getElementById('ceilling');
	// ctx.drawImage(imgCeillingr, 10, 10, 150, 300);

	// var imgFloor = document.getElementById('floor');
	// ctx.drawImage(imgFloor, 10, 10, 150, 300);
}

function bindButtonEvent(element, type, handler) {  
    if(element.addEventListener) {  
        element.addEventListener(type, handler, false);  
    } else {  
        element.attachEvent('on'+type, handler);  
    }  
}

function saveImageInfo() {
	var mycanvas = document.getElementById("canvas");  
  var image = mycanvas.toDataURL("image/png");
  document.getElementById("linkDown").href = image;
  document.getElementById("downImg").src = image;
  var w=window.open('about:blank','image from canvas');  
  w.document.write("<img src='"+image+"' alt='from canvas'/>");
}

function saveAsLocalImage() {  
  var myCanvas = document.getElementById("canvas");  
  var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var save_link=document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  save_link.href=image;
  save_link.download='filename.png';
  var event=document.createEvent('MouseEvents');
  event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
  save_link.dispatchEvent(event);   
  // window.location.href=image; 
}  

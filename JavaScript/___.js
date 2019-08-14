function draw(){
	let x=arguments[0];
	let y=arguments[1];
	let r=5;
	ctx.save();
	ctx.beginPath();
	ctx.translate(x,y);
	//ctx.rotate(Math.PI/0.6);
	ctx.fillStyle="rgba(000,255,000,1)";
	//ctx.arc(0,100,5,0,2*Math.PI);
	ctx.moveTo(0,-r*2);
	ctx.lineTo(r,r*2);
	ctx.lineTo(-r,r*2);
	ctx.lineTo(0,-r*2);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
}
function clear(){
	ctx.beginPath();
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.closePath();
}
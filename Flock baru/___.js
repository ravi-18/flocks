function draw(){
	let x=arguments[0];
	let y=arguments[1];
	let vx=arguments[2];
	let vy=arguments[3];
	let radius=arguments[4];
	let angleTwo=arguments[5];
	let r=3;
	let theta=-1*Math.atan2(vy,vx) + Math.PI / 2;
	ctx.save();
	ctx.beginPath();
	ctx.translate(x,y);
	ctx.rotate(theta);
	ctx.fillStyle="rgba(255,000,000,1)";
	//ctx.arc(0,0,radius,angleTwo*6,angleTwo);
	//ctx.arc(0,0,radius,1.2*Math.PI,1.8*Math.PI);
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
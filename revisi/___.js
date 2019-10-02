function draw(){
	var ca = arguments[0];
	var ctx = ca.getContext("2d");
	let x=arguments[1];
	let y=arguments[2];
	let vx=arguments[3];
	let vy=arguments[4];
	let radius=arguments[5];
	let sudut1=arguments[6];
	let sudut2=arguments[7];
	let no=arguments[8];
	let col=arguments[9];
	let r=3;
	let theta=-1*Math.atan2(vy,vx) + Math.PI / 2;//console.log('theta : '+theta);
	ctx.save();
	ctx.beginPath();
	ctx.translate(x,y);
	ctx.rotate(theta);
	ctx.fillStyle=col;
	//ctx.arc(0,0,radius,-sudut1,-sudut2,true);
	//ctx.arc(0,0,radius,1.2*Math.PI,1.8*Math.PI);
	ctx.moveTo(0,-r*2);
	ctx.lineTo(r,r*2);
	ctx.lineTo(-r,r*2);
	ctx.lineTo(0,-r*2);
	ctx.fill();
	/*ctx.font="12px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText(no, 0, 5);*/
	ctx.closePath();
	ctx.restore();
}
function clear(){
	var ca = arguments[0];
	var ctx = ca.getContext("2d");
	ctx.beginPath();
	ctx.clearRect(0,0,caOut.width,caOut.height);
	ctx.closePath();
}
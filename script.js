function livetime() {
	let date=new Date();
	let day=data.getDate();
	let month=date.getMonth()+1;
	let year=data.getFullyear();
	let time=date.toLocaleTimeString('en-US',{hour:'numeric',minute:'numeric',second:'numeric',hour12:true});
	let cudate = `${month}/${day}/${year}`;
	document.getElementById('timer').textContent=cudate+','+time;
	
}
function startTimer() {
	livetime();
	setInterval(livetime,1000);
}
window.addEventListener('load',startTimer);


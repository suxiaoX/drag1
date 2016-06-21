window.onload = function(){
	var box = document.getElementById("box");
	
	box.onmousedown = function(ev){
		var disX = ev.clientX-this.offsetLeft;
		var disY = ev.clientY-this.offsetTop;
		document.onmousemove = function(ev){
			box.style.left = ev.clientX-disX+'px';
			box.style.top = ev.clientY-disY+'px';
		}
		document.onmouseup = function(){
			document.onmousemove = document.onmouseup = null;
		}
	}
}

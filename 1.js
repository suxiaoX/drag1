
window.onload = function(){
	var box = document.getElementById("box");
	
	box.onmousedown = function(ev){
		var that = this;
		var disX = ev.clientX-this.offsetLeft;
		var disY = ev.clientY-this.offsetTop;
		document.onmousemove = function(ev){
			that.style.left = ev.clientX-disX+'px';
			that.style.top = ev.clientY-disY+'px';
		}
		document.onmouseup = function(){
			document.onmousemove = document.onmouseup = null;
		}
	}
}

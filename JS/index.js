function abreJanela() {
	 var j = document.createElement("iframe");
	 j.setAttribute("src","/janela.html");
	 j.setAttribute("width","100%");
	 j.setAttribute("height","100%");
	 j.setAttribute("frameborder","0px");
	 j.setAttribute("class","win");
	 
	 document.body.appendChild(j);
}



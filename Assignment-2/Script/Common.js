function $(id){
	return document.getElementById(id);
}


function $hide(id){
	$(id).style.display = "none"; 
}
//to bring the visibility back

function $show(id){
	$(id).style.display = "inline-block";
}


function $mapEvent(classname, callbackFn){
	let allElements = document.getElementsByClassName(classname);
	for(let i = 0; i < allElements.length; i++){
		allElements[i].onclick = callbackFn;
	}
}

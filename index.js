

function slideMenu(){
	var elLeftMenu = document.getElementById('site-menu');
	var elRotate = document.getElementById('hover-menu');
	
	elLeftMenu.className = 'slide';
	
	elRotate.style.transform = 'translatex(300%)';
	elRotate.style.transition = '500ms';
}



function hideMenu(){
	var elLeftMenu = document.getElementById('site-menu');
	var elRotate = document.getElementById('hover-menu');	

	elLeftMenu.removeAttribute('class');
	
	elRotate.style.transform = 'translateX(0)';
	
}

var elMenu = document.getElementById('hover-menu');
elMenu.addEventListener('click', slideMenu, false);

var elHidding = document.getElementById('close');
elHidding.addEventListener('click', hideMenu, false);




//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
//	var elDocument = document.getElementById("documents");
//  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//    elDocument.setAttribute('class', 'fixed');
//    elDocument.style.width = '100%'
//  } else {
//   elDocument.removeAttribute('class');
//   elDocument.style.width = '80%'
// }
//}


function writeTo(){
	var elform = document.getElementById('contact_form');
	var elContact = document.getElementById('contact');
	
	
	elform.style.display = 'block';
}



function hideWriteTo(){
	var elform = document.getElementById('contact_form');
	var elContact = document.getElementById('contact');
	
	
	elform.style.display = 'none';
	
}

var elButton = document.getElementById('button');
elButton.addEventListener('click', writeTo, false);

var elHidding = document.getElementById('hidden');
elHidding.addEventListener('click', hideMenu, false);

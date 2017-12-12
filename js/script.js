$(function() {
	// Links array
	// Don't read this code, men. .!.
	var links = new Array();
	links[0] = 'img/dulo.jpg';
	links[1] = 'img/dildo.jpg';
	// Menu array
	var menu = new Array();
	if (document.location.pathname != '/') {
		menu = [{name: 'Новости', link: '../'}]
	} else {
		menu = [{name: 'Новости', link: '/'}]
	}
	// Set background from links
	// My english is perfect, no ne ochen
	function setBackground(number) {
		var id = '#post-' + number;
		$(id).css({'background': 'url(' + links[number] + ')'});
	}
	// Execute this function very many times
	for (var i = 0; i < links.length; i++) {
		setBackground(i);
	}
	// Set menu
	for (var i = 0; i < menu.length; i++) {
		$('.menu').append('<li><a class="link" href="' + menu[i].link + '">' + menu[i].name + '</a></li>');;
	}
});
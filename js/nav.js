	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
	function openNav() {
		document.getElementById("mySidenav").style.width = "100%";
		document.getElementById("mySidenav").style.display = "block";
		document.getElementById("main").style.marginLeft = "100px";
	}
	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mySidenav").style.display = "none";
		document.getElementById("main").style.marginLeft = "0";
		// $('html, body').toggleClass('noscroll');
	}

	var coll = document.getElementsByClassName("hamburger");
	var i;
	var root = document.documentElement;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			document.body.classList.add('noscroll');
			root.classList.add('noscroll');
		});
	}

	var closebtn = document.getElementsByClassName("closebtn");
	for (i = 0; i < coll.length; i++) {
		closebtn[i].addEventListener("click", function() {
			document.body.classList.remove('noscroll');
			root.classList.remove('noscroll');
		});
	}

$(document).ready(function() {
	let currTime = new Date().getTime();
	let difference = currTime - localStorage.getItem('time');
	let timeout = 600000; // resets pop up after 5 minutes

	if (localStorage.getItem('first-visit') == null || difference > timeout) {
		var modal = '#clinical-trial-modal';
		$(modal).css('display', 'block');
		$('span').click(function() {
			$(modal).css('display', 'none');
		});

		localStorage.setItem('first-visit', 'false');
		localStorage.setItem('time', currTime);
	}

	//open person modal
	$('figure.person').click(function(event) {
		toggleModal(event);
	});
	$('.definition').click(function(event) {
		toggleModal(event);
	});
	$('.contact-us').click(function(event) {
		toggleModal(event);
	});

	function toggleModal(myEvent) {
		var modal = '#' + myEvent.currentTarget.id + '-modal';

		$(modal).css('display', 'block');

		$('span').click(function() {
			$(modal).css('display', 'none');
		});
	}

	//pipeline dropdowns
	$('#pipeline-covid-dropdown').click(function() {
		if ($(window).width() > 700) {
			if ($('#pipeline-covid').css('display') == 'none') {
				$('#pipeline-covid').css('display', 'table-row');
			} else {
				$('#pipeline-covid').css('display', 'none');
			}
		}
		if ($(window).width() <= 700) {
			if ($('#pipeline-covid').css('display') == 'none') {
				$('#pipeline-covid').css('display', 'block');
			} else {
				$('#pipeline-covid').css('display', 'none');
			}
		}
	});
	$('#pipeline-ms-dropdown').click(function() {
		if ($('#pipeline-ms').css('display') == 'table-row') {
			$('#pipeline-ms').css('display', 'none');
		} else {
			$('#pipeline-ms').css('display', 'table-row');
		}
	});

	//open  nav
	$('.hamburger').click(function() {
		if ($('.top-nav').css('right') != '0px') {
			$('.top-nav').css('right', '0px');
		} else {
			$('.top-nav').css('right', '-1000px');
		}
	});

	//open nav dropdown
	$('.dropdown').click(function() {
		$('.dropdown-content').css('display', 'block');
	});

	window.onclick = function(event) {
		if (!event.target.matches('.dropdown')) {
			$('.dropdown-content').css('display', 'none');
		}
		if ($('.top-nav').css('right') == '0px') {
			$('.top-nav').css('right', '-1000px');
		}
	};
});

//Skills
$(document).on('scroll', function(){
	var skills = {
	  ht: 90,
	  jq: 50,
	  rs: 40,
	  wq: 80

	};

	$.each(skills, function(key, value) {
	  var skillbar = $('.' + key);
	  
	  skillbar.animate(
	  {
		width: value + "%"
	  },
	  3000,
	  function() {
		$(".speech-bubble").fadeIn();
	  }
	  );
	});

  })

//Menu
document.addEventListener('scroll', function () {
    const scroll = document.documentElement.scrollTop;
    const $header = document.querySelector('#header');

    if(scroll > 0){
        $header.classList.remove('nav-hide')
        $header.classList.add('nav-show')
    }else{
        $header.classList.add('nav-hide')
        $header.classList.remove('nav-show')
    }

    //Back To Top
    const $backToTop = document.querySelector('#backToTop');

    if(scroll > 300){
        $backToTop.classList.remove('back-hide')
    }else{
        $backToTop.classList.add('back-hide')
    }

    $backToTop.addEventListener('click', (e) => {
        document.documentElement.scrollTop = 0;
        e.preventDefault();
    })

});

//AOS
AOS.init();

//Menu Responsive
$(function () {

	//Calculamos el ancho de la pagina
	const ancho = $(window).width(),
		enlaces = $('#enlaces'),
		//enlacesLI = $('#enlaces li'),
		btnMenu = $('#btn-menu'),
		icono = $('#btn-menu .icono');

	if (ancho <= 768) {
		enlaces.hide();
		//enlacesLI.show(); ADEMAS EN CSS AGREGAR AL LI DISPLAY NONE
		icono.addClass('icon-menu');
	}

	btnMenu.on('click', function (e) {
		enlaces.slideToggle(500);
		icono.toggleClass('icon-menu');
		icono.toggleClass('icon-cancel');
	});

	$(window).on('resize', function () {
		if ($(this).width() > 768) {
			enlaces.show();
			icono.addClass('icon-cancel');
			icono.removeClass('icon-menu');
		} else {
			enlaces.hide();
			//enlacesLI.css('display','block');
			icono.addClass('icon-menu');
			icono.removeClass('icon-cancel');
		}
	});

	//Remuevo la clase del UL para que se vea luego de que cargue la web.
	enlaces.removeClass('loadNone');
});
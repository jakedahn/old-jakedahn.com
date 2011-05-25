$(function(){
  var dd = $.makeArray($('dl dd'));
	var el;
	var cnt = 0;
	var h = 0;
	
	function comingout() {
		el = dd.shift();
		var height = $(el).height();
		h = (h + height);
		$(el).prev().animate({opacity:  '1'}, 1500);
		$(el).animate({left: '0', opacity: '1'}, 800, function() {
			if(dd.length === 0) {
        // foo
			}
			else {
				scroll();
				$('#timeline').animate({backgroundPosition: '0px -'+ h + 'px'}, 2500);
			}
		});
		
	}

	function scroll() {
		var wait = 2500;
		$.scrollTo(el, wait, { easing: 'easeOutCubic', offset: -100});
		setTimeout(comingout, wait);
	}

	$.scrollTo('#container', {offset: -100});
	setTimeout(function() {
		comingout();
	}, 2000);

})
$(document).foundation();

$(".register-switch").click(function(){
	var stillSelected = false;
	var parent = $(this).closest('.accordion-item.is-active');
		if($(this).is(':checked')) {
		parent.addClass('selected');
	}

	parent.find('.register-switch').each(function(){
		if($(this).is(':checked')) {
			stillSelected = true;
		}
	});

	if (!stillSelected){
		parent.removeClass('selected');
	}
});

jQuery("#register-send-button").click(function(){
	console.log("tuk");
	if (validateForm()){

	}
});

function validateForm(){
	console.log("tuk2");
  var isValid = true;
  $('.reveal form input').each(function() {
    if ( $(this).val() === '' ){
    	$(this).addClass('empty');
        isValid = false;
    }else{
    	$(this).removeClass('empty');
    }
  });
  return isValid;
}
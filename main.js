
$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
/*//FORMS
function forms(){
	//SELECT
	if($('select').length>0){
		function selectscrolloptions(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#9B4E7C",
				cursorwidth: "12px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "10px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
			};
			return opt;
		}

		function select(){
			$.each($('select'), function(index, val) {
					var ind=index;
				$(this).hide();
				if($(this).parent('.select-block').length==0){
					$(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
				}else{
					$(this).parent('.select-block').find('.select').remove();
				}
					let cl='';
					var milti='';
					var check='';
					var sblock=$(this).parent('.select-block');
					var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
				if($(this).attr('multiple')=='multiple'){
					milti='multiple';
					check='check';
				}
				$.each($(this).find('option'), function(index, val) {
					if($(this).attr('class')!='' && $(this).attr('class')!=null){
						let cl=$(this).attr('class');
					}
					if($(this).attr('value')!=''){
						if($(this).attr('data-icon')!='' && $(this).attr('data-icon')!=null){
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'><div><img src="+$(this).attr('data-icon')+" alt=\"\"></div><div>"+$(this).html()+"</div></div>";
						}else{
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'>"+$(this).html()+"</div>";
						}
					}else if($(this).parent().attr('data-label')=='on'){
						if(sblock.find('.select__label').length==0){
							sblock.prepend('<div class="select__label">'+$(this).html()+'</div>');
						}
					}
				});
					soptions=soptions+"</div></div></div>";
				if($(this).attr('data-type')=='search'){
						sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
												"<div class='select-title'>"+
													"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
													"<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' />"+
												"</div>"+
												soptions+
											"</div>");
						$('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
							parentSectionClass:'select-options_'+ind,
							parentLookupClass:'select-options__value_'+ind,
							childBlockClass:'select-options__value_'+ind
						});
				}else if($(this).attr('data-icon')=='true'){
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select icon "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr('data-icon')+" alt=\"\"></div><div>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+
											"</div>"+
											soptions+
										"</div>");
				}else{
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
											"</div>"+
											soptions+
										"</div>");
				}
				if($(this).find('option[selected="selected"]').val()!=''){
					sblock.find('.select').addClass('focus');
				}

				if(sblock.find('.select-options__value').length==1){
					sblock.find('.select').addClass('one');
				}

				if($(this).attr('data-req')=='on'){
					$(this).addClass('req');
				}
				$(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
			});
		}
			select();

		$('body').on('keyup','input.select-title__value',function() {
			$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
			$(this).parents('.select').addClass('active');
			$(this).parents('.select').find('.select-options').slideDown(50,function() {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});
			$(this).parents('.select-block').find('select').val('');
		});
		$('body').on('click','.select',function(){
			if(!$(this).hasClass('disabled') && !$(this).hasClass('one')){
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50,function() {
					$(this).find(".select-options-scroll").getNiceScroll().resize();
				});

				//	var input=$(this).parent().find('select');
				//removeError(input);

				if($(this).attr('data-type')=='search'){
					if(!$(this).hasClass('active')){
						searchselectreset();
					}
					$(this).find('.select-options__value').show();
				}


				var cl=$.trim($(this).find('.select-title__value').attr('class').replace('select-title__value',''));
					$(this).find('.select-options__value').show().removeClass('hide').removeClass('last');
				if(cl!=''){
					$(this).find('.select-options__value.'+cl).hide().addClass('hide');
				}
				if($(this).find('.select-options__value').last().hasClass('hide')){
					$(this).find('.select-options__value').last().prev().addClass('last');
				}
			}
		});
		$('body').on('click','.select-options__value',function() {
			if($(this).parents('.select').hasClass('multiple')){
				if($(this).hasClass('active')){
					if($(this).parents('.select').find('.select-title__value span').length>0){
						$(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
					}else{
						$(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
						$(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
					$(this).parents('.select').addClass('focus');
				}else{
					$(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
					if($(this).parents('.select').find('.select-title__value span').length==0){
						$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
						$(this).parents('.select').removeClass('focus');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
				}
				return false;
			}


			if($(this).parents('.select').attr('data-type')=='search'){
				$(this).parents('.select').find('.select-title__value').val($(this).html());
				$(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
			}else{
				$(this).parents('.select').find('.select-title__value').attr('class','select-title__value value_'+$(this).data('value'));
				$(this).parents('.select').find('.select-title__value').html($(this).html());

			}

				$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
			if($.trim($(this).data('value'))!=''){
				$(this).parents('.select-block').find('select').val($(this).data('value'));
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
			}else{
				$(this).parents('.select-block').find('select').val($(this).html());
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
			}


			if($(this).parents('.select-block').find('select').val()!=''){
				$(this).parents('.select-block').find('.select').addClass('focus');
			}else{
				$(this).parents('.select-block').find('.select').removeClass('focus');

				$(this).parents('.select-block').find('.select').removeClass('err');
				$(this).parents('.select-block').parent().removeClass('err');
				$(this).parents('.select-block').removeClass('err').find('.form__error').remove();
			}
			if(!$(this).parents('.select').data('tags')!=""){
				if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
					$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
				}
			}
			$(this).parents('.select-block').find('select').change();

			if($(this).parents('.select-block').find('select').data('update')=='on'){
				select();
			}
		});
		$(document).on('click touchstart',function(e) {
			if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			};
		});
		$(document).on('keydown',function(e) {
			if(e.which==27){
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			}
		});
	}
	//FIELDS
	$('input,textarea').focus(function(){
		if($(this).val() == $(this).attr('data-value')){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','password');
			};
			$(this).val('');
		};
		removeError($(this));
	});
	$('input[data-value], textarea[data-value]').each(function() {
		if (this.value == '' || this.value == $(this).attr('data-value')) {
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}else{
				this.value = $(this).attr('data-value');
			}
		}
		if(this.value!=$(this).attr('data-value') && this.value!=''){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}

		$(this).click(function() {
			if (this.value == $(this).attr('data-value')) {
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','password');
				};
				this.value = '';
			};
		});
		$(this).blur(function() {
			if (this.value == '') {
				if(!$(this).hasClass('l')){
					this.value = $(this).attr('data-value');
				}
					$(this).removeClass('focus');
					$(this).parent().removeClass('focus');
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','text');
				};
			};
			if($(this).hasClass('vn')){
				formValidate($(this));
			}
		});
	});
	$('.form-input__viewpass').click(function(event) {
		if($(this).hasClass('active')){
			$(this).parent().find('input').attr('type','password');
		}else{
			$(this).parent().find('input').attr('type','text');
		}
		$(this).toggleClass('active');
	});
*/
	//$('textarea').autogrow({vertical: true, horizontal: false});
	

	//MASKS//
	//'+7(999) 999 9999'
	//'+38(999) 999 9999'
	//'+375(99)999-99-99'
	//'a{3,1000}' только буквы минимум 3
	//'9{3,1000}' только цифры минимум 3
/*	$.each($('input.inp-pop-ph'), function(index, val) {
		$(this).attr('tel');
		$(this).focus(function(){
			$(this).inputmask('+7(999) 999 9999',{clearIncomplete: true,clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));}
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.inp-pop-ph').focusout(function(event) {
		maskclear($(this));
	});
	$.each($('input.inp-pop-ph'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('9{1,1000}',{clearIncomplete: true,placeholder:"",clearMaskOnLostFocus: true,"onincomplete": function(){maskclear($(this));}});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.inp-pop-ph').focusout(function(event) {
		maskclear($(this));
	});*/
	/*
	$.each($('input.date'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('dd.mm.yyyy',{
				clearIncomplete: true,
				placeholder:"_",
				//yearrange:{'minyear':n-40,'maxyear':n},
				clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));},
				"oncomplete": function(){
					$(this).datepicker("setDate",$(this).val());
				}
			});
			$(this).addClass('focus');
			$(this).parents('.form-column').addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
		$(this).focusout(function(event) {
			maskclear($(this));
		});
		$(this).datepicker({
			dateFormat : "dd.mm.yy",
			//yearRange: "1915:2015",
			//defaultDate: '-18Y', 
			//inDate: '-85Y', 
			//maxDate: "0Y",
			beforeShow :function(event){
				$('.ui-datepicker').show();
			},
			onSelect:function(event){
				if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
					$(this).addClass('focus');
					$(this).parent().addClass('focus');
					if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
						$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
					}
				}
			}
		});
	});
	*/

	//CHECK
	$.each($('.check'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$('body').off('click','.check',function(event){});
	$('body').on('click','.check',function(event){
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
					$(this).toggleClass('active');
				if($(this).hasClass('active')){
					$(this).find('input').prop('checked', true);
				}else{
					$(this).find('input').prop('checked', false);
				}
			}
		}
	});

	//OPTION
	$.each($('.option.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if($(this).hasClass('active') && $(this).hasClass('order') ){
					$(this).toggleClass('orderactive');
				}
					$(this).parents('.options').find('.option').removeClass('active');
					$(this).toggleClass('active');
					$(this).children('input').prop('checked', true);
			}
		}
	});
	//RATING
	$('.rating.edit .star').hover(function() {
			var block=$(this).parents('.rating');
		block.find('.rating__activeline').css({width:'0%'});
			var ind=$(this).index()+1;
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	},function() {
			var block=$(this).parents('.rating');
		block.find('.star').removeClass('active');
			var ind=block.find('input').val();
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	});
	$('.rating.edit .star').click(function(event) {
			var block=$(this).parents('.rating');
			var re=$(this).index()+1;
			block.find('input').val(re);
			var linew=re/block.find('.star').length*100;
		setrating(block,linew);
	});
	$.each($('.rating'), function(index, val) {
			var ind=$(this).find('input').val();
			var linew=ind/$(this).parent().find('.star').length*100;
		setrating($(this),linew);
	});
	function setrating(th,val) {
		th.find('.rating__activeline').css({width:val+'%'});
	}
	//QUANTITY
	/*$('.quantity__btn').click(function(event) {
			var n=parseInt($(this).parent().find('.quantity__input').val());
		if($(this).hasClass('dwn')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
			$(this).parent().find('.quantity__input').val(n);
		return false;
	});*/
	//RANGE
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0]+'</span>');
				$(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1]+'</span>');
			},
			change: function( event, ui ){
				if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
					$('#range').addClass('act');
				}else{
					$('#range').removeClass('act');
				}
			}
		});
		$('#rangefrom').val($( "#range" ).slider( "values", 0 ));
		$('#rangeto').val($( "#range" ).slider( "values", 1 ));

		$("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "option","min")+'</span>');
		$("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "option","max")+'</span>');
		
		$( "#rangefrom" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",0,$(this).val());
		});
		$( "#rangeto" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",1,$(this).val());
		});
		$("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
		$("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
	}
	//ADDFILES
/*	$('.form-addfile__input').change(function(e){
		if($(this).val()!=''){
					var ts=$(this);
				ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
			$.each(e.target.files, function(index, val) {
				if(ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("'+e.target.files[index].name+'")').length==0){
					ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>'+e.target.files[index].name+'</li>');
				}
			});
		}
	});
}
forms();*/

function digi(str){
	var r=str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	return r;
}

//VALIDATE FORMS
$('form button[type=submit]').click(function(){
		var er=0;
		var form=$(this).parents('form');
		var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		er+=formValidate($(this));
	});
	if(er==0){
		removeFormError(form);
		/*
			var messagehtml='';
		if(form.hasClass('editprofile')){
			var messagehtml='';
		}
		formLoad();
		*/

		//ОПТРАВКА ФОРМЫ
		/*
		function showResponse(html){
			if(!form.hasClass('nomessage')){
				showMessage(messagehtml);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		}
		var options={
			success:showResponse
		};
			form.ajaxForm(options);
		

		setTimeout(function(){
			if(!form.hasClass('nomessage')){
				//showMessage(messagehtml);
				showMessageByClass(ms);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		},0);

		return false;
		*/
		if(ms!=null && ms!=''){
			showMessageByClass(ms);
			return false;
		}
	}else{
		return false;
	}
});
function formValidate(input){
		var er=0;
		var form=input.parents('form');
	if(input.attr('name')=='email' || input.hasClass('email')){
		if(input.val()!=input.attr('data-value')){
			var em=input.val().replace(" ","");
			input.val(em);
		}
		if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())) || input.val()==input.attr('data-value')){
				er++;
			addError(input);
		}else{
			removeError(input);
		}
	}else{
		if(input.val()=='' || input.val()==input.attr('data-value')){
			er++;
			addError(input);
		}else{
			removeError(input);
		}
	}
	if(input.attr('type')=='checkbox'){
		if(input.prop('checked') == true){
			input.removeClass('err').parent().removeClass('err');
		}else{
			er++;
			input.addClass('err').parent().addClass('err');
		}
	}
	if(input.hasClass('name')){
		if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
				er++;
			addError(input);
		}
	}
	if(input.hasClass('pass-2')){
		if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
			addError(input);
		}else{
			removeError(input);
		}
	}
		return er;
}
function formLoad(){
	$('.popup').hide();
	$('.popup-message-body').hide();
	$('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
	$('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms){
	$('.popup').hide();
	popupOpen('message.'+ms,'');
}
function showMessage(html){
	$('.popup-loading').remove();
	$('.popup-message-body').show().html(html);
}
function clearForm(form){
	$.each(form.find('.input'), function(index, val) {
			$(this).removeClass('focus').val($(this).data('value'));
			$(this).parent().removeClass('focus');
		if($(this).hasClass('phone')){
			maskclear($(this));
		}
	});
}
function addError(input){
		input.addClass('err');
		input.parent().addClass('err');
		input.parent().find('.form__error').remove();
	if(input.hasClass('email')){
			var error='';
		if(input.val()=='' || input.val()==input.attr('data-value')){
			error=input.data('error');
		}else{
			error=input.data('error');
		}
		if(error!=null){
			input.parent().append('<div class="form__error">'+error+'</div>');
		}
	}else{
		if(input.data('error')!=null && input.parent().find('.form__error').length==0){
			input.parent().append('<div class="form__error">'+input.data('error')+'</div>');
		}
	}
	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().addClass('err');
		input.parents('.select-block').find('.select').addClass('err');
	}
}
function addErrorByName(form,input__name,error_text){
		var input=form.find('[name="'+input__name+'"]');
	input.attr('data-error',error_text);
	addError(input);
}
function addFormError(form, error_text){
	form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form){
	form.find('.form__generalerror').hide().html('');
}
function removeError(input){
	input.removeClass('err');
	input.parent().removeClass('err');
	input.parent().find('.form__error').remove();

	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().removeClass('err');
		input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
		//input.parents('.select-block').find('.select-options').hide();
	}
}
function removeFormErrors(form){
	form.find('.err').removeClass('err');
	form.find('.form__error').remove();
}
function maskclear(n){
	if(n.val()==""){
		n.inputmask('remove');
		if(!n.hasClass('l')){
			n.val(n.attr('data-value'));
		}
		n.removeClass('focus');
		n.parent().removeClass('focus');
	}
}
function searchselectreset() {
	$.each($('.select[data-type="search"]'), function(index, val){
			var block=$(this).parent();
			var select=$(this).parent().find('select');
		if($(this).find('.select-options__value:visible').length==1){
			$(this).addClass('focus');
			$(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
			$(this).find('.select-title__value').val($('.select-options__value:visible').html());
			$(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
		}else if(select.val()==''){
			$(this).removeClass('focus');
			block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
			block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
		}
	});
}
"use strict"

var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_mobile');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

//======================================================================== Close-Open
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const burgerBody = document.querySelector('.header');
const footerBody = document.querySelector('.widget-footer');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		burgerBody.classList.toggle('_active');
		footerBody.classList.toggle('_active');
	});
}

const iconAside = document.querySelector('.aside__close');
const asideItem = document.querySelector('.aside__item');
const asideIcon = document.querySelector('.aside__icon');
if (iconMenu) {
	iconAside.addEventListener("click", function (e) {
		iconAside.classList.toggle('_close');
		asideItem.classList.toggle('_close');
		asideIcon.classList.toggle('_close');
	});
}

const iconFooter = document.querySelector('.footer__icon');
const bodyFooter = document.querySelector('.footer__body');
const footer = document.querySelector('.footer');
if (iconMenu) {
	iconFooter.addEventListener("click", function (e) {
		iconFooter.classList.toggle('_active');
		bodyFooter.classList.toggle('_active');
		footer.classList.toggle('_active');
	});
}

//======================================================================== Прокрутка при клике
/*
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__container').offsetHeight;
			
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
*/
/*===============================================================================================*/

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            $(".exit-popup").fadeIn("fast");    
            // записываем cookie на 1 день, с которой мы не показываем окно
            var date = new Date;
            date.setDate(date.getDate() + 1);    
            document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();       
        }    
    });
    $(document).click(function(e) {
        if (($(".exit-popup").is(':visible')) && (!$(e.target).closest(".exit-popup .exit-popup__content").length)) {
            $(".exit-popup").remove();
        }
    });  
}


/*$(function() {
  $(".callback-end__input").mask("+7(000)000-00-00", {
    clearIfNotMatch: true
  });
});*/
$(function() {
  $(".contact-info-master__input_tel").mask("+7(000)000-00-00", {
    clearIfNotMatch: true
  });
});
//для попапа
$("input[name='qw8']").on('change input', function () {
	if ($(this).hasClass('ch-11')) {
		$('.inp-pop-ph').attr('placeholder', 'Ваш номер телефона');
		$('.pop-eml').fadeIn();
	} else if ($(this).hasClass('ch-12')) {
		$('.inp-pop-ph').attr('placeholder', 'Ваш телефон в Telegram');
		$('.pop-eml').hide();
	} else if ($(this).hasClass('ch-13')) {
		$('.inp-pop-ph').attr('placeholder', 'Ваш телефон в Viber');
		$('.pop-eml').hide();
	} else if ($(this).hasClass('ch-14')) {
		$('.inp-pop-ph').attr('placeholder', 'Ваш телефон в WhatsApp');
		$('.pop-eml').hide();
	} else if ($(this).hasClass('ch-15')) {
		$('.inp-pop-ph').attr('placeholder', 'Ваш телефон в WhatsApp');
		$('.pop-eml').hide();
	}
});

/*const form = () => {
$('.callback-end__btn').on('click', e => {
    e.preventDefault();

    onclick="document.location='thanks.html'";
    if ($('#large_form input[type=tel]').val() !== '') {
      let phone = $('#large_form input[type=tel]').val();
      localStorage.setItem('tel', `${phone}`);
      window.location.href = "/thanks.html";
      onclick="document.location='thanks.html'";
      console.log(1);
    } else {
      $('#large_form .callback-end__warning').removeClass('hide');
      console.log(2);
    }
  }); // add phone in inputs thanks.html

  try {
    document.querySelector('input.contact-info-master__input_tel').value = localStorage.getItem('tel');
    //document.querySelector('input.').value = localStorage.getItem('tel');
  } catch (e) {}
};
*/

//popup
const popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0){
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
	for (let index = 0; index < popupCloseIcon.length; index++){
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose (popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click',function(e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock){
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if(lockPadding.length > 0){
		for (let index = 0; index < lockPadding.length; index++){
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');


	unlock = false;
	setTimeout(function(){
		unlock = true;
	}, timeout);
}

function bodyUnLock(){
	setTimeout(function(){
		if(lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}
/*$('input[type="radio"]').change(function() {
		var tmp=$(this).attr('name');
		$('input[name="'+tmp+'"]').parent("label").removeClass("answer__item-yes_checked");
		$(this).parent("label").toggleClass("answer__item-yes_checked", this.selected);
});*/

//========================================

/*if (location.hash) {
	var hsh = location.hash.replace('#', '');
	if ($('.popup-' + hsh).length > 0) {
		popupOpen(hsh);
	} else if ($('div.' + hsh).length > 0) {
		$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
	}
}
$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
	var act = "touchstart";
}*/

//ZOOM
/*if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}*/


/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/


//POPUP
/*$('.popup-link').click(function (event) {
	var pl = $(this).attr('href').replace('#', '');
	var v = $(this).data('vid');
	popupOpen(pl, v);
	return false;
});
function popupOpen(pl, v) {
	$('.popup').removeClass('active').hide();
	if (!$('.menu__body').hasClass('active')) {
		//$('body').data('scroll',$(window).scrollTop());
	}
	if (!isMobile.any()) {
		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
		$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
	} else {
		setTimeout(function () {
			$('body').addClass('lock');
		}, 300);
	}
	history.pushState('', '', '#' + pl);
	if (v != '' && v != null) {
		$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	}
	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

	if ($('.popup-' + pl).find('.slick-slider').length > 0) {
		$('.popup-' + pl).find('.slick-slider').slick('setPosition');
	}
}
function openPopupById(popup_id) {
	$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose() {
	$('.popup').removeClass('active').fadeOut(300);
	if (!$('.menu__body').hasClass('active')) {
		if (!isMobile.any()) {
			setTimeout(function () {
				$('body').css({ paddingRight: 0 });
				$('.pdb').css({ paddingRight: 0 });
			}, 200);
			setTimeout(function () {
				$('body').removeClass('lock');
				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
			}, 200);
		} else {
			$('body').removeClass('lock');
			//$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	}
	$('.popup-video__value').html('');

	history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function (event) {
	popupClose();
	return false;
});
$('.popup').click(function (e) {
	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
$(document).on('keydown', function (e) {
	if (e.which == 27) {
		popupClose();
	}
});*/

/*$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});

function ibg (){
	$.each($('.ibg'), function(index, val){
		if($(this).find('img').length > 0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();*/
/*function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();*/


//Клик вне области
/*$(document).on('click touchstart', function (e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});*/

//UP
/*$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});

$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});
$.each($('.spoller.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}

	if ($(this).parents('.one').length > 0) {
		$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
		$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
	}

	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});
*/

/*
function scrolloptions() {
	var scs = 100;
	var mss = 50;
	var bns = false;
	if (isMobile.any()) {
		scs = 10;
		mss = 1;
		bns = true;
	}
	var opt = {
		cursorcolor: "#fff",
		cursorwidth: "4px",
		background: "",
		autohidemode: true,
		cursoropacitymax: 0.4,
		bouncescroll: bns,
		cursorborderradius: "0px",
		scrollspeed: scs,
		mousescrollstep: mss,
		directionlockdeadzone: 0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
function scroll() {
	$('.scroll-body').niceScroll('.scroll-list', scrolloptions());
}
if (navigator.appVersion.indexOf("Mac") != -1) {
} else {
	if ($('.scroll-body').length > 0) { scroll(); }
}
*/
/*
function scrollwhouse(){
		var scs=100;
		var mss=50;
		var bns=false;
	if(isMobile.any()){
		scs=10;
		mss=1;
		bns=true;
	}
	var opt={
		cursorcolor:"#afafaf",
		cursorwidth: "5px",
		background: "",
		autohidemode:false,
		railalign: 'left',
		cursoropacitymax: 1,
		bouncescroll:bns,
		cursorborderradius: "0px",
		scrollspeed:scs,
		mousescrollstep:mss,
		directionlockdeadzone:0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
$('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
$('.whouse-content-body').scroll(function(event) {
		var s=$(this).scrollTop();
		var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
		var p=s/r*100;
	$('.whouse-content__shadow').css({opacity:1-1/100*p});
});
*/
/*

if ($('.t,.tip').length > 0) {
	tip();
}
function tip() {
	$('.t,.tip').webuiPopover({
		placement: 'top',
		trigger: 'hover',
		backdrop: false,
		//selector:true,
		animation: 'fade',
		dismissible: true,
		padding: false,
		//hideEmpty: true
		onShow: function ($element) { },
		onHide: function ($element) { },
	}).on('show.webui.popover hide.webui.popover', function (e) {
		$(this).toggleClass('active');
	});
}


*/
//=================================================================================
/*var scene_1 = document.getElementById('scene-1');
var parallax1 = new Parallax(scene_1);

var scene_2 = document.getElementById('special-scene');
var parallax2 = new Parallax(scene_2);
var scene_3 = document.getElementById('special-scene2');
var parallax3 = new Parallax(scene_3);
var scene_4 = document.getElementById('special-scene3');
var parallax4 = new Parallax(scene_4);

var scene_5 = document.getElementById('block-img');
var parallax5 = new Parallax(scene_5);

var scene_6 = document.getElementById('work-scene');
var parallax6 = new Parallax(scene_6);

(function () {
		var $frame = $('#cycleitems');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 700,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: 'items',
			cycleInterval: 2500,
			pauseOnHover: 1,

		});

	}());


$('.story-slider').slick({
	//dots: true,
	infinite: true,
	centerMode: true,
	centerPadding: '33.333%',
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 600,
	swipe: false,
	focusOnSelect: true,
	prevArrow: '<button class="arrows slidePrev"><svg  viewBox="0 0 451.846 451.847"><use xlink:href="#arrowSlider"/></svg></button>',
	nextArrow: '<button class="arrows slideNext"><?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve" class=""><g id="arrowSlider"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></g></g> </svg></button>',
responsive: [{

      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        swipe: true,
        centerMode: false
      }

    }]
});

var len = $('.story-slider').slick('getSlick').slideCount;
var numAll = len;
if(numAll < 10){
      numAll = "0" + numAll;
    }else {
      numAll = numAll;
    }
$('.slider-all-num').text('/ ' + numAll);

var labelSlider = 1 ;
$('.story-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var number = nextSlide + 1;
    if(nextSlide < 10){
      number = "0" + number;
    }else {
      number = number;
    }
    $('.slider-firs-num').text(number);
    if(labelSlider !== nextSlide + 1){
    	$('.video-block').each(function(index, el) {
	    	if($(this).find('iframe').length > 0){
	    		$(this).find('iframe').remove();
	    		$(this).removeClass('dark');
	    		$(this).find('.play').show();
	    		console.log('123');
	    	}
	    });
    }
    

    labelSlider = nextSlide + 1;
});

// console.log($('.story-slider').slick('getSlick'));


var idVideo;

function playYouModal() {
    $(".modal-video-body").append('<iframe></iframe>');
    var iframe = $(".modal-video-body").find('iframe');

    
    $('html').addClass('stop');
    $('#video-modal').fadeIn();
    if ($(this).data('play') != null) {
        idVideo = $(this).data("play");
    }
    var iframe_url = "https://www.youtube.com/embed/" + idVideo + "?enablejsapi=1&autoplay=1&autohide=1&rel=0";

    if ($(this).attr("data-params")) iframe_url += '&' + $(this).attr("data-params");
    
    iframe.attr({
            src: iframe_url,
            frameborder: '0',
            allowfullscreen: 'allowfullscreen'
        })
        .css({
            width: '100%',
            height: '100%'
        });
    
}



// клики
$('.opportunity__video-play').on('click', playYouModal);
$('.play-statistic').on('click', playYou);
$('.modal-play').on('click', playYou);

var labelVideo = false;
function playYou() {
    $(this).parents(".video-block").append('<iframe></iframe>');
    $(this).parents(".video-block").addClass('dark');
    var iframe = $(this).parents(".video-block").find('iframe');

    if ($(this).data('play') != null) {
        idVideo = $(this).data("play");
    }
    var iframe_url = "https://www.youtube.com/embed/" + idVideo + "?enablejsapi=1&autoplay=1&autohide=1&rel=0";

    if ($(this).attr("data-params")) iframe_url += '&' + $(this).attr("data-params");
    
    iframe.attr({
            src: iframe_url,
            frameborder: '0',
            allowfullscreen: 'allowfullscreen'
        })
        .css({
            width: '100%',
            height: '100%'
        });
    
    $(this).hide();
}


$('.close').on('click', function(event) {
	event.preventDefault();
	if($(this).hasClass('close-video')){
		$('.modal-video-body iframe').remove();
	}if($(this).hasClass('close-nav')){
		$(".nav").removeClass('active');
	}
	$(".overlay").fadeOut();
	$("html").removeClass('stop');
});

 $('.overlay').not('#modal-page, #test').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
    }
});

$('.consalt-1').on('click', function(event) {
	event.preventDefault();
	$("#recall-modal").fadeIn();
	$("html").addClass('stop');
});
$('.burger__wrap').on('click', function(event) {
	event.preventDefault();
	$(".nav").addClass('active');
});


function modals( visa, test){
	$(visa).on('click', function(event) {
		event.preventDefault();
		$(".overlay").fadeOut();
		$("#visa-modal").fadeIn();
		$("html").addClass('stop');
	});

	$(test).on('click', function(event) {
		event.preventDefault();
		$(".overlay").fadeOut();
		$("#test").fadeIn();
		$("html").addClass('stop');

		var msg = '';
		var action = $(this).attr('href');

		$.ajax({
		    type: "GET",
		    url: action,
		    data: msg,
		    success: function(data) {
		      $('.modal-test').html(data);
		      isTest();
		      $(".clothes-multi").chosen({
		          disable_search_threshold: 10,
		          no_results_text: "Не найдено: ",
		          allow_single_deselect: true,
		          placeholder_text_multiple: "Языки не выбраны"
		        });
		      ajaxfunct("#testStart");
		      $("#test").find(".inp-phone").mask("+3750-(99)-999-99-99");
		    },
		});
	});
}

modals('.visaOpen' , ".testOpen");

$(".directions-link").not('.visa-scroll').on('click', function(event) {
	event.preventDefault();
	$(".overlay").hide();
	$("#modal-page").fadeIn();
	$("html").addClass('stop');

	var msg = '';
	var action = $(this).attr('href');

	$.ajax({
	    type: "GET",
	    url: action,
	    data: msg,
	    success: function(data) {
	      $('.modal-page-content').html(data);
	      modals( ".visaOpenModal", ".testOpenModal");
	      ajaxfunct("#modal-page form");
	      $("#modal-page").find(".clothes").chosen({disable_search_threshold: 10});
	    },
	});

});




$(document).ready(function($) {
  $(".title").not('.title-first').each(anime);
  $(".title-descr").not('.subtitle-first').each(anime);
});
function anime(){
  var offsetTop = $(this).offset().top - $(window).height();
  var thisTitle = $(this);
  $(window).scroll(function(event) {
    if($(document).scrollTop() > offsetTop ){
      thisTitle.addClass('fade_in');
    }
  });
}

$(".nav a").on("click", function (event) {
    if($(this).parents(".nav").hasClass('active')){
        $(".nav").removeClass("active");
        // $('html').removeClass('stop');
    }else{}
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});



$(".visa-scroll").on("click", function (event) {
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});

$('[data-fancybox="gallery"]').fancybox({
  buttons : [ 
    'slideShow',
    'zoom',
    'fullScreen',
    'close'
  ],
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionEffect: "circular",
  transitionDuration: 420,
 
});

$(".clothes").chosen({disable_search_threshold: 10});


// inp-phone
$(".inp-phone").mask("+7-(999)-999-99-99");

if($(window).width() > 991){
	var offsetTop = $(".nav").offset().top ;
	var thisTitle = $(".nav");
	$(window).scroll(function(event) {
	  if($(window).scrollTop() > offsetTop ){
	    
	    if(!$(".nav").hasClass('active')){
			thisTitle.addClass('active');
	    }
	  }else if($(window).scrollTop() < (offsetTop + 10) ){
	  	thisTitle.removeClass('active');
	  }
	});
}*/

});
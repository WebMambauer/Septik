
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
const DATA = [
	{
		question:'Сколько человек будет проживать и пользоваться канализацией?',
		lefttext: 'По количеству проживающих определяем <span class="fw7">суточный объём стоков.</span>',
		prosent: '16',
		number: '24',
		check: 'yes',
		start: 'септика',
		plus: '',
		minus: '',
		answers: [
			{
				id: '1',
				type: 'radio',
				value: 'От 1 до 3 человек',
				stylevalue: 'От 1 до 3 человек',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 1',
				offermore: '300',
				star: '',
				price:'Цена снижена <br> на-30%',
				hit:'',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'img/quiz/quiz_prosent.webp',
				hiticon:'',
				watericon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'flex',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
			{
				id: '2',
				type: 'radio',
				value: '4 - 6 человек',
				stylevalue: '4 - 6 человек',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 2',
				offermore: '400',
				star: '',
				price:'',
				hit:'Хит продаж <br>2021 года',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'img/quiz/quiz_hit.webp',
				watericon:'',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'flex',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
			{
				id: '3',
				type: 'radio',
				value: '7 - 11 человек',
				stylevalue: '7 - 11 человек',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 3',
				offermore: '500',
				star: '',
				price:'',
				hit:'',
				water:'Идеально подходит <br>при высоком уровне <br> грунтовых вод',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'img/quiz/quiz_water.webp',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'flex',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
			{
				id: '4',
				type: 'radio',
				value: 'Больше 12',
				stylevalue: 'Больше 12',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 4',
				offermore: '600',
				star: '',
				price:'',
				hit:'',
				water:'',
				sun:'Идеально подходит <br>для сезонного <br>проживания',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'',
				sunicon:'img/quiz/quiz_sun.webp',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'flex',
				tool:'',
				tooltip:''
			},
		]
	},
	{
		question:'Укажите количество сантехнических точек?',
		lefttext: 'По количеству проживающих определяем <span class="fw7">суточный объём стоков.</span>',
		prosent: '33',
		number: '29',
		check: 'yes',
		start: '',
		plus: '+',
		minus: '-',
		answers: [
			{
				id: '1',
				type: 'number',
				stylevalue: 'Ванна, шт',
				value: '0',
				imgsrc: 'img/quiz/quiz_bath.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 1',
				offermore: '150',
				star: '',
				price:'Цена снижена <br>на-30%',
				hit:'',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'img/quiz/quiz_prosent.webp',
				hiticon:'',
				watericon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'flex',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
			{
				id: '2',
				type: 'number',
				stylevalue: 'Душ, шт',
				value: '0',
				imgsrc: 'img/quiz/quiz_shower.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 2',
				offermore: '200',
				star: '',
				price:'',
				hit:'Хит продаж <br>2021 года',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'img/quiz/quiz_hit.webp',
				watericon:'',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'flex',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
			{
				id: '3',
				type: 'number',
				stylevalue: 'Раковина, шт',
				value: '0',
				imgsrc: 'img/quiz/quiz_sink.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 3',
				offermore: '250',
				star: '',
				price:'',
				hit:'',
				water:'Идеально подходит <br>при высоком уровне <br> грунтовых вод',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'img/quiz/quiz_water.webp',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'flex',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
			{
				id: '4',
				type: 'number',
				stylevalue: 'Посудомойка, шт',
				value: '0',
				imgsrc: 'img/quiz/quiz_dishwasher.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 4',
				offermore: '300',
				star: '',
				price:'',
				hit:'',
				water:'',
				sun:'Идеально подходит <br>для сезонного <br>проживания',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'',
				sunicon:'img/quiz/quiz_sun.webp',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'flex',
				tool:'',
				tooltip:''
			},
			{
				id: '5',
				type: 'number',
				stylevalue: 'Унитаз, шт',
				value: '0',
				imgsrc: 'img/quiz/quiz_toilet.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 5',
				offermore: '350',
				star: '',
				price:'',
				hit:'Хит продаж <br>2021 года',
				water:'',
				sun:'Идеально подходит <br>для сезонного <br>проживания',
				staricon: '',
				priceicon:'',
				hiticon:'img/quiz/quiz_hit.webp',
				watericon:'',
				sunicon:'img/quiz/quiz_sun.webp',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'flex',
				waterdisplay:'none',
				sundisplay:'flex',
				tool:'',
				tooltip:''
			},
			{
				id: '6',
				type: 'number',
				stylevalue: 'Стир. машина, шт',
				value: '0',
				imgsrc: 'img/quiz/quiz_washer.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 6',
				offermore: '400',
				star: '',
				price:'Цена снижена <br>на-30%',
				hit:'',
				water:'Идеально подходит <br>при высоком уровне <br> грунтовых вод',
				sun:'',
				staricon: '',
				priceicon:'img/quiz/quiz_prosent.webp',
				hiticon:'',
				watericon:'img/quiz/quiz_water.webp',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'flex',
				hitdisplay:'none',
				waterdisplay:'flex',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
		]
	},
	{
		question:'Какой уровень грунтовых вод на вашем участке?',
		lefttext: 'Определяем <span class="fw7">риск выдавливания</span> станции из почвы.',
		prosent: '50',
		number: '29',
		check: 'yes',
		start: '',
		plus: '',
		minus: '',
		answers: [
			{
				id: '1',
				type: 'radio',
				value: 'Низкий. Ниже 1,5 метра',
				stylevalue: 'Низкий. Ниже 1,5 метра',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 1',
				offermore: '75',
				star: '',
				price:'Цена снижена <br>на-30%',
				hit:'',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'img/quiz/quiz_prosent.webp',
				hiticon:'',
				watericon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'flex',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'?',
				tooltip:'При низком уровне грунтовых вод, подбирается стандартная станция.',
			},
			{
				id: '2',
				type: 'radio',
				value: 'Высокий. Выше 1,5 метра',
				stylevalue: 'Высокий. Выше 1,5 метра',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 2',
				offermore: '100',
				star: '',
				price:'',
				hit:'Хит продаж <br>2021 года',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'img/quiz/quiz_hit.webp',
				watericon:'',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'flex',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'?',
				tooltip:'Для участков с высоким уровнем грунтовых вод идеально подходят станции с большей площадью якорения. Расширенная площадь дна удерживает станцию на месте и не даёт грунтовым водам выдавить станцию из почвы.',
			},
			{
				id: '3',
				type: 'radio',
				value: 'Не знаю',
				stylevalue: 'Не знаю',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 3',
				offermore: '125',
				star: '',
				price:'',
				hit:'',
				water:'Идеально подходит <br>при высоком уровне <br> грунтовых вод',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'img/quiz/quiz_water.webp',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'flex',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
		]
	},
	{
		question:'Планируете использовать канализацию круглогодично?',
		lefttext: 'Выясняем <span class="fw7">потребуется ли консервация</span> станции на зиму.',
		prosent: '66',
		number: '29',
		check: 'yes',
		start: '',
		plus: '',
		minus: '',
		answers: [
			{
				id: '1',
				type: 'radio',
				value: 'Проживаю круглый год',
				stylevalue: 'Проживаю круглый год',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 1',
				offermore: '50',
				star: '',
				price:'Цена снижена <br>на-30%',
				hit:'',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'img/quiz/quiz_prosent.webp',
				hiticon:'',
				watericon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'flex',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'',
				tooltip:''
			},
			{
				id: '2',
				type: 'radio',
				value: 'Проживаю только летом. Зимой не пользуюсь канализацией',
				stylevalue: 'Проживаю только летом. Зимой не пользуюсь канализацией',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 2',
				offermore: '40',
				star: '',
				price:'',
				hit:'Хит продаж <br>2021 года',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'img/quiz/quiz_hit.webp',
				watericon:'',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'flex',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'',
				tooltip:'',
			},
			{
				id: '3',
				type: 'radio',
				value: 'Проживаю летом. Зимой пользуюсь канализацией один раз в 2 недели или чаще',
				stylevalue: 'Проживаю летом. Зимой пользуюсь канализацией один раз в 2 недели или чаще',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 3',
				offermore: '30',
				star: '',
				price:'',
				hit:'',
				water:'Идеально подходит <br>при высоком уровне <br> грунтовых вод',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'img/quiz/quiz_water.webp',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'flex',
				sundisplay:'none',
				tool:'',
				tooltip:'',
			},
			{
				id: '4',
				type: 'radio',
				value: 'Пока не решил',
				stylevalue: 'Пока не решил',
				imgsrc: '',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 4',
				offermore: '20',
				star: '',
				price:'',
				hit:'',
				water:'',
				sun:'Идеально подходит <br>для сезонного <br>проживания',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'',
				sunicon:'img/quiz/quiz_sun.webp',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'flex',
				tool:'',
				tooltip:'',
			},
		]
	},
	{
		question:'Куда будем отводить переработанные стоки?',
		lefttext: 'Уточняем, <span class="fw7">какой необходим отвод стоков</span> - принудительный или самотёчный',
		prosent: '83',
		number: '29',
		check: 'yes',
		start: '',
		plus: '',
		minus: '',
		answers: [
			{
				id: '1',
				type: 'radio',
				value: 'На грунт',
				stylevalue: 'На грунт',
				imgsrc: 'img/quiz/quiz_priming.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 1',
				offermore: '10',
				star: '',
				price:'Цена снижена <br>на-30%',
				hit:'',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'img/quiz/quiz_prosent.webp',
				hiticon:'',
				watericon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'flex',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'?',
				tooltip:'Стоки отводятся на поверхность грунта. Необходима модель с принудительным сбросом',
			},
			{
				id: '2',
				type: 'radio',
				value: 'Ливневая канава',
				stylevalue: 'Ливневая канава',
				imgsrc: 'img/quiz/quiz_ditch.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 2',
				offermore: '15',
				star: '',
				price:'',
				hit:'Хит продаж <br>2021 года',
				water:'',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'img/quiz/quiz_hit.webp',
				watericon:'',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'flex',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'?',
				tooltip:'Стоки отводятся в ливневую канализацию. Необходима модель с принудительным сбросом.',
			},
			{
				id: '3',
				type: 'radio',
				value: 'Дренажный колодец',
				stylevalue: 'Дренажный колодец',
				imgsrc: 'img/quiz/quiz_sump.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 3',
				offermore: '8',
				star: '',
				price:'',
				hit:'',
				water:'Идеально подходит <br>при высоком уровне <br> грунтовых вод',
				sun:'',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'img/quiz/quiz_water.webp',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'flex',
				sundisplay:'none',
				tool:'?',
				tooltip:'Стоки отводятся в дренажный колодец. Необходимость принудительного сброса зависит от уровня грунтовых вод.',
			},
			{
				id: '4',
				type: 'radio',
				value: 'Овраг',
				stylevalue: 'Овраг',
				imgsrc: 'img/quiz/quiz_revine.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 4',
				offermore: '5',
				star: '',
				price:'',
				hit:'',
				water:'',
				sun:'Идеально подходит <br>для сезонного <br>проживания',
				staricon: '',
				priceicon:'',
				hiticon:'',
				watericon:'',
				sunicon:'img/quiz/quiz_sun.webp',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'flex',
				tool:'?',
				tooltip:'Стоки отводятся в овраг. Подходят станции без принудительного сброса',
			},
			{
				id: '5',
				type: 'radio',
				value: 'Рассасывающая траншея',
				stylevalue: 'Рассасывающая траншея',
				imgsrc: 'img/quiz/quiz_trench.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 1',
				offermore: '4',
				star: '',
				price:'',
				hit:'Хит продаж <br>2021 года',
				water:'',
				sun:'Идеально подходит <br>для сезонного <br>проживания',
				staricon: '',
				priceicon:'',
				hiticon:'img/quiz/quiz_hit.webp',
				watericon:'',
				sunicon:'img/quiz/quiz_sun.webp',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'flex',
				waterdisplay:'none',
				sundisplay:'flex',
				tool:'',
				tooltip:'',
			},
			{
				id: '6',
				type: 'radio',
				value: 'Не определился',
				stylevalue: 'Не определился',
				imgsrc: 'img/quiz/quiz_hmmm.webp',
				offertitle:'Вам подходит станция',
				offerimg: 'img/quiz/quiz_septik-deka.webp',
				offername: 'Юнилос Астра 6',
				offermore: '3',
				star: '',
				price:'Цена снижена <br>на-30%',
				hit:'',
				water:'Идеально подходит <br>при высоком уровне <br> грунтовых вод',
				sun:'',
				staricon: '',
				priceicon:'img/quiz/quiz_prosent.webp',
				hiticon:'',
				watericon:'img/quiz/quiz_water.webp',
				sunicon:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'flex',
				hitdisplay:'none',
				waterdisplay:'flex',
				sundisplay:'none',
				tool:'',
				tooltip:'',
			},
		]
	},
	{
		question:'Планируете использовать канализацию круглогодично?',
		lefttext: '<span class="fw7">Выберите подарок</span>, который вы получите, если решите заказать установку септика у нас.',
		prosent: '99',
		number: '24',
		start: 'подарка',
		check: 'yes',
		plus: '',
		minus: '',
		answers: [
			{
				id: '1',
				type: 'radio',
				value: 'Скидка на монтаж - 5000 руб',
				stylevalue: 'Скидка на монтаж - 5000 руб',
				imgsrc: 'img/quiz/quiz_5000.webp',
				offertitle:'Ваш подарок:<br>',
				offerimg: 'img/quiz/quiz_5000.webp',
				offername: 'СКИДКА НА <br> МОНТАЖ - 5000 РУБ',
				offermore: '',
				star: '',
				price:'',
				hit:'',
				water:'',
				sun:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'?',
				tooltip:'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
			},
			{
				id: '2',
				type: 'radio',
				value: '5 раскошных туй',
				stylevalue: '5 раскошных туй',
				imgsrc: 'img/quiz/quiz_tui.webp',
				offertitle:'Ваш подарок:<br>',
				offerimg: 'img/quiz/quiz_tui.webp',
				offername: '5 РОСКОШНЫХ ТУЙ',
				offermore: '',
				star: '',
				price:'',
				hit:'',
				water:'',
				sun:'',
				sundisplay:'none',
				stardisplay: 'none',
				pricedisplay:'none',
				hitdisplay:'none',
				waterdisplay:'none',
				sundisplay:'none',
				tool:'?',
				tooltip:'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
			},
		]
	},
];

let localResults = {

};


const testForm = document.getElementById('test-form');
const testMain = document.getElementById('test-main');
const quiz = document.getElementById('quiz');
const quizProgressBar = document.getElementById('quiz-progressbar');
const quizBody = document.getElementById('quiz-body');
const indicator = document.getElementById('indicator');
const indicatorBig = document.getElementById('big-indicator');
const indicatorThanks = document.getElementById('thanks-indicator');
const questions = document.getElementById('questions');
const results = document.getElementById('results');
const leftBody = document.getElementById('left-body');
const leftText = document.getElementById('left-text');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const offer = document.getElementById('offer');
const count = document.querySelectorAll('.counter__btn');
const offerPlaceholder = document.getElementById('offerplaceholder');


const renderQuestions = (index) => {
	//получаем номер текущего вопроса
	renderIndicator(index + 1);
	const renderItemOffer = () => DATA[index].answers
		.map((answer) => `
			<div class="quiz-offer__item quiz-offer__item_var${answer.id} offer-item-${answer.id}-hidden" id="offer-item-id${answer.id}">
				<div class="quiz-offer__stickers stickers-quiz-offer">
					<div class="stickers-quiz-offer__item stickers-quiz-offer__star star" style="display: ${answer.stardisplay};">
						<img src="${answer.staricon}" alt=""><span class="stickers-quiz-offer__star-content fz10 fw7">${answer.star}</span>
					</div>
					<div class="stickers-quiz-offer__item stickers-quiz-offer__price price" style="display: ${answer.pricedisplay};">
						<img src="${answer.priceicon}" alt=""><span class="stickers-quiz-offer__price-content fz10 fw7">${answer.price}</span>
					</div>
					<div class="stickers-quiz-offer__item stickers-quiz-offer__hit hit" style="display: ${answer.hitdisplay};">
						<img src="${answer.hiticon}" alt=""><span class="stickers-quiz-offer__hit-content fz10 fw7">${answer.hit}</span>
					</div>
					<div class="stickers-quiz-offer__item stickers-quiz-offer__water water" style="display: ${answer.waterdisplay};">
						<img src="${answer.watericon}" alt=""><span class="stickers-quiz-offer__water-content fz10 fw7">${answer.water}</span>
					</div>
					<div class="stickers-quiz-offer__item stickers-quiz-offer__sun sun" style="display: ${answer.sundisplay};">
						<img src="${answer.sunicon}" alt=""><span class="stickers-quiz-offer__sun-content fz10 fw7">${answer.sun}</span>
					</div>
				</div>
				<div class="quiz-offer__switch switch-quiz-offer">
					<div class="switch-quiz-offer__img">
						<img src="${answer.offerimg}" alt="">
					</div>
					<div class="switch-quiz-offer__title switch-quiz-offer__title_${index + 1}">
						<span class="fz13 fw4">Промежуточный результат:</span>
					</div>
					<div class="switch-quiz-offer__subtitle">
						<span class="fz18 fw4">${answer.offertitle}</span> <span class="fz18 fw7">${answer.offername}</span>
					</div>
				</div>
				<div class="quiz-offer__more more-quiz-offer more-quiz-offer__${index + 1} fz14">
					<span class="fw4">и ещё</span> <span class="fw7">${answer.offermore}</span> <span class="fw4">станций</span>
				</div>
			</div>
		`)
		.join('');

	questions.dataset.currentStep = index;
	//генерим ответы
	const renderAnswers = () => DATA[index].answers
		.map((answer) => `
			<li class="answer answer__qw${index + 1}">
				<label class="answer__item answer__item-${DATA[index].check} answer__item-${answer.id} answer__item_qw${index + 1}" id="label">
					<span class="answer__tooltip_qw${index + 1}-${answer.id} fz12 fw7" tooltip="${answer.tooltip}">${answer.tool}</span>
					<span class="answer__plus-qw-${index + 1} counter__btn counter__btn-${answer.id}" data-direction="plus">${DATA[index].plus}</span>
					<span class="answer__minus-qw-${index + 1} counter__btn counter__btn-${answer.id} dwn" data-direction="minus">${DATA[index].minus}</span>
					<span class="answer__img-${index + 1}"><img src="${answer.imgsrc}" alt=""></span>
					<input class="answer-input answer-input-${DATA[index].check} answer-input__qw${index + 1} answer-input__qw${index + 1}-${answer.id} answer-content-${answer.id} counter__value-${index + 1}" type="${answer.type}" data-max-count="10" name="qw${index + 1}" value="${answer.value}">
					<span class="answer__checkbox-${DATA[index].check} answer__checkbox-${DATA[index].check}-qw${index + 1}">${answer.stylevalue}</span>
				</label>
			</li>
		`)
		.join('');
	//генерим ответы
	questions.innerHTML = `
	<div class="quiz-questions-item quiz-questions-item__qw${index + 1}">
		<div class="quiz-questions-item__top">
			<div class="quiz-questions-item__indicator indicator fz12 fw4">
				<p><span class="fw7">Вопрос ${index + 1}</span> из ${DATA.length}</p>
			</div>
			<div class="quiz-questions-item__question quiz-questions-item__question_qw${index + 1} fz24 fw4"><span>${DATA[index].question}</span></div>
		</div>
		<div class="quiz-questions-item__content">
			<div class="quiz-questions-item__list-answers">
				<ul class="quiz-questions-item__answers quiz-questions-item__answers_qw${index + 1} fz16 fw4">
					${renderAnswers()}
				</ul>
				<div class="quiz-placeholder quiz-placeholder-${DATA[index].number}" id="quizplaceholder">
					<div class="quiz-placeholder__title fz14 fw4">
					<span class="fw7">Начните отвечать,</span> чтобы <br> система начала подбор ${DATA[index].start}
					</div>
				</div>
			</div>
			<div class="offer">
				<div class="offer-placeholder offer-placeholder-${DATA[index].number}" id="offerplaceholder">
					<div class="offer-placeholder__body">
						<div class="offer-placeholder__title offer-placeholder__title_${index + 1} fz18 fw4">Подбор <span class="fw7">из 800+ видов</span> септиков</div>
						<div class="offer-placeholder__img offer-placeholder__img_${index + 1}"><img src="img/quiz/quiz_offer-placeholder-${index + 1}.webp" alt=""></div>
					</div>
				</div>
				<div class="quiz-offer" id="offer">
					<div class="quiz-offer__body">
						${renderItemOffer()}
					</div>
				</div>
			</div>
		</div>
	</div>
	`;
	leftText.innerHTML = `
		<div class="left-test__text fz15 fw3">
		${DATA[index].lefttext}
		</div>
	`;
	quizProgressBar.innerHTML = `
		<div class="quiz-progressbar__line quiz-progressbar__line-qw${index + 1}"></div>
		<div class="quiz-progressbar__title fz14 fw3"><p>Расчет <span class="fw5">пройден на ${DATA[index].prosent}%</span></p></div>
		
	`;
};

const renderIndicator = (currentStep) => {
	indicatorBig.innerHTML = `
		<div class="right-test__indicator fz30 fw3">
			<div class="right-test__title">
				<span class="fz14 fw4">Вопрос:</span>
			</div>
			<div class="right-test__count fz30 fw3">
				<span class="fz60 fw7">${currentStep}</span>/${DATA.length}
			</div>
		</div>
	 `;
};

const arrowsNext = document.getElementById('arrows-next');
quiz.addEventListener('change', (event) =>{
	//логика ответа 
	let offerPlaceholder = document.getElementById('offerplaceholder');
	let quizPlaceholder = document.getElementById('quizplaceholder');
	let label = document.getElementById('label');
	if (event.target.classList.contains('answer-input')){
		btnNext.disabled = false;
		offerPlaceholder.classList.add('offer-placeholder-hidden');
		quizPlaceholder.classList.remove('quiz-placeholder-24');
		$('.quiz-offer__item_var1').removeAttr('style');
		$('.quiz-offer__item_var2').removeAttr('style');
		$('.quiz-offer__item_var3').removeAttr('style');
		$('.quiz-offer__item_var4').removeAttr('style');
		$('.quiz-offer__item_var5').removeAttr('style');
		$('.quiz-offer__item_var6').removeAttr('style');
	}

	const offerItemOne = document.getElementById('offer-item-id1');
	const offerItemTwo = document.getElementById('offer-item-id2');
	const offerItemThree = document.getElementById('offer-item-id3');
	const offerItemFour = document.getElementById('offer-item-id4');
	const offerItemFive = document.getElementById('offer-item-id5');
	const offerItemSix = document.getElementById('offer-item-id6');
	if (event.target.classList.contains('answer-content-1')){
		arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
		offerItemOne.classList.remove('offer-item-1-hidden');
		offerItemTwo.classList.add('offer-item-2-hidden');
		offerItemThree.classList.add('offer-item-3-hidden');
		offerItemFour.classList.add('offer-item-4-hidden');
		offerItemFive.classList.add('offer-item-5-hidden');
		offerItemSix.classList.add('offer-item-6-hidden');
	}
	if (event.target.classList.contains('answer-content-2')){
		arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
		offerItemOne.classList.add('offer-item-1-hidden');
		offerItemTwo.classList.remove('offer-item-2-hidden');
		offerItemThree.classList.add('offer-item-3-hidden');
		offerItemFour.classList.add('offer-item-4-hidden');
		offerItemFive.classList.add('offer-item-5-hidden');
		offerItemSix.classList.add('offer-item-6-hidden');
	}
	if (event.target.classList.contains('answer-content-3')){
		arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
		offerItemOne.classList.add('offer-item-1-hidden');
		offerItemTwo.classList.add('offer-item-2-hidden');
		offerItemThree.classList.remove('offer-item-3-hidden');
		offerItemFour.classList.add('offer-item-4-hidden');
		offerItemFive.classList.add('offer-item-5-hidden');
		offerItemSix.classList.add('offer-item-6-hidden');
	}
	if (event.target.classList.contains('answer-content-4')){
		arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
		offerItemOne.classList.add('offer-item-1-hidden');
		offerItemTwo.classList.add('offer-item-2-hidden');
		offerItemThree.classList.add('offer-item-3-hidden');
		offerItemFour.classList.remove('offer-item-4-hidden');
		offerItemFive.classList.add('offer-item-5-hidden');
		offerItemSix.classList.add('offer-item-6-hidden');
	}
	if (event.target.classList.contains('answer-content-5')){
		arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
		offerItemOne.classList.add('offer-item-1-hidden');
		offerItemTwo.classList.add('offer-item-2-hidden');
		offerItemThree.classList.add('offer-item-3-hidden');
		offerItemFour.classList.add('offer-item-4-hidden');
		offerItemFive.classList.remove('offer-item-5-hidden');
		offerItemSix.classList.add('offer-item-6-hidden');
	}
	if (event.target.classList.contains('answer-content-6')){
		arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
		offerItemOne.classList.add('offer-item-1-hidden');
		offerItemTwo.classList.add('offer-item-2-hidden');
		offerItemThree.classList.add('offer-item-3-hidden');
		offerItemFour.classList.add('offer-item-4-hidden');
		offerItemFive.classList.add('offer-item-5-hidden');
		offerItemSix.classList.remove('offer-item-6-hidden');
	}
})

quiz.addEventListener('click', (event) => {
	const offerItemOne = document.getElementById('offer-item-id1');
	const offerItemTwo = document.getElementById('offer-item-id2');
	const offerItemThree = document.getElementById('offer-item-id3');
	const offerItemFour = document.getElementById('offer-item-id4');
	const offerItemFive = document.getElementById('offer-item-id5');
	const offerItemSix = document.getElementById('offer-item-id6');
	btnNext.disabled = false;
	arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
	if (event.target.classList.contains('counter__btn')){
	btnNext.disabled = false;
	$('.counter__btn').click(function(event) {
		var n=parseInt($(this).parent().find('.answer-input').val());
		const offerItemOne = document.getElementById('offer-item-id1');
		if($(this).hasClass('dwn')){
			n=n-1;
			console.log(-1);
			if(n<1){
				n=0;
				console.log(0);
			}
		}else{
			n=n+1;
			console.log(1);
			if(n>10){
				n=10;
				console.log(10);
			}
		}
		if (n > 2){
			$('.quiz-offer__item_var1').removeAttr('style');
			$('.quiz-offer__item_var2').removeAttr('style');
			$('.quiz-offer__item_var3').removeAttr('style');
			$('.quiz-offer__item_var4').removeAttr('style');
			$('.quiz-offer__item_var5').removeAttr('style');
			$('.quiz-offer__item_var6').removeAttr('style');
			if (event.target.classList.contains('counter__btn-1')){
				arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
				offerItemOne.classList.remove('offer-item-1-hidden');
				offerItemTwo.classList.add('offer-item-2-hidden');
				offerItemThree.classList.add('offer-item-3-hidden');
				offerItemFour.classList.add('offer-item-4-hidden');
				offerItemFive.classList.add('offer-item-5-hidden');
				offerItemSix.classList.add('offer-item-6-hidden');
			}
			if (event.target.classList.contains('counter__btn-2')){
				arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
				offerItemOne.classList.add('offer-item-1-hidden');
				offerItemTwo.classList.remove('offer-item-2-hidden');
				offerItemThree.classList.add('offer-item-3-hidden');
				offerItemFour.classList.add('offer-item-4-hidden');
				offerItemFive.classList.add('offer-item-5-hidden');
				offerItemSix.classList.add('offer-item-6-hidden');
			}
			if (event.target.classList.contains('counter__btn-3')){
				arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
				offerItemOne.classList.add('offer-item-1-hidden');
				offerItemTwo.classList.add('offer-item-2-hidden');
				offerItemThree.classList.remove('offer-item-3-hidden');
				offerItemFour.classList.add('offer-item-4-hidden');
				offerItemFive.classList.add('offer-item-5-hidden');
				offerItemSix.classList.add('offer-item-6-hidden');
			}
			if (event.target.classList.contains('counter__btn-4')){
				arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
				offerItemOne.classList.add('offer-item-1-hidden');
				offerItemTwo.classList.add('offer-item-2-hidden');
				offerItemThree.classList.add('offer-item-3-hidden');
				offerItemFour.classList.remove('offer-item-4-hidden');
				offerItemFive.classList.add('offer-item-5-hidden');
				offerItemSix.classList.add('offer-item-6-hidden');
			}
			if (event.target.classList.contains('counter__btn-5')){
				arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
				offerItemOne.classList.add('offer-item-1-hidden');
				offerItemTwo.classList.add('offer-item-2-hidden');
				offerItemThree.classList.add('offer-item-3-hidden');
				offerItemFour.classList.add('offer-item-4-hidden');
				offerItemFive.classList.remove('offer-item-5-hidden');
				offerItemSix.classList.add('offer-item-6-hidden');
			}
			if (event.target.classList.contains('counter__btn-6')){
				arrowsNext.classList.remove('quiz-controls__arrows-next_hidden');
				offerItemOne.classList.add('offer-item-1-hidden');
				offerItemTwo.classList.add('offer-item-2-hidden');
				offerItemThree.classList.add('offer-item-3-hidden');
				offerItemFour.classList.add('offer-item-4-hidden');
				offerItemFive.classList.add('offer-item-5-hidden');
				offerItemSix.classList.remove('offer-item-6-hidden');
			}
		}
		$(this).parent().find('.answer-input').val(n);
		return false;
	});
	}
	if (event.target.classList.contains('answer-input')){
		$('input[type=radio]').change(function() {
			var tmp=$(this).attr('name');
			$('input[name="'+tmp+'"]').parent("label").removeClass("answer__item-yes_checked");
			$(this).parent("label").toggleClass("answer__item-yes_checked", this.selected);
		});
	}
	//нажатие вперед или назад
	if (event.target.classList.contains('btn-next')){
		const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
		let label = document.getElementById('label');
		let arrowsPrev = document.getElementById('arrows-prev');
		let loading = document.getElementById('result-loading');
		let arrowRightTest = document.getElementById('arrow-right-hidden');
		if(DATA.length === nextQuestionIndex){
			//переход к результатам
			//renderOfferPlaceholder(prevQuestionIndex);
			quiz.classList.add('quiz__thanks');
			quizBody.classList.add('quiz-body-hidden');
			results.classList.add('results-visible');
			leftBody.classList.add('left-body-hidden');
			indicatorThanks.classList.add('thanks-indicator-visible');
			quizProgressBar.classList.add('quiz-progressbar__after');
			testForm.classList.add('test__form_result');
			testMain.classList.add('test__main_result');
			loading.classList.add('quiz-results__loading_anim');
			arrowRightTest.classList.add('right-test__arrows-hidden');
			indicatorBig.classList.add('right-test__item-hidden');
			loading.classList.add('quiz-results__loading_anim');
			offer.classList.add('offer-hidden');
		} else{
			if(!$('.quiz-offer__item_var1').hasClass('offer-item-1-hidden')){
				renderQuestions(nextQuestionIndex);
				$('.quiz-offer__item_var1').css('display','flex');
				$('.quiz-offer__item_var1').addClass('quiz-offer__item_visible');
				console.log('bar');
			} else
			if(!$('.quiz-offer__item_var2').hasClass('offer-item-2-hidden')){
				renderQuestions(nextQuestionIndex);
				$('.quiz-offer__item_var2').css('display','flex');
				$('.quiz-offer__item_var2').addClass('quiz-offer__item_visible');
				console.log('no2');
			} else
			if(!$('.quiz-offer__item_var3').hasClass('offer-item-3-hidden')){
				renderQuestions(nextQuestionIndex);
				$('.quiz-offer__item_var3').css('display','flex');
				$('.quiz-offer__item_var3').addClass('quiz-offer__item_visible');
				console.log('no3');
			} else
			if(!$('.quiz-offer__item_var4').hasClass('offer-item-4-hidden')){
				renderQuestions(nextQuestionIndex);
				$('.quiz-offer__item_var4').css('display','flex');
				$('.quiz-offer__item_var4').addClass('quiz-offer__item_visible');
				console.log('no4');
			} else
			if(!$('.quiz-offer__item_var5').hasClass('offer-item-5-hidden')){
				renderQuestions(nextQuestionIndex);
				$('.quiz-offer__item_var5').css('display','flex');
				$('.quiz-offer__item_var5').addClass('quiz-offer__item_visible');
				console.log('no5');
			} else
			if(!$('.quiz-offer__item_var6').hasClass('offer-item-6-hidden')){
				renderQuestions(nextQuestionIndex);
				$('.quiz-offer__item_var6').css('display','flex');
				$('.quiz-offer__item_var6').addClass('quiz-offer__item_visible');
				console.log('no6');
			} else {
				renderQuestions(nextQuestionIndex);
			}
			btnPrev.classList.remove('btnPrev-hidden');
			btnNext.disabled = true;
			arrowsNext.classList.add('quiz-controls__arrows-next_hidden');
			arrowsPrev.classList.remove('quiz-controls__arrows-prev_hidden');
		}
	}
	if (event.target.classList.contains('btn-prev')){
		let arrowsPrev = document.getElementById('arrows-prev');
		const prevQuestionIndex = Number(questions.dataset.currentStep) - 1;
		if (prevQuestionIndex > 0){
			if($('.quiz-offer__item_var1').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var1').css('display','flex');
				$('.quiz-offer__item_var1').addClass('quiz-offer__item_visible');
				$('.answer__item-1').addClass('answer__item-yes_checked');
				console.log('bar');
			} else
			if($('.quiz-offer__item_var2').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var2').css('display','flex');
				$('.quiz-offer__item_var2').addClass('quiz-offer__item_visible');
				$('.answer__item-2').addClass('answer__item-yes_checked');
				console.log('no2');
			} else
			if($('.quiz-offer__item_var3').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var3').css('display','flex');
				$('.quiz-offer__item_var3').addClass('quiz-offer__item_visible');
				$('.answer__item-3').addClass('answer__item-yes_checked');
				console.log('no3');
			} else
			if($('.quiz-offer__item_var4').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var4').css('display','flex');
				$('.quiz-offer__item_var4').addClass('quiz-offer__item_visible');
				$('.answer__item-4').addClass('answer__item-yes_checked');
				console.log('no4');
			} else
			if($('.quiz-offer__item_var5').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var5').css('display','flex');
				$('.quiz-offer__item_var5').addClass('quiz-offer__item_visible');
				$('.answer__item-5').addClass('answer__item-yes_checked');
				console.log('no5');
			} else
			if($('.quiz-offer__item_var6').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var6').css('display','flex');
				$('.quiz-offer__item_var6').addClass('quiz-offer__item_visible');
				$('.answer__item-6').addClass('answer__item-yes_checked');
				console.log('no6');
			} else {
				renderQuestions(prevQuestionIndex);
			}
			btnNext.disabled = true;
			arrowsNext.classList.add('quiz-controls__arrows-next_hidden');
			arrowsPrev.classList.remove('quiz-controls__arrows-prev_hidden');
		} else {
			if($('.quiz-offer__item_var1').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var1').css('display','flex');
				$('.quiz-offer__item_var1').addClass('quiz-offer__item_visible');
				$('.answer__item-1').addClass('answer__item-yes_checked');
				console.log('bar');
			} else
			if($('.quiz-offer__item_var2').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var2').css('display','flex');
				$('.quiz-offer__item_var2').addClass('quiz-offer__item_visible');
				$('.answer__item-2').addClass('answer__item-yes_checked');
				console.log('no2');
			} else
			if($('.quiz-offer__item_var3').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var3').css('display','flex');
				$('.quiz-offer__item_var3').addClass('quiz-offer__item_visible');
				$('.answer__item-3').addClass('answer__item-yes_checked');
				console.log('no3');
			} else
			if($('.quiz-offer__item_var4').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var4').css('display','flex');
				$('.quiz-offer__item_var4').addClass('quiz-offer__item_visible');
				$('.answer__item-4').addClass('answer__item-yes_checked');
				console.log('no4');
			} else
			if($('.quiz-offer__item_var5').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var5').css('display','flex');
				$('.quiz-offer__item_var5').addClass('quiz-offer__item_visible');
				$('.answer__item-5').addClass('answer__item-yes_checked');
				console.log('no5');
			} else
			if($('.quiz-offer__item_var6').hasClass('quiz-offer__item_visible')){
				renderQuestions(prevQuestionIndex);
				$('.quiz-offer__item_var6').css('display','flex');
				$('.quiz-offer__item_var6').addClass('quiz-offer__item_visible');
				$('.answer__item-6').addClass('answer__item-yes_checked');
				console.log('no6');
			} else {
				renderQuestions(prevQuestionIndex);
			}
			$('.offer-placeholder').addClass('offer-placeholder-hidden');
			$('.quiz-placeholder').removeClass('quiz-placeholder-24');
			btnPrev.classList.add('btnPrev-hidden');
			btnNext.disabled = true;
			arrowsNext.classList.add('quiz-controls__arrows-next_hidden');
			arrowsPrev.classList.add('quiz-controls__arrows-prev_hidden');
		}
	}
})


renderQuestions(0);

//для страницы результат
$("input[name='qw9']").on('change input', function () {
	if ($(this).hasClass('ch-1')) {
		$('.inp-enp-ph').attr('placeholder', 'Ваш номер телефона');
		$('.eml').fadeIn();
	} else if ($(this).hasClass('ch-2')) {
		$('.inp-enp-ph').attr('placeholder', 'Ваш телефон в Telegram');
		$('.eml').hide();
	} else if ($(this).hasClass('ch-3')) {
		$('.inp-enp-ph').attr('placeholder', 'Ваш телефон в Viber');
		$('.eml').hide();
	} else if ($(this).hasClass('ch-4')) {
		$('.inp-enp-ph').attr('placeholder', 'Ваш телефон в WhatsApp');
		$('.eml').hide();
	} else if ($(this).hasClass('ch-5')) {
		$('.inp-enp-ph').attr('placeholder', 'Ваш телефон в WhatsApp');
		$('.eml').hide();
	}
});




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
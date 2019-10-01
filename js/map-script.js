$(document).ready(function () {

	if ($('div').is('#map')) {
		var script = document.createElement("script");
		script.src = "https://api-maps.yandex.ru/2.1/?apikey=9305a291-6747-4854-bcf9-fbaceb877edb&lang=en_US";
		script.type = "text/javascript";
		script.onload = function () {
			// console.log('API Load');
			ymaps.ready(function () {
				var myMap = new ymaps.Map('map', {
					center: [43.97287351983399,-28.529526247234656],
					zoom: 3,
					controls: ['zoomControl'],
					behaviors: ['drag']
				}),

					// Создаём макет содержимого.
					MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
						'<div style="color: red; font-weight: bold;">$[properties.iconContent]</div>'
					),

					myPlacemark = new ymaps.Placemark([50.38044615073509,6.275679999999932], {
						hintContent: '<div class="hint-map">Honsfeld, Belgium</div>',
						balloonContent: '<div class="row--contry"><div class="country--img"><img src="./img/contacts/benelux.svg" alt=""></div><h4 class="conuntry--name">Benelux</h4></div><div class="country-address"><div class="address-email"><img src="./img/contacts/email.svg" alt=""></div><a href="mailto:benelux@isdk.pro" class="href">benelux@isdk.pro</a></div><div class="country-phone"><div class="phone-img"><img src="./img/contacts/phone.svg" alt=""></div><a href="tel:+32-43460180 " class="href">+32-43460180</a></div><div class="country-map"><div class="map-img"><img src="./img/contacts/map.svg" alt=""></div><p>Honsfeld, Belgium</p></div>'
					}, {
							iconLayout: 'default#image',
							iconImageHref: '../img/contacts/benelux-map.svg',
							iconImageSize: [50, 50],
							iconImageOffset: [-10, -30]
						}),
						myPlacemark2 = new ymaps.Placemark([52.508328315696836,13.396575499999914], {
							hintContent: '<div class="hint-map">Berlin</div>',
							balloonContent: '<div class="row--contry"><div class="country--img"><img src="./img/contacts/germany.svg" alt=""></div><h4 class="conuntry--name">Berlin</h4></div><div class="country-address"><div class="address-email"><img src="./img/contacts/email.svg" alt=""></div><a href="mailto:de@isdk.pro" class="href">de@isdk.pro</a></div><div class="country-phone"><div class="phone-img"><img src="./img/contacts/phone.svg" alt=""></div><a href="tel:+4915233977274" class="href">+4915233977274</a></div><div class="country-map"><div class="map-img"><img src="./img/contacts/map.svg" alt=""></div><p>Berlin</p></div>'
						}, {
								iconLayout: 'default#image',
								iconImageHref: '../img/contacts/germany-map.svg',
								iconImageSize: [50, 50],
								iconImageOffset: [-10, -30]
							}),
							myPlacemark3 = new ymaps.Placemark([29.849306595502547,-96.313035], {
								hintContent: '<div class="hint-map">Austin, TX</div>',
								balloonContent: '<div class="row--contry"><div class="country--img"><img src="./img/contacts/usa.svg" alt=""></div><h4 class="conuntry--name">USA</h4></div><div class="country-address"><div class="address-email"><img src="./img/contacts/email.svg" alt=""></div><a href="mailto:us@isdk.pro" class="href">us@isdk.pro</a></div><div class="country-phone"><div class="phone-img"><img src="./img/contacts/phone.svg" alt=""></div><a href="tel:+1 737 2413109" class="href">+1 737 2413109</a></div><div class="country-map"><div class="map-img"><img src="./img/contacts/map.svg" alt=""></div><p>Austin, TX</p></div>'
							}, {
									iconLayout: 'default#image',
									iconImageHref: '../img/contacts/usa-map.svg',
									iconImageSize: [50, 50],
									iconImageOffset: [-30, -50]
								}),
								myPlacemark4 = new ymaps.Placemark([56.97193289304613,24.128627500000007], {
									hintContent: '<div class="hint-map">Riga, Latvia</div>',
									balloonContent: '<div class="row--contry"><div class="country--img"><img src="./img/contacts/latvia.svg" alt=""></div><h4 class="conuntry--name">Baltic</h4></div><div class="country-address"><div class="address-email"><img src="./img/contacts/email.svg" alt=""></div><a href="mailto:lv@isdk.pro" class="href">lv@isdk.pro</a></div><div class="country-phone"><div class="phone-img"><img src="./img/contacts/phone.svg" alt=""></div><a href="tel:+37127869927" class="href">+37127869927</a></div><div class="country-map"><div class="map-img"><img src="./img/contacts/map.svg" alt=""></div><p>Riga, Latviac</p></div>'
								}, {
										iconLayout: 'default#image',
										iconImageHref: '../img/contacts/latvia-map.svg',
										iconImageSize: [50, 50],
										iconImageOffset: [-10, -30]
									}),
									myPlacemark5 = new ymaps.Placemark([55.584222181163646,37.38552449999999], {
										hintContent: '<div class="hint-map">Moscow</div>',
										balloonContent: '<div class="row--contry"><div class="country--img"><img src="./img/contacts/russia.svg" alt=""></div><h4 class="conuntry--name">Russia</h4></div><div class="country-address"><div class="address-email"><img src="./img/contacts/email.svg" alt=""></div><a href="mailto:info@isdk.pro" class="href">info@isdk.pro</a></div><div class="country-phone"><div class="phone-img"><img src="./img/contacts/phone.svg" alt=""></div><a href="tel:+74957204026" class="href">+74957204026</a></div><div class="country-map"><div class="map-img"><img src="./img/contacts/map.svg" alt=""></div><p>Moscow</p></div>'
									}, {
											iconLayout: 'default#image',
											iconImageHref: '../img/contacts/russia-map.svg',
											iconImageSize: [50, 50],
											iconImageOffset: [-10, -30]
										});
				myMap.geoObjects
					.add(myPlacemark).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5)
				// .add(myPlacemarkWithContent);
			})
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	}


});
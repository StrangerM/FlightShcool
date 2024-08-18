'use strict';

const languages = {
  en: {
    welcome: "Flight School",
    description: "Where Pilots Take Their First Step into the Sky",
    whoWeAre: "Who we are",
    whyChoose: "Why Choose Us:",
    whoWeAreDescription: "We are passionate about aviation and dedicated to providing exceptional services that bring the joy of flying to everyone. With years of experience in the industry," + 
     "our team of skilled pilots and aviation professionals is committed to delivering top- quality flight experiences, personalized training, and reliable aircraft services." +
			"Our mission is to make the skies accessible to all, whether you’re looking to enjoy a breathtaking sightseeing flight, become a certified pilot, or own your own ultralight aircraft. We pride ourselves on our customer-centric approach, ensuring that every service we offer is tailored to meet your needs and exceed your expectations.",
    whyChooseDescription: "We are committed to providing a comprehensive and personalized flight training experience. Our goal is to not only teach you how to fly but to equip you with the skills, knowledge, and confidence needed to succeed in a competitive aviation industry. Whether you dream of flying for a major airline or simply want to earn your private pilot license, we are here to help you achieve your aviation goals.",
    contactForm: "Contact Form",
    ourService: "Our Services",
    serv1: "Sightseeing flights",
    serv2: "Gift vouchers",
    serv3: "Private flights within European countries",
    serv4: "ULL (ultralight aircraft) pilot school",
    serv5: "Transportation of your aircraft across the European Union (with the option of delivery to third countries)",
    serv6: "Sale of ultralight aircraft in standard and custom configurations",
    ourGallery: "Our Gallery",
  },
  
  cs: {
    welcome: "Letecká škola",
    description: "Kde piloti udělají svůj první krok do nebe",
    whoWeAre: "Kdo jsme",
    whyChoose: "Proč si vybrat nás:",
    whoWeAreDescription: "Jsme vášniví nadšenci do letectví a jsme odhodláni poskytovat výjimečné služby, které přinášejí radost z létání každému. S dlouholetými zkušenostmi v oboru je náš tým zkušených pilotů a leteckých profesionálů zavázán dodávat špičkové letové zážitky, individuální výcvik a spolehlivé letecké služby." +
     "Naším posláním je zpřístupnit oblohu všem," + 
    "ať už chcete zažít dechberoucí vyhlídkový let, stát se certifikovaným pilotem nebo vlastnit vlastní ultralehké letadlo.Pyšníme se přístupem zaměřeným na zákazníka, díky kterému jsou všechny naše služby přizpůsobeny vašim potřebám a překračují vaše očekávání.",
    whyChooseDescription: "Jsme odhodláni poskytovat komplexní a individuální výcvikový zážitek v oblasti letectví. Naším cílem není jen naučit vás létat, ale také vás vybavit dovednostmi, znalostmi a sebevědomím potřebnými k úspěchu v konkurenčním leteckém průmyslu. Ať už sníte o létání pro velkou leteckou společnost, nebo si chcete pouze získat soukromou pilotní licenci, jsme zde, abychom vám pomohli dosáhnout vašich leteckých cílů.",
    contactForm: "Kontaktní formulář",
    ourService: "Naše služby",
    serv1: "Vyhlídkové lety",
    serv2: "Dárkové poukazy",
    serv3: "Soukromé lety v evropských zemích",
    serv4: "Pilotní škola ULL (ultralehkých letadel)",
    serv5: "Přeprava vašich letadel po celé Evropské unii (s možností dodání do třetích zemí)",
    serv6: "Prodej ultralehkých letadel v základních i individuálních konfiguracích",
    ourGallery: "Naše galerie",
  }
};

function setLanguage(lang) {
  const language = languages[lang];
  document.getElementById('welcome').innerText = language.welcome;
  document.getElementById('description_main').innerText = language.description;
  document.getElementById('whoWeAre').innerText = language.whoWeAre;
  document.getElementById('whyChoose').innerText = language.whyChoose;
  document.getElementById('whoWeAreDescription').innerText = language.whoWeAreDescription;
  document.getElementById('whyChooseDescription').innerText = language.whyChooseDescription;
  document.getElementById('contactForm').innerText = language.contactForm;
   document.getElementById('ourService').innerText = language.ourService;
  document.getElementById('serv1').innerText = language.serv1;
  document.getElementById('serv2').innerText = language.serv2;
  document.getElementById('serv3').innerText = language.serv3;
  document.getElementById('serv4').innerText = language.serv4;
  document.getElementById('serv5').innerText = language.serv5;
  document.getElementById('serv6').innerText = language.serv6;
  document.getElementById('ourGallery').innerText = language.ourGallery;
  
  document.getElementById('lang-img').src = '/html/img/lang/' + lang + '.png';
};

setLanguage('cs');

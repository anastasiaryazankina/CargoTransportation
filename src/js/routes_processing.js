ymaps.ready(init);
var myMap;

function init() {
  // Создаем карту.
  myMap = new ymaps.Map("map", {
    center: [55.72, 37.44],
    zoom: 5
  }, {
    searchControlProvider: "yandex#search"
  });
  myMap.options.set("scrollZoomSpeed", 1.5);
};

var routes_data = [
{ name:"Нижний Новгород - Москва",
  types: [  
    {id: "302", name: "Термо-вагоны"},
    {id: "303", name: "Для контейнеров"},
    {id: "304", name: "Для сыпучих товаров"}],
  stops:[
    {id: "1", name: "Нижний Новгород", x: 56.31332270042888, y: 43.908291634351734},
    {id: "2", name: "Гороховец", x: 56.20299912984716, y: 42.70224103113223},
    {id: "3", name: "Камешково", x: 56.361889214168826, y: 41.087250796757225},
    {id: "4", name: "Владимир", x: 56.12125124623075, y: 40.39483895704827},
    {id: "5", name: "Собинка", x: 56.010333835333846, y: 39.96348319697085},
    {id: "6", name: "Петушки", x: 55.93486398774311, y: 39.41142020868961},
    {id: "7", name: "Сородищи", x: 55.867987707409306, y: 39.00691404264498},
    {id: "8", name: "Черноголовка", x: 55.9867223601104, y: 38.34498777311374},
    {id: "9", name: "Москва", x: 55.73494270124491, y: 37.63636960905125}]
},
{ name:"Москва - Нижний Новгород",
  types: [  
    {id: "302", name: "Термо-вагоны"},
    {id: "303", name: "Для контейнеров"},
    {id: "304", name: "Для сыпучих товаров"}],
  stops:[
    {id: "9", name: "Москва", x: 55.73494270124491, y: 37.63636960905125},
    {id: "8", name: "Черноголовка", x: 55.9867223601104, y: 38.34498777311374},
    {id: "7", name: "Сородищи", x: 55.867987707409306, y: 39.00691404264498},
    {id: "6", name: "Петушки", x: 55.93486398774311, y: 39.41142020868961},
    {id: "5", name: "Собинка", x: 56.010333835333846, y: 39.96348319697085},
    {id: "4", name: "Владимир", x: 56.12125124623075, y: 40.39483895704827},
    {id: "3", name: "Камешково", x: 56.361889214168826, y: 41.087250796757225},
    {id: "2", name: "Гороховец", x: 56.20299912984716, y: 42.70224103113223},
    {id: "1", name: "Нижний Новгород", x: 56.31332270042888, y: 43.908291634351734}]
},
{ name: "Пермь - Тюмень",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "304", name: "Для сыпучих товаров"}],
  stops:[
    {id: "10", name: "Пермь", x: 58.006706577943625, y: 56.21648392839895},
    {id: "11", name: "Нижний Тагил", x: 57.913275817151884, y: 59.951835490898965},
    {id: "12", name: "Екатеринбург", x: 56.85125583273868, y: 60.57805619402396},
    {id: "13", name: "Каменск-Уральский", x: 56.42477569484866, y: 61.88779601812611},
    {id: "14", name: "Тюмень", x: 57.14835242793901, y: 65.53525695562611}]
},
{ name: "Тюмень - Пермь",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "304", name: "Для сыпучих товаров"}],
  stops:[
    {id: "14", name: "Тюмень", x: 57.14835242793901, y: 65.53525695562611},
    {id: "13", name: "Каменск-Уральский", x: 56.42477569484866, y: 61.88779601812611},
    {id: "12", name: "Екатеринбург", x: 56.85125583273868, y: 60.57805619402396},
    {id: "11", name: "Нижний Тагил", x: 57.913275817151884, y: 59.951835490898965},
    {id: "10", name: "Пермь", x: 58.006706577943625, y: 56.21648392839895}]
},
{ name: "Воронеж - Калуга",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"}],
  stops:[
    {id: "15", name: "Воронеж", x: 51.65424336976501, y: 39.19226052494886},
    {id: "16", name: "Липецк", x: 52.627584130876926, y: 39.609740993698864},
    {id: "17", name: "Новомосковск", x: 54.01861572673241, y: 38.28302583484658},
    {id: "18", name: "Калуга", x: 54.51235925694487, y: 36.26226884651411}]
},
{ name: "Калуга - Воронеж",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"}],
  stops:[
    {id: "18", name: "Калуга", x: 54.51235925694487, y: 36.26226884651411},
    {id: "17", name: "Новомосковск", x: 54.01861572673241, y: 38.28302583484658},
    {id: "16", name: "Липецк", x: 52.627584130876926, y: 39.609740993698864},
    {id: "15", name: "Воронеж", x: 51.65424336976501, y: 39.19226052494886}]
},
{ name: "Великий Новгород - Иваново",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"},
    {id: "303", name: "Для контейнеров"}],
  stops:[
    {id: "19", name: "Великий Новгород", x: 58.51894280392871, y: 31.270212371577855},
    {id: "20", name: "Боровичи", x: 58.37495250568406, y: 33.873972137202855},
    {id: "21", name: "Тверь", x: 56.87215803820237, y: 35.85151119970286},
    {id: "22", name: "Иваново", x: 56.99828433812811, y: 40.94916744970286}] 
}, 
{ name: "Иваново - Великий Новгород",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"},
    {id: "303", name: "Для контейнеров"}],
  stops:[
    {id: "22", name: "Иваново", x: 56.99828433812811, y: 40.94916744970286},
    {id: "21", name: "Тверь", x: 56.87215803820237, y: 35.85151119970286},
    {id: "20", name: "Боровичи", x: 58.37495250568406, y: 33.873972137202855},
    {id: "19", name: "Великий Новгород", x: 58.51894280392871, y: 31.270212371577855}] 
},
{ name: "Пенза - Казань",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"},
    {id: "303", name: "Для контейнеров"}],
  stops:[
    {id: "23", name: "Пенза", x: 53.19551145668138, y: 45.028256394535234},
    {id: "24", name: "Саранск", x: 54.212381210579245, y: 45.14910600391022},
    {id: "25", name: "Чебоксары", x: 56.12987806002358, y: 47.19256303516021},
    {id: "26", name: "Казань", x: 55.821865921078434, y: 49.01629350391022}]
},
{ name: "Казань - Пенза",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"},
    {id: "303", name: "Для контейнеров"}],
  stops:[
    {id: "26", name: "Казань", x: 55.821865921078434, y: 49.01629350391022},
    {id: "25", name: "Чебоксары", x: 56.12987806002358, y: 47.19256303516021},
    {id: "24", name: "Саранск", x: 54.212381210579245, y: 45.14910600391022},
    {id: "23", name: "Пенза", x: 53.19551145668138, y: 45.028256394535234}]
},
{ name: "Ярославль - Ижевск",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"}],
  stops:[
    {id: "27", name: "Ярославль", x: 57.63675369117618, y: 39.870646287622264},
    {id: "28", name: "Кострома", x: 57.75440532333334, y: 40.92533378762227},
    {id: "29", name: "Йошкар-Ола", x: 56.62113696557166, y: 47.89066581887226},
    {id: "30", name: "Ижевск", x: 56.85058824495181, y: 53.09818535012226}]
},
{ name: "Ижевск - Ярославль",
  types: [ 
    {id: "301", name: "Цистерны"}, 
    {id: "302", name: "Термо-вагоны"}],
  stops:[
    {id: "30", name: "Ижевск", x: 56.85058824495181, y: 53.09818535012226},
    {id: "29", name: "Йошкар-Ола", x: 56.62113696557166, y: 47.89066581887226},
    {id: "28", name: "Кострома", x: 57.75440532333334, y: 40.92533378762227},
    {id: "27", name: "Ярославль", x: 57.63675369117618, y: 39.870646287622264}]
}
];

function filterRoutes(routes, query) {
  return  routes.filter(function(route) {
    let stops, from_stop_i, to_stop_i, type_i; 
    stops = route.stops;
    types = route.types;
    from_stop_i = stops.findIndex(function(stop,i,arr){
      return ((stop.id==query.from)&&(i<arr.length-1))
    }) 

    if (query.to == undefined)
      return (from_stop_i >= 0);

    if (from_stop_i >= 0){
      to_stop_i = stops.findIndex(function(stop,i,arr){
        return ((stop.id==query.to)&&(i>from_stop_i))
      }) 
    }
    else 
      return false;

    if (query.carriage_type_id == undefined)
      return (to_stop_i >= 0);      
      
    if (to_stop_i >= 0){
      type_i = types.findIndex(function(carriage_type,i,arr){
        return (carriage_type.id == query.carriage_type_id)
      })
    };

    return (type_i >= 0 );
  })
};

function showRoute(route){
  var coords = route.stops.map(function(stop) {
    return ([stop.x, stop.y]);
  });
 // Создаем ломаную с помощью вспомогательного класса Polyline.
  var myPolyline = new ymaps.Polyline(coords, {
    // Описываем свойства геообъекта.
    // Содержимое балуна.
    balloonContent: route.name,
  }, {
    // Задаем опции геообъекта.
    // Отключаем кнопку закрытия балуна.
    balloonCloseButton: false,
    // Цвет линии.
    strokeColor: "#000000",
    // Ширина линии.
    strokeWidth: 4,
    // Коэффициент прозрачности.
    strokeOpacity: 0.7
  });
    myMap.hint.open(myMap.getCenter(), route.name, {
        // Опция: задержка перед открытием.
        openTimeout: 1500
    });
  // Добавляем линии на карту.
  myMap.geoObjects
  .add(myPolyline);
};

function showRoutes(e){
  var stop_from_select = document.getElementById("fromSelect");
  var stop_to_select = document.getElementById("toSelect");
  var carriage_select = document.getElementById("carriageSelect");
  myMap.geoObjects.removeAll();
  q = {from: stop_from_select.value, to: stop_to_select.value, 
  carriage_type_id: carriage_select.value};
  selected_routes = filterRoutes(routes_data, q);
  selected_routes.forEach(function(route){
    showRoute(route)
  });
};

window.onload = function findRoute() {
  var stop_from_select = document.getElementById("fromSelect");
  stop_from_select.addEventListener("change", showRoutes);
  var stop_to_select = document.getElementById("toSelect");
  stop_to_select.addEventListener("change", showRoutes);
  var carriage_select = document.getElementById("carriageSelect");
  carriage_select.addEventListener("change", showRoutes);
};




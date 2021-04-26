// 1. Cоздание с помощью ключевого слова (const), переменной под названием (apartment), за которой следует оператор присваивания (=), обьекта с помощью обьектного литерала (пары фигурных скобок {} внутри которых добавляются свойства - ключ(имя): значение (imgUrl: 'https://via.placeholder.com/640x480') разделенные запятыми:
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',  //фотография
  descr: 'Просторная квартира в центре',  //описание
  rating: 4,  //рейтинг
  price: 2153,  //цена
  tags: ['premium', 'promoted', 'top'],  //массив, что содержит метаинформацию
// 2. Добавление в существующий обьект (apartment) вложенного свойства (owner) с ключем(именем)name: значением'Генри':
  owner: {
    name: 'Генри',  //имя владельца 
    phone: '982-126-1588',  //телефон
    email: 'henry.carter@aptmail.com'  //почта
  }, 

};

// 3. Доступ к свойствам (rating, descr, price, tags) через точку 
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

console.log (apartment);
console.log("имя владельца: " + apartment.owner.name);  // Генри
console.log("телефон: " + apartment.owner.phone);  // 982-126-1588
console.log("почта: " + apartment.owner.email);  // henry.carter@aptmail.com
console.log("рейтинг: " + apartment.rating);  // рейтинг
console.log("описание: " + apartment.descr);  // описание
console.log("цена: " + apartment.price);  // цена
console.log("метаинформация: " + apartment.tags);  // массив, что содержит метаинформацию
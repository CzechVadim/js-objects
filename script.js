// 1. Cоздание с помощью ключевого слова const, переменной под названием apartment,
// за которой следует оператор присваивания = обьекта с помощью обьектного литерала (пары фигурных скобок {}
// внутри которых добавляются свойства ключ(имя): значение, разделенные запятыми
// imgUrl: 'https://via.placeholder.com/640x480'):
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',  //фотография
  descr: 'Просторная квартира в центре',  //описание
  rating: 4,  //рейтинг
  price: 2153,  //цена
  tags: ['premium', 'promoted', 'top'],  //массив, что содержит метаинформацию
// 2. Добавление в существующий обьект apartment вложенного обьекта owner с свойствами name: 'Генри':
  owner: {
    name: 'Генри',  //имя владельца 
    phone: '982-126-1588',  //телефон
    email: 'henry.carter@aptmail.com'  //почта
  }, 

};


// 3. Доступ к свойствам (rating, descr, price, tags) через точечную нотацию:
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;


// 4. Доступ к вложенным свойствам через точечную нотацию:
const ownerName = apartment.owner.name;  //имя владельца
const ownerPhone = apartment.owner.phone;  //телефон владельца
const ownerEmail = apartment.owner.email;  //почта владельца
const numberOfTags = apartment.tags.length;  //количество элементов массива в свойстве tags
const firstTag = apartment.tags[0];  //первый элемент массива в свойстве tags
const lastTag = apartment.tags[2];  //последний элемент массива в свойстве tags

console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);


// 5. Доступ к свойствам через квадратные скобки
const aptRating = apartment['rating'];  //рейтинг
const aptDescr = apartment['descr'];  //описание
const aptPrice = apartment['price'];  //цена
const aptTags = apartment['tags'];  //массив тегов

console.log(aptRating); 
console.log(aptDescr); 
console.log(aptPrice); 
console.log(aptTags);


// 6. Изменение значения свойств
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

apartment.price = 5000;  //обновлена цена
apartment.rating = 4.7;  //обновлен рейтинг
apartment.owner.name = 'Генри Сибола';  //обновлено имя
apartment.tags.push('trusted');  // добавление в массив, в конец, строку 'trusted'.

console.log(apartment.price);
console.log(apartment.rating);
console.log(apartment.owner.name);
console.log(apartment.tags);


// 7. Добавление нового свойства после создания обьекта
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

apartment.area = 60;  //площадь в квадратных метрах
apartment.rooms = 3;  //количество комнат
apartment.location = {country: 'Ямайка', city: 'Кингстон'};  // новый обьект location внутри обьекта apartment с вложенными свойствами {country: 'Ямайка', city: 'Кингстон'}; 

console.log(apartment.area);
console.log(apartment.rooms);
console.log(apartment.location);


// 8. Синтаксис коротких свойства
const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product.name);
console.log(product.price);
console.log(product.image);
console.log(product.tags);

// 9. Синтаксис вычисляемых свойств
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam'
};

console.log(credentials.email);
console.log(credentials.password);


// 10. Цикл for...in
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = ['descr', 'rating', 'price'];
const values = ['Просторная квартира в центре', 4, 2153];
// 1. Перебрать объект apartment с помощью цикла ключей for (const key in apartment) где вспомогательную переменную key можно объявить в цикле:
for (const key in apartment) {
  console.log(key);
  console.log(apartment[key]);
}


//-----------------------------------------------------------------------------------------------------

console.log (apartment);
console.log("Oписание: " + apartment.descr);  //описание
console.log("Рейтинг: " + apartment.rating);  //рейтинг
console.log("Цена: " + apartment.price);  //цена
console.log("Метаинформация: " + apartment.tags);  //массив, что содержит метаинформацию
console.log("Имя владельца: " + apartment.owner.name);  //имя владельца 
console.log("Телефон: " + apartment.owner.phone);  //телефон
console.log("Почта: " + apartment.owner.email);  //почта


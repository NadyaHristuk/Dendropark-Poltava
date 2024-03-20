//DOCUMENTS

// const BASE_URL = https://dendropark-poltava-back-ix1i.onrender.com/api;

// const DOCUMENTS_ENDPOINT = "/documents";
//getById = /events/:id
//post = /events
//delete = /events/:id
//put = /events/:id

// {
//   "uk": {
//     "title": "Назва документа",
//     "subtitle": "Підзаголовок документа",
//     "description": "Опис документа"
//   },
//   "en": {
//     "title": "Document Title",
//     "subtitle": "Document Subtitle",
//     "description": "Document Description"
//   },
//   "document": "Document Content"
// }

//Приклад відповіді

// {
//     "uk": {
//         "title": "Прогулянка в парку",
//         "subtitle": "awdawdwadawda",
//         "description": "Це опис прогулянки в парку."
//     },
//     "en": {
//         "title": "Park Walk",
//         "subtitle": "awdawdwadawda",
//         "description": "This is a description of a walk in the park."
//     },
//     "document": "link",
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f02481493ed6b98c0ce732",
//     "createdAt": "2024-03-12T09:46:41.683Z",
//     "updatedAt": "2024-03-12T09:46:41.683Z"
// }

// ==========================================================
//EVENTS

// const EVENTS_ENDPOINT = "/events";
//getById = /events/:id
//post = /events
//delete = /events/:id
//put = /events/:id

// {
//   "uk": {
//     "title": "Назва події",
//     "description": "Опис події",
//     "imgAlt": "Альтернативний текст для зображення"
//   },
//   "en": {
//     "title": "Event Title",
//     "description": "Event Description",
//     "imgAlt": "Image Alt Text"
//   },
//   "image": "Прикріпленний файл"
// }

//Відповідь з серверу

// {
//     "uk": {
//         "title": "Прогулянка в парку",
//         "description": "Це опис прогулянки в парку.",
//         "imgAlt": "awdwadawdwadaw"
//     },
//     "en": {
//         "title": "Park Walk",
//         "description": "This is a description of a walk in the park.",
//         "imgAlt": "awdadawdawdawd"
//     },
//     "image": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710237204/dknqxubacxyumzoiwcod.png",
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f02615e5d1a3c0c397496e",
//     "createdAt": "2024-03-12T09:53:25.489Z",
//     "updatedAt": "2024-03-12T09:53:25.489Z"
// }

// ==========================================================
// LOCATIONS

//getById = /locations/:id
//post = /locations
//delete = /locations/:id
//put = /locations/:id
// const LOCATIONS_ENDPOINT = "/locations";

// {
//   "uk": {
//     "title": "Назва місця",
//     "description": "Опис місця",
//     "imgAlt": "Альтернативний текст для зображення"
//   },
//   "en": {
//     "title": "Location Title",
//     "description": "Location Description",
//     "imgAlt": "Image Alt Text"
//   },
//     "number": "Номер",
//   "locationId": "locationId",
//   "image": "Прикріпленний файл"
//    "mapImage": "Прикріпленний файл"
// }

//Приклад відповіді
// {
//     "uk": {
//         "title": "Прогулянка в парку",
//         "description": "Це опис прогулянки в парку.",
//         "imgAlt": "awdwadawdwadaw"
//     },
//     "en": {
//         "title": "Park Walk",
//         "description": "This is a description of a walk in the park.",
//         "imgAlt": "awdadawdawdawd"
//     },
//      "number": "132",
//     "locationId": "Location ID",
//     "image": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710236624/wapblkbvmeww5fu5s40p.png",
//     "mapImage": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710236624/s5xtqwnbpfldcmlehw87.png",
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f023d0106ab546b2246f6d",
//     "createdAt": "2024-03-12T09:43:44.570Z",
//     "updatedAt": "2024-03-12T09:43:44.570Z"
// }

// ==========================================================
// PRODUCTS

// const PRODUCTS_ENDPOINT = "/products";
//getById = /products/:id
//post = /products
//delete = /products/:id
//put = /products/:id

// {
//   "uk": {
//     "title": "Назва продукту",
//     "description": "Опис продукту",
//     "imgAlt": "Альтернативний текст для зображення"
//   },
//   "en": {
//     "title": "Product Title",
//     "description": "Product Description",
//     "imgAlt": "Image Alt Text"
//   },
//   "price": 10.99,
//   "image": "Прикріпленний файл"
// }

//Приклад відповіді
// {
//     "uk": {
//         "title": "Прогулянка в парку",
//         "description": "Це опис прогулянки в парку.",
//         "imgAlt": "awdwadawdwadaw"
//     },
//     "en": {
//         "title": "Park Walk",
//         "description": "This is a description of a walk in the park.",
//         "imgAlt": "awdadawdawdawd"
//     },
//     "price": 132,
//     "image": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710237130/zmm3vfmguhjyxzwgr0xx.png",
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f025cbaef0313843135303",
//     "createdAt": "2024-03-12T09:52:11.073Z",
//     "updatedAt": "2024-03-12T09:52:11.073Z"
// }

// ==========================================================
// TRIALS

// const TRIALS_ENDPOINT = "/trials";
//getById = /trials/:id
//post = /trials
//delete = /trials/:id
//put = /trials/:id

// {
//   "uk": {
//     "title": "Прогулянка в парку",
//     "text": "Це опис прогулянки в парку.",
//     "imgAlt": "Зображення парку"
//   },
//   "en": {
//     "title": "Park Walk",
//     "text": "This is a description of a walk in the park.",
//     "imgAlt": "Park Image"
//   },
//     "distance": 10,
//   "image": "Прикріпленний файл",
//   "mapImage": "Прикріпленний файл"
// }

//Приклад Відповіді
// {
//     "uk": {
//         "title": "Прогулянка в парку",
//         "text": "Це опис прогулянки в парку.",
//         "imgAlt": "awdwadawdwadaw"
//     },
//     "en": {
//         "title": "Park Walk",
//         "text": "This is a description of a walk in the park.",
//         "imgAlt": "awdadawdawdawd"
//     },
//     "distance": 132,
//     "image": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710236893/o422wk8zuuvii05a3r9o.png",
//     "mapImage": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710236893/ftqqkwiv1bo1s3sg06p3.png",
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f024dea8ed38e11bb7b1d2",
//     "createdAt": "2024-03-12T09:48:14.332Z",
//     "updatedAt": "2024-03-12T09:48:14.332Z"
// }
// ==========================================================
// QR

// const PRODUCTS_ENDPOINT = "/changeqr";
//getById = /changeqr/:id
//post = /changeqr
//delete = /changeqr/:id
//put = /changeqr/:id

// {
//   "uk": {
//     "title": "Назва продукту",
//     "description": "Опис продукту",
//   },
//   "en": {
//     "title": "Product Title",
//     "description": "Product Description",
//   },
//    "icon": "Шлях до іконки"
// }

//Приклад відповіді
// {
//     "uk": {
//         "buttonText": "Прогулянка в парку",
//         "description": "Це опис прогулянки в парку.",
//     },
//     "en": {
//         "buttonText": "Park Walk",
//         "description": "This is a description of a walk in the park.",
//     },
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f025cbaef0313843135303",
//     "createdAt": "2024-03-12T09:52:11.073Z",
//     "updatedAt": "2024-03-12T09:52:11.073Z"
// }

// ==========================================================
// SERVICES

// const PRODUCTS_ENDPOINT = "/services";
//getById = /services/:id
//post = /services
//delete = /services/:id
//put = /services/:id

// {
//   "uk": {
//     "title": "Назва продукту",
//     "description": "Опис продукту",
//   },
//   "en": {
//     "title": "Product Title",
//     "description": "Product Description",
//   },
// }

//Приклад відповіді
// {
//     "uk": {
//         "title": "Прогулянка в парку",
//         "description": "Це опис прогулянки в парку.",
//     },
//     "en": {
//         "title": "Park Walk",
//         "description": "This is a description of a walk in the park.",
//     },
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f025cbaef0313843135303",
//     "createdAt": "2024-03-12T09:52:11.073Z",
//     "updatedAt": "2024-03-12T09:52:11.073Z"
// }

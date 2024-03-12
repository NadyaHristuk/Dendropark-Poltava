//DOCUMENTS

const BASE_URL = null;

const DOCUMENTS_ENDPOINT = "/documents";
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

const EVENTS_ENDPOINT = "/events";
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
const LOCATIONS_ENDPOINT = "/locations";

// {
//   "uk": {
//     "number": "Номер",
//     "title": "Назва місця",
//     "description": "Опис місця",
//     "imgAlt": "Альтернативний текст для зображення"
//   },
//   "en": {
//     "number": "Location Number",
//     "title": "Location Title",
//     "description": "Location Description",
//     "imgAlt": "Image Alt Text"
//   },
//   "image": "Прикріпленний файл"
//    "mapImage": "Прикріпленний файл"
// }

//Приклад відповіді
// {
//     "uk": {
//         "number": "132",
//         "title": "Прогулянка в парку",
//         "description": "Це опис прогулянки в парку.",
//         "imgAlt": "awdwadawdwadaw"
//     },
//     "en": {
//         "number": "123",
//         "title": "Park Walk",
//         "description": "This is a description of a walk in the park.",
//         "imgAlt": "awdadawdawdawd"
//     },
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

const PRODUCTS_ENDPOINT = "/products";
//getById = /products/:id
//post = /products
//delete = /products/:id
//put = /products/:id

// {
//   "uk": {
//     "title": "Назва продукту",
//     "description": "Опис продукту",
//     "price": 10.99,
//     "imgAlt": "Альтернативний текст для зображення"
//   },
//   "en": {
//     "title": "Product Title",
//     "description": "Product Description",
//     "price": 10.99,
//     "imgAlt": "Image Alt Text"
//   },
//   "image": "Прикріпленний файл"
// }

//Приклад відповіді
// {
//     "uk": {
//         "title": "Прогулянка в парку",
//         "description": "Це опис прогулянки в парку.",
//         "price": 132,
//         "imgAlt": "awdwadawdwadaw"
//     },
//     "en": {
//         "title": "Park Walk",
//         "description": "This is a description of a walk in the park.",
//         "price": 123,
//         "imgAlt": "awdadawdawdawd"
//     },
//     "image": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710237130/zmm3vfmguhjyxzwgr0xx.png",
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f025cbaef0313843135303",
//     "createdAt": "2024-03-12T09:52:11.073Z",
//     "updatedAt": "2024-03-12T09:52:11.073Z"
// }

// ==========================================================
// TRIALS

const TRIALS_ENDPOINT = "/trials";
//getById = /trials/:id
//post = /trials
//delete = /trials/:id
//put = /trials/:id

// {
//   "uk": {
//     "distance": 10,
//     "title": "Прогулянка в парку",
//     "text": "Це опис прогулянки в парку.",
//     "imgAlt": "Зображення парку"
//   },
//   "en": {
//     "distance": 10,
//     "title": "Park Walk",
//     "text": "This is a description of a walk in the park.",
//     "imgAlt": "Park Image"
//   },
//   "image": "Прикріпленний файл",
//   "mapImage": "Прикріпленний файл"
// }

//Приклад Відповіді
// {
//     "uk": {
//         "distance": 132,
//         "title": "Прогулянка в парку",
//         "text": "Це опис прогулянки в парку.",
//         "imgAlt": "awdwadawdwadaw"
//     },
//     "en": {
//         "distance": 123,
//         "title": "Park Walk",
//         "text": "This is a description of a walk in the park.",
//         "imgAlt": "awdadawdawdawd"
//     },
//     "image": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710236893/o422wk8zuuvii05a3r9o.png",
//     "mapImage": "https://res.cloudinary.com/dxgv5a6mt/image/upload/v1710236893/ftqqkwiv1bo1s3sg06p3.png",
//     "owner": "65eca34887b0cdc5bdd53ad8",
//     "_id": "65f024dea8ed38e11bb7b1d2",
//     "createdAt": "2024-03-12T09:48:14.332Z",
//     "updatedAt": "2024-03-12T09:48:14.332Z"
// }

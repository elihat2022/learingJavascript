
// Usar un JSON
const jsonData= '{"name": "Elihat", "age": 25, "city": "New York"}';

const plainObject = JSON.parse(jsonData);

console.log(plainObject.name);

// Convertir datos a JSON

const myNotes = { notes: "This is a note", date: "12/12/2020"};

JSON.stringify(myNotes);

console.log(JSON.stringify(myNotes));


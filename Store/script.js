/*function deleteItem(id) {
  fetch(`http://localhost/crudAPI/crud.php/items/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
}*/
fetch('http://localhost/Semmandalluwa.lk/server/crud.php/items')
  .then(response => response.json())
  .then(data => {
    let output = '';
    data.forEach(function(item){
      output += `
        <div class="card mb-3">
  <img src="data:image/jpg;charset=utf8;base64,${item.image}" class="card-img-top" alt="Item Name">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <p class="card-text">
      <small class="text-muted">Category: ${item.category}</small>
      <br>
      <small class="text-muted">Price: ${item.price}</small>
      <br>
      <small class="text-muted">Rating: ${item.rating}</small>
    </p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
      `;
    });
    document.getElementById('data').innerHTML = output;
  })
  .catch(err => console.log(err));

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwO0xuY9imGzuoxuoun6XXprB50W6NOfQ",
  authDomain: "semmandalluwa-test.firebaseapp.com",
  projectId: "semmandalluwa-test",
  storageBucket: "semmandalluwa-test.firebasestorage.app",
  messagingSenderId: "140774806089",
  appId: "1:140774806089:web:ea67fadc0e3ada8cc5e598",
  measurementId: "G-84M46V5JQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
document.querySelector(".in5").addEventListener("keyup", () => {
  if (
    document.querySelector(".in4").value != document.querySelector(".in5").value
  )
    document.querySelector(".in5").style.borderColor = "#ff0000";
  else document.querySelector(".in5").style.borderColor = "#00000055";
});
document.querySelector(".in4").addEventListener("keyup", () => {
  if (
    document.querySelector(".in4").value == document.querySelector(".in5").value
  )
    document.querySelector(".in5").style.borderColor = "#00000055";
});
const form = document.getElementById("post");
  // firebase
  //   .database()
  //   .ref()
  //   .on("value", (snap) => {
  //     document.getElementById("show").innerHTML = `value is : ${snap.val()}`;
  //   });


const database = firebase.database();
let dataRef = database.ref("users");
// dataRef.once("value", snapshot => {
//   console.log(snapshot.val());
// })
// How to find Useing Email
// dataRef.orderByChild("Email").equalTo("souravbarui8040@gmail.com").once("value", snapshot => {
//   let User = snapshot.val(); 
//   console.log(User); 
// })  


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const first = document.getElementById("first").value;
  const lsat = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      let databaseRef = database.ref().child(`users/${email.split("@")[0]}`);
      let userData = {
        First_Name: first,
        Last_Name: lsat,
        Email: email,
        Last_Login: Date.now(),
      };
      databaseRef.set(userData);
      location.replace("index.html");
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      document.getElementById("show").innerHTML = `${error.message}`;
    });
});
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     location.replace("index.html");
//   }
// });




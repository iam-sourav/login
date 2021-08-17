firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("index.html"); 
  } else {
    // console.log(user.email.split("@")[0]);
    const database = firebase.database();
    let dataRef = database.ref(`users/${user.email.split("@")[0]}`);
    dataRef.on("value", (snapshot) => {
      document.getElementById("name").innerHTML += snapshot.val().First_Name;
      // console.log(ssnapshotnap.val().First_Name);
    });
  }
});
// dataRef.once("value", snapshot => {
//   console.log(snapshot.val());
// })

// How to find Useing Email
// dataRef.orderByChild("Email").equalTo("souravbarui8040@gmail.com").once("value", snapshot => {
//   let User = snapshot.val(); 
//   console.log(User); 
// })  
let logout = () => {
  firebase.auth().signOut();
};

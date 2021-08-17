const form = document.getElementById("post");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            location.replace("welcome.html");
        })
        .catch((err) => {
            document.getElementById("error").innerHTML = err.message;
    }) 
})
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    }
})

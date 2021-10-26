
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBDcG72_eo_ykEEqYx60H0-0dxLR0K_bLg",
      authDomain: "kwitter-9cf53.firebaseapp.com",
      databaseURL: "https://kwitter-9cf53-default-rtdb.firebaseio.com",
      projectId: "kwitter-9cf53",
      storageBucket: "kwitter-9cf53.appspot.com",
      messagingSenderId: "747030827232",
      appId: "1:747030827232:web:de852871c7053788968085",
      measurementId: "G-RWVL7SP3V9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData(); 








function addRoom() {
 
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}





function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}


function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
var firebaseConfig = {
      apiKey: "AIzaSyDp-rU5K1oW6P21OucBB62qP4VoDmsNDpw",
      authDomain: "kwitter-f1421.firebaseapp.com",
      databaseURL: "https://kwitter-f1421-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1421",
      storageBucket: "kwitter-f1421.appspot.com",
      messagingSenderId: "621301541659",
      appId: "1:621301541659:web:d0e7195226bc873ad181be"
    };    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
 function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row; });
       });
      //End code
       }
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


const firebaseConfig = {
      apiKey: "AIzaSyDenUIHpg2vdcsGYBIu3ur0jBStTfmRN_s",
      authDomain: "kwitter-28559.firebaseapp.com",
      databaseURL: "https://kwitter-28559-default-rtdb.firebaseio.com",
      projectId: "kwitter-28559",
      storageBucket: "kwitter-28559.appspot.com",
      messagingSenderId: "206465433664",
      appId: "1:206465433664:web:4e756478c7efb7765e9fa5"
    };

    firebase.initializeApp(firebaseConfig);




   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


 document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



 function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);

      window.location.replace("kwitter_page.html");
    
    }

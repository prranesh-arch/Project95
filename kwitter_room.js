const firebaseConfig = {
      apiKey: "AIzaSyCSSggTGbyn_-_2flEDwcfwmHX6iO59xDE",
      authDomain: "project94-1ed42.firebaseapp.com",
      databaseURL: "https://project94-1ed42-default-rtdb.firebaseio.com",
      projectId: "project94-1ed42",
      storageBucket: "project94-1ed42.appspot.com",
      messagingSenderId: "344951059503",
      appId: "1:344951059503:web:398012cc8af73b305342da",
      measurementId: "G-6MTN4LP71V"
    };
    const app = initializeApp(firebaseConfig);
    
user_name = localStorage.getItem ("user_name");
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
function getData() {  
      firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
           childKey  = childSnapshot.key;
           Room_names = childKey;
          
           //new code
    
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
      
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

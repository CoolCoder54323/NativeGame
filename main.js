var state = 1;
document.getElementById("yes").innerHTML = "englishmen";
document.getElementById("no").innerHTML = "native";





function yes() {
  var story = document.getElementById("story").innerHTML
  switch (state) {
      
    case 1:
      jump("You wake up with screaming piercing your ears from outside from the cold Southern English environment. You sit up startled and dazed as two Indians break through your door. It’s the Wampanoag Indians, you have a peace treaty with them, but it has been slowly crumbling over the years. Do you...",
           "Fight",
           "Jump out the window behind you",
           2)
      break;
    case 2:
      jump("You pick up your knife off of the bedside table and stare the Indians down scanning them to decide your best chance of surviving. One of the Wampanoag is holding a tomahawk while the other is holding a bow. Do you attack the...",
           "Tomahawk",
           "Bow",
           4)
      break;
    case 3:
      jump("",
           "",
           "",
           0)
      break;
    case 4:
      jump("You lunge at the man holding the tomahawk and stab him in the chest. He screams in agony dropping his weapon. The bow attempts to shoot you, missing by an inch hitting the wall. You make your quick escape and stare behind to make sure no one is chasing you. Looking back may not have been the best decision, considering that you instantly fall straight onto your knife and it impales your leg. Do you...",
           "Do the most stupid thing, ignoring the bleeding wound completely.",
           " Search an abandoned house for medical supplies",
           14)
            break;
    case 5:
      jump("",
           "",
           "",
           0)
            break;
    case 6:
      jump("",
           "",
           "",
           0)
            break;
    case 7:
      jump("",
           "",
           "",
           0)
            break;
    case 8:
      jump("",
           "",
           "",
           0)
            break;
    case 9:
      jump("",
           "",
           "",
           0)
            break;
    case 10:
      jump("",
           "",
           "",
           0)
            break;
    case 11:
      jump("",
           "",
           "",
           0)
            break;
    case 12:
      jump("",
           "",
           "",
           0)
            break;
    case 13:
      jump("",
           "",
           "",
           0)
            break;
    case 14:
      jump("You attempt to leave the house only to find a group of the Wampanoag Indians right outside of the door. They must have heard you rummaging the house. Of course, you die.",
           "reset",
           "reset",
           1)
          break;
    case 15:
      jump("You attempt to leave the house only to find a group of the Wampanoag Indians right outside of the door. They must have heard you rummaging the house. Of course, you die.",
           "reset",
           "reset",
           1)
            break;
    case 16:
      jump("",
           "",
           "",
           0)
            break;
    case 17:
      jump("",
           "",
           "",
           0)
            break;
    case 18:
      jump("",
           "",
           "",
           0)
            break;
    case 19:
      jump("",
           "",
           "",
           0)
            break;
    case 20:
      jump("",
           "",
           "",
           0)
            break;
    case 21:
      jump("",
           "",
           "",
           0)
            break;
    case 22:
      jump("",
           "",
           "",
           0)
            break;
    case 23:
      jump("",
           "",
           "",
           0)
            break;
    case 24:
      jump("",
           "",
           "",
           0)
            break;
    case 25:
      jump("",
           "",
           "",
           0)
            break;
    case 26:
      jump("",
           "",
           "",
           0)
            break;
    case 27:
      jump("",
           "",
           "",
           0)
            break;
    case 28:
      jump("",
           "",
           "",
           0)
            break;
    case 29:
      jump("",
           "",
           "",
           0)
            break;
    case 30:
      jump("",
           "",
           "",
           0)
            break;
    case 32:
      jump("",
           "",
           "",
           0)
            break;
    case 33:
      jump("",
           "",
           "",
           0)
            break;
    case 34:
      jump("",
           "",
           "",
           0)
     break;
    case 35:
      jump("",
           "",
           "",
           0)
            break;

    case 36:
      jump("",
           "",
           "",
           0)
            break;

    case 37:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 40:
      jump("",
           "",
           "",
           0)
            break;
    case 41:
      jump("",
           "",
           "",
           0)
            break;
    case 42:
      jump("",
           "",
           "",
           0)
            break;
    case 43:
      jump("",
           "",
           "",
           0)
            break;
    case 44:
      jump("",
           "",
           "",
           0)
            break;
    case 45:
      jump("",
           "",
           "",
           0)
            break;
    case 46:
      jump("",
           "",
           "",
           0)
            break;
    case 47:
      jump("",
           "",
           "",
           0)
            break;
    case 48:
      jump("",
           "",
           "",
           0)
            break;
    case 49:
      jump("",
           "",
           "",
           0)
            break;
    
  }
  scrollD()
}

function no() {

  var story = document.getElementById("story").innerHTML
  switch (state) {

      
    case 1:
      jump("",
           "",
           "",
           0)
      break;
    case 2:
      jump("",
           "",
           "",
           0)
      break;
    case 3:
      jump("",
           "",
           "",
           0)
      break;
    case 4:
      jump("",
           "",
           "",
           0)
            break;
    case 5:
      jump("",
           "",
           "",
           0)
            break;
    case 6:
      jump("",
           "",
           "",
           0)
            break;
    case 7:
      jump("",
           "",
           "",
           0)
            break;
    case 8:
      jump("",
           "",
           "",
           0)
            break;
    case 9:
      jump("",
           "",
           "",
           0)
            break;
    case 10:
      jump("",
           "",
           "",
           0)
            break;
    case 11:
      jump("",
           "",
           "",
           0)
            break;
    case 12:
      jump("",
           "",
           "",
           0)
            break;
    case 13:
      jump("",
           "",
           "",
           0)
            break;
    case 14:
      jump("",
           "",
           "",
           0)
            break;
    case 15:
      jump("",
           "",
           "",
           0)
            break;
    case 16:
      jump("",
           "",
           "",
           0)
            break;
    case 17:
      jump("",
           "",
           "",
           0)
            break;
    case 18:
      jump("",
           "",
           "",
           0)
            break;
    case 19:
      jump("",
           "",
           "",
           0)
            break;
    case 20:
      jump("",
           "",
           "",
           0)
            break;
    case 21:
      jump("",
           "",
           "",
           0)
            break;
    case 22:
      jump("",
           "",
           "",
           0)
            break;
    case 23:
      jump("",
           "",
           "",
           0)
            break;
    case 24:
      jump("",
           "",
           "",
           0)
            break;
    case 25:
      jump("",
           "",
           "",
           0)
            break;
    case 26:
      jump("",
           "",
           "",
           0)
            break;
    case 27:
      jump("",
           "",
           "",
           0)
            break;
    case 28:
      jump("",
           "",
           "",
           0)
            break;
    case 29:
      jump("",
           "",
           "",
           0)
            break;
    case 30:
      jump("",
           "",
           "",
           0)
            break;
    case 32:
      jump("",
           "",
           "",
           0)
            break;
    case 33:
      jump("",
           "",
           "",
           0)
            break;
    case 34:
      jump("",
           "",
           "",
           0)
     break;
    case 35:
      jump("",
           "",
           "",
           0)
            break;

    case 36:
      jump("",
           "",
           "",
           0)
            break;

    case 37:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 40:
      jump("",
           "",
           "",
           0)
            break;
    case 41:
      jump("",
           "",
           "",
           0)
            break;
    case 42:
      jump("",
           "",
           "",
           0)
            break;
    case 43:
      jump("",
           "",
           "",
           0)
            break;
    case 44:
      jump("",
           "",
           "",
           0)
            break;
    case 45:
      jump("",
           "",
           "",
           0)
            break;
    case 46:
      jump("",
           "",
           "",
           0)
            break;
    case 47:
      jump("",
           "",
           "",
           0)
            break;
    case 48:
      jump("",
           "",
           "",
           0)
            break;
    case 49:
      jump("",
           "",
           "",
           0)
            break;



  }
  scrollD()
}


function scrollD() {
  var objDiv = document.getElementById("story");
  objDiv.scrollTop = objDiv.scrollHeight;
}
function jump(story,yes,no,state1){
  var storyOG = document.getElementById("yes").innerHTML
      document.getElementById("story").innerHTML = storyOG + "<br><br>" + story;
      document.getElementById("yes").innerHTML = yes;
      document.getElementById("no").innerHTML = no;
      state = state1
}

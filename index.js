function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return "This one is on me!"
  } else if (someValue <= 2000){
    return 'That will be twenty bucks.'
  } else if (someValue <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (someValue => 2501) {
    return 'No can do.'
  }
}

function ternaryCheckCity(City){
   return City === 'NYC'? "Ok, sounds good.": 'No go.';// Write your code here!
}


function switchOnCharmFromTip(generous){
  switch (generous){
    case 'generous':
      return 'Thank you so much.'
    case "not as generous":
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }// Write your code here!
  
}
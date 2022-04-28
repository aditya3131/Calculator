var displayText = document.getElementById("screen");
var clearBtn = document.getElementById("clear");

function clearTheScreen(){
  displayText.innerText="";
  return;
}

clearBtn.addEventListener('click',clearTheScreen);
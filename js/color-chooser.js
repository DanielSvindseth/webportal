function chooseHeaderColor1() {
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);
  var a = 0.9;
  var header = document.getElementById('header');
  var settingsPanel = document.getElementById('settings-panel');
  header.style.backgroundColor='rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  settingsPanel.style.backgroundColor='rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function createCustomColor(color) {
  localStorage.setItem("customColor", color);
}

function applyCustomColor() {
  var customColor = localStorage.getItem("customColor");
  var header = document.getElementById('header');
  var settingsPanel = document.getElementById('settings-panel');
  header.style.backgroundColor='#' + customColor;
  settingsPanel.style.backgroundColor='#' + customColor;
  console.log('#' + customColor);
}

function switchAnimatedHeader() {
  var headerAnimation = document.getElementsByClassName('game-surface-header')[0];
  if (headerAnimation.style.display === 'block') {
    headerAnimation.style.display = 'none';
  } else {
    headerAnimation.style.display = 'block';
  }
}

/*
function chooseButtonColor() {
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 20) + 1);
  var b = Math.floor((Math.random() * 120) + 1);
  var a = 1;
  var button = document.getElementsByTagName("BUTTON");
  var i;
  for (i = 0; i < button.length; i++) {
    button[i].style.backgroundColor='rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  }
}
*/

//var r = Math.floor((Math.random() * 255) + 1);
//var g = Math.floor((Math.random() * 255) + 1);
//var b = Math.floor((Math.random() * 255) + 1);
//var a = 1;

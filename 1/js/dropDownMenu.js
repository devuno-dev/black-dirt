function dropDownFunc() {
  var hide = document.getElementById('navTabsSectionMobile')
  var down = document.getElementById('dropDown')
  var up = document.getElementById('dropUp')

  if (hide.className.indexOf(' w3-show w3-animate-left') == -1){
    hide.className += ' w3-show w3-animate-left';
  }
  else {
    hide.className = hide.className.replace('w3-show w3-animate-left', '')
  }

  if (down.className.indexOf(' w3-hide w3-animate-opacity') == -1){
    down.className += ' w3-hide w3-animate-opacity';
  }
  else {
    down.className = down.className.replace('w3-hide w3-animate-opacity', '')
  }

  if (up.className.indexOf(' w3-show') == -1){
    up.className += ' w3-show';
  }
  else {
    up.className = up.className.replace('w3-show', '')
  }
}

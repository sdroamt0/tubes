/*
function w3_sidenav_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
}
function w3_sidenav_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
}
*/
function w3_sidenav_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementsByClassName("w3-sidenav")[0].style.width = "25%";
  document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
  document.getElementsByClassName("w3-opennav")[0].style.display = 'none';
}
function w3_sidenav_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
  document.getElementsByClassName("w3-opennav")[0].style.display = "inline-block";
}
function my_modal_open(aUrl) {
  $('#tubes-info-content').load(aUrl);
  document.getElementById('tubes-info').style.display='block';
  //$('#tubes-info')[0].style.display='block';
}
function my_modal_close() {
  $('#tubes-info-content').html("<p>...</p>");
  document.getElementById('tubes-info').style.display='none';
  //$('#tubes-info')[0].style.display='none';
}
/*
//function my_show(aUrl, close_menu=true) {
function my_show(aUrl, close_menu) {
  var close_menu = typeof close_menu !== 'undefined' ?  close_menu : true;
  $('#valves_main_content').load(aUrl)
  if (close_menu) w3_sidenav_close();
}
*/


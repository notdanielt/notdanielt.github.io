var timer = 0;
function clickjQuery(el) {el[0].click()}
function goto(link) {clickjQuery($("<a href='"+link+"' target='_blank'></a>"))}
function switchpage(page) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.style.display = 'none';
  })
  document.getElementById(page).style.display = "";
  window.scrollTo(0, 0);
}

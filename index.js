const elem = document.getElementById('searchInput')

function Search(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'https://www.google.com/search?q=' + elem.value;
    }
  }
function SearchBtn(){
    window.location = 'https://www.google.com/search?q=' + elem.value;

}
elem.addEventListener("keyup", Search); 

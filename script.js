function search() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('procura')
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none"
    } else {
      x[i].style.display = "list-item";
    }
  }
}
if(input === ''){
  for(i = 0; i < x.lenght; i++) {
    x[i].style.display="none"
  }
}
else{
  for (i = 0; i < x.lenght; i++){
    if (!x[i].innerHTML.toLowerCase().includes(input)){
      
    }
    else{
      x[i].style.display="list-item";
    }
  }
}
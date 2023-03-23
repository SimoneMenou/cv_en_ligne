const checkbox = document.querySelector("#input");

function changeTheme(){
  if(checkbox.checked){
    document.body.id="dark";
    
  }
  else{
    document.body.id="";
  }
}
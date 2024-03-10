window.onload = function(){

  let headerPlaceholder = document.getElementById("header-place");
  let background = document.getElementById("background");
  fetch('../../header.html',{mode: 'no-cors'})
  .then(response => response.text())
  .then(headerContent => {
      background.style.display = "block";
      background.style.opacity = "1";
      headerPlaceholder.innerHTML = headerContent;
      let device_height = window.innerHeight;
      let about_me_button = document.getElementById("about_me_button");
      about_me_button.addEventListener("click",function(event){
        window.location.href ="../../index.html";
      })
    
      let leetcode_record_button = document.getElementById("note_button");
      leetcode_record_button.addEventListener("click",function(event){
        window.location.href ="../../note.html";
      })
    
      let game_development_button = document.getElementById("game_development_button");
      game_development_button.addEventListener("click",function(event){
        window.location.href ="../../game_development.html";
      })
    
      let web_development_button = document.getElementById("web_development_button");
      web_development_button.addEventListener("click",function(event){
        window.location.href ="../../web_development.html";
      })
    
      let contact_me_button = document.getElementById("contact_me_button");
      contact_me_button.addEventListener("click",function(event){
        window.location.href ="../../contact_me.html";
      })
    
  })
  .catch(error => {
      console.error('header error：', error);
  });

  
  
}



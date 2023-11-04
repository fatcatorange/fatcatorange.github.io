window.onload = function(){
  let about_me_button = document.getElementById("about_me_button");
  about_me_button.addEventListener("click",function(event){
    console.log("index");
    window.location.href ="../../index.html";
  })

  let leetcode_record_button = document.getElementById("leetcode_record_button");
  leetcode_record_button.addEventListener("click",function(event){
    window.location.href ="../../leetcode_record.html";
  })

  let game_development_button = document.getElementById("game_development_button");
  game_development_button.addEventListener("click",function(event){
    window.location.href ="../../leetcode_record.html";
  })

  let web_development_button = document.getElementById("web_development_button");
  web_development_button.addEventListener("click",function(event){
    window.location.href ="../../leetcode_record.html";
  })

  let contact_me_button = document.getElementById("contact_me_button");
  contact_me_button.addEventListener("click",function(event){
    window.location.href ="../../contact_me.html";
  })
}



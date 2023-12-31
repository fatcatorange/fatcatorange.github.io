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
      //console.log(background.style.height);
      /*if(background.offsetHeight - 200 < screen.height)
      {
        background.style.height = screen.height + "px";
      }*/
  })
  .catch(error => {
      console.error('header error：', error);
  });

  function waitForElementToAppear(elementId, callback) {
    const intervalId = setInterval(function() {
      const element = document.getElementById(elementId);
      if (element) {
        clearInterval(intervalId); // 停止轮询
        callback(element);
      }
    }, 100); // 每秒检查一次
  }
  
  waitForElementToAppear('about_me_button', function(element) {
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
      window.location.href ="../../game_development.html";
    })
  
    let web_development_button = document.getElementById("web_development_button");
    web_development_button.addEventListener("click",function(event){
      window.location.href ="../../leetcode_record.html";
    })
  
    let contact_me_button = document.getElementById("contact_me_button");
    contact_me_button.addEventListener("click",function(event){
      window.location.href ="../../contact_me.html";
    })
    
  });

  
}



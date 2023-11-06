
window.onload = function(){

  let headerPlaceholder = document.getElementById("header-place");
  let background = document.getElementById("background");
  fetch('./header.html',{mode: 'no-cors'})
  .then(response => response.text())
  .then(headerContent => {
      // 将header内容插入到占位符位置
      headerPlaceholder.innerHTML = headerContent;
      background.style.display = "block";
      background.style.opacity = "1";
  })
  .catch(error => {
      console.error('加载header内容时发生错误：', error);
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
  
  // 用法示例
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
    // 在这里执行物件出现后的操作
  });

  //var headerContent = '<header> <div class="header-all"> <div class = "header-background"> </div> <div class = "header-content"> <div class = "connect_link" id="about_me_button"> <p>About me</p> </div> <div class = "connect_link" id="leetcode_record_button"> <p>leetcode record</p> </div> <div class = "connect_link" id="game_development_button"> <p>Game Development</p> </div> <div class = "connect_link" id="web_development_button"> <p>Web Development</p> </div> <div class = "connect_link" id="contact_me_button"> <p>Contact me</p> </div> </div> </div> <div class = "header-space"> </div> </header>';
  setTimeout(function(){

    
  },300)

}



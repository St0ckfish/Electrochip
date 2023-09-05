var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);

    const toggleBtnIcon = document.querySelector("#checkbox");
    const dropDown = document.querySelector(".dropdown");
    
    
    function myFunction() {
      if (dropDown.classList.contains("open")) {
        dropDown.classList.remove("open");
      } else {
        dropDown.classList.remove("close");
        dropDown.classList.toggle("open");
      }
    }
    function closee() {
      if (dropDown.classList.contains("open")) {
        dropDown.classList.remove("open");
        document.getElementById("checkbox").checked = false;
      }
    }
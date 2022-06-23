
    window.onscroll = () => {
      if (window.scrollY >10 || document.body.clientWidth <990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');   
        if  (document.body.clientWidth <990){           
            document.getElementById('impadw').classList.add('padw');
        }
        if  (document.body.clientWidth <750){
            document.getElementById('banim').src="images/73207.jpg";         
       }
      }else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if  (document.body.clientWidth >=990){           
          document.getElementById('impadw').classList.remove('padw');
        }
        if  (document.body.clientWidth >=750){
            document.getElementById('banim').src="images/73208.jpg";         
        }
      }
    }

    window.onresize = () => {
      if  (document.body.clientWidth <750){
        document.getElementById('banim').src="images/73207.jpg";         
      }else{
        document.getElementById('banim').src="images/73208.jpg";
      }
      if (window.scrollY >10 || document.body.clientWidth <990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');   
        if  (document.body.clientWidth <990){           
            document.getElementById('impadw').classList.add('padw');
        }
      }else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if  (document.body.clientWidth >=990){           
          document.getElementById('impadw').classList.remove('padw');
        }        
      }
    }

    window.onload = () => {
      if (window.scrollY >10 || document.body.clientWidth <990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');   
        if  (document.body.clientWidth <990){           
            document.getElementById('impadw').classList.add('padw');
        }
        if  (document.body.clientWidth <750){
            document.getElementById('banim').src="images/73207.jpg";         
       }
      }else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if  (document.body.clientWidth >=990){           
          document.getElementById('impadw').classList.remove('padw');
        }
        if  (document.body.clientWidth >=750){
            document.getElementById('banim').src="images/73208.jpg";         
        }
      }
    }


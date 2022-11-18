const nav = `
<nav id="van" class="navbar navbar-expand-lg navbar-dark nav-nobg fixed-top" role="navigation" style="font-weight: bold;">         
   <a class="navbar-brand" href="index.html">         
   </a> 
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto navbar-right">
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" 
               data-toggle="dropdown" role="button" aria-haspopup="true"  aria-expanded="false">
            Home</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="index.html">Home</a> 
               <a class="dropdown-item" href="organization.html#comm">Organizing Committee </a>     
               <a class="dropdown-item" href="porganization.html">Program Committee</a>                     
               <a class="dropdown-item" href="latestnews.html">Latest events</a>                     
            </div>
         </li>
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="calls.html" id="navbarDropdown" 
               data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Submission</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="cfp.html">Call for Papers (International Track)</a> 
               <a class="dropdown-item" href="cfss.html">Call for Papers (International Special Session)</a> 
               <a class="dropdown-item" href="dcfp.html">論文徵稿(Domestic Track)</a>
               <a class="dropdown-item" href="cfhss.html">Special Session for High School Students </a>
               <a class="dropdown-item" href="call_sponsor.html">Call for Sponsor</a>
               <a class="dropdown-item" href="imdate.html">Important Dates</a> 
            </div>
         </li>
         <li class="nav-item dropdown">                  
            <a class="nav-link dropdown-toggle " href="calls.html" id="navbarDropdown" 
               data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Registration</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="registration.html">Registration</a>
               <a class="dropdown-item" href="accepted.html">Accepted Papers</a>
               
            </div>
         </li>
         <li class="nav-item dropdown">                  
            <a class="nav-link dropdown-toggle" href="program.html" id="navbarDropdown" 
               data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Program</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="program.html">Program-at-a-Glance</a> 
               <a class="dropdown-item" href="keynote.html">Keynote Speech</a>
               <a class="dropdown-item" href="iprogram.html">International Track</a> 
               <a class="dropdown-item" href="dprogram.html">Domestic Track</a>
               <a class="dropdown-item" href="hprogram.html">High School Sessions</a>
               <a class="dropdown-item" href="posterGL.html">Presestation Instructions</a>
            </div>
         </li>
         <li class="nav-item dropdown">                  
            <a class="nav-link dropdown-toggle" href="program.html" id="navbarDropdown" 
               data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Panel & Competition</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item disabled" href="phd.html">數位轉型</a>
               <a class="dropdown-item" href="phd.html">TAAI 2022 PhD/Master Award</a>
               <a class="dropdown-item disabled" href="AICUP.html">AI Young Woman Star</a>
               <a target="_blank" class="dropdown-item" href="https://www.tcga.tw/taai2022/zh_TW/">Computer Game Tournaments</a>
               <a target="_blank" class="dropdown-item" href="http://site.etop.org.tw/2022/icp/index.php?c=msg14211&m=msg_detail_layout&d=msg&id=74">智慧計算學門成果發表會</a>
            </div>
         </li>
         <li class="nav-item dropdown">
            <!-- Information-->
            <a class="nav-link dropdown-toggle" href="conference.html" id="navbarDropdown" 
               data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Events & Information</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">                     
               <a class="dropdown-item" href="venue.html">Banquet & Venue & Accommodation </a>   
               <a class="dropdown-item disabled" href="photos.html">Photos</a>                                          
            </div>
         </li>
      </ul>
   </div>
</nav>
`

document.write(nav);

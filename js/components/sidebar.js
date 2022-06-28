const sidebar = `
<div  style="color: dimgrey; margin-top: 30px; " class="col-lg-3 text-center " >            
    <div id="news" >
    <div class="container mt-5 mb-5">
        <div id="news" class="row">
        <div style="margin-bottom: 0; width:100%; text-align: center;  position: relative; line-height: 40px; 
                    background-color: rgb(230,230,230); border-radius: 20px 20px 0 0;"> 
            <h4 style="line-height: 40px; position: relative; top: 10px;">Latest Events</h4>
            <div style="position: absolute; right: 0; bottom: -10px;"><a href="latestnews.html">more...</a> </div>
        </div>
            <iframe class="tml" scrolling="no" width="100%" height="550px" src="ltn.html" frameborder="0" ></iframe>
        </div> 
    </div>
    </div>
    <div style="background:  rgb(230,230,230); margin-top: 5px; border-radius: 20px;">          
        <h4 id="date" style="font-weight:bold;"></br>Host</h4>
        <figure >
            <a style="color: dimgrey;" href="https://web.cyut.edu.tw/index.php?Lang=en" target="new">
            <img style="margin: auto; width: 95%; padding: 10%; max-width: 400px;" src="images/cyutlogo.png" alt="Chaoyang University of Technology, Taiwan.">
            <figcaption style="padding-bottom: 20px; width: 95%; margin: auto;">Chaoyang University of Technology, Taiwan. </figcaption>
            </a>
        </figure>
    </div>
</div>
`

document.write(sidebar);
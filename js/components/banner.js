const mobile_img = 'taai2022banner.png'
const img = 'taai2022banner.jpg'
const banner = `
<div id="impadw" class="jumbotron-fluid" style="margin: auto; ">
    <img id="banim" src="images/${img}" class="img-fluid">	
</div>
`

document.write(banner)


window.onscroll = () => {
    if (window.scrollY > 10 || document.body.clientWidth < 990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');
        if (document.body.clientWidth < 990) {
            document.getElementById('impadw').classList.add('padw');
        }
        if (document.body.clientWidth < 750) {
            document.getElementById('banim').src = `images/${mobile_img}`;
        }
    } else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if (document.body.clientWidth >= 990) {
            document.getElementById('impadw').classList.remove('padw');
        }
        if (document.body.clientWidth >= 750) {
            document.getElementById('banim').src = `images/${img}`;
        }
    }
}

window.onresize = () => {
    if (document.body.clientWidth < 750) {
        document.getElementById('banim').src = `images/${mobile_img}`;
    } else {
        document.getElementById('banim').src = `images/${img}`;
    }
    if (window.scrollY > 10 || document.body.clientWidth < 990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');
        if (document.body.clientWidth < 990) {
            document.getElementById('impadw').classList.add('padw');
        }
    } else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if (document.body.clientWidth >= 990) {
            document.getElementById('impadw').classList.remove('padw');
        }
    }
}

window.onload = () => {
    if (window.scrollY > 10 || document.body.clientWidth < 990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');
        if (document.body.clientWidth < 990) {
            document.getElementById('impadw').classList.add('padw');
        }
        if (document.body.clientWidth < 750) {
            document.getElementById('banim').src = `images/${mobile_img}`;
        }
    } else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if (document.body.clientWidth >= 990) {
            document.getElementById('impadw').classList.remove('padw');
        }
        if (document.body.clientWidth >= 750) {
            document.getElementById('banim').src = `images/${img}`;
        }
    }
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

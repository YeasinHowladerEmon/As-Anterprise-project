function valueLinks(evt, product) {
    var i, tabcontent, tabLinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(product).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click()

// sticky top

let element = document.getElementById("navbar");
let button = document.getElementById("btn")
// let element2 = document.getElementById("page")
// window.addEventListener("scroll", handleScroll)
// const handleScroll = () =>{
    //     if(window.scrollY > 50){
//         element.classList.add('bg-grayBlue');
//     }
//     else{
//         element.classList.remove('bg-grayBlue');
//     }
// }

window.onscroll = function scrollFunction() {
    if (window.scrollY > 100) {
        element.classList.add("bg-grayBlue")
        button.style.display = "block";
        // element2.classList.add("whiteColor")
    }
    else {
        element.classList.remove("bg-grayBlue")
        button.style.display = "none";
        // element.classList.remove("blackColor")
    }
}

// window.addEventListener("scroll", topUp())
// function scrollFunction() {
//     if (window.scrollY > 20) {
//     } else {
//     }
// }



// loader function
let preLoader = document.getElementById('loading')
function timeLoader(){
    setTimeout(() => {
        preLoader.style.display = "none";
    }, 3000);
}



{/* <article  class="col cards">
<div class="grid-inner card-item">
    <div class="card-image">
        <img src="images/acdivoca.png" width="300" height="200" alt="images">
    </div>
    <div class="card-desc">
        <h3>
            Lorem ipsum dolor sit amet.
        </h3>
        <span>
            Lorem, ipsum.
        </span>
    </div>
</div>
</article>
<article  class="col-lg-3 col-md-4 col-sm-6 cards">
<div class="grid-inner card-item">
    <div class="card-image">
        <img src="images/acdivoca.png" width="300" height="200" alt="images">
    </div>
    <div class="card-desc">
        <h3>
            Lorem ipsum dolor sit amet.
        </h3>
        <span>
            Lorem, ipsum.
        </span>
    </div>
</div>
</article>
<article  class="col-lg-3 col-md-4 col-sm-6 cards">
<div class="grid-inner card-item">
    <div class="card-image">
        <img src="images/acdivoca.png" width="300" height="200" alt="images">
    </div>
    <div class="card-desc">
        <h3>
            Lorem ipsum dolor sit amet.
        </h3>
        <span>
            Lorem, ipsum.
        </span>
    </div>
</div>
</article>
<article  class="col-lg-3 col-md-4 col-sm-6 cards">
<div class="grid-inner card-item">
    <div class="card-image">
        <img src="images/acdivoca.png" width="300" height="200" alt="images">
    </div>
    <div class="card-desc">
        <h3>
            Lorem ipsum dolor sit amet.
        </h3>
        <span>
            Lorem, ipsum.
        </span>
    </div>
</div>
</article> */}
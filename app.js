function valueLinks(evt, product){
    var i , tabcontent, tabLinks;
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
let element2 = document.getElementById("page")
// window.addEventListener("scroll", handleScroll)
// const handleScroll = () =>{
//     if(window.scrollY > 50){
//         element.classList.add('bg-grayBlue');
//     }
//     else{
//         element.classList.remove('bg-grayBlue');
//     }
// }

window.onscroll = function(){scrollFunction()}
function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        element.classList.add("bg-grayBlue")
        // element2.classList.add("whiteColor")
    }
    else{
        element.classList.remove("bg-grayBlue")
        // element.classList.remove("blackColor")
    }
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
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
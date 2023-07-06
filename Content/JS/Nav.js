const elaborateNav = () => {
    let navItem = document.querySelector('.navbarElement');

    navItem.innerHTML = `
        <div class="navElement">
            <img src="../images/BERCOWORLogo.png" class="sampleLogo"
                alt="sampleLogo">
                <div class="navElementItems">
                    <div class="searchElement">
                        <input type="text" class="searchBoxElement"
                            placeholder="Search for a product...">
                            <button class="searchButton">Search</button>
                    </div>
                    <div class="shoppingCartIcon">
                        <a href="#">
                            <img src="../images/ShoppingCartImage.png"
                                alt="CartImage"></a>
                    </div>
                    <div class="userIcon">
                        <a href="#"><img src="../images/userImage.png"
                            alt="UserImage">
                        </a>
                    </div>
                </div>
            </div>
            <ul class="linksArea">
                <li class="linkItem"><a href="#">Home</a></li>
                <li class="linkItem"><a href="#">Technology</a></li>
                <li class="linkItem"><a href="#">Fashion</a></li>
                <li class="linkItem"><a href="#">For women</a></li>
                <li class="linkItem"><a href="#">For men</a></li>
                <li class="linkItem"><a href="#">For kids</a></li>
            </ul>`
}

elaborateNav();
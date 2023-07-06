const elaborateFooter = () => {
    let footerItem = document.querySelector('footer');

    footerItem.innerHTML = `
        <div class="footerContentArea">
            <img src="../images/BERCOWORLogo.png" class="logoElement" alt="sampleLogo">
                <div class="footerULContainerArea">
                    <ul class="categoryElement">
                        <li class="menTitleArea">Men</li>
                        <li><a href="#" class="footerLink">Sunglasses</a></li>
                        <li><a href="#" class="footerLink">Hats</a></li>
                        <li><a href="#" class="footerLink">Shirts</a></li>
                        <li><a href="#" class="footerLink">Jackets</a></li>
                        <li><a href="#" class="footerLink">Coats</a></li>
                        <li><a href="#" class="footerLink">Suits</a></li>
                        <li><a href="#" class="footerLink">Bracelets</a></li>
                        <li><a href="#" class="footerLink">Watches</a></li>
                        <li><a href="#" class="footerLink">Wallets</a></li>
                        <li><a href="#" class="footerLink">Socks</a></li>
                        <li><a href="#" class="footerLink">Shoes</a></li>
                        <li><a href="#" class="footerLink">Boots</a></li>
                    </ul>
                    <ul class="categoryElement">
                        <li class="womenTitleArea">Women</li>
                        <li><a href="#" class="footerLink">Sunglasses</a></li>
                        <li><a href="#" class="footerLink">Hats</a></li>
                        <li><a href="#" class="footerLink">Shirts</a></li>
                        <li><a href="#" class="footerLink">Jackets</a></li>
                        <li><a href="#" class="footerLink">Suits</a></li>
                        <li><a href="#" class="footerLink">Coats</a></li>
                        <li><a href="#" class="footerLink">Necklaces</a></li>
                        <li><a href="#" class="footerLink">Skirts</a></li>
                        <li><a href="#" class="footerLink">Dresses</a></li>
                        <li><a href="#" class="footerLink">Bracelets</a></li>
                        <li><a href="#" class="footerLink">Wallets</a></li>
                        <li><a href="#" class="footerLink">Socks</a></li>
                        <li><a href="#" class="footerLink">Sandals</a></li>
                        <li><a href="#" class="footerLink">Shoes</a></li>
                        <li><a href="#" class="footerLink">Boots</a></li>
                    </ul>
                </div>
        </div>
        <p class="footerTitle">About us</p>
        <p class="infoElement">Welcome to our thriving ecommerce
                            store! <br>Discover an exceptional range of products
                            tailored to suit your every need. From trendy
                            fashion essentials to cutting-edge electronics, we
                            offer unrivaled quality and unbeatable prices. With
                            hassle-free browsing, secure transactions, and
                            lightning-fast shipping, we ensure a seamless
                            shopping experience.</p>
        <p class="infoElement">Our address: Simulated address, A street - 530 - A country</p>
        <p class="infoElement">Phone: 000 0000 00 00</p>
        <div class="footerSocialContainerElement">
            <div>
                <a href="#" class="socialLinkItem">Terms</a>
                <a href="#" class="socialLinkItem">Privacy</a>
            </div>
            <div>
                <a href="#" class="socialLinkItem">Instagram</a>
                <a href="#" class="socialLinkItem">LinkedIn</a>
            </div>
        </div>
        <p class="footerCreditArea">E-Commerce Store</p>`
}

elaborateFooter();
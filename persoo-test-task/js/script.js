var productElements = document.querySelectorAll('.add-to-cart');
var itemName;
var itemPrice;
var imgsrc;

for (let i = 0; i < productElements.length; i++) {
    productElements[i].addEventListener('click', function GetProductInfo(e) {
        var elem = e.currentTarget;
        var parent = elem.closest('.search-result__element');
        var img = parent.querySelector('img');
        itemName = parent.querySelector('h4').innerText;
        itemPrice = parent.querySelector('p').innerText;
        imgsrc = img.getAttribute("src");
    })
}

var buttons = document.querySelectorAll('.add-to-cart');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function AddToCartItem() {
        var searchBlock = document.querySelector('.search-block');
        searchBlock.style.display = 'none';

        var cartBlock = document.querySelector('.cart-items-dropdown');
        cartBlock.style.display = 'block';

        var counter = document.querySelector('.item-cnt');
        counter.style.opacity = '1';
        
        var elemBlock = document.querySelector('.cart--item');

        var img = document.createElement('img');
        img.setAttribute('src', imgsrc);

        var productName = document.createElement('p');
        productName.classList.add('item-name');
        productName.innerHTML = itemName;

        var productPrice = document.createElement('p');
        productPrice.classList.add('item-price');
        productPrice.innerHTML = itemPrice;

        var itemSize = document.createElement('p');
        itemSize.classList.add('item-size');
        itemSize.innerHTML = 'size 11';

        var itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');

        elemBlock.appendChild(img)
        elemBlock.appendChild(itemInfo)
        itemInfo.appendChild(productName)
        itemInfo.appendChild(itemSize)
        elemBlock.appendChild(productPrice)
    })

}
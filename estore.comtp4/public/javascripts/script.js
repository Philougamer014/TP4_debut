var totalPrice = 0;
var totalAmouthArticle = 0;


$(document).ready(function() {
    $('.info-button').click(function() {
        var articleId = $(this).data('article-id');
        var prix = $(this).data('prix');
        var name = $(this).data('name');

        console.log(articleId);
        console.log(prix);
        console.log(name);

        totalPrice += prix;
        totalAmouthArticle++;

        // Création du HTML pour la nouvelle ligne dans le tbody avec la classe 'tbody-cart'
        var newRowHtml = `
            <tr>
                <td class="checkout-product">
                    <div class="product-cart d-flex">
                        <div class="product-thumb">
                            <img src="assets-donottouch/images/product-cart/product-1.png" alt="Product">
                        </div>
                        <div class="product-content media-body">
                            <h5 class="title"><a href="#">${name}</a></h5>
                            <ul>
                                <li><span>Brown</span></li>
                                <li><span>XL</span></li>
                                <li><a class="delete" href="javascript:void(0)"><i class="mdi mdi-delete"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </td>
                <td class="checkout-quantity">
                    <div class="product-quantity d-inline-flex">
                        <button type="button" class="sub"><i class="mdi mdi-minus"></i></button>
                        <input type="text" value="1">
                        <button type="button" class="add"><i class="mdi mdi-plus"></i></button>
                    </div>
                </td>
                <td class="checkout-price">
                    <p class="price">$${prix}</p>
                </td>
            </tr>
        `;

        
        $('.tbody-cart').append(newRowHtml);

        updateSubtotalPrice(totalPrice)
        updateIconText(totalAmouthArticle); 
    });
});

function updateSubtotalPrice(newPrice) {

    var priceElement = document.querySelector('.checkout-sub-total .price');
    
    
    priceElement.textContent = `$${newPrice.toFixed(2)}`; 
}

function updateIconText(newValue) {
   
    var iconTextElement = document.querySelector('.icon-text.text-style-1');
    

    iconTextElement.textContent = newValue;
}















$(document).ready(function() {
    // Ajout d'articles au panier
    $('.info-button').click(function() {
        var articleId = $(this).data('article-id');
        var prix = parseFloat($(this).data('prix')); // Assurez-vous que ceci est bien un nombre
        var name = $(this).data('name');

        var existingRow = $('.tbody-cart tr[data-article-id="' + articleId + '"]');
        if (existingRow.length > 0) {
            var qtyInput = existingRow.find('input[type="text"]');
            var newQuantity = parseInt(qtyInput.val()) + 1;
            qtyInput.val(newQuantity);
            existingRow.find('.price').text('$' + (prix * newQuantity).toFixed(2));
        } else {
            var newRowHtml = `
                <tr data-article-id="${articleId}" data-prix="${prix}">
                    <td class="checkout-product">
                        <div class="product-cart d-flex">
                            <div class="product-thumb">
                                <img src="assets-donottouch/images/product-cart/product-${articleId}.png" alt="Product">
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
                        <p class="price">$${prix.toFixed(2)}</p>
                    </td>
                </tr>
            `;
            $('.tbody-cart').append(newRowHtml);
        }
        updateTotalPriceAndQuantity();
    });

    // Gestion des boutons '+' et '-'
    $('.tbody-cart').on('click', '.add, .sub', function() {
        var $input = $(this).siblings('input[type="text"]');
        var quantity = parseInt($input.val());
        var $row = $(this).closest('tr');
        var pricePerItem = parseFloat($row.data('prix')); // Récupération du prix par article

        if ($(this).hasClass('add')) {
            quantity++;
        } else if (quantity > 1) {
            quantity--;
        }

        $input.val(quantity);
        $row.find('.price').text('$' + (quantity * pricePerItem).toFixed(2));

        updateTotalPriceAndQuantity();
    });
});

function updateTotalPriceAndQuantity() {
    var totalPrice = 0;
    var totalQuantity = 0;
    $('.tbody-cart tr').each(function() {
        var price = parseFloat($(this).find('.price').text().substring(1));
        var quantity = parseInt($(this).find('input[type="text"]').val());
        totalPrice += price;
        totalQuantity += quantity;
    });

    updateSubtotalPrice(totalPrice);
    updateIconText(totalQuantity);
}

function updateSubtotalPrice(newPrice) {
    $('.checkout-sub-total .price').text(`$${newPrice.toFixed(2)}`);
}

function updateIconText(newValue) {
    $('.icon-text.text-style-1').text(newValue);
}

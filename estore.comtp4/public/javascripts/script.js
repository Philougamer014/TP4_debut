//<tr>
//    <td class="checkout-product">
//        <div class="product-cart d-flex">
//            <div class="product-thumb">
//                <img src="assets-donottouch/images/product-cart/product-1.png"
//                    alt="Product">
//            </div>
//            <div class="product-content media-body">
//                <h5 class="title">
//                    <a href="#">Hollow Port</a>
//                </h5>
//                <ul>
//                    <li><span>Brown</span></li>
//                    <li><span>XL</span></li>
//                    <li>
//                        <a class="delete" href="javascript:void(0)">
//                            <i class="mdi mdi-delete"></i>
//                        </a>
//                    </li>
//                </ul>
//            </div>
//        </div>
//    </td>
//    <td class="checkout-quantity">
//        <div class="product-quantity d-inline-flex">
//            <button type="button" id="sub" class="sub">
//                <i class="mdi mdi-minus"></i>
//            </button>
//            <input type="text" value="1">
//            <button type="button" id="add" class="add">
//                <i class="mdi mdi-plus"></i>
//            </button>
//        </div>
//    </td>
//    <td class="checkout-price">
//        <p class="price">$36.00</p>
//    </td>
//</tr>

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons ayant un attribut 'data-article-id'
    var buttons = document.querySelectorAll('a[data-article-id]');

    // Ajouter un écouteur d'événements à chaque bouton
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Empêcher l'action par défaut
            event.preventDefault();

            // Récupérer la valeur de l'attribut 'data-article-id'
            var articleId = this.getAttribute('data-article-id');

            // Afficher l'ID de l'article dans la console ou effectuer d'autres actions
            console.log('Article ID:', articleId);
        });
    });
});

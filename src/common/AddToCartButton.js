import { Button } from './Button';
import { cartManager } from '../cart/cart-manager';

export function AddToCartButton(item) {
    return Button({
        text: 'Add To Cart',
        classes: 'btn btn-primary',
        onClick: () => {
            cartManager.addItem(item);
        }
    });
}

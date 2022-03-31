import { Cart } from '../../components/Cart';
import { Link } from 'react-router-dom';
import { OrderForm } from '../../components/OrderForm';
import { store } from '../../store';
import {
    decrement,
    increment,
    deleteCartItem,
    updateQty,
} from '../../store/features/cartSlice';
import { Alert } from '@mui/material';
import { ICart } from '../../interfaces';
import { useDispatch } from 'react-redux';



export const Carts = () => {
    const dispatch = useDispatch();
    const { cart } = store.getState();

    const cartsView =
        cart.items.length > 0 ? (
            cart.items.map((item: ICart) => (
                <Cart
                    key={item.id}
                    id={item.id}
                    images={item.images}
                    qty={item.qty}
                    increment={() => dispatch(increment(item.id))}
                    handleChange={(ev) => dispatch(updateQty({ id: item.id, qty: ev.target.value }))}
                    deleteItem={() => dispatch(deleteCartItem(item.id))}
                    decrement={() => dispatch(decrement(item.id))}
                    name={item.name}
                    price={item.price}
                />
            ))
        ) : (
            <Alert severity="warning">
                There are currently no items in your cart..
                <Link to="/#products">
                    <a className="text-dark"> Take me shopping</a>
                </Link>
            </Alert>
        );

    return (
        <section className="container my-5">
            <div className="row pt-4 px-4 mt-5 pt-3">
                <div className="col-md-12 col-lg-7">
                    <h2 >Cart Items</h2>
                    <hr />

                    <div
                        className="row"
                        style={{
                            height: '400px',
                            overflowY: 'scroll',
                        }}
                    >
                        <div className="">{cartsView}</div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-5 mt-3">
                    <OrderForm totalPrice={cart.totalPrice} />
                </div>
            </div>
        </section>
    );
};

export default Carts;

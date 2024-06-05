import React from "react";
import { Table, Button, Container } from "reactstrap";

const CartPage = ({
  cart,
  updateQuantity,
  removeFromCart,
  finalizePurchase,
}) => (
  <Container className="cart-page mt-5">
    <h2 className="text-center mb-4">Shopping Cart</h2>
    <Table striped>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.name}</td>
            <td>
              <input
                type="number"
                min="1"
                className="form-control"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.product.id, e.target.value)
                }
              />
            </td>
            <td>${item.product.price.toFixed(2)}</td>
            <td>${(item.product.price * item.quantity).toFixed(2)}</td>
            <td>
              <Button
                color="danger"
                onClick={() => removeFromCart(item.product.id)}
              >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    {cart.length > 0 && (
      <Button color="success" className="w-100 mt-3" onClick={finalizePurchase}>
        Finalize Purchase
      </Button>
    )}
  </Container>
);

export default CartPage;

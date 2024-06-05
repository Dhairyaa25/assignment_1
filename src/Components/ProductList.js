import React, { useState } from "react";
import products from "../data";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input,
  Container,
  Row,
  Col,
  Alert, // Import Alert component
} from "reactstrap";
import "../App.css"; // Import CSS file for additional styling

const ProductList = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});
  const [notification, setNotification] = useState(""); // State for notification message

  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    setNotification(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setNotification(""); // Clear notification after 3 seconds
    }, 3000);
  };

  return (
    <Container className="product-list mt-5">
      {notification && (
        <Alert color="success" className="mb-4 text-center">
          {notification}
        </Alert>
      )}
      <Row>
        {products.slice(0, 5).map((product) => (
          <Col sm="12" md="6" lg="4" key={product.id} className="mb-4">
            <Card className="h-100 custom-card">
              <CardImg
                top
                width="100%"
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" className="text-center">
                  {product.name}
                </CardTitle>
                <CardText className="text-center">
                  {product.description}
                </CardText>
                <CardText className="mt-auto text-center">
                  <strong>${product.price.toFixed(2)}</strong>
                </CardText>
                <Input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                  className="mb-2"
                />
                <Button
                  color="primary"
                  onClick={() =>
                    handleAddToCart(product, quantities[product.id] || 1)
                  }
                  className="mt-2"
                >
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

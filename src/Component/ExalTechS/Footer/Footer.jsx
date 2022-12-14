import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
const Footer = () => {
  const footerSelector = useSelector((state) => state.FooterReducer);
  return (
    <div>
      {footerSelector.map((item) => {
        return (
          <Card>
            <Card.Img variant="top" src={item.footerImg} />
            <Card.Title>{item.footerTitle}</Card.Title>
            <Card.Text>{item.footerDesc}</Card.Text>
          </Card>
        );
      })}
    </div>
  );
};
export default Footer;

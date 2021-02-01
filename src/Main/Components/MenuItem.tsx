import React, { useState } from "react";
import { FoodItem } from "../Enums/FoodItems";
import "../Styles/MenuItem.scss";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import {
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import bread from "../Images/bread.jpg";
import milk from "../Images/milk.jpg";
import cheese from "../Images/cheese.jpg";
import butter from "../Images/butter.jpg";
import { capitalise } from "../Utilities/InvoiceUtilities";

interface IMenuItem {
  addToCart: (foodItem: FoodItem, quantityState: number) => void;
  label: string;
}

export const MenuItem: React.FC<IMenuItem> = ({ addToCart, label }) => {
  const [quantityState, setQuantityState] = useState(0);
  const [updatedState, setUpdatedState] = useState(false);

  const handleAddToCart = () => {
    addToCart(foodItem, quantityState);
    setQuantityState(0);
    setUpdatedState(true);
    setTimeout(() => setUpdatedState(false), 1500);
  };

  const handleIncrease = () => {
    setQuantityState(quantityState + 1);
  };
  const handleDecrease = () => {
    if (quantityState > 0) {
      setQuantityState(quantityState - 1);
    }
  };
  const foodItem: FoodItem = FoodItem[label as keyof typeof FoodItem];
  return (
    <Card className="menuItem">
      <CardHeader title={capitalise(label)}></CardHeader>
      {/* <CardMedia component="img" image={label} title={label} /> */}
      {/* <img src={fp} alt="product" /> */}
      <div className={`menuItem__image menuItem__image--${label}`} />
      <div>
        <AddBoxIcon
          fontSize="large"
          color="action"
          onClick={handleIncrease}
          className="menuItem_quantityButtons"
        ></AddBoxIcon>
        <IndeterminateCheckBoxBoxIcon
          fontSize="large"
          color="action"
          onClick={handleDecrease}
          className="menuItem_quantityButtons"
        ></IndeterminateCheckBoxBoxIcon>
      </div>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
        <Button
          onClick={handleAddToCart}
          variant="contained"
          color="primary"
          size="small"
        >
          Update cart
        </Button>
      </CardContent>
      {updatedState ? <p>Updated!</p> : <p>Quantity: {quantityState}</p>}
    </Card>
  );
};

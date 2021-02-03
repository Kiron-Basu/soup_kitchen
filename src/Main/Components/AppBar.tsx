import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Modal,
  DialogContent
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KitchenIcon from "@material-ui/icons/Kitchen";


import OrderSection from "./OrderSection";
import { 
  getInitialOrderState, 
  IOrderState 
} from "../Store/OrderBundle";
import "../Styles/Modal.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const ButtonAppBar = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultState: IOrderState = getInitialOrderState();
  const foodLabels: ReadonlyArray<string> = Object.keys(defaultState);

  const body = <OrderSection foodLabels={foodLabels} className="modalBody" />;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <KitchenIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Soup Kitchen
          </Typography>
          <ShoppingCartIcon />
          <Button color="inherit" onClick={handleOpen}>
            Cart
          </Button>
          <Modal
            tabIndex={-1}
            open={open}
            onClose={handleClose}
            className="modal"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <DialogContent>{body}</DialogContent>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
});

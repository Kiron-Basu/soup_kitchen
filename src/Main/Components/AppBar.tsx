import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import KitchenIcon from "@material-ui/icons/Kitchen";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import OrderSection from "./OrderSection";
import { getInitialOrderState, IOrderState } from "../Store/OrderBundle";
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

//   const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//       paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//       },
//     }),
//   );

export default function ButtonAppBar() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultState: IOrderState = getInitialOrderState();
  const foodLabels: ReadonlyArray<string> = Object.keys(defaultState); //get from store?

  const body = <OrderSection foodLabels={foodLabels} className="modalBody" />;
  return (
    <div className={classes.root}>
      <AppBar position="static">
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
          <ShoppingBasketIcon />
          <Button color="inherit" onClick={handleOpen}>
            Basket
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            className="modal"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}

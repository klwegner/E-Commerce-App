import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './Styles';

function Cart({ cart }) {
const isEmpty = !cart.total_items.length;
// const isEmpty = false;
const classes = useStyles(); 

console.log("here is the " + cart);

const EmptyCart = () => (
    <Typography variant="subtitle1"> You have no items in your cart. Take a look at our wares!</Typography>
)

const FilledCart = ({ cart }) => (
    <>
       <Grid container spacing={3}>
       {cart.line_items.map((item) => (
<Grid item sx={12} sm={4} key={item.id}>
{/* eventually cart item component */}
<div>{item.name}</div>
</Grid>
       ))}
       </Grid> 
       <div className={classes.cardDetails}>
        <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
            <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
       </div>
    </>
)

    return (
         <Container>
         <div className={classes.toolbar} />
         <Typography className={classes.title} variant="h2">Your Cart</Typography>
         { isEmpty ? <EmptyCart /> : <FilledCart /> }
         </Container>
    )
}

export default Cart;
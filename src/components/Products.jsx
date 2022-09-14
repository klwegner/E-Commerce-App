import React from "react";
import  { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "fashionable shoes", price: '$100' },
  {
    id: 2,
    name: "Bralette",
    description: "not suitable for external wear at school",
    price: "$20"
},
];

function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
export default Products;
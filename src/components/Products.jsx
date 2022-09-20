import React from "react";
import  { Grid } from "@material-ui/core";
import Product from "./Products/Product";

const products = [ 
  { id: 1, name: "Shoes", description: "give our shoes a gallop", price: '$100', image: "https://images.the-house.com/salomon-trail-score-hiking-shoes-black-asphalt-green-13.jpg"},
  {id: 2,
    name: "Bralette",
    description: "great for lounging, lousy at grating",
    price: "$20",
    image: "https://flashyouandme.com/wp-content/uploads/2016/04/BR10-T01.jpg"
},
{ id: 3, name: "Socks", description: "super soft, super breathable, truly super socks!", price: "$5",  image: "https://i5.walmartimages.com/asr/3077de8d-4acd-4b3c-a81c-6716923bb230.82ba2e60fd2025f6da83b5c5c6af873f.jpeg"}
];

function Products() {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
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

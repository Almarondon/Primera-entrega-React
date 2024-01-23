import { GridItem, Grid } from '@chakra-ui/react'
import Item from "./Item"


const ItemList = ({ productos = [] }) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={2}>
      {
        productos.map((p, i) => {
          return (<GridItem key={`item-${i}`}>
            <Item
              id={p.id}
              titulo={p.name}
              descripcion={p.description}
              precio={p.price}
              imageSrc={p.imageSrc}
            />
          </GridItem>
          )
        })
      }
    </Grid>
  )
}

export default ItemList
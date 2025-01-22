import { type SchemaTypeDefinition } from 'sanity'
import foods from './food'
import chef from "./chefs"

import carts from './carts'
import wishlist from './wishlist'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    chef,
    foods,
    carts,
    wishlist
    
  ],
}

import { type SchemaTypeDefinition } from 'sanity'
import foods from './food'
import chef from "./chefs"

import carts from './carts'
import wishlist from './wishlist'
import user from './user'
import order from './order'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    chef,
    foods,
    carts,
    wishlist,
    user,
    order,
    blog,
    
  ],
}

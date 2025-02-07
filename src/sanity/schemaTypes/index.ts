import { type SchemaTypeDefinition } from 'sanity'
import foods from './food'
import chef from "./chefs"
import carts from './carts'
import wishlist from './wishlist'
import user from './user'
import blog from './blog'
import order from './order'

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

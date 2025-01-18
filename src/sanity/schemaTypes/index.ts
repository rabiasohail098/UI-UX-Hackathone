import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chef from "./chefs"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    chef,
    foods
  ],
}

import Product from '../models/product';
import { v4 as uuidv4 } from 'uuid';


export const PRODUCTS = [
  new Product(uuidv4(), 'u01', 'Blanket', '$6.87', 'Gently used soft blanket. Washed using fragrance-free detergent and no fabric softener. Never around animals, and the material is hypo-allergenic. Originally purchased 2 years ago for $59. Sad to part with it, but ready for a new blanket!', 'https://practice-app-images.s3.eu-central-1.amazonaws.com/blanket.jpg'),
  new Product(uuidv4(), 'u01', 'Chair', '$46.99', `A nice chair, barely used, was mostly in a temperature-controlled storage unit. It's not that it wasn't a nice chair, or that it was uncomfortable, no. It was just that the chair didn't really go with the rest of the room once we brought it home.`, 'https://practice-app-images.s3.eu-central-1.amazonaws.com/chair.jpg')
];
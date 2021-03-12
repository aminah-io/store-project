class Product {
  constructor(
    id,
    userId,
    title,
    price,
    description,
    imageUrl
  ) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

export default Product;
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    categories: { type: String, required: true },
    img: { type: String, required: true },
    img_second: { type: String, required: true },
    img_third: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    short_description: { type: String, required: true },
    description: { type: String, required: true },
    id: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
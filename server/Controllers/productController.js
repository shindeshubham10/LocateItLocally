
import { ProductModel } from "../SchemaModels/products";

export const getProducts = async (req, res) => {
    try {
        console.log("Hello");
        const products = await ProductModel.find();
        console.log("inside product controller");
        console.log(products);
        res.json(products);
    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
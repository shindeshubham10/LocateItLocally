
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
};

export const getProductDetails = async(req,res)=>{

    try {
        //await ValidateRestaurantId(req.params);
    
        const { _id } = req.params;
        const product = await ProductModel.findById(_id);
        if (!product)
          return res.status(404).json({ error: "Product Not Found" });
    
        return res.json({ product });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
}

export const getProductByCategory = async(req,res) => {
  
  try {
    console.log("In category controllr = ", req.params);
   // const { category } = req.query.category;
   const { category } = req.params;
    const productByCategory = await ProductModel.find({"category":category})
    if (!productByCategory)
      return res.status(404).json({ error: "Product Not Found" });

    return res.json({ productByCategory });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// export const getManyProductDetails = async(req,res)=>{

//   try {
//       //await ValidateRestaurantId(req.params);
  
//       const { _id } = req.params;
//       const product = await ProductModel.findById(_id);
//       if (!product)
//         return res.status(404).json({ error: "Product Not Found" });
  
//       return res.json({ product });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
// }


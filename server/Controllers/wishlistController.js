import { ProductModel } from "../SchemaModels/products";
import { WishlistModel } from "../SchemaModels/wishlist";


// Get all Wishlist created 
export const getAllWishlists = async(req,res) => {

    try {
        console.log("getAllwishlist backend");
        console.log("userid current sesssion - ",req.session.passport.user._doc);
        const {_id} = req.session.passport.user._doc;
        console.log("user - ",_id);
        //const UserWishlist = await WishlistModel.findById({createdBy:_id});
        const UserWishlist = await WishlistModel.find({createdBy:_id});
        if (!UserWishlist)
          return res.status(404).json({ error: "Wishlist Not Found" });
    
        return res.json({ UserWishlist });
       } catch (error) {     
           return res.status(500).json({ error: error.message });
       }
}




// Add new Wishlist to the database
export const addToWishlist = async (req,res) => {

    try {
        console.log("In Add Wishlist backend");
        console.log("data for wishlist - ",req.body.wishlistData);
        const NewWishlist = await new WishlistModel(req.body.wishlistData);
        NewWishlist.save();
        console.log('New Wishlist added successfully');
        return res.status(200).json("New Wishlist added successfully");
        
        
    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


 export const addProductToWishlist = async(req,res)=>{

    try {
        console.log("Wishlist ID from params - ",req.params);
        const  {_id}  = req.params;



        const  wishlistData  = req.body.wishlistUpdatedata;
        console.log("Wishlist ID -",_id);
        console.log("Hurray");
        console.log("All data from body - ",wishlistData)
        //console.log(wishlistUpdatedata);
        const updateWishlistData = await WishlistModel.findByIdAndUpdate(
         _id,
          {
            $push: {
                "wishlistProducts":wishlistData},
          },
          { new: true }
        );
    
        return res.json({ newData: updateWishlistData });
      } catch (error) {
          console.log("in error");
        return res.status(500).json({ error: error.message });
      }


 };

 export const getProductOfWishlist = async (req,res) => {
    try {
      console.log("Id from url = ",req.params);
      const {id} = req.params;
      const Wishlist = await WishlistModel.findById(id);

      console.log("products from wishlist = ",Wishlist);
      
      const products = Wishlist.wishlistProducts;
      console.log("products Product model = ",products);
      const resultProducts = await ProductModel.find({_id:{$in:products}});
      console.log("final result = ",resultProducts);
      return res.json(resultProducts);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
 }






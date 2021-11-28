import JwtPassport from "passport-jwt";
import dotenv from "dotenv";
// dotenv.config({
//   path: require("path").resolve(__dirname, "../.env"),
// });
// Database Model
import { BusinessModel } from "../SchemaModels/business";

const JWTStratergy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "LocateItLocallyBusiness",
};

export default (passport) => {
  passport.use("business",
    new JWTStratergy(options, async (jwt__payload, done) => {
      try {
        const doesBusinessExist = await BusinessModel.findById(jwt__payload.business);
        if (!doesBusinessExist) return done(null, false);
        return done(null, doesBusinessExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};
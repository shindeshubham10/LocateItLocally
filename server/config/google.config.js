import googleOAuth from "passport-google-oauth20";
// import dotenv from "dotenv";
// dotenv.config({
//   path: require("path").resolve(__dirname, "../.env"),
// });

import { UserModel } from "../Database/user";



const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "463023337458-deqa9cdqq4t7ri5nh5h7m0uofn3t7jfa.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:2000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        // creating a new user object
        const newUser = {
          firstName: profile.name.givenName,
          lastName:profile.name.familyName,
          email: profile.emails[0].value,
          
        };
        try {
          // check if the user exist
          const user = await UserModel.findOne({ email: newUser.email });
          

          if (user) {
            // generate token
            const token = user.generateJwtToken();
            // return user
            done(null, { user, token });
          } else {
            // create new user
            const user = await UserModel.create(newUser);
            

            // generate token
            const token = user.generateJwtToken();
            // return user
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};
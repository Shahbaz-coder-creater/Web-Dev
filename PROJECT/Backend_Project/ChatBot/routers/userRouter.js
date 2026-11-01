import express from "express"
import { login, signup, profile, logout } from "./controllers/userController";
import authUserMiddleware from "./middleware/authUserMiddlware"
const userRouter = express.Router();


// login , logout, signup, profile

userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/signup", signup);

// lets suppose are you change [edit] your peofile 

userRouter.get("/profile",authUserMiddleware,profile);

export default userRouter;
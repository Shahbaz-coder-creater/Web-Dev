import express from "express"
import authUserMiddleware from "../middlewares/authUserMiddleware"


const messageRouter = express.Router();

messageRouter.use(authUserMiddleware);


// 4-5 api 
// getMessage, sendMessage

messageRouter.get("/:chatId",getMessage);
messageRouter.post("/:chatId",sendMessage);


export default messageRouter;
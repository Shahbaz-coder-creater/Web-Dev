import express from "express"
import authUserMiddleware from "../middlewares/authUserMiddleware.js"
import {createChat,getSingleChat,getRecentChat,deleteChat} from "./controllers/chatController.js";
const chatRouter = express.Router();

chatRouter.use(authUserMiddleware);


// getRecentChat : top 20 , getSingleCaht ,creteChat, deletechat

chatRouter.post("/createChat",createChat);
chatRouter.get(":ChatId",getSingleChat);
chatRouter.get(":ChatId",getRecentChat);
chatRouter.delete(":chatId",deleteChat)


export default chatRouter;
import Chat from"../model/chatSchema.js"
import Message from "../model/messageSchema.js"


export const createChat = async (req,res)=>{
  try{
       const {model} = req.body;
    //    select modle like opous 4.8 , sole 4.2 
       if(!model){
        return res.status(400).json({
         message: "model is missing"
        })
       }
        const chats = await Chat.create({
            userId: req.user._id,
            model
        })

        res.status(2001).json({
            chatId: chats._id,
            userId: req.user._id,
            model,
            topic: chats.topic,
            createdAt: chats.createdAt
        })
  }
  catch(err){
    console.log(err);
    res.status(500).json({
        message: "Internal Server Error"
    })
  }
}
export const getSingleChat = async (req,res)=>{
 try{
    const {chatId} = req.params;
    const chat =  await Chat.findOne({userId:req.user._id , chatId:_id})

    if(!chat){
        return res.status(400).json({
            message: "Sorry this is not allowed"
        })
    }
    res.status(201).json({
        chatId: chat._id,
        userId: chat.userId,
        topic: chat.topic,
        usage: chat.usage
    })

  }
  catch(err){
    console.log(err);
    res.status(500).json({
        message: "Internal Server Error"
    })
  }
}
export const getRecentChat = async (req,res)=>{
 try{
        const chats = await Chat.findOne({userId:req.user._id})
            .select("topic model messagecount ")
            .sort({upadatedAt: -1})
            .limit(20);
        
      
            return res.status(200).json({
             message: "Your recent caht",
             chats
            })
       
 
 
    }
  catch(err){
    console.log(err);
    res.status(500).json({
        message: "Internal Server Error"
    })
  }
}
export const deleteChat = async (req,res)=>{
 try{
   const {chatId} = req.params;

   const chat =await Chat.find({chatId:_id , userId: req.user._id});
   
   if(!chat){
    return res.status(403).json({
         message: "You are not allowed to do this"
        })
   };
    
    await Message.deleteMany({
    chatId: chat._id
   });

    await Chat.deleteOne({
    chatId:_id
    });

    res.status(200).json({
        message: "Your chat is delted successfully"
    })

  }
  catch(err){
    console.log(err);
    res.status(500).json({
        message: "Internal Server Error"
    })
  }
}
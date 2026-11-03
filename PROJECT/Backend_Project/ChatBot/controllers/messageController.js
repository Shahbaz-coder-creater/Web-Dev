import Message from "../model/messageSchema";
import Chat from "../model/chatSchema.js"


// getMessage , sendMessage


// getMessage
export const getMessage = async(req,res)=>{
      try{
           const {chatId} = req.params;
        //     verify that chatId belongs to this User or not

           const chat = await Chat.findOne({
            _id: chatId,
            userId:  req.user._id
           })

           if(!chat){
            return res.status(404).json({
                message: "chat is not found"
            })
           }

           const message = await Message.find({
            chatId: chatId
           }).sort({createdAt:1});

           res.status(200).json({
            message: "Your messages are here",
            msg: message
           })

      }
      catch(err){
          console.log(err);
          res.status(500).json({
            message: "Interanl Server Error"
          })
      }
}




// sendMessage
export const sendMessage = async (req,res)=>{
    try{
    const {chatID} = req.params;
    const {contant} = req.body;

     if(!coantent || coantent.trim()== ""){
         return res.status(400).json({
            message: "You didn't send any message"
         })
    }

    // verify that cahtId belongs to the particular user 
      
       const chat = await Chat.findOne({
        _id: chatId,
        userId: req.user._id
       })


      const Usermessage = await Message.create({
        userId: req.user._id,
        chatId: chatId,
        role: "user",
        contant: contant
       });
       
      //  content: Ai ko bhjna hai : logic

      const dummyreply = "Mein cahnges is"

      const assMessage = await Message.create({
        userId: req.user._id,
        chatId: chatId,
        role: "assistant",
        contant: dummyreply
       });
     
      res.status(201).json({
        message: dummyreply
      });
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal Server error"
        })

    }

}
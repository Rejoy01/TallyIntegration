import asynchandler from 'express-async-handler'
import Ledgers  from '../schema/LedSchema.js'


export const CreateLed =asynchandler(async(req,res)=>{

        const{Name,Parent,Address,State,Country,Email,Phone} =  req.body

            if(!Name || !Parent || !Address ){

                return res.status(400).json({errors: "All fields are required"})
            }  
      
            const isLed = await Ledgers.findOne({name:Name})
     
            

            if(isLed){
             return  res.status(404).json({Message:"User Already Exists"})
            }

            const newLed = new Ledgers({

                name: Name,
                parent:Parent,
                address:Address,
                state:State,
                country:Country,
                email:Email,
                phone:Phone

            });

            try {
                const SaveLed = await newLed.save();
                return res.status(200).json({
                    Message:"Ledger saved successfully",
                    user: SaveLed                
                })
            } catch (error) {
                console.log("Error saving user : ",error);
                return res.status(500).json({Message:"Error saving user"})
                
            }


     
})


export const GetAllLedger =asynchandler(async(req,res)=>{

        const AllLedgers = await Ledgers.find()

        try {
            return res.status(200).json(
                AllLedgers
            )
        } catch (error) {
            console.log("Error fetching Legers : ",error);
            return res.status(500).json({
                message:"Error in getting data"
            })
        }

})
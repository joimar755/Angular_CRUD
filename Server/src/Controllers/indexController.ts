import {Request,Response  } from "express";

class IndexController {
    index (req:Request, res:Response){
        res.json('hello_joimar')
    }
}
 
export const indexController = new IndexController();
export default indexController.index;
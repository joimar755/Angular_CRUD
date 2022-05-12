import { Router } from "express";
import { indexController } from "../controllers/indexController";

class indexRoutes {
    public router: Router = Router();
    constructor() { 
        this.config();
        
    }
    config(): void{
        this.router.get('/',indexController.index);  
    }
}


const index = new indexRoutes();
export default index.router;
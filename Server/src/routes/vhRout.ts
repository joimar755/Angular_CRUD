import { Router } from "express";
import { vhController } from "../Controllers/vh_Controller";


class  Vhrout {
    public router: Router = Router();
    constructor() { 
        this.config();
        
    }
    config(): void{
        this.router.get('/',vhController.list);  
        this.router.get('/:id',vhController.getOne); 
        this.router.post('/',vhController.create );
        this.router.delete('/:id',vhController.delete ); 
        this.router.put('/:id',vhController.update );
    }
}


const index = new Vhrout(); 
export default index.router;
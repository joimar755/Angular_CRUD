import { Request, Response } from 'express';

import pool from '../Database';
 
class Vh_Controller {
    public  list(req:Request, res:Response){
        const games =  pool.query('SELECT * FROM registro'); 
        res.json(games); 
    }
    
    public getOne(req:Request, res:Response){
        const {id} = req.params;
        const games = pool.query('SELECT * FROM registro WHERE id = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({text: 'the game not exist'});
        
    }
    
    public create(req:Request, res:Response){
        pool.query('INSERT INTO registro set ?', [req.body]);
        res.json({text: 'create a tarifa'});
    }
    public delete (req:Request, res:Response){
        const {id} = req.params;
        pool.query('DELETE FROM registro WHERE id = ?', [id]);
        res.json({text: 'delete a tarifa: '});
        
    }
    public update (req:Request, res:Response){
        //res.json({text: 'update a tarifa: ' + req.params.id});
        const {id} = req.params;
        pool.query('UPDATE registro set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'actualizado a tarifa: '});
    }
}
 
export const vhController = new Vh_Controller();
export default vhController;


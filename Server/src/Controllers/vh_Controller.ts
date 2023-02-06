import { Request, Response } from "express";

import pool from "../Database";

class Vh_Controller {
  public list(req: Request, res: Response) {
    const sql = "SELECT * FROM registro";
    pool.query(sql, (error: any, results: any[]) => {
      if (error) throw error;
      //console.log(result);
      res.json(results);
    });
  }

  public getOne(req: Request, res: Response) {
    const { id } = req.params;
    const games = pool.query("SELECT * FROM registro WHERE id = ?", [id]);
    if (games) {
      return res.json(games);
    }
    res.status(404).json({ text: "the game not exist" });
  }
   
  public create(req:Request,res:Response) { 
    const {nombre,placa,valor,modelo} = req.body; 
    const sql = "INSERT INTO registro (nombre,placa,valor,modelo) VALUES (?, ?, ?, ?)";
      pool.query(sql, [nombre,placa,valor,modelo], (error: any, results) => {
      if (error) throw error;
      console.log(results);
      res.json({ text: "create a tarifa" });
    });
     
  } 
  public delete(req: Request, res: Response) {
    const { id } = req.params;
    pool.query("DELETE FROM registro WHERE id = ?", [id]);
    res.json({ text: "delete a tarifa: " });
  }
  public update(req: Request, res: Response) {
    //res.json({text: 'update a tarifa: ' + req.params.id});
    const { id } = req.params;
    pool.query("UPDATE registro set ? WHERE id = ?", [req.body, id]);
    res.json({ text: "actualizado a tarifa: " });
  }
}

export const vhController = new Vh_Controller();
export default vhController;

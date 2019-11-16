import { Router, Request, Response } from "express";




const usrerRoutes = Router();

usrerRoutes.get('/prueba', ( req: Request, res: Response) => {

    res.json({
        ok:true,
        mensaje: 'Todo funciona bien david!'
    })

});



export default usrerRoutes;




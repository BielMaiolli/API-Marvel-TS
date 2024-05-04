import { Router } from "express";
import comicsController from './comics/controllerComics/controller.Comics'

const comicsRoutes = Router()

comicsRoutes.post('/comics', comicsController.create)

comicsRoutes.get('/comics', comicsController.findAll)

comicsRoutes.get('/comics/:id', comicsController.findById)

comicsRoutes.put('/comics/:id', comicsController.update)

comicsRoutes.delete('/comics/:id', comicsController.delete)

comicsRoutes.get('/adicionarComics', comicsController.fetchComics)

//Rotas Auxiliares
/*
comicsRoutes.get('/comics/:letra', comicsController.METODO)
*/

export { comicsRoutes }
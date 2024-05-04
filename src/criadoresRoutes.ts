import { Router } from "express";
import criadoresController from './criadores/controllerCriadores/controller.Criadores'

const criadoresRoutes = Router()

criadoresRoutes.post('/criadores', criadoresController.create)

criadoresRoutes.get('/criadores', criadoresController.findAll)

criadoresRoutes.get('/criadores/:id', criadoresController.findById)

criadoresRoutes.put('/criadores/:id', criadoresController.update)

criadoresRoutes.delete('/criadores/:id', criadoresController.delete)

criadoresRoutes.get('/adicionarCriadores', criadoresController.fetchCreator)


//Rotas Auxiliares
/*
criadoresRoutes.get('/criadores-por-profissao/:professionCriadores', criadoresController.METODO)

criadoresRoutes.get('/criadores/{idCriadores}/comics', criadoresController.METODO)
*/



export { criadoresRoutes }
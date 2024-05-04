import { Router } from "express";
import personagemController from './personagens/controllerPersona/controller.Persona'

const personagemRoutes = Router()

personagemRoutes.post('/personagens', personagemController.create)

personagemRoutes.get('/personagens', personagemController.findAll)

personagemRoutes.get('/personagens/:id', personagemController.findById)

personagemRoutes.put('/personagens/:id', personagemController.update)

personagemRoutes.delete('/personagens/:id', personagemController.delete)

personagemRoutes.get('/personagens-Ordem-Alfabetica', personagemController.listarOrdemAlfabetica)

personagemRoutes.get('/adicionarPersonagem', personagemController.fetchCharacters)


//Rotas Auxiliares
/*
personagemRoutes.get('/personagens/:namePersonagem', personagemController.buscarPersonagemName)


personagemRoutes.get('/personagens-imagem', personagemController.METODO)

*/

export { personagemRoutes }
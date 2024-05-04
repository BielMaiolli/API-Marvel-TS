import { Request, Response } from "express";
import  personagemService from '../servicePersona/service.Persona';
import axios from 'axios'
import { personagemType } from "../typesPersona/types.Persona";

const API_URL = "https://gateway.marvel.com:443/v1/public/series/1067/characters?apikey=3fe18dfcdfc583dc797509947fb386af&ts=1&hash=35d2856ce940d63c5b4a5fb263bf9cd5"

class personagemController {


    async create(req: Request, res: Response){
        const createdPersonagem = await personagemService.create(req.body)
        res.status(201)
        return res.json(createdPersonagem)
    }

    async findAll(req: Request, res: Response) {
        const foundPersonagens = await personagemService.findAll()
        res.status(200)
        return res.json(foundPersonagens)
    }

    async findById(req: Request, res: Response) {
        const foundPersonagem = await personagemService.findById(req.params.id)
        res.status(200)
        return res.json(foundPersonagem)
    }

    
    async update(req: Request, res: Response) {
        const updatedPersonagem = await personagemService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedPersonagem)
    }
   
    async delete(req: Request, res: Response) {
        const deletedPersonagem = await personagemService.delete(req.params.id)
        res.status(200)
        return res.json(deletedPersonagem)
    }

 //Rota auxiliar
   

 async fetchCharacters(req: Request, res: Response) {
    try {
      await personagemService.fetchAndStoreCharacters();
      res.json({ message: "Personagens buscados e guardados com sucesso." });
    } catch (error) {
      console.error(error);
    }
  }

 
  async listarOrdemAlfabetica(req: Request, res: Response) {
    const ordemPersonagens = await personagemService.listarPersonagensOrdemAlfabetica();
    return res.json(ordemPersonagens);
  }

}

export default new personagemController()
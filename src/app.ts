import express from 'express';
import mongoose from 'mongoose';
import { personagemRoutes } from './personagemRoutes';
import { criadoresRoutes } from './criadoresRoutes';
import { comicsRoutes } from './comicsRoutes';

class App {
     
    public express: express.Application;
 

    constructor() {
      this.express = express()
      this.middleware()
      this.database()
      this.personagemRoutes()
      this.criadoresRoutes()
      this.comicsRoutes()
    }


    public middleware() {
       this.express.use(express.json())
     }


    public async database() {
        try {
          await mongoose.connect('mongodb://localhost:27017/MarvelApi')
          console.log('Conectado ao Banco de Dados')
        } catch (error) {
            console.log('Erro na conexão com o Banco de Dados:', error)
        }
    }

   public personagemRoutes(){
    this.express.use(personagemRoutes)
   }

   public criadoresRoutes(){
    this.express.use(criadoresRoutes)
   }

   public comicsRoutes(){
    this.express.use(comicsRoutes)
   }

}

export default new App().express
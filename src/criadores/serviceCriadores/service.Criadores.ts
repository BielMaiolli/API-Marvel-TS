import criadoresModel from '../schemaCriadores/schema.Criadores'
import { criadoresType } from '../typesCriadores/types.Criadores'
import axios from 'axios'

class criadoresService {

    async create(criadores: criadoresType){
        const createdCriadores = await criadoresModel.create(criadores)
        return createdCriadores
    }


    async findAll() {
        const foundCriadores = await criadoresModel.find()
        return foundCriadores
      }
  
  
     async findById(id: string) {
        const foundCriador = await criadoresModel.findById(id)
        return foundCriador
      }
  
      async update(id: string, criadores: criadoresType) {
        const updatedCriadores = await criadoresModel.findByIdAndUpdate(id, {
           idCriadores: criadores.idCriadores,
           nameCriadores: criadores.nameCriadores,
           professionCriadores: criadores.professionCriadores
        }, {new: true} )
    
        return updatedCriadores
      }
  
  
      async delete(id: string) {
        try {
              await criadoresModel.findByIdAndDelete(id)
              return "Criador removido com sucesso"
       
            } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o Criador: ${error}`)    
       } 
       
    
      }


            //Rotas auxiliares

            async fetchAndStoreCreators() {
              try {
                const response = await axios.get(
                  `https://gateway.marvel.com:443/v1/public/series/1067/creators?apikey=3fe18dfcdfc583dc797509947fb386af&ts=1&hash=35d2856ce940d63c5b4a5fb263bf9cd5`
                );
          
                const creators = response.data.data.results;
          
                for (const creator of creators) {
                  const newCreator: criadoresType = {
                    idCriadores: creator.id,
                    nameCriadores: creator.fullName,
                    professionCriadores: creator.role
                  };
          
                  await this.create(newCreator);
                }
          
                console.log("Criadores achados e guardados com sucesso no MongoDB.");
              } catch (error) {
                console.error(`Erro ao buscar personagens: ${error}`);
              }
            }
      

}

export default new criadoresService()
import personagemModel from '../schemaPersona/schema.Persona'
import { personagemType } from '../typesPersona/types.Persona'
import axios from 'axios'

class personagemService { 

    async create(personagem: personagemType){
        const createdPersonagem = await personagemModel.create(personagem)
        return createdPersonagem
    }


    async findAll() {
        const foundPersonagens = await personagemModel.find()
        return foundPersonagens
      }
  
  
     async findById(id: string) {
        const foundPersonagem = await personagemModel.findById(id)
        return foundPersonagem
      }
  
      async update(id: string, personagem: personagemType) {
        const updatedPersonagem = await personagemModel.findByIdAndUpdate(id, {
           idPersonagem: personagem.idPersonagem,
           namePersonagem: personagem.namePersonagem,
           descriptionPersonagem: personagem.descriptionPersonagem,
           urlImagePersonagem: personagem.urlImagePersonagem
        }, {new: true} )
    
        return updatedPersonagem
      }
  
  
      async delete(id: string) {
        try {
              await personagemModel.findByIdAndDelete(id)
              return "Personagem removido com sucesso"
       
            } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o personagem: ${error}`)    
       } 
       
    
      }

       //rota auxiliar

       async fetchAndStoreCharacters() {
        try {
          const response = await axios.get(
            `https://gateway.marvel.com:443/v1/public/series/1067/characters?apikey=3fe18dfcdfc583dc797509947fb386af&ts=1&hash=35d2856ce940d63c5b4a5fb263bf9cd5`
          );
    
          const characters = response.data.data.results;
    
          for (const character of characters) {
            const newCharacter: personagemType = {
              idPersonagem: character.id,
              namePersonagem: character.name,
              descriptionPersonagem: character.description || "",
              urlImagePersonagem:
                character.thumbnail.path + "." + character.thumbnail.extension,
            };
    
            await this.create(newCharacter);
          }
    
          console.log("Personagens achados e guardados com sucesso no MongoDB.");
        } catch (error) {
          console.error(`Erro ao buscar personagens: ${error}`);
        }
      }


      async listarPersonagensOrdemAlfabetica() {
        const personagensOrdem = await personagemModel.find().sort({ nome: 1 });
        return personagensOrdem;
      }
}



export default new personagemService()
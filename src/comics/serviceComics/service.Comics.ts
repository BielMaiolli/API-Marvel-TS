import comicsModel from '../schemaComics/schema.Comics'
import { comicsType } from '../typesComics/types.Comics'
import axios from 'axios'

class comicsService {

   
    async create(comics: comicsType){
        const createdComics = await comicsModel.create(comics)
        return createdComics
    }


    async findAll() {
        const foundComics = await comicsModel.find()
        return foundComics
      }
  
  
     async findById(id: string) {
        const foundComic = await comicsModel.findById(id)
        return foundComic
      }
  
      async update(id: string, comics: comicsType) {
        const updatedComics = await comicsModel.findByIdAndUpdate(id, {
            titleComics: comics.titleComics,
            descriptionComics: comics.descriptionComics,
            capaComics: comics.capaComics,
            idComics: comics.idComics
        }, {new: true} )
    
        return updatedComics
      }
  
  
      async delete(id: string) {
        try {
              await comicsModel.findByIdAndDelete(id)
              return "Comic removida com sucesso"
       
            } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a Comic: ${error}`)    
       } 
       
    
      }

      //Rotas auxiliares

      async fetchAndStoreComics() {
        try {
          const response = await axios.get(
            `https://gateway.marvel.com:443/v1/public/series/1067/comics?apikey=3fe18dfcdfc583dc797509947fb386af&ts=1&hash=35d2856ce940d63c5b4a5fb263bf9cd5`
          );
    
          const comics = response.data.data.results;
    
          for (const comic of comics) {
            const newComic: comicsType = {
              titleComics: comic.title,
              descriptionComics: comic.description,
              capaComics:
               comic.thumbnail.path + "." + comic.thumbnail.extension,
              idComics: comic.id,
              publicationDateComics: comic.dates[0].date
            };
    
            await this.create(newComic);
          }
    
          console.log("Comics achadas e guardadas com sucesso no MongoDB.");
        } catch (error) {
          console.error(`Erro ao buscar personagens: ${error}`);
        }
      }


}

export default new comicsService()
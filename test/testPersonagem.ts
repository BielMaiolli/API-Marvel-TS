import * as request from "supertest";
import personagemModel from '../src/personagens/schemaPersona/schema.Persona'
import app from '../src/app'
import { Request } from 'express';
import personagemService from '../src/personagens/servicePersona/service.Persona';

describe("Testando endpoints de personagem", () => {
    it("Deve inserir um personagem no banco de dados", async () => {
      const PersonagemMock = {
        namePersonagem: "testePersogaem",
        descriptionPersonagem: "teste do teste criacao de personagme",
        urlImagePersonagem: "http://i.annihil.us/u/prod/marvel/i/mg/1/20/52696929dc721.jpg",
      };
  
      const response = await request
        .default(app)
        .post("/criarPersonagem")
        .send(PersonagemMock);
      const foundedCriador = await personagemModel.findById(response.body._id);
  
      expect(response.status).toEqual(201);
      expect(response.body._id).toBeDefined();
      expect(PersonagemMock.namePersonagem).toBe(foundedCriador?.namePersonagem);
      expect(PersonagemMock.descriptionPersonagem).toBe(foundedCriador?.descriptionPersonagem);
      expect(PersonagemMock.urlImagePersonagem).toStrictEqual(foundedCriador?.urlImagePersonagem);
    });

});
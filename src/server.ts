import app from "./app";

function main() {
   app.listen(5000, 'localhost', () => {
      console.log('Servidor rodando')
   })
}

main()
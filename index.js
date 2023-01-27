const http = require ('http')
const PORT = 4545

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hola mundo</h1>')
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando ${PORT}`)
    // console.log('Servidor escuchando ' + PORT)
})

//en el .json abajo de test se coloca el comando o palabra para despues ejecutarla ej: npm run dev 

//git add . para subir a github toda la carpeta

//archivo .gitignore no se suben a github incluyendo el nombre de otros archivos
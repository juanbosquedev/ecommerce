const server = require("./src/serrver")     

const PORT= 8000;

server.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
})
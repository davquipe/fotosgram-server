import Server from './classes/server';
import usrerRoutes from './routes/usuario';
import mongoose from 'mongoose';


const server = new Server();


// Rutas de mi apliacion
server.app.use('/user', usrerRoutes)


// Condectar DB
// ya no es recomendable usar useCreateIndex => useUnifiedTopology
mongoose.connect('mongodb://localhost:27017/fotosgram', 
                { useNewUrlParser: true, useUnifiedTopology: true }, ( err ) => {

    if ( err ) throw err;

    console.log('Base de Datos ONLINE');
})

// Levantar express
server.start ( () => {
    console.log(`Servidor Corriendo en puerto ${ server.port }`);
    
});
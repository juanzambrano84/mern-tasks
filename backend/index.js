import express from 'express';
import conectarDB from './config/db.js';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from './routes/tasks.routes.js'

const app = express();

//CORS conexión entre el back y el front
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

conectarDB();
//dependencias
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
//Rutas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

//Conexión al servidor
app.listen(5500);
console.log('Servidor corriendo en el puerto', 5500);
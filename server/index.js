import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import DbConnection from './DBCONNECTION/DbConnection.js';
import { LedgerCreation } from './Routes/LedgerRoutes.js';

dotenv.config()

const App = express();

App.use(express.json())
App.use(cors())
App.use(cookieParser())

App.use('/tally/',LedgerCreation)

App.listen(process.env.PORT,DbConnection()
)


import express from 'express';
import { CreateLed, GetAllLedger } from '../Controller/Ledgercreation.js';

const router = express.Router()

router.post('/api/createLed',CreateLed)
router.get('/api/GetAllLed',GetAllLedger)

export {router as LedgerCreation}
import { createUserSchema } from './../schema/user.schema';
import express from "express"
import validateResource from "../midlleware/validateResource"

const router = express.Router()

router.post('/api/users', validateResource(createUserSchema), (req,res) => res.send('users api'))

export default router
import express from "express"

const router = express.Router()

router.post('/api/users',(req,res) => res.send('users api'))

export default router
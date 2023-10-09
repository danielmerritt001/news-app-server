import { Router } from 'express'
import * as newsCtrl from '../controllers/news.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', newsCtrl.getNews)

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)


export { router }
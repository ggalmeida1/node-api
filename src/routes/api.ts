import { Router } from 'express'

import * as ApiController from '../controllers/apiController'
import multer from 'multer'

const updload = multer({
    dest: './tmp'
})

const router = Router()


router.get('/ping', ApiController.ping )
router.get('/random', ApiController.random)


router.post('/frases', ApiController.createPhrase)
router.get('/frases', ApiController.listPhrases)
router.get('/frases/:id', ApiController.getPhrase)
router.put('/frases/:id', ApiController.updatePhrase)
router.delete('/frases/:id', ApiController.deletePhrase)

router.post('/upload', updload.array('avatars', 2),ApiController.uploadFile)

export default router

import { Router } from 'express'

import * as ApiController from '../controllers/apiController'
import multer from 'multer'

// DiskStorage settings
// const storageConfig = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './tmp')
//     },
//     filename: (req, file, cb) => {
//         let randomName = Math.floor(Math.random() * 9999)
//         cb(null, `${randomName+Date.now()}.jpg`)
//     }
// })

//Memory Storage settings
// const storageConfig = multer.memoryStorage()

const updload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowedTypes: string[] = ['image/jpg', 'image/png', 'image/jpeg']

        cb(null, allowedTypes.includes( file.mimetype ))
    },
    limits: { fieldSize: 1000000 } //size of the file is always in bytes
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

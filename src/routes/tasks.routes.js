const {Router} = require ('express')
const router = Router()
const { getAllProducts, getSingleProduct, createNewProduct, deleteProduct, updateProduct } = require('../controllers/task.controllers')

router.get('/products', getAllProducts)

router.get('/product/:id', getSingleProduct)

router.post('/product', createNewProduct)

router.delete('/products', deleteProduct)

router.put('/products', updateProduct)

module.exports = router
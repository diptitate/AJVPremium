const express = require('express')

const router = express.Router()


const userSignUpController = require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')
const UploadProductController = require('../controller/uploadProduct')
const getProductController = require('../controller/getProduct')
const updateProductController = require('../controller/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details',authToken, userDetailsController)
router.get('/userLogout', userLogout)

//admin panel
router.get('/all-user', authToken, allUsers)
router.post('/update-user', authToken, updateUser)

//product
router.post('/upload-product', authToken, UploadProductController)
router.get('/get-product', getProductController)
router.post('/update-product', authToken, updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post('/category-product', getCategoryWiseProduct)
router.post('/product-details', getProductDetails)

//user add to cart
router.post("/addtocart",authToken,addToCartController)

module.exports = router
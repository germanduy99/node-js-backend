const express = require('express');
const {getHomePage,getABC,getName} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/name',getName);

module.exports = router; // export default
  
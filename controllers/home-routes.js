const router = require('express').Router();

router.get('/',(req,res) => {
    console.log('=================');
    return res.render('homepage');
});
router.get('/checkout1',(req,res) => {
    console.log('=================');
    return res.render('checkout1');
});
router.get('/favourites',(req,res) => {
    console.log('=================');
    return res.render('favourites');
});
router.get('/signin',(req,res) => {
    console.log('=================');
    return res.render('signin');
});


module.exports = router;
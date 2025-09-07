import express from 'express';

const router = express.Router();
router.post('/signup',(req, res) => {
    res.send('Signup route');
})
router.post('/signin',(req, res) => {
    res.send('Signin route');
})
router.post('/logout',(req, res) => {
    res.send('Logout route');
})

export default router;
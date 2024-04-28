import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
    // {
    //     firstName:"John",
    //     lastName:"Doe",
    //     age:50,
    //     eyeColor:"blue"
    // },
    // {
    //     firstName:"Jane",
    //     lastName:"Doe",
    //     age:40,
    //     eyeColor:"green"
    // }
]

// all users routes starts from here
router.get('/', (req, res) => res.send(users));
router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id:uuidv4() });

    res.send(`User with the name ${user.firstName} added to th mock DB`)
});

export default router;
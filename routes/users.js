import express from 'express';
import { 
    createUsers, 
    deleteUser, 
    getSingleUser, 
    getUsers,
    updateSingleUser
} from '../controllers/users.js';


const router = express.Router();


// all users routes starts from here
router.get('/', getUsers);
router.post('/', createUsers);
router.get('/:id', getSingleUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateSingleUser);

export default router;
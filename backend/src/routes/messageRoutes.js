import express from 'express';
import { protectRoute } from '../middleware/authMiddleware.js';
import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/messageControllers.js';
const router=express.Router();

router.get("/users",protectRoute,getUsersForSidebar);
router.get("/:id",protectRoute,getMessages);

router.post("/sender/:id",protectRoute,sendMessage);
export default router;
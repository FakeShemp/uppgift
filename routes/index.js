import { Router } from 'express';
const router = Router();
import { posts, users } from './methods.js';

router.get("/posts", posts.get);
router.post("/posts", posts.post);
router.get("/posts/:postId", posts.getOne);
router.put("/posts/:postId", posts.put);
router.patch("/posts/:postId", posts.patch);
router.delete("/posts/:postId", posts.delete);
router.get("/users", users.get);
router.post("/users", users.post);
router.get("/users/:userId", users.getOne);
router.put("/users/:userId", users.put);

export default router;
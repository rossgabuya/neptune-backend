import express, { Router } from 'express';
// Import index action from home controller
import { index } from './controllers/homeController';
import { waterIndex } from './controllers/waterController';

// Initialize the router
const router = Router();

// Handle /homes.json route with index action from home controller
router.route('/homes.json')
  .get(index);

router.route('/waters.json')
    .get(waterIndex);

export default router;
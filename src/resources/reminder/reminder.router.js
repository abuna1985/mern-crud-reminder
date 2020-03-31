import { Router } from 'express'
import controllers from './reminder.controllers'

const router = Router()

// /api/reminder
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/reminder/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router

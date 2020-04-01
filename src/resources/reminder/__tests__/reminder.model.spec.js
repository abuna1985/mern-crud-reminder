import { Reminder } from '../reminder.model'
import mongoose from 'mongoose'

describe('Reminder model', () => {
  describe('schema', () => {
    test('title', () => {
      const title = Reminder.schema.obj.title
      expect(title).toEqual({
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50
      })
    })

    test('status', () => {
      const status = Reminder.schema.obj.status
      expect(status).toEqual({
        type: String,
        required: true,
        enum: ['active', 'complete', 'pastdue'],
        default: 'active'
      })
    })

    test('content', () => {
      const content = Reminder.schema.obj.content
      expect(content).toEqual({
        type: {},
        required: true,
        min: 2,
        max: 2000
      })
    })

    test('due', () => {
      const due = Reminder.schema.obj.due
      expect(due).toEqual(Date)
    })

    test('createdBy', () => {
      const createdBy = Reminder.schema.obj.createdBy
      expect(createdBy).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
      })
    })
  })
})

import { Reminder } from '../reminder.model'
import mongoose from 'mongoose'

describe('Reminder model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = Reminder.schema.obj.name
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50
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

    test('notes', () => {
      const notes = Reminder.schema.obj.notes
      expect(notes).toEqual(String)
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

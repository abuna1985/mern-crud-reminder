import { User } from '../user.model'
import mongoose from 'mongoose'

describe('User model', () => {
  describe('schema', () => {
    test('email', () => {
      const email = User.schema.obj.email
      expect(email).toEqual({
        type: String,
        required: true,
        unique: true,
        trim: true
      })
    })

    test('password', () => {
      const password = User.schema.obj.password
      expect(password).toEqual({
        type: String,
        required: true
      })
    })

    test('phone', () => {
      const phone = User.schema.obj.phone
      expect(phone).toEqual({
        type: String,
        required: true
      })
    })

    test('settings', () => {
      const settings = User.schema.obj.settings
      expect(settings).toEqual({
        notifications: {
          type: Boolean,
          required: true,
          default: true
        }
      })
    })
  })
})

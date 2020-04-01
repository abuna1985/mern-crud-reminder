import mongoose from 'mongoose'

const reminderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 50
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'complete', 'pastdue'],
      default: 'active'
    },
    content: {
      type: {},
      required: true,
      min: 2,
      max: 2000
    },
    due: Date,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

reminderSchema.index({ list: 1, name: 1 }, { unique: true })

export const Reminder = mongoose.model('reminder', reminderSchema)

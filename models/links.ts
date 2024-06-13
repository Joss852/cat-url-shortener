import { Schema, model, models } from 'mongoose'

const LinkSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
  },
})

LinkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const LinkModel = models.Link || model('Link', LinkSchema)

export default LinkModel

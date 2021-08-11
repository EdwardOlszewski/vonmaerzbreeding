import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    maxlength: [40, 'Title cannot be more then 40 characters'],
  },
  description: {
    type: String,
    required: true,
    maxLength: [200, 'Description cannot be more then 40 characters'],
  },
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema)

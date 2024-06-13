import mongoose from 'mongoose'

export default async function ConnectDB() {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to MongoDB')
    return
  }

  
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '')
    console.log('Connected to MongoDB')
  } catch (error: any) {
    console.error('Failed to connect to MongoDB:', error.message)
  }
}

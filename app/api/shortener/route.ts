import LinkModel from '@models/links'
import ConnectDB from '@config/database'
import mongoose from 'mongoose'

export async function POST(req: Request) {
  const { url: link } = await req.json()
  const key = Math.random().toString(36).substring(2, 7)

  try {
    await ConnectDB()
    const shortedUrl = await LinkModel.create({
      link,
      key,
      createdAt: new Date(),
    }).then(data => {
      mongoose.disconnect()
      return data
    })

    return new Response(
      JSON.stringify({
        status: 'success',
        ok: true,
        code: 201,
        data: shortedUrl,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 201,
      }
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: 'error',
        ok: false,
        code: 400,
        message: 'Failed to create shorted URL',
        error: error.message,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 400,
      }
    )
  }
}

export async function PATCH(req: Request) {
  try {
    await ConnectDB()
    const ids = await req.json()

    const links = await LinkModel.find({ _id: { $in: ids } }).then(data => {
      mongoose.disconnect()
      return data
    })

    return new Response(
      JSON.stringify({
        status: 'success',
        ok: true,
        code: 200,
        data: links,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 200,
      }
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: 'error',
        ok: false,
        code: 400,
        message: 'Error fetching data from the database',
        error: error.message,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 400,
      }
    )
  }
}

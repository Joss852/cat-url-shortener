import LinkModel from '@models/links'
import ConnectDB from '@config/database'
import mongoose from 'mongoose'

export async function GET(req: Request, { params }: { params: { key: string } }) {
  try {
    await ConnectDB()
    const updatedLink = await LinkModel.findOneAndUpdate(
      { key: params.key },
      { $inc: { clicks: 1 } }
    ).then(data => {
      mongoose.disconnect()
      return data
    })

    return new Response(
      JSON.stringify({
        status: 'success',
        ok: true,
        code: 200,
        data: updatedLink,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 200,
      }
    )
  } catch (error: any) {
    console.log(error.message)
    JSON.stringify({
      status: 'error',
      ok: false,
      code: 400,
      message: 'Error fetching data from the database',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 400,
    }
  }
}

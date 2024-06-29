import LinkModel from '@models/links'
import ConnectDB from '@config/database'
import mongoose from 'mongoose'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await ConnectDB()
    const link = await LinkModel.findById(params.id).then(data => {
      mongoose.disconnect()
      return data
    })

    const { clicks } = link

    return new Response(
      JSON.stringify({
        status: 'success',
        ok: true,
        code: 200,
        data: { clicks },
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

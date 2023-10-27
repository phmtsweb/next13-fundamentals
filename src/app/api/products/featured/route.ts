import data from '@/data/data.json'
import { delay } from '@/utils/delay'

export async function GET() {
  await delay(1000)

  return Response.json(data.products.filter((product) => product.featured))
}

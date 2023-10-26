import data from '@/data/data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 4000))

  return Response.json(data.products.filter((product) => product.featured))
}

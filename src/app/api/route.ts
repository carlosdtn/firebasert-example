export async function GET() {
  try {
    return Response.json({ statusCode: 200, data: "/" });
  } catch (error: any) {
    return Response.json({ statusCode: 500, message: error.message });
  }
}

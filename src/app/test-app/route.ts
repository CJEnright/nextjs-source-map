export async function GET() {
  console.log(new Error().stack);

  return Response.json({ ok: true });
}

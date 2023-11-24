export const dynamic = "force-dynamic";

require("source-map-support").install();

export async function GET() {
  console.log(new Error().stack);

  return Response.json({ ok: true });
}

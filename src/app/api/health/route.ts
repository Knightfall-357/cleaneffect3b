// Lightweight liveness probe. The site is fully static and has no database.
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ ok: true, service: "cleaneffect-web" });
}

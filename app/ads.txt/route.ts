const adsTxt = [
  "# GameMonetize.com",
  "google.com, pub-5519830896693885, DIRECT, f08c47fec0942fa0",
  "google.com, pub-4764333688337558, DIRECT, f08c47fec0942fa0",
].join("\n");

export function GET() {
  return new Response(`${adsTxt}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

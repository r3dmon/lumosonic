import { api } from "encore.dev/api";

export const getPDF = api(
  { expose: true, method: "GET", path: "/api/showcase/pdf", raw: true },
  async () => {
    const response = await fetch('https://idealink.us/showcase/lumosonic.pdf');
    if (!response.ok) {
      throw new Error('Failed to fetch PDF');
    }
    const buffer = await response.arrayBuffer();
    return {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="showcase.pdf"',
      },
      body: new Uint8Array(buffer),
    };
  }
);

import { api } from "encore.dev/api";

interface ShowcaseResponse {
  url: string;
}

export const getPDF = api<void, ShowcaseResponse>(
  { expose: true, method: "GET", path: "/api/showcase/pdf" },
  async () => {
    return {
      url: "/showcase.pdf",
    };
  }
);

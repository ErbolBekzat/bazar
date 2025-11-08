// app/page.tsx
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootRedirect() {
  const headersList = await headers();
  const acceptLang = headersList.get("accept-language") || "";

  // pick first supported language from the header
  let lang = acceptLang
    .split(",") // split by commas
    .map((s) => s.trim().slice(0, 2)) // take first 2 letters
    .find((l) => ["en", "ru", "ky"].includes(l));

  if (!lang) lang = "ky"; // default fallback

  redirect(`/ky`);
}



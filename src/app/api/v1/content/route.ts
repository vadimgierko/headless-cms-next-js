import { content } from "@/content/content";

export async function GET(
    request: Request
) {
    return Response.json({ ...content })
}
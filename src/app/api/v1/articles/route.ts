import { content } from "@/content/content";

export async function GET(
    request: Request
) {
    const { articles } = content.items

    return Response.json({ ...articles })
}
import { content } from "@/content/content";

export async function GET(
    request: Request
) {
    const { categories } = content

    return Response.json({ ...categories })
}
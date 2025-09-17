import { content } from "@/content/content";

export async function GET(
    request: Request,
) {
    const { images } = content.items;

    return Response.json({ ...images })
}
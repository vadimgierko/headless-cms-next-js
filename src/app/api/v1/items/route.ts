import { content } from "@/content/content";

export async function GET(
    request: Request,
) {
    const { items } = content;

    return Response.json({ ...items })
}
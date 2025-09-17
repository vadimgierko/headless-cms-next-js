import { content } from "@/content/content";

export async function GET(
    request: Request
) {
    const { projects } = content.items

    return Response.json({ ...projects })
}
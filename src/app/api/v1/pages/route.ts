import { content } from "@/content/content";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { pages } = content;

    return Response.json({ ...pages })
}
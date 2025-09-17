import { content } from "@/content/content";
import { Image } from "@/types";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    const img: Image | undefined = content.items.images[slug];

    return Response.json({ ...img })
}
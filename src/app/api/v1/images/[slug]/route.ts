/**
 * converts api route to static json file, which leads to faster fetch
 * (only can be used with GET)
 * (only can be used when no searchParams)
 */
export const dynamic = 'force-static';

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
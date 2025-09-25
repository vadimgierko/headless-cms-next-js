/**
 * converts api route to static json file, which leads to faster fetch
 * (only can be used with GET)
 * (only can be used when no searchParams)
 */
export const dynamic = 'force-static';

import { content } from "@/content/content";

export async function GET() {
    const { categories } = content

    return Response.json({ ...categories })
}
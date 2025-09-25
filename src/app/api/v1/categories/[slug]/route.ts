/**
 * converts api route to static json file, which leads to faster fetch
 * (only can be used with GET)
 * (only can be used when no searchParams)
 */
export const dynamic = 'force-static';

import { content } from "@/content/content";
import { Category } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const category: Category | undefined = content.categories[slug] || undefined;

  return Response.json({ ...category })
}
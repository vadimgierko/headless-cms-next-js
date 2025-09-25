/**
 * converts api route to static json file, which leads to faster fetch
 * (only can be used with GET)
 * (only can be used when no searchParams)
 */
export const dynamic = 'force-static';

import { content } from "@/content/content";
import { Project } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const project: Project | undefined = content.items.projects[slug] || undefined;

  return Response.json({ ...project })
}
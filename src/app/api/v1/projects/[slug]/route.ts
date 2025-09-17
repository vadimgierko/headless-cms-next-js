import { content } from "@/content/content";
import { Article, Project } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const project: Project | undefined = content.items.projects[slug] || undefined;

  return Response.json({ ...project })
}
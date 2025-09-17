import { content } from "@/content/content";
import { Article } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const article: Article | undefined = content.items.articles[slug] || undefined;

  return Response.json({ ...article })
}
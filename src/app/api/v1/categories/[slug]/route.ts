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
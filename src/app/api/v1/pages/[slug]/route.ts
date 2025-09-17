import { content } from "@/content/content";
import { Page } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const page: Page | undefined = content.pages[slug] || undefined;

  return Response.json({ ...page })
}
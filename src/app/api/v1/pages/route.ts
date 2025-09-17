import { content } from "@/content/content";

export async function GET(request: Request) {
	const { pages } = content;

	return Response.json({ ...pages });
}

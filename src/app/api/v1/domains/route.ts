import { domain } from "@/content/domain";

export async function GET(request: Request) {
	return Response.json({ [`vadimgierko.com`]: domain });
}

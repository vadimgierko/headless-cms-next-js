import { domain } from "@/content/domain";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    return Response.json({ [`vadimgierko.com`]: domain })
}
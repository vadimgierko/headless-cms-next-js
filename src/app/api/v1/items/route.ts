import { type NextRequest } from 'next/server'
import { content } from "@/content/content";
import { allowedItemsTypes, Item, ItemsType } from "@/types";

type ResultType = { [key: string]: Item }

export async function GET(
    request: NextRequest,
) {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const itemsType = searchParams.get("itemsType");

    const { items } = content;

    const result: ResultType[] = [];

    if (itemsType) {
        if (allowedItemsTypes.includes(itemsType as ItemsType)) {
            Object.keys(items[itemsType as ItemsType]).forEach(key => {
                const item = items[itemsType as ItemsType][key];

                if (category) {
                    if (item.category !== category) return;
                    return result.push({ [key]: item });
                } else {
                    return result.push({ [key]: item });
                }
            })
        }
    } else {
        const allItems = {
            ...items["articles"],
            ...items["audios"],
            ...items["images"],
            ...items["projects"],
            ...items["videos"]
        }

        if (category) {
            Object.keys(allItems).forEach(key => {
                const item = allItems[key];

                if (item.category !== category) return;
                return result.push({ [key]: item });
            })
        } else {
            Object.keys(allItems).forEach(key => {
                const item = allItems[key];

                return result.push({ [key]: item });
            })
        }
    }

    if (result.length <= 0) return Response.json({});

    return Response.json({
        ...result.reduce((prev, curr) => ({ ...prev, ...curr }), {} as ResultType)
    });
}
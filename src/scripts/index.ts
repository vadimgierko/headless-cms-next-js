import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function writeJsonToLocalFile(
	filename: string,
	data: unknown
): Promise<void> {
	const filePath = join(__dirname, filename);
	const json = JSON.stringify(data, null, 2);

	await writeFile(filePath, json, "utf-8");
	console.log(`✅ JSON written to ${filePath}`);
}

async function writeObjectAsTsFile(
	filename: string,
	variableName: string,
	variableType: string,
	data: unknown
): Promise<void> {
	const filePath = join(__dirname, filename);
	const objectString = JSON.stringify(data, null, 2);

	const tsContent = `export const ${variableName}: ${variableType} = ${objectString} as const;\n`;

	try {
		await writeFile(filePath, tsContent, "utf-8");
		console.log(`✅ TypeScript file written to ${filePath}`);
	} catch (err) {
		console.error("❌ Failed to write TS file:", err);
		throw err;
	}
}

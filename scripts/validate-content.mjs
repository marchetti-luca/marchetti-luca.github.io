import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const talks = JSON.parse(
  await readFile(resolve(projectRoot, "content/talks.json"), "utf8"),
);

const errors = [];

for (const [index, talk] of talks.entries()) {
  for (const field of ["date", "type", "title", "venue"]) {
    if (typeof talk[field] !== "string" || talk[field].trim() === "") {
      errors.push(`Talk ${index + 1} is missing ${field}.`);
    }
  }

  if (talk.slides?.startsWith("/")) {
    const file = resolve(projectRoot, "public", talk.slides.slice(1));
    try {
      await access(file);
    } catch {
      errors.push(`Missing slide file for “${talk.title}”: ${talk.slides}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${talks.length} talks and their local slide links.`);

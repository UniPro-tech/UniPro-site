import path from "path";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";

export async function getPostData(id: string, postsDirectory: string) {
  const fullPath = path.join("posts",postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const result = await remark().use(html).process(fileContents);
  return result.toString();
}

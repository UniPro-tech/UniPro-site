import { execFileSync } from "node:child_process";
import path from "node:path";

/**
 * 指定したファイルの最終更新日時をGitのログから取得します
 * @param filePath ファイルの相対パス
 * @returns 最終更新日時のDate object
 */
export function getLastModifiedDate(filePath: string): Date {
  try {
    // リポジトリのルートを取得して、そこで git log を実行する
    const gitRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
      encoding: "utf-8",
    }).trim();

    // パスは pathspec として渡す（-- で区切る）
    const timestamp = execFileSync(
      "git",
      ["log", "-1", "--format=%cd", "--date=iso", "--", filePath],
      { encoding: "utf-8", cwd: gitRoot },
    ).trim();

    return new Date(timestamp);
  } catch (error) {
    // Gitコマンドが失敗した場合や、ファイルがGit管理下にない場合は現在時刻を返す
    console.warn(`Failed to get git history for ${filePath}:`, error);
    return new Date();
  }
}

import { execSync } from "child_process";
import path from "path";

/**
 * 指定したファイルの最終更新日時をGitのログから取得します
 * @param filePath ファイルの相対パス
 * @returns 最終更新日時のDate object
 */
export function getLastModifiedDate(filePath: string): Date {
  try {
    // プロジェクトルートからの相対パスに変換
    const absolutePath = path.join(process.cwd(), filePath);

    // git logから最終コミット日時を取得
    const timestamp = execSync(
      `git log -1 --format=%cd --date=iso ${absolutePath}`,
      { encoding: "utf-8" }
    ).trim();

    return new Date(timestamp);
  } catch (error) {
    // Gitコマンドが失敗した場合や、ファイルがGit管理下にない場合は現在時刻を返す
    console.warn(`Failed to get git history for ${filePath}:`, error);
    return new Date();
  }
}

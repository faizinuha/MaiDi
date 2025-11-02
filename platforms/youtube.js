import fs from "fs";
import path from "path";
import ytdl from "ytdl-core";

export async function downloadYoutube(url) {
  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title.replace(/[<>:"/\\|?*]+/g, "");
  const outputPath = path.resolve("downloads", `${title}.mp4`);

  if (!fs.existsSync("downloads")) fs.mkdirSync("downloads");

  console.log(`⬇️  Mengunduh dari YouTube: ${title}`);
  const video = ytdl(url, { quality: "highest" });
  video.pipe(fs.createWriteStream(outputPath));
  video.on("end", () => console.log(`✅ Selesai: ${outputPath}`));
}

import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export async function downloadTwitter(url) {
  const api = `https://api.twittervideodownloader.com/get?url=${encodeURIComponent(url)}`;
  const res = await fetch(api);
  const data = await res.json();
  const videoUrl = data?.url || data?.result?.[0]?.url;
  if (!videoUrl) throw new Error("Gagal ambil video Twitter/X.");

  const outputPath = path.resolve("downloads", `${Date.now()}_twitter.mp4`);
  if (!fs.existsSync("downloads")) fs.mkdirSync("downloads");

  console.log(`⬇️  Mengunduh dari Twitter/X...`);
  const vid = await fetch(videoUrl);
  const buf = Buffer.from(await vid.arrayBuffer());
  fs.writeFileSync(outputPath, buf);
  console.log(`✅ Selesai: ${outputPath}`);
}

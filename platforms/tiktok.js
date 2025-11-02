import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export async function downloadTikTok(url) {
  const api = `https://api.tiklydown.me/api/download?url=${encodeURIComponent(url)}`;
  const res = await fetch(api);
  const data = await res.json();
  if (!data.video.noWatermark) throw new Error("Gagal ambil video TikTok.");

  const outputPath = path.resolve("downloads", `${Date.now()}_tiktok.mp4`);
  if (!fs.existsSync("downloads")) fs.mkdirSync("downloads");

  console.log(`⬇️  Mengunduh dari TikTok...`);
  const vid = await fetch(data.video.noWatermark);
  const buf = Buffer.from(await vid.arrayBuffer());
  fs.writeFileSync(outputPath, buf);
  console.log(`✅ Selesai: ${outputPath}`);
}

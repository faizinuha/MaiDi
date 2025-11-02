import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export async function downloadFacebook(url) {
  const api = `https://facebook-video-downloader.vercel.app/api?url=${encodeURIComponent(url)}`;
  const res = await fetch(api);
  const data = await res.json();
  const videoUrl = data?.hd || data?.sd;
  if (!videoUrl) throw new Error("Gagal ambil video FB.");

  const outputPath = path.resolve("downloads", `${Date.now()}_facebook.mp4`);
  if (!fs.existsSync("downloads")) fs.mkdirSync("downloads");

  console.log(`⬇️  Mengunduh dari Facebook...`);
  const vid = await fetch(videoUrl);
  const buf = Buffer.from(await vid.arrayBuffer());
  fs.writeFileSync(outputPath, buf);
  console.log(`✅ Selesai: ${outputPath}`);
}

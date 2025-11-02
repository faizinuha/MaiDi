import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export async function downloadInstagram(url) {
  const api = `https://api.saveig.app/api/?url=${encodeURIComponent(url)}`;
  const res = await fetch(api);
  const data = await res.json();
  if (!data.data || !data.data[0]?.url) throw new Error("Gagal ambil video IG.");

  const outputPath = path.resolve("downloads", `${Date.now()}_instagram.mp4`);
  if (!fs.existsSync("downloads")) fs.mkdirSync("downloads");

  console.log(`⬇️  Mengunduh dari Instagram...`);
  const vid = await fetch(data.data[0].url);
  const buf = Buffer.from(await vid.arrayBuffer());
  fs.writeFileSync(outputPath, buf);
  console.log(`✅ Selesai: ${outputPath}`);
}

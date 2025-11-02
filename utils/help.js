import chalk from "chalk";

export function showHelp() {
  console.log(chalk.cyan.bold(`
╔════════════════════════════════════════════╗
║         🌐 UNIVERSAL VIDEO DOWNLOADER       ║
╚════════════════════════════════════════════╝
`));

  console.log(chalk.yellow("🧭 Deskripsi:"));
  console.log(
    "  Tool CLI untuk mengunduh video dari berbagai platform populer — YouTube, TikTok, Instagram, Facebook, dan X (Twitter)."
  );
  console.log();

  console.log(chalk.yellow("⚙️  Cara Penggunaan:"));
  console.log(`  ${chalk.green("maidi <url>")}`);
  console.log("  Jalankan perintah di atas dengan menyertakan URL video yang ingin diunduh.");
  console.log();

  console.log(chalk.yellow("📺 Contoh:"));
  console.log(`  ${chalk.green("maidi https://youtube.com/watch?v=abc123")}`);
  console.log(`  ${chalk.green("maidi https://www.tiktok.com/@user/video/123456")}`);
  console.log(`  ${chalk.green("maidi https://www.instagram.com/reel/xxxxxxx/")}`);
  console.log();

  console.log(chalk.yellow("💾 Lokasi File:"));
  console.log("  Semua hasil unduhan otomatis tersimpan di folder:");
  console.log(`  ${chalk.blueBright("./downloads/")}`);
  console.log();

  console.log(chalk.yellow("🧩 Platform yang Didukung:"));
  console.log(`  ${chalk.green("✔")} YouTube`);
  console.log(`  ${chalk.green("✔")} TikTok`);
  console.log(`  ${chalk.green("✔")} Instagram`);
  console.log(`  ${chalk.green("✔")} Facebook`);
  console.log(`  ${chalk.green("✔")} X (Twitter)`);
  console.log();

  console.log(chalk.yellow("🔐 Keamanan & Etika:"));
  console.log(
    "  Hanya gunakan untuk konten milik pribadi, public domain, atau tujuan edukasi.\n" +
    "  Tool ini tidak menyimpan data pengguna atau riwayat unduhan."
  );
  console.log();

  console.log(chalk.gray("📘 Ketik 'maidi --help' kapan saja untuk melihat panduan ini lagi."));
  console.log(chalk.gray("💡 Gunakan dengan bijak — hormati hak cipta!"));
}

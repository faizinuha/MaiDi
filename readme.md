👇

📦 Universal Video Downloader CLI

Universal Video Downloader adalah tool baris perintah (CLI) berbasis Node.js yang memungkinkan kamu mengunduh video dari berbagai platform populer — YouTube, TikTok, Instagram, Facebook, dan X (Twitter) — langsung melalui terminal.

⚙️ Cepat, simpel, dan tanpa iklan. Cukup satu perintah untuk download dari mana saja.

🚀 Fitur Utama

🧩 Multi-Platform Support — YouTube, TikTok, Instagram, Facebook, X (Twitter)

💾 Auto Save — Video tersimpan otomatis ke folder downloads/

🎯 Smart Detector — Deteksi otomatis platform dari URL

🧱 Modular Structure — Mudah menambah platform baru

🔒 Tanpa login / token pribadi

🖥️ CLI Ready — Dapat dijalankan dari terminal mana saja

📂 Struktur Project
video-downloader/
├── package.json
├── index.js
├── platforms/
│   ├── youtube.js
│   ├── tiktok.js
│   ├── instagram.js
│   ├── facebook.js
│   └── twitter.js
└── downloads/

⚙️ Instalasi
git clone https://github.com/yourusername/video-downloader-cli.git
cd video-downloader-cli
npm install
npm link


Sekarang kamu bisa memanggilnya dari mana pun:

download-video <url>

💡 Contoh Penggunaan
download-video https://youtube.com/watch?v=abc123
download-video https://www.tiktok.com/@user/video/123456
download-video https://www.instagram.com/reel/xxxxxxx/
download-video https://www.facebook.com/watch/?v=987654
download-video https://x.com/user/status/123456789


Hasil unduhan otomatis tersimpan di folder:

downloads/
  ├── video.mp4
  └── 1698952025_tiktok.mp4

🧩 Menambah Platform Baru

Ingin menambahkan platform lain (misal: Vimeo atau Reddit)?
Buat file baru di platforms/, lalu export fungsi downloadXxx(url).

Contoh:

export async function downloadVimeo(url) {
  // logic download kamu di sini
}


Tambahkan pemanggilan di index.js:

else if (url.includes("vimeo.com")) await downloadVimeo(url);

🧱 Teknologi
Package	Fungsi
commander	Bikin CLI command & argument parser
ytdl-core	Download video dari YouTube
node-fetch	Fetch API di Node.js
fs / path	Simpan file ke sistem lokal
⚠️ Legal & Etika Penggunaan

Proyek ini dibuat untuk keperluan pendidikan dan eksperimen pribadi.

Mengunduh konten dari platform yang dilindungi hak cipta tanpa izin pemiliknya melanggar ketentuan layanan dan hukum hak cipta di banyak negara.
Gunakan hanya untuk:

Konten bebas hak cipta, public domain, atau milik pribadi.

Tujuan belajar / riset / backup pribadi.

Pengembang tidak bertanggung jawab atas penyalahgunaan tool ini.

🔐 Keamanan

Security & Privacy Principles:

Tidak menyimpan data pengguna, token, atau riwayat unduhan.

Tidak mengirim data ke server eksternal selain API publik downloader.

Seluruh proses dilakukan lokal di perangkat pengguna.

API pihak ketiga dipilih berdasarkan transparansi & privasi.

Hindari menggunakan URL yang mengandung informasi pribadi (contoh: tautan private / login session).
# 📚 Panduan Instalasi Lengkap untuk Pemula

Panduan step-by-step untuk menjalankan KuBlox website dari nol.

## 📋 Checklist Persiapan

Sebelum mulai, pastikan Anda sudah:
- [ ] Download dan install Node.js
- [ ] Download dan install Text Editor (VS Code recommended)
- [ ] Download semua file project
- [ ] Koneksi internet stabil

---

## 🎯 Part 1: Install Tools yang Dibutuhkan

### Step 1: Install Node.js

**Windows:**
1. Buka browser, kunjungi: https://nodejs.org/
2. Download versi **LTS** (Long Term Support)
3. Klik file installer yang sudah di-download
4. Ikuti wizard instalasi (Next → Next → Install)
5. Tunggu sampai selesai
6. Verifikasi instalasi:
   - Buka Command Prompt (CMD)
   - Ketik: `node --version`
   - Harusnya muncul versi Node.js (contoh: v18.17.0)
   - Ketik: `npm --version`
   - Harusnya muncul versi npm (contoh: 9.6.7)

**Mac:**
1. Buka browser, kunjungi: https://nodejs.org/
2. Download versi **LTS**
3. Buka file .pkg yang sudah di-download
4. Ikuti wizard instalasi
5. Verifikasi di Terminal:
   ```bash
   node --version
   npm --version
   ```

**Linux (Ubuntu/Debian):**
```bash
# Update package list
sudo apt update

# Install Node.js
sudo apt install nodejs npm

# Verifikasi
node --version
npm --version
```

### Step 2: Install Visual Studio Code (Text Editor)

1. Kunjungi: https://code.visualstudio.com/
2. Download sesuai OS Anda (Windows/Mac/Linux)
3. Install seperti software biasa
4. Buka VS Code setelah instalasi selesai

**Extensions yang Direkomendasikan** (Optional tapi helpful):
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Prettier - Code formatter

Cara install extension:
1. Buka VS Code
2. Klik icon Extensions di sidebar kiri (atau Ctrl+Shift+X)
3. Search nama extension
4. Klik Install

---

## 🗂️ Part 2: Setup Project

### Step 1: Siapkan Folder Project

**Cara 1 - Menggunakan File Explorer (Mudah untuk Pemula):**

**Windows:**
1. Buka File Explorer
2. Pilih lokasi (misalnya: Desktop atau Documents)
3. Klik kanan → New → Folder
4. Beri nama: `kublox-website`

**Mac:**
1. Buka Finder
2. Pilih lokasi (misalnya: Desktop atau Documents)
3. Klik kanan → New Folder
4. Beri nama: `kublox-website`

**Cara 2 - Menggunakan Terminal/CMD:**

```bash
# Windows (di CMD atau PowerShell)
cd Desktop
mkdir kublox-website
cd kublox-website

# Mac/Linux (di Terminal)
cd ~/Desktop
mkdir kublox-website
cd kublox-website
```

### Step 2: Copy File Project

1. **Extract/Download** semua file project yang sudah dibuat
2. **Copy** file-file berikut ke folder `kublox-website`:
   ```
   ✓ package.json
   ✓ vite.config.js
   ✓ tailwind.config.js
   ✓ postcss.config.js
   ✓ index.html
   ✓ .gitignore
   ✓ README.md
   ```

3. **Copy folder** `src` beserta isinya:
   ```
   src/
   ├── App.jsx
   ├── main.jsx
   └── index.css
   ```

**Struktur akhir folder Anda harus seperti ini:**
```
kublox-website/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .gitignore
└── README.md
```

---

## 💻 Part 3: Buka Project di VS Code

### Method 1: Drag and Drop (Paling Mudah)
1. Buka VS Code
2. Drag folder `kublox-website` ke jendela VS Code
3. Folder akan terbuka di VS Code

### Method 2: File Menu
1. Buka VS Code
2. File → Open Folder
3. Pilih folder `kublox-website`
4. Klik Select Folder / Open

### Method 3: Terminal/CMD
```bash
# Navigate ke folder project
cd path/to/kublox-website

# Buka di VS Code
code .
```

---

## 📦 Part 4: Install Dependencies

### Step 1: Buka Terminal di VS Code

**Cara 1:**
- Klik menu: Terminal → New Terminal
- Terminal akan muncul di bagian bawah VS Code

**Cara 2:**
- Tekan shortcut: `Ctrl + ~` (Windows/Linux) atau `Cmd + ~` (Mac)

### Step 2: Pastikan Anda di Folder yang Benar

Di terminal, Anda harus berada di folder `kublox-website`. 

Cek dengan perintah:
```bash
# Windows
dir

# Mac/Linux
ls
```

Anda harus melihat file-file seperti `package.json`, `vite.config.js`, dll.

### Step 3: Install Dependencies

Ketik perintah ini di terminal:
```bash
npm install
```

**Atau bisa juga:**
```bash
npm i
```

**Apa yang terjadi?**
- npm akan membaca file `package.json`
- Download semua package yang dibutuhkan
- Simpan di folder `node_modules` (akan dibuat otomatis)
- Proses ini memakan waktu 2-5 menit tergantung koneksi internet

**Tunggu sampai muncul tanda selesai:**
```
added 234 packages, and audited 235 packages in 45s
```

**Jika ada warning**, biasanya aman diabaikan. Yang penting tidak ada **ERROR**.

---

## 🚀 Part 5: Running the Website

### Step 1: Start Development Server

Di terminal VS Code, ketik:
```bash
npm run dev
```

### Step 2: Tunggu Server Start

Anda akan melihat output seperti ini:
```
  VITE v4.3.9  ready in 1234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 3: Buka di Browser

**Automatic (biasanya):**
- Browser akan otomatis terbuka
- Langsung ke `http://localhost:3000`

**Manual (jika tidak otomatis):**
1. Buka browser (Chrome, Firefox, Edge, Safari)
2. Ketik di address bar: `http://localhost:3000`
3. Tekan Enter

### Step 4: Website Berhasil! 🎉

Anda sekarang harus melihat website KuBlox berjalan di browser!

**Tips Penting:**
- ❌ **JANGAN CLOSE** terminal/CMD selama development
- ✅ Setiap perubahan code akan **auto-reload** di browser
- ✅ Untuk stop server: Tekan `Ctrl + C` di terminal

---

## 🔧 Part 6: Development Workflow

### Cara Kerja Development:

1. **Edit Code**
   - Buka file di VS Code (misalnya `src/App.jsx`)
   - Ubah sesuatu (contoh: ubah teks)
   - Save file (Ctrl+S atau Cmd+S)

2. **Lihat Perubahan**
   - Browser akan **otomatis refresh**
   - Perubahan langsung terlihat
   - Tidak perlu reload manual

3. **Check Console untuk Error**
   - Buka Developer Tools di browser (F12)
   - Check tab Console
   - Jika ada error, akan muncul di sini

### Workflow Harian:

**Mulai Kerja:**
```bash
# 1. Buka VS Code di folder project
# 2. Buka terminal
# 3. Jalankan dev server
npm run dev
```

**Selama Kerja:**
- Edit files
- Save
- Check browser
- Repeat

**Selesai Kerja:**
```bash
# Di terminal, tekan:
Ctrl + C

# Atau close terminal/VS Code
```

---

## 🎨 Part 7: Customization Guide

### Mengubah Warna Website

**File:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#FF6B35',    // 👈 Ubah ini untuk warna utama
      secondary: '#F7931E',  // 👈 Ubah ini untuk warna sekunder
      dark: '#1A1A2E',       // 👈 Background gelap
      accent: '#00D9FF',     // 👈 Warna aksen
    },
  },
}
```

**Cara:**
1. Buka file `tailwind.config.js`
2. Cari bagian `colors`
3. Ganti kode warna (format: `#RRGGBB`)
4. Save file
5. Website otomatis update dengan warna baru

### Mengubah Nama Website

**File:** `index.html` dan `src/App.jsx`

**index.html:**
```html
<title>KuBlox - Premium Roblox Robux Top-Up Service</title>
<!-- Ubah "KuBlox" dengan nama Anda -->
```

**App.jsx:**
```javascript
<h1 className="text-3xl font-display font-bold text-white glow-text">
  KuBlox  {/* 👈 Ubah ini */}
</h1>
```

### Mengubah Harga Paket

**File:** `src/App.jsx`

Cari array `packages`:
```javascript
const packages = [
  { 
    id: 1, 
    robux: 400,      // 👈 Jumlah Robux
    price: 4.99,     // 👈 Harga dalam USD
    popular: false,  // 👈 true untuk badge "POPULAR"
    discount: null   // 👈 Persentase diskon (atau null)
  },
  // Tambah lebih banyak paket di sini
]
```

### Mengubah Testimoni

**File:** `src/App.jsx`

Cari array `reviews`:
```javascript
const reviews = [
  { 
    name: 'Alex Johnson',        // 👈 Nama reviewer
    rating: 5,                   // 👈 Rating (1-5)
    comment: 'Fast delivery!..', // 👈 Komentar
    avatar: '👨',                 // 👈 Emoji avatar
    date: '2 days ago'           // 👈 Tanggal
  },
  // Tambah lebih banyak review di sini
]
```

---

## 🏗️ Part 8: Build untuk Production

Ketika website sudah siap untuk di-deploy:

### Step 1: Build Project

```bash
npm run build
```

**Apa yang terjadi?**
- Vite akan compile semua file
- Optimize code untuk production
- Generate folder `dist/` dengan file siap deploy

### Step 2: Preview Build (Optional)

```bash
npm run preview
```

Buka `http://localhost:4173` untuk preview hasil build.

### Step 3: Deploy

Folder `dist/` berisi file yang siap di-upload ke hosting:
- Vercel (Recommended - Free & Easy)
- Netlify
- GitHub Pages
- Hosting lainnya

---

## ❗ Common Problems & Solutions

### Problem 1: "npm: command not found"

**Penyebab:** Node.js belum terinstall atau belum ada di PATH

**Solusi:**
1. Install/reinstall Node.js dari nodejs.org
2. Restart komputer
3. Buka terminal baru
4. Test lagi: `npm --version`

### Problem 2: "Cannot find module"

**Penyebab:** Dependencies belum terinstall atau corrupted

**Solusi:**
```bash
# Hapus node_modules
rm -rf node_modules

# Hapus package-lock.json
rm package-lock.json

# Install ulang
npm install
```

### Problem 3: Port 3000 Already in Use

**Penyebab:** Ada aplikasi lain yang pakai port 3000

**Solusi 1 - Ubah Port:**
Edit `vite.config.js`:
```javascript
server: {
  port: 3001, // Ubah ke port lain
}
```

**Solusi 2 - Kill Process yang Pakai Port 3000:**

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill
```

### Problem 4: Website Blank / No Styling

**Penyebab:** Tailwind belum terload atau ada error

**Solusi:**
1. Check browser console (F12) untuk error
2. Pastikan `npm install` sudah selesai
3. Restart dev server:
   ```bash
   # Stop server (Ctrl+C)
   # Start lagi
   npm run dev
   ```
4. Hard reload browser (Ctrl+Shift+R)

### Problem 5: Changes Not Showing

**Penyebab:** Browser cache atau dev server issue

**Solusi:**
1. Hard reload browser (Ctrl+Shift+R / Cmd+Shift+R)
2. Restart dev server
3. Clear browser cache
4. Try incognito/private mode

### Problem 6: Slow npm install

**Penyebab:** Koneksi internet lambat atau npm registry issue

**Solusi:**
```bash
# Gunakan mirror yang lebih cepat (optional)
npm install --registry=https://registry.npmjs.org/

# Atau pakai yarn sebagai alternatif
npm install -g yarn
yarn install
```

---

## 📚 Useful Resources

### Documentation
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Lucide Icons**: https://lucide.dev/

### Learning Resources
- **React Tutorial**: https://react.dev/learn
- **Tailwind Crash Course**: https://www.youtube.com/watch?v=UBOj6rqRUME
- **JavaScript ES6**: https://www.w3schools.com/js/js_es6.asp

### Tools
- **VS Code**: https://code.visualstudio.com/
- **Node.js**: https://nodejs.org/
- **Git**: https://git-scm.com/

---

## 💡 Tips untuk Pemula

### Development Tips:
1. ✅ **Selalu save file** sebelum check browser (Ctrl+S)
2. ✅ **Check console** jika ada error (F12 di browser)
3. ✅ **Baca error message** - biasanya kasih petunjuk masalahnya
4. ✅ **Commit changes** ke Git secara berkala
5. ✅ **Test di berbagai browser** (Chrome, Firefox, Safari)

### Best Practices:
1. 📝 Comment code yang kompleks
2. 🎨 Konsisten dengan naming convention
3. 📁 Organize files dengan rapi
4. 🔄 Backup project secara berkala
5. 📚 Learn dan experiment!

### Keyboard Shortcuts di VS Code:
- `Ctrl + S` - Save file
- `Ctrl + ~` - Toggle terminal
- `Ctrl + P` - Quick file search
- `Ctrl + /` - Comment/uncomment
- `Ctrl + D` - Select next occurrence
- `Alt + Up/Down` - Move line up/down
- `Ctrl + Shift + F` - Find in files

---

## 🎓 Next Steps

Setelah website berjalan, Anda bisa:

1. **Customize Design**
   - Ubah warna, font, layout
   - Tambah section baru
   - Modifikasi animasi

2. **Add Features**
   - Backend integration
   - Payment gateway
   - Database
   - User authentication

3. **Deploy Online**
   - Upload ke hosting
   - Connect domain
   - Setup SSL

4. **Learn More**
   - Advanced React concepts
   - State management (Redux, Context)
   - API integration
   - Testing

---

## 📞 Need Help?

Jika masih ada masalah:

1. **Check Error Message**
   - Baca dengan teliti
   - Copy error ke Google

2. **Search Online**
   - Stack Overflow
   - GitHub Issues
   - Dev.to

3. **Community**
   - React Discord
   - Reddit r/reactjs
   - Dev forums

---

**Selamat Coding! 🚀**

Remember: Everyone starts as a beginner. Keep practicing and don't be afraid to make mistakes!

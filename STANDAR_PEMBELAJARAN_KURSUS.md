# STANDAR BAKU PENAMBAHAN KURSUS / PELAJARAN BARU
Dokumen ini merupakan panduan spesifikasi dan arsitektur resmi platform pembelajaran. Setiap penambahan pelajaran atau kursus baru **WAJIB** mematuhi seluruh standar di bawah ini secara konsisten.

---

## 1. Struktur Kurikulum & Silabus (5 Modul Berurutan)
- **Tepat 5 Modul per Kursus**: Tidak boleh kurang dan tidak boleh lebih.
- **Kedalaman Materi**: Setiap modul harus berisi beberapa sub-bab (`sections`) materi mendalam yang mencakup:
  - Teori fondasi komputasi & analogi logis.
  - Snippet kode nyata (misal C++ atau bahasa relevan) dengan penjelasan baris per baris.
  - Simulasi alur eksekusi / representasi memori.
  - Poin intisari (*Key Takeaways*).
  - Estimasi waktu baca (*readTime*).
- **Aturan Penguncian Bertahap (Strict Sequential Progression)**:
  - **Modul 1 (Materi 1)**: Selalu terbuka pertama kali secara default.
  - **Kuis 1**: Terkunci sampai Materi Modul 1 ditandai selesai dipelajari.
  - **Modul 2**: Terkunci sampai Kuis 1 dinyatakan lulus (skor $\ge 65\%$).
  - **Pola Berkelanjutan**:
    $$\text{Materi } N \text{ Selesai} \longrightarrow \text{Kuis } N \text{ Terbuka} \longrightarrow \text{Kuis } N \text{ Lulus } (\ge 65\%) \longrightarrow \text{Materi } N+1 \text{ Terbuka}$$

---

## 2. Standar Kuis Evaluasi (100 Soal per Kursus)
- **Tepat 100 Soal per Kursus**:
  - Dikelompokkan rata menjadi **5 Kuis Modul $\times$ 20 Soal per Kuis = 100 Soal**.
- **Kualitas Soal Pedagogis**:
  - Soal berbasis analisis konsep, pelacakan kode (*tracing*), kasus batas (*edge case*), dan pemecahan masalah.
  - Setiap soal memiliki 4 opsi jawaban realistis (`options: string[]`), indeks jawaban benar (`correctAnswer: number`), serta pembahasan ilmiah terperinci (`explanation: string`).
- **Standar Kelulusan**:
  - Ambang batas lulus adalah minimal **65%** (13 dari 20 soal benar) per modul.

---

## 3. Buku Rumus & Cheatsheet Dinamis
- Setiap kursus harus menyediakan data rangkuman cepat (`FormulaCheatsheetItem[]`):
  - Kategori konsep.
  - Rumus / representasi memori / sintaks kunci.
  - Catatan penjelasan ringkas.
- Halaman cheatsheet otomatis menyesuaikan kategori, daftar rumus, dan kolom pencarian sesuai kursus yang aktif.

---

## 4. Sertifikat Digital & Cetak Terisolasi
- **Penguncian Sertifikat**:
  - Sertifikat **TETAP TERKUNCI** dan tidak dapat dicetak jika peserta belum menyelesaikan seluruh 5 modul dan lulus ke-5 kuis (100 soal) pada kursus terkait.
- **Elemen Kredensial**:
  - Nama peserta (dari profil).
  - ID Peserta otomatis (`ID-XXXX-YYY`).
  - Kode kredensial resmi kursus (misal `CERT-ALG-...` atau `CERT-PRG-...`).
  - Judul kompetensi kursus & daftar kompetensi inti (*Competencies*).
  - Tanda tangan Dewan Penguji sesuai bidang studi.
- **Cetak Presisi**:
  - Mendukung fungsi cetak bawaan browser (`window.print()`).
  - Format cetak terisolasi: hanya kanvas sertifikat landscape satu halaman bersih yang dicetak tanpa navbar, sidebar, tombol, atau footer situs.

---

## 5. Sistem Identitas Mandiri & Reset Ganti Nama
- **Tanpa Login/Registrasi Rumit**:
  - Pengguna hanya menginputkan nama.
  - ID Peserta dibuat otomatis, unik, dan tersimpan di `localStorage`.
- **Ganti Nama = Reset Progres**:
  - Jika pengguna mengubah nama peserta, sistem memunculkan dialog konfirmasi.
  - Mengubah nama akan mereset seluruh kelulusan modul dan kuis pada semua kursus, serta menerbitkan ID Peserta baru yang berbeda untuk menjaga integritas sertifikat.

---

## 6. Beranda & Pengalih Kursus (Clean Dual/Multi-Course Switcher)
- Halaman beranda wajib bersih, menampilkan kartu ringkasan setiap kursus dengan indikator status aktif (*"Sedang Dipelajari ✓"*), progres modul lulus, dan tombol aksi cepat.
- Ketika pengguna memilih salah satu kursus, seluruh navigasi dan halaman (Materi, Kuis, Cheatsheet, Sertifikat, dan Silabus Beranda) otomatis beralih ke kursus tersebut.
- Navbar atas menyediakan tombol *pill switcher* cepat untuk berganti kursus kapan saja.

---

## 7. Arsitektur Kode Berkas per Kursus
Untuk setiap penambahan kursus baru di masa mendatang:
1. Daftarkan ID & Metadata kursus di [`src/data/courses.ts`](file:///C:/Users/anind/Documents/Project/algoritma/src/data/courses.ts).
2. Buat berkas kuis 100 soal di `src/data/quizzes[NamaKursus].ts` (5 modul $\times$ 20 soal).
3. Buat berkas kurikulum 5 modul di `src/data/curriculum[NamaKursus].ts`.
4. Tambahkan getter di [`src/data/curriculum.ts`](file:///C:/Users/anind/Documents/Project/algoritma/src/data/curriculum.ts) (`getModulesForCourse`, `getCheatsheetForCourse`).
5. Tambahkan progres default kursus di [`src/data/student.ts`](file:///C:/Users/anind/Documents/Project/algoritma/src/data/student.ts).
6. Sesuaikan Dewan Penguji & Kredensial di [`src/pages/SertifikatPage.tsx`](file:///C:/Users/anind/Documents/Project/algoritma/src/pages/SertifikatPage.tsx).

---

## 8. Status Kursus Aktif Saat Ini (6 Kursus, Total 600 Soal)
1. **Kompleksitas Algoritma** (`kompleksitas`): 5 Modul, 100 Soal, Kredensial `CERT-ALG-2026-XXXX-PASS` (Premium Rp 10.000).
2. **Dasar Pemrograman** (`dasar_pemrograman`): 5 Modul, 100 Soal, Kredensial `CERT-PRG-2026-XXXX-PASS` (Premium Rp 10.000).
3. **Algoritma & Pemrograman** (`algoritma_pemrograman`): 5 Modul, 100 Soal, Kredensial `CERT-ALP-2026-XXXX-PASS` (100% GRATIS).
4. **Kalkulus Komputasional** (`kalkulus`): 5 Modul, 100 Soal, Kredensial `CERT-CALC-2026-XXXX-PASS` (Premium Rp 10.000).
5. **Aljabar Linier & Matriks** (`aljabar_linier`): 5 Modul, 100 Soal, Kredensial `CERT-ALIN-2026-XXXX-PASS` (Premium Rp 10.000).
6. **Matematika Diskrit** (`matematika_diskrit`): 5 Modul, 100 Soal, Kredensial `CERT-MDIS-2026-XXXX-PASS` (Premium Rp 10.000).

---

## 9. Standar Monetisasi & Pembayaran QRIS Otomatis Saweria
- **Kebijakan Akses Gratis vs Premium**:
  - **Algoritma & Pemrograman** (`algoritma_pemrograman`): Satu-satunya kursus fondasi yang **100% GRATIS** untuk seluruh peserta tanpa perlu bayar.
  - **5 Kursus Lainnya**: Terkunci secara default (Premium).
- **Skema Harga**:
  - **Buka 1 Kursus**: **Rp 10.000**
  - **Buka Semua Kursus (All-Access Bundle)**: **Rp 50.000** (lebih hemat Rp 10.000 dibanding beli satuan).
- **Integrasi Saweria & QRIS**:
  - Menggunakan QRIS Otomatis yang terhubung langsung ke profil Saweria (`https://saweria.co/HasyhiRama`).
  - Dilengkapi fitur live preview barcode QRIS Nasional (GPN), pesan transfer otomatis berformat `[ID-Peserta] [Nama]`, dan tombol cek konfirmasi otomatis dengan efek confetti.
  - Pengguna dapat menyesuaikan username Saweria secara langsung di modal pembayaran.
- **Integritas Pembelian**:
  - Pembelian tersimpan permanen di `localStorage` (`unlockedCourses`, `isAllAccess`).
  - Mengubah nama peserta **TIDAK AKAN MENGHAPUS** status pembelian kursus (hanya mereset skor/kelulusan silabus demi kredensial sertifikat baru).
- **Paywall Barrier**:
  - Jika peserta yang belum membayar mencoba membuka halaman `materi`, `kuis`, `cheatsheet`, atau `sertifikat` pada kursus berbayar, sistem otomatis menampilkan layar Paywall dengan tautan cepat untuk membuka kursus atau beralih kembali ke kursus gratis.

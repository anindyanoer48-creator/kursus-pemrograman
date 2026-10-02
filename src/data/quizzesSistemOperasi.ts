import type { QuizQuestion } from './curriculum';

export const SISTEM_OPERASI_QUIZZES: Record<string, QuizQuestion[]> = {
  // =========================================================================
  // MODUL 1: ARSITEKTUR SISTEM OPERASI, KERNEL & MODE DUAL CPU (20 Soal)
  // =========================================================================
  os_arsitektur_kernel: [
    {
      id: 'os-1-1',
      question: 'Apa peran mendasar Sistem Operasi dalam hierarki komputasi modern?',
      options: [
        'Sebagai perantara antara pengguna dan perangkat keras komputer, mengelola sumber daya (CPU, memori, I/O), dan menyediakan lingkungan eksekusi program',
        'Sebagai compiler untuk menerjemahkan bahasa C ke assembly',
        'Sebagai kabel fisik penghubung motherboard ke listrik',
        'Sebagai antarmuka peramban web untuk menjelajah internet'
      ],
      correctAnswer: 0,
      explanation: 'Sistem operasi bertindak sebagai Resource Manager (mengalokasikan CPU, memori, perangkat I/O secara adil dan efisien) dan Extended Machine (menyediakan abstraksi tingkat tinggi di atas perangkat keras rumit).'
    },
    {
      id: 'os-1-2',
      question: 'Apa fungsi utama dari pemisahan Dual-Mode Operation (User Mode vs Kernel Mode) pada prosesor modern?',
      options: [
        'Melindungi sistem operasi dan program lain dari program pengguna yang nakal, bermasalah, atau berniat jahat',
        'Menghemat pemakaian baterai laptop hingga 50%',
        'Mempercepat kecepatan mengetik keyboard pengguna',
        'Membuat warna layar monitor menjadi lebih kontras'
      ],
      correctAnswer: 0,
      explanation: 'Dual-mode (didukung oleh bit mode hardware) membedakan eksekusi instruksi biasa di User Mode (ring 3) dan instruksi istimewa (privileged instructions) di Kernel Mode (ring 0) agar program pengguna tidak dapat merusak perangkat keras atau OS.'
    },
    {
      id: 'os-1-3',
      question: 'Instruksi manakah di bawah ini yang tergolong sebagai Privileged Instruction (hanya boleh dieksekusi di Kernel Mode)?',
      options: [
        'Mengubah nilai register penunjuk tabel halaman memori (Page Table Base Register)',
        'Melakukan operasi penambahan aritmatika integer (ADD)',
        'Membaca nilai register umum EAX',
        'Melakukan lompatan kondisional (JUMP)'
      ],
      correctAnswer: 0,
      explanation: 'Instruksi seperti memanipulasi pemetaan memori, mematikan interupsi hardware (CLI/STI), dan mengakses port I/O secara langsung bersifat istimewa (privileged) dan akan memicu exception trap jika dijalankan di User Mode.'
    },
    {
      id: 'os-1-4',
      question: 'Mekanisme terstandarisasi yang digunakan oleh program di User Space untuk meminta layanan dari Kernel disebut:',
      options: ['System Call (Syscall)', 'Function Pointer', 'Global Variable', 'Direct Memory Write'],
      correctAnswer: 0,
      explanation: 'System call adalah antarmuka programatis antara proses pengguna dan layanan kernel (seperti fork, read, write, open). Syscall memicu software interrupt / trap instruction yang mengalihkan CPU ke Kernel Mode secara aman.'
    },
    {
      id: 'os-1-5',
      question: 'Apa perbedaan fundamental antara Arsitektur Monolithic Kernel (seperti Linux) dan Microkernel (seperti Minix, QNX)?',
      options: [
        'Monolithic menjalankan hampir semua layanan OS (VFS, IPC, Device Drivers, Network Stack) di ruang alamat kernel yang sama; Microkernel hanya menempatkan fungsi paling mendasar di kernel space dan menjalankan driver/file system di user space',
        'Monolithic tidak memiliki memori RAM, Microkernel memiliki RAM',
        'Monolithic hanya untuk komputer satu monitor, Microkernel untuk banyak monitor',
        'Monolithic adalah virus komputer, Microkernel adalah antivirus'
      ],
      correctAnswer: 0,
      explanation: 'Monolithic kernel mengedepankan performa tinggi karena komunikasi internal berupa pemanggilan fungsi C langsung, sementara Microkernel mengedepankan keandalan dan keamanan karena crash pada driver jaringan tidak akan meruntuhkan seluruh kernel.'
    },
    {
      id: 'os-1-6',
      question: 'Apa yang dimaksud dengan Interupsi Perangkat Keras (Hardware Interrupt)?',
      options: [
        'Sinyal elektrik asinkron yang dikirim oleh perangkat I/O (seperti keyboard atau kartu jaringan) ke CPU melalui Interrupt Controller (APIC) untuk meminta perhatian pemrosesan',
        'Kerusakan fisik pada kabel monitor',
        'Penekanan tombol power komputer secara paksa',
        'Kekurangan memori RAM'
      ],
      correctAnswer: 0,
      explanation: 'Interupsi hardware memberi tahu CPU bahwa suatu event perangkat keras eksternal telah terjadi (misal: paket data Ethernet tiba), menyebabkan CPU menunda eksekusi saat ini dan melompat ke Interrupt Service Routine (ISR).'
    },
    {
      id: 'os-1-7',
      question: 'Tabel vektor di memori yang berisi alamat-alamat memori dari rutin penanganan interupsi (handler) disebut:',
      options: ['Interrupt Vector Table (IVT)', 'Process Control Block', 'Page Table Directory', 'File Allocation Table'],
      correctAnswer: 0,
      explanation: 'IVT (atau IDT - Interrupt Descriptor Table pada x86) adalah larik penunjuk fungsi di memori yang memetakan nomor interupsi ke alamat kode penangan (Interrupt Service Routine).'
    },
    {
      id: 'os-1-8',
      question: 'Apa yang dimaksud dengan "Trap" atau "Exception" dalam arsitektur prosesor?',
      options: [
        'Interupsi perangkat lunak (software-generated interrupt) yang dipicu secara sinkron oleh instruksi program itu sendiri (misal: pembagian dengan nol atau system call)',
        'Perangkap fisik untuk tikus di ruang server',
        'Program antivirus yang menjebak malware',
        'Kabel jaringan yang terputus'
      ],
      correctAnswer: 0,
      explanation: 'Trap adalah interupsi sinkron yang dihasilkan oleh CPU itu sendiri saat mengeksekusi instruksi tertentu, baik karena kesalahan program (faults/div-by-zero) atau kesengajaan (system call trap).'
    },
    {
      id: 'os-1-9',
      question: 'Program pertama yang dieksekusi oleh CPU setelah komputer dinyalakan yang tersimpan di ROM/NVRAM disebut:',
      options: ['BIOS / UEFI Firmware', 'Kernel Linux', 'Bash Shell', 'Web Browser'],
      correctAnswer: 0,
      explanation: 'Firmware BIOS/UEFI menjalankan Power-On Self-Test (POST), menginisialisasi perangkat keras dasar, lalu memuat Bootloader (seperti GRUB) dari media penyimpanan ke RAM.'
    },
    {
      id: 'os-1-10',
      question: 'Komponen perangkat lunak yang bertugas memuat citra kernel sistem operasi dari disk penyimpanan ke dalam memori RAM utama adalah:',
      options: ['Bootloader (seperti GRUB atau Windows Boot Manager)', 'Device Driver', 'Hypervisor', 'Shell Command Interpreter'],
      correctAnswer: 0,
      explanation: 'Bootloader adalah program kecil yang bertugas mengonfigurasi memori awal, memuat kernel OS ke memori, dan mengalihkan kendali eksekusi instruksi CPU ke titik awal kernel.'
    },
    {
      id: 'os-1-11',
      question: 'Timer Hardware digunakan oleh Sistem Operasi untuk:',
      options: [
        'Mencegah satu program pengguna memonopoli CPU selamanya dengan cara memicu interupsi periodik untuk preemption',
        'Menghitung umur baterai laptop',
        'Menyesuaikan jam dinding pengguna secara otomatis',
        'Menghitung biaya pemakaian listrik'
      ],
      correctAnswer: 0,
      explanation: 'Timer hardware menghasilkan interupsi clock berkala (tick). Ini menjamin bahwa OS selalu mendapatkan kembali kendali CPU dari program pengguna yang terjebak dalam infinite loop (Preemptive Multitasking).'
    },
    {
      id: 'os-1-12',
      question: 'Perangkat lunak khusus yang menerjemahkan perintah standar sistem operasi menjadi instruksi elektronik spesifik pengendali perangkat keras tertentu disebut:',
      options: ['Device Driver', 'Compiler', 'Interpreter', 'Virtual Machine'],
      correctAnswer: 0,
      explanation: 'Device driver mengabstraksikan rincian register dan antarmuka perangkat keras tertentu (misal: kartu grafis NVIDIA atau Wi-Fi Realtek) sehingga OS dapat berinteraksi melalui antarmuka standar (seperti blok atau karakter).'
    },
    {
      id: 'os-1-13',
      question: 'Arsitektur Hybrid Kernel (seperti Windows NT Kernel dan macOS XNU) menggabungkan:',
      options: [
        'Kecepatan performa Monolithic kernel untuk sebagian subsistem kritis (seperti grafis/driver) dengan modularitas konseptual Microkernel',
        'Mesin uap dengan energi listrik',
        'Dua sistem operasi yang berjalan di dua prosesor berbeda',
        'Kamera digital dengan sistem audio'
      ],
      correctAnswer: 0,
      explanation: 'Windows NT dirancang sebagai kernel hibrida: secara struktural berkonsep modular mirip microkernel, tetapi menjalankan komponen subsistem inti dalam satu ruang alamat kernel bersama demi performa latensi rendah.'
    },
    {
      id: 'os-1-14',
      question: 'Pada sistem Unix/Linux, proses pertama yang dibuat oleh kernel di user space yang memiliki Process ID (PID) bernilai 1 adalah:',
      options: ['init (atau systemd)', 'bash', 'kernel_task', 'cron'],
      correctAnswer: 0,
      explanation: 'Proses PID 1 (secara historis `init`, kini mayoritas `systemd`) adalah nenek moyang dari seluruh proses di user space, bertugas mem-bootstrap daemon layanan sistem dan mengadopsi proses yatim piatu (orphan processes).'
    },
    {
      id: 'os-1-15',
      question: 'Apa fungsi utama dari Shell (seperti Bash, Zsh, atau PowerShell)?',
      options: [
        'Sebagai antarmuka baris perintah (CLI) yang membaca instruksi pengguna dan menerjemahkannya menjadi pemanggilan system call sistem operasi',
        'Sebagai pelindung fisik casing laptop',
        'Sebagai pengenkripsi partisi harddisk otomatis',
        'Sebagai sistem pendingin CPU berbasis cairan'
      ],
      correctAnswer: 0,
      explanation: 'Shell adalah command interpreter di tingkat user space yang menerima perintah teks dari pengguna, mengeksekusi program biner yang sesuai, dan mengelola pipa stream I/O.'
    },
    {
      id: 'os-1-16',
      question: 'Apa yang terjadi ketika instruksi istimewa (privileged instruction) dieksekusi saat CPU berada dalam User Mode?',
      options: [
        'Perangkat keras CPU menolak instruksi tersebut dan memicu Trap/General Protection Fault ke kernel',
        'Komputer langsung meledak secara fisik',
        'CPU langsung mengabaikan instruksi dan melanjutkan program seolah tidak ada masalah',
        'Mode CPU otomatis berubah menjadi Kernel Mode tanpa izin'
      ],
      correctAnswer: 0,
      explanation: 'Hardware CPU mendeteksi ketidaksesuaian hak akses (CPL > 0), membatalkan instruksi, dan memicu exception perangkap ke OS, yang umumnya merespons dengan mematikan proses pelanggar (Segmentation Fault / Access Violation).'
    },
    {
      id: 'os-1-17',
      question: 'Mekanisme Direct Memory Access (DMA) memungkinkan perangkat I/O berkecepatan tinggi untuk:',
      options: [
        'Mentransfer blok data besar langsung ke/dari memori RAM utama tanpa melibatkan intervensi siklus instruksi CPU secara konstan',
        'Membaca isi pikiran pengguna komputer',
        'Memperbesar ukuran RAM fisik secara gratis',
        'Menggandakan kecepatan clock GHz CPU'
      ],
      correctAnswer: 0,
      explanation: 'Tanpa DMA, CPU harus memindahkan setiap byte data satu per satu (Programmed I/O). DMA controller mengurus transfer blok data massal secara mandiri, dan hanya menginterupsi CPU setelah seluruh transfer tuntas.'
    },
    {
      id: 'os-1-18',
      question: 'Lapisan abstraksi POSIX (Portable Operating System Interface) dirancang oleh IEEE dengan tujuan:',
      options: [
        'Menstandarisasi antarmuka pemrograman aplikasi (API) sistem call agar program berbasis C dapat di-porting dan dikompilasi di berbagai OS keluarga Unix tanpa perombakan kode',
        'Menentukan bentuk soket fisik prosesor Intel',
        'Mengganti format kabel USB di seluruh dunia',
        'Melarang pembuatan sistem operasi komersial'
      ],
      correctAnswer: 0,
      explanation: 'POSIX mendefinisikan API standar (seperti `pthread`, `fork`, `open`, `write`) yang menjamin portabilitas kode sumber lintas varian Unix, Linux, macOS, dan BSD.'
    },
    {
      id: 'os-1-19',
      question: 'Apa perbedaan antara Virtual File System (VFS) dan implementasi file system konkret (seperti ext4, NTFS)?',
      options: [
        'VFS adalah lapisan abstraksi kernel yang menyediakan antarmuka terpadu standar (open, read, write) untuk berbagai sistem berkas konkret yang berbeda di bawahnya',
        'VFS hanya ada di dunia maya dan tidak bisa menyimpan berkas',
        'NTFS adalah VFS versi open-source',
        'ext4 hanya bisa berjalan tanpa kernel'
      ],
      correctAnswer: 0,
      explanation: 'VFS bertindak sebagai antarmuka polimorfik di dalam kernel: program memanggil `read()`, dan VFS meneruskannya ke fungsi handler spesifik dari ext4, Btrfs, FAT32, atau NFS tanpa program perlu tahu tipe partisi fisiknya.'
    },
    {
      id: 'os-1-20',
      question: 'Dalam manajemen I/O sistem operasi, teknik Buffering digunakan untuk:',
      options: [
        'Mengakomodasi ketidakcocokan kecepatan (speed mismatch) antara produsen data (misal: harddisk) dan konsumen data (misal: CPU/aplikasi)',
        'Menghapus berkas yang tidak terpakai secara acak',
        'Mengunci komputer saat pengguna tidur',
        'Menambah resolusi kartu grafis'
      ],
      correctAnswer: 0,
      explanation: 'Buffer adalah area memori sementara yang menyerap fluktuasi kecepatan transfer data dan menyelaraskan perbedaan ukuran blok data antara perangkat I/O dan prosesor.'
    }
  ],

  // =========================================================================
  // MODUL 2: MANAJEMEN PROSES, THREADS & PENJADWALAN CPU (20 Soal)
  // =========================================================================
  os_proses_thread_scheduling: [
    {
      id: 'os-2-1',
      question: 'Apa definisi formal dari "Proses" dalam sistem operasi?',
      options: [
        'Sebuah program yang sedang dalam kondisi dieksekusi di memori (Program in execution), lengkap dengan ruang alamat memori, register, dan status sumber dayanya',
        'Berkas file biner yang tersimpan diam di harddisk',
        'Instruksi bahasa assembly yang belum dikompilasi',
        'Perangkat printer yang sedang mencetak kertas'
      ],
      correctAnswer: 0,
      explanation: 'Program adalah entitas pasif (berkas di disk), sedangkan Proses adalah entitas aktif dengan program counter, stack eksekusi, data segment, dan alokasi sumber daya di RAM.'
    },
    {
      id: 'os-2-2',
      question: 'Struktur data di dalam kernel sistem operasi yang menyimpan seluruh metadata dan status suatu proses disebut:',
      options: ['Process Control Block (PCB)', 'File Allocation Table', 'Page Frame Map', 'Memory Management Unit'],
      correctAnswer: 0,
      explanation: 'PCB (atau `task_struct` di Linux) menyimpan PID, status proses (Running, Ready, Waiting), nilai register CPU, alokasi memori, daftar berkas terbuka, dan informasi penjadwalan.'
    },
    {
      id: 'os-2-3',
      question: 'Siklus hidup transisi proses standar terdiri dari 5 status utama, yaitu:',
      options: [
        'New, Ready, Running, Waiting (Blocked), dan Terminated',
        'Start, Pause, Resume, Stop, dan Delete',
        'Active, Sleeping, Dead, Reborn, dan Ghost',
        'Input, Process, Output, Storage, dan Network'
      ],
      correctAnswer: 0,
      explanation: 'New (dibuat) -> Ready (siap di antrian CPU) -> Running (sedang dieksekusi CPU) -> Waiting/Blocked (menunggu I/O atau sinyal) -> Terminated (selesai/keluar).'
    },
    {
      id: 'os-2-4',
      question: 'Apa perbedaan esensial antara Proses dan Thread (Lightweight Process)?',
      options: [
        'Setiap proses memiliki ruang alamat memori (address space) terisolasi sendiri; sedangkan thread-thread dalam satu proses berbagi ruang alamat memori, heap, dan berkas terbuka yang sama',
        'Proses lebih cepat dibuat daripada thread',
        'Thread tidak bisa berjalan secara bersamaan di multi-core CPU',
        'Proses hanya ada di Linux, Thread hanya ada di Windows'
      ],
      correctAnswer: 0,
      explanation: 'Thread berbagi ruang alamat memori dan variabel global dari proses induknya, namun masing-masing thread memiliki Program Counter, set register, dan stack panggilannya sendiri.'
    },
    {
      id: 'os-2-5',
      question: 'Operasi di mana CPU menyimpan konteks proses lama yang sedang berjalan ke PCB dan memuat konteks proses baru dari PCB-nya disebut:',
      options: ['Context Switch', 'Thrashing', 'Paging', 'Spooling'],
      correctAnswer: 0,
      explanation: 'Context switch adalah overhead murni (tidak melakukan pekerjaan komputasi produktif) di mana OS menyimpan status register CPU proses lama dan merestorasi status proses baru ke prosesor.'
    },
    {
      id: 'os-2-6',
      question: 'Pada sistem operasi Linux/Unix, pemanggilan system call `fork()` menghasilkan:',
      options: [
        'Duplikasi identik dari proses pemanggil (anak/child process) dengan PID baru dan ruang alamat memori yang disalin (Copy-on-Write)',
        'Penghapusan proses induk seketika',
        'Pemberhentian seluruh sistem operasi',
        'Pembuatan thread baru di user space'
      ],
      correctAnswer: 0,
      explanation: '`fork()` menduplikasi proses induk. Pada proses induk, `fork()` mengembalikan nilai PID anak (> 0); sedangkan pada proses anak, `fork()` mengembalikan nilai 0.'
    },
    {
      id: 'os-2-7',
      question: 'Optimasi "Copy-on-Write" (CoW) pada implementasi `fork()` bekerja dengan cara:',
      options: [
        'Halaman memori fisik dibagi bersama (shared) antara induk dan anak secara read-only, dan baru benar-benar disalin ke frame fisik baru saat salah satu proses mencoba memodifikasinya (write)',
        'Menyalin seluruh isi RAM ke disk sebelum fork',
        'Mencetak kode program ke printer sebelum proses berjalan',
        'Melarang proses anak menulis data ke memori'
      ],
      correctAnswer: 0,
      explanation: 'CoW mencegah pemborosan penyalinan megabyte RAM yang seringkali langsung ditimpa oleh panggilan `execve()` segera setelah `fork()`, menghemat waktu dan memori secara masif.'
    },
    {
      id: 'os-2-8',
      question: 'Proses yang telah selesai dieksekusi (memanggil `exit()`) tetapi data PCB-nya masih tersimpan di kernel karena induknya belum membaca statusnya via `wait()` disebut:',
      options: ['Zombie Process', 'Orphan Process', 'Daemon Process', 'Thread Pool'],
      correctAnswer: 0,
      explanation: 'Proses zombie tidak lagi memakan CPU atau RAM, tetapi memakan slot di tabel proses kernel (PID table). Proses ini baru hilang setelah proses induk memanggil `wait()` atau `waitpid()`.'
    },
    {
      id: 'os-2-9',
      question: 'Sebaliknya, jika proses induk mati lebih dulu sebelum proses anaknya selesai, proses anak tersebut menjadi:',
      options: ['Orphan Process (diadopsi oleh init / systemd)', 'Zombie Permanen', 'Critical Error', 'Core Dump'],
      correctAnswer: 0,
      explanation: 'Proses yatim piatu (orphan) langsung diadopsi oleh proses akar (PID 1 / systemd) yang akan secara rutin memanggil `wait()` saat anak tersebut selesai, mencegah terjadinya zombie abadi.'
    },
    {
      id: 'os-2-10',
      question: 'Algoritma penjadwalan CPU First-Come, First-Served (FCFS) rentan terhadap fenomena "Convoy Effect", yaitu:',
      options: [
        'Banyak proses pendek (I/O-bound) harus menunggu sangat lama di belakang satu proses raksasa panjang (CPU-bound) yang sedang memonopoli CPU',
        'Prosesor terbakar akibat kepanasan',
        'Seluruh antrian proses hilang saat mati lampu',
        'Prioritas proses berputar secara terbalik'
      ],
      correctAnswer: 0,
      explanation: 'Convoy effect terjadi pada FCFS non-preemptive: proses singkat yang hanya butuh 1ms CPU harus antre menunggu proses kalkulasi ilmiah yang memakan waktu 10 menit selesai, menurunkan utilisasi perangkat I/O secara drastis.'
    },
    {
      id: 'os-2-11',
      question: 'Algoritma penjadwalan Shortest Job First (SJF) terbukti secara matematis optimal dalam meminimalkan:',
      options: ['Average Waiting Time (Rata-rata Waktu Tunggu)', 'Biaya lisensi sistem operasi', 'Jumlah memori yang dialokasikan', 'Kecepatan putaran kipas pendingin'],
      correctAnswer: 0,
      explanation: 'SJF memberikan rata-rata waktu tunggu minimum dibanding semua algoritma penjadwalan, namun dalam praktiknya sulit diimplementasikan sempurna karena panjang burst CPU berikutnya tidak diketahui secara pasti sebelumnya.'
    },
    {
      id: 'os-2-12',
      question: 'Varian preemptive dari algoritma Shortest Job First (SJF) dikenal dengan nama:',
      options: ['Shortest Remaining Time First (SRTF)', 'Round Robin (RR)', 'Multilevel Feedback Queue', 'Priority Scheduling'],
      correctAnswer: 0,
      explanation: 'SRTF akan merebut (preempt) CPU dari proses yang sedang berjalan jika tiba proses baru yang memiliki sisa estimasi waktu CPU burst lebih pendek daripada proses aktif saat ini.'
    },
    {
      id: 'os-2-13',
      question: 'Pada algoritma Round Robin (RR), alokasi potongan waktu CPU kecil yang diberikan ke setiap proses secara bergiliran disebut:',
      options: ['Time Quantum (atau Time Slice)', 'Clock Period', 'Burst Interval', 'Context Window'],
      correctAnswer: 0,
      explanation: 'Setiap proses di antrian ready mendapatkan jatah eksekusi CPU sebesar 1 time quantum (misal: 10-100 milidetik). Jika quantum habis sebelum proses tuntas, proses dipindahkan ke ekor antrian ready.'
    },
    {
      id: 'os-2-14',
      question: 'Jika ukuran Time Quantum pada algoritma Round Robin disetel terlalu besar (mendekati tak hingga), perilakunya akan berubah menjadi:',
      options: ['Algoritma FCFS (First-Come, First-Served)', 'Algoritma SJF', 'Algoritma Prioritas Statis', 'Deadlock'],
      correctAnswer: 0,
      explanation: 'Jika quantum sangat besar, setiap proses akan selesai sebelum quantumnya habis, sehingga antrian dieksekusi secara FIFO murni (FCFS).'
    },
    {
      id: 'os-2-15',
      question: 'Sebaliknya, jika Time Quantum disetel terlalu kecil (misal: 1 mikrodetik), masalah yang timbul adalah:',
      options: [
        'Proporsi waktu terbuang (overhead) untuk context switching menjadi terlalu dominan dibanding waktu eksekusi program produktif',
        'Sistem akan kekurangan memori heap',
        'Keyboard tidak bisa menerima input teks',
        'Data di harddisk terhapus'
      ],
      correctAnswer: 0,
      explanation: 'Jika context switch butuh 10 mikrodetik sementara quantum 1 mikrodetik, maka 90% waktu CPU habis hanya untuk membolak-balik konteks PCB tanpa memajukan komputasi program.'
    },
    {
      id: 'os-2-16',
      question: 'Masalah "Starvation" (kelaparan tak berkesudahan) pada Priority Scheduling dapat diatasi dengan teknik:',
      options: ['Aging (Menaikkan prioritas proses secara bertahap seiring bertambahnya waktu tunggu)', 'Paging', 'Spooling', 'Polling'],
      correctAnswer: 0,
      explanation: 'Aging secara periodik meningkatkan prioritas proses yang telah lama mengantre di sistem, menjamin bahwa bahkan proses dengan prioritas terendah sekalipun pada akhirnya akan dieksekusi.'
    },
    {
      id: 'os-2-17',
      question: 'Algoritma Multilevel Feedback Queue (MLFQ) memiliki keunggulan fleksibel karena:',
      options: [
        'Mengizinkan proses berpindah antar antrian prioritas berbeda berdasarkan perilakunya (proses I/O intensif naik ke prioritas tinggi, CPU intensif turun)',
        'Hanya menggunakan 1 baris antrian statis',
        'Tidak memerlukan timer interrupt',
        'Melarang proses dieksekusi di prosesor multi-core'
      ],
      correctAnswer: 0,
      explanation: 'MLFQ memisahkan proses berdasarkan karakteristik burst CPU-nya secara dinamis, memberikan responsivitas luar biasa bagi proses interaktif dan throughput tinggi bagi proses batch.'
    },
    {
      id: 'os-2-18',
      question: 'Apa perbedaan antara User-Level Threads (ULT) dan Kernel-Level Threads (KLT)?',
      options: [
        'ULT dikelola sepenuhnya oleh library di user space tanpa diketahui kernel (jika satu ULT memblokir I/O, seluruh proses ikut terblokir); KLT dikelola langsung oleh penjadwal kernel OS',
        'ULT hanya bisa berjalan di smartphone, KLT di komputer desktop',
        'KLT tidak memiliki register CPU',
        'ULT selalu lebih lambat daripada proses biasa'
      ],
      correctAnswer: 0,
      explanation: 'Karena kernel tidak mengetahui eksistensi ULT secara individual, kernel menganggap satu proses utuh; pemblokiran I/O oleh satu thread membuat OS memblokir seluruh proses. KLT dapat dijadwalkan secara independen pada core CPU yang berbeda.'
    },
    {
      id: 'os-2-19',
      question: 'Metrik penjadwalan "Turnaround Time" didefinisikan secara matematis sebagai:',
      options: [
        'Selang waktu dari saat proses diserahkan/tiba (submission time) hingga proses selesai sepenuhnya (completion time)',
        'Waktu proses berada di antrian ready saja',
        'Waktu saat pertama kali proses menghasilkan keluaran di layar',
        'Jumlah instruksi yang dijalankan per detik'
      ],
      correctAnswer: 0,
      explanation: 'Turnaround Time = Waktu Selesai (Completion Time) - Waktu Tiba (Arrival Time). Metrik ini mencakup waktu eksekusi CPU + waktu tunggu di antrian + waktu operasi I/O.'
    },
    {
      id: 'os-2-20',
      question: 'Penjadwal CPU bawaan Linux modern sejak kernel 2.6.23 yang menggunakan struktur data Pohon Merah-Hitam (Red-Black Tree) disebut:',
      options: ['Completely Fair Scheduler (CFS)', 'O(1) Scheduler', 'Lottery Scheduler', 'Round Robin Murni'],
      correctAnswer: 0,
      explanation: 'CFS (Ingo Molnar) menjadwalkan tugas berdasarkan virtual runtime (`vruntime`) terkecil yang disimpan dalam Red-Black Tree, memberikan alokasi waktu CPU yang sepenuhnya adil proporsional dengan bobot `nice` proses.'
    }
  ],

  // =========================================================================
  // MODUL 3: SINKRONISASI PROSES, RACE CONDITION, SEMAPHOR & DEADLOCK (20 Soal)
  // =========================================================================
  os_sinkronisasi_deadlock: [
    {
      id: 'os-3-1',
      question: 'Kondisi "Race Condition" terjadi ketika:',
      options: [
        'Beberapa thread/proses mengakses dan memanipulasi data bersama secara bersamaan tanpa sinkronisasi, di mana hasil akhirnya bergantung pada urutan eksekusi acak prosesor',
        'Dua komputer berlomba mengirim email tercepat',
        'Sistem operasi kehabisan baterai saat kompilasi',
        'Suhu CPU melampaui batas 90 derajat celcius'
      ],
      correctAnswer: 0,
      explanation: 'Race condition menghasilkan inkonsistensi data non-deterministik karena operasi tingkat tinggi (seperti `counter++`) di mesin assembly dipecah menjadi 3 instruksi terpisah (LOAD, ADD, STORE) yang dapat diinterupsi di tengah jalan.'
    },
    {
      id: 'os-3-2',
      question: 'Bagian kode program yang mengakses variabel bersama, berkas, atau sumber daya bersama yang tidak boleh dimasuki oleh lebih dari satu proses pada saat yang sama disebut:',
      options: ['Critical Section', 'Public Method', 'Heap Segment', 'Main Function'],
      correctAnswer: 0,
      explanation: 'Critical Section adalah zona kode kritis. Solusi masalah Critical Section harus memenuhi 3 syarat: Mutual Exclusion, Progress, dan Bounded Waiting.'
    },
    {
      id: 'os-3-3',
      question: 'Tiga persyaratan mutlak yang wajib dipenuhi oleh solusi Critical Section adalah:',
      options: [
        'Mutual Exclusion, Progress, dan Bounded Waiting',
        'Fast, Cheap, dan Scalable',
        'Input, Processing, dan Output',
        'Read, Write, dan Execute'
      ],
      correctAnswer: 0,
      explanation: '1) Mutual Exclusion: Hanya 1 proses di dalam critical section; 2) Progress: Pemilihan proses berikutnya tidak boleh dihambat proses di luar section; 3) Bounded Waiting: Harus ada batas antrian agar proses tidak menunggu selamanya.'
    },
    {
      id: 'os-3-4',
      question: 'Apa perbedaan antara Semaphore Penghitung (Counting Semaphore) dan Mutex (Binary Semaphore)?',
      options: [
        'Mutex memiliki konsep kepemilikan (hanya thread yang mengunci yang boleh membuka kunci) dengan nilai 0 atau 1; Counting Semaphore mengontrol akses ke kumpulan sumber daya berkapasitas N',
        'Mutex hanya bisa dipakai di bahasa Java, Semaphore di C++',
        'Mutex tidak bisa mencegah race condition',
        'Counting Semaphore tidak memiliki variabel integer'
      ],
      correctAnswer: 0,
      explanation: 'Mutex adalah mekanisme penguncian biner dengan ownership. Counting Semaphore adalah variabel integer yang diinisialisasi ke nilai N, di mana operasi `wait()`/`P()` menurunkan nilai dan `signal()`/`V()` menaikkan nilai.'
    },
    {
      id: 'os-3-5',
      question: 'Dua operasi primitif atomik standar yang digunakan untuk memanipulasi Semaphore adalah:',
      options: ['wait() [P] dan signal() [V]', 'lock() dan kill()', 'read() dan write()', 'start() dan stop()'],
      correctAnswer: 0,
      explanation: 'Diperkenalkan oleh Edsger Dijkstra: Operasi $P$ (wait / sem_wait) menguji dan menurunkan nilai semaphore, operasi $V$ (signal / sem_post) menaikkan nilai dan membangunkan thread yang tertidur.'
    },
    {
      id: 'os-3-6',
      question: 'Apa yang dimaksud dengan "Spinlock"?',
      options: [
        'Kunci sinkronisasi di mana thread yang menunggu berputar dalam loop sibuk (busy waiting) memeriksa variabel kunci berulang-ulang tanpa melepaskan CPU',
        'Kipas pendingin yang berputar terlalu kencang',
        'Piringan harddisk yang macet saat berputar',
        'Animasi loading melingkar di antarmuka web'
      ],
      correctAnswer: 0,
      explanation: 'Spinlock membuang siklus CPU (busy-wait), namun sangat berguna dalam skenario multiprosesor jika waktu tunggu penguncian diprediksi sangat singkat (lebih cepat daripada overhead context switch tidur-bangun).'
    },
    {
      id: 'os-3-7',
      question: 'Instruksi perangkat keras atomik modern yang digunakan sebagai fondasi penguncian primitif bebas lock (lock-free) adalah:',
      options: ['Test-and-Set / Compare-and-Swap (CAS)', 'Direct Memory Jump', 'NOP (No Operation)', 'Multiply-Accumulate'],
      correctAnswer: 0,
      explanation: 'Instruksi hardware seperti `CMPXCHG` (Compare-and-Swap) membaca, membandingkan, dan menukar nilai memori secara atomik dalam 1 siklus bus hardware tak terpisahkan.'
    },
    {
      id: 'os-3-8',
      question: 'Masalah "Priority Inversion" terjadi ketika:',
      options: [
        'Proses berprioritas tinggi terhalang berjalan karena sumber dayanya dikunci oleh proses berprioritas rendah, yang pada gilirannya ditunda oleh proses berprioritas menengah',
        'Semua proses dipaksa memiliki prioritas sama',
        'Prioritas diurutkan dari yang terkecil',
        'Prosesor menolak menjalankan program admin'
      ],
      correctAnswer: 0,
      explanation: 'Insiden terkenal pada Mars Pathfinder (1997): Thread prioritas tinggi terblokir menunggu mutex yang dipegang thread rendah, yang preempted oleh thread menengah. Solusinya: Priority Inheritance Protocol.'
    },
    {
      id: 'os-3-9',
      question: 'Protokol "Priority Inheritance" mengatasi Priority Inversion dengan cara:',
      options: [
        'Menaikkan prioritas proses berprioritas rendah sementara waktu setara dengan prioritas proses tertinggi yang sedang menunggu kunci miliknya',
        'Mematikan proses berprioritas tinggi seketika',
        'Menghapus semua kunci di sistem operasi',
        'Membalik urutan instruksi program'
      ],
      correctAnswer: 0,
      explanation: 'Dengan menaikkan prioritas thread rendah setara dengan thread tinggi yang menunggu kunci, thread menengah tidak dapat menginterupsi thread rendah tersebut sampai kunci dilepaskan.'
    },
    {
      id: 'os-3-10',
      question: 'Empat kondisi Coffman yang WAJIB ada secara simultan agar Deadlock dapat terjadi adalah:',
      options: [
        'Mutual Exclusion, Hold and Wait, No Preemption, dan Circular Wait',
        'High CPU, Low RAM, Full Disk, dan Fast Network',
        'Read, Write, Execute, dan Delete',
        'Fork, Exec, Wait, dan Exit'
      ],
      correctAnswer: 0,
      explanation: 'Edward Coffman Jr. (1971): Deadlock hanya mungkin terjadi jika keempat syarat ini terpenuhi bersamaan. Meniadakan salah satu saja dari 4 syarat ini menjamin sistem bebas dari deadlock!'
    },
    {
      id: 'os-3-11',
      question: 'Apa definisi dari kondisi "Hold and Wait" dalam kondisi penyebab deadlock?',
      options: [
        'Sebuah proses sedang memegang minimal satu sumber daya, dan secara bersamaan menunggu untuk memperoleh sumber daya tambahan yang sedang dipegang oleh proses lain',
        'Pengguna menahan tombol keyboard terlalu lama',
        'Program menunggu download internet selesai',
        'Komputer dalam mode hibernate'
      ],
      correctAnswer: 0,
      explanation: 'Hold and wait: proses tidak melepaskan sumber daya yang telah digenggamnya saat meminta sumber daya baru yang sedang sibuk.'
    },
    {
      id: 'os-3-12',
      question: 'Bagaimana cara mencegah (prevent) terjadinya kondisi "Circular Wait" dalam arsitektur sistem?',
      options: [
        'Memberlakukan penomoran urutan linier global pada seluruh sumber daya, dan mewajibkan setiap proses meminta sumber daya secara berurutan strictly increasing',
        'Menutup semua program setiap 10 menit',
        'Melarang proses meminta lebih dari 1 variabel',
        'Mengganti CPU menjadi arsitektur single-thread'
      ],
      correctAnswer: 0,
      explanation: 'Jika seluruh sumber daya diberi ID $1, 2, \\dots, k$, dan setiap proses hanya boleh meminta sumber daya dengan ID yang lebih besar dari yang dipegangnya saat ini, maka pembentukan rantai siklik tertutup mustahil terjadi secara matematis.'
    },
    {
      id: 'os-3-13',
      question: 'Algoritma Banker (Banker\'s Algorithm) yang dirancang Dijkstra digunakan untuk:',
      options: [
        'Menghindari deadlock (Deadlock Avoidance) dengan cara menguji status keamanan (Safe State) sistem sebelum menyetujui alokasi sumber daya',
        'Menghitung bunga pinjaman bank otomatis',
        'Mengenkripsi nomor rekening nasabah',
        'Menghapus saldo nasabah yang tidak aktif'
      ],
      correctAnswer: 0,
      explanation: 'Algoritma Banker mensimulasikan alokasi maksimum sumber daya untuk memastikan selalu ada setidaknya satu urutan eksekusi proses yang dapat selesai tanpa menemui jalan buntu (Safe Sequence).'
    },
    {
      id: 'os-3-14',
      question: 'Apa perbedaan mendasar antara "Safe State" dan "Deadlock State"?',
      options: [
        'Safe state menjamin ada urutan eksekusi yang aman (safe sequence) sehingga deadlock tidak akan terjadi; Unsafe state berpotensi memicu deadlock; Deadlock state adalah kondisi kebuntuan mutlak',
        'Safe state adalah kondisi saat antivirus menyala',
        'Deadlock state terjadi saat komputer dimatikan',
        'Keduanya identik dan tidak ada bedanya'
      ],
      correctAnswer: 0,
      explanation: 'Diagram himpunan: Deadlock adalah subset dari Unsafe State. Sistem yang berada di Unsafe State belum tentu langsung deadlock, tetapi tidak ada lagi jaminan bahwa deadlock dapat dicegah jika proses meminta batas klaim maksimumnya.'
    },
    {
      id: 'os-3-15',
      question: 'Strategi penanganan deadlock yang paling umum diadopsi oleh sistem operasi komersial umum (seperti Linux dan Windows) karena pertimbangan efisiensi performa adalah:',
      options: [
        'Algoritma Ostrich (Mengabaikan kemungkinan deadlock dan berasumsi deadlock sangat jarang terjadi di dunia nyata)',
        'Menjalankan Algoritma Banker setiap mikrodetik',
        'Mematikan komputer setiap kali ada 2 proses mengantre',
        'Melarang penggunaan threading sama sekali'
      ],
      correctAnswer: 0,
      explanation: 'Algoritma Ostrich (burung unta yang mengubur kepala di pasir): biaya komputasi untuk memeriksa dan mencegah deadlock terus-menerus jauh lebih mahal dibanding dampak membiarkan deadlock jarang terjadi dan meminta pengguna me-restart program jika macet.'
    },
    {
      id: 'os-3-16',
      question: 'Graf Alokasi Sumber Daya (Resource-Allocation Graph / RAG) mendeteksi deadlock pada sistem dengan sumber daya instance tunggal jika:',
      options: [
        'Terdapat siklus tertutup (cycle) di dalam graf terarah tersebut',
        'Graf berbentuk garis lurus',
        'Semua node berwarna hitam',
        'Jumlah panah melebihi jumlah node'
      ],
      correctAnswer: 0,
      explanation: 'Jika setiap tipe sumber daya hanya memiliki tepat 1 unit instance, keberadaan siklus (cycle) dalam RAG adalah kondisi perlu dan cukup (necessary and sufficient condition) terjadinya deadlock.'
    },
    {
      id: 'os-3-17',
      question: 'Masalah klasik "Dining Philosophers Problem" memodelkan tantangan dalam:',
      options: [
        'Alokasi beberapa sumber daya bersama di antara proses yang bersaing tanpa menimbulkan deadlock dan starvation',
        'Membeli makanan secara online',
        'Menghitung porsi kalori makanan manusia',
        'Menentukan etika berbicara di meja makan'
      ],
      correctAnswer: 0,
      explanation: 'Dining Philosophers (Dijkstra) menggambarkan 5 filsuf yang butuh 2 sumpit (kiri dan kanan) untuk makan. Jika semua serentak mengambil sumpit kiri, terjadi deadlock melingkar (Circular Wait).'
    },
    {
      id: 'os-3-18',
      question: 'Apa perbedaan antara Deadlock dan Livelock?',
      options: [
        'Pada Deadlock, proses membeku dalam status tidur/waiting tanpa perubahan state; pada Livelock, proses terus aktif mengubah status internalnya (sibuk) tetapi sistem tetap tidak membuat kemajuan komputasi produktif',
        'Deadlock terjadi pada hardware, Livelock pada kabel',
        'Deadlock membuat komputer mati, Livelock membuat komputer hidup',
        'Keduanya adalah istilah yang sama persis'
      ],
      correctAnswer: 0,
      explanation: 'Livelock ibarat dua orang sopan yang berpapasan di lorong sempit: keduanya serentak bergeser ke kiri, lalu serentak bergeser ke kanan berulang kali; keduanya bergerak aktif dan menggunakan CPU 100%, tetapi tidak ada yang bisa melangkah maju.'
    },
    {
      id: 'os-3-19',
      question: 'Mekanisme sinkronisasi tingkat tinggi yang menggabungkan enkapsulasi data bersama, fungsi-fungsi antarmuka, dan variabel kondisi (Condition Variables) secara terpadu di level bahasa disebut:',
      options: ['Monitor', 'Global Pointer', 'Assembly JUMP', 'Interrupt Routine'],
      correctAnswer: 0,
      explanation: 'Monitor (Hoare / Brinch Hansen) adalah abstraksi tipe data abstrak (ADT) di mana compiler menjamin hanya ada tepat 1 thread yang aktif di dalam monitor pada satu waktu, menyederhanakan sinkronisasi dibanding semaphor mentah.'
    },
    {
      id: 'os-3-20',
      question: 'Jika deadlock terdeteksi oleh sistem deteksi OS, dua metode pemulihan (recovery) yang dapat diambil adalah:',
      options: [
        'Terminasi proses (membunuh satu atau semua proses yang terlibat) ATAU Preemption sumber daya (merampas paksa sumber daya dan melakukan rollback state)',
        'Menaikkan kecepatan clock kipas pendingin',
        'Menghapus berkas gambar di desktop',
        'Mengubah kata sandi pengguna administrator'
      ],
      correctAnswer: 0,
      explanation: 'Pemulihan dari deadlock dilakukan dengan membunuh proses secara bertahap sampai siklus terputus, atau merampas sumber daya dan mengembalikan proses ke checkpoint titik aman sebelumnya (rollback).'
    }
  ],

  // =========================================================================
  // MODUL 4: MANAJEMEN MEMORI, PAGING, SEGMENTASI & VIRTUAL MEMORY (20 Soal)
  // =========================================================================
  os_manajemen_memori: [
    {
      id: 'os-4-1',
      question: 'Komponen perangkat keras komputer yang bertugas menerjemahkan Alamat Logika (Virtual Address) yang dihasilkan CPU menjadi Alamat Fisik di RAM adalah:',
      options: ['Memory Management Unit (MMU)', 'Arithmetic Logic Unit (ALU)', 'Direct Memory Access (DMA)', 'PCIe Controller'],
      correctAnswer: 0,
      explanation: 'MMU adalah sirkuit perangkat keras yang memetakan alamat virtual yang dilihat oleh proses ke alamat fisik nyata di chip RAM menggunakan tabel halaman (Page Table).'
    },
    {
      id: 'os-4-2',
      question: 'Apa perbedaan antara Fragmentasi Internal (Internal Fragmentation) dan Fragmentasi Eksternal (External Fragmentation)?',
      options: [
        'Fragmentasi internal adalah memori terbuang di dalam blok yang dialokasikan (karena ukuran blok tetap lebih besar dari yang dibutuhkan); fragmentasi eksternal adalah total ruang memori bebas cukup tetapi terpecah-pecah menjadi celah-celah kecil terpisah',
        'Fragmentasi internal terjadi di kabel, eksternal di casing',
        'Fragmentasi internal hanya ada di flashdisk, eksternal di harddisk',
        'Keduanya adalah jenis virus memori'
      ],
      correctAnswer: 0,
      explanation: 'Internal fragmentation terjadi pada alokasi berbasis blok tetap (seperti page 4KB saat proses butuh 100 byte: sisa ruang dalam page terbuang). External fragmentation terjadi pada alokasi contiguous dinamis (celah memori terpisah-pisah).'
    },
    {
      id: 'os-4-3',
      question: 'Konsep dasar sistem Paging membagi ruang alamat logika dan memori fisik ke dalam blok-blok berukuran tetap yang disebut:',
      options: [
        'Halaman (Pages) untuk memori logika, dan Bingkai (Frames) untuk memori fisik',
        'Sektor untuk logika, dan Silinder untuk fisik',
        'Cluster untuk logika, dan Blok untuk fisik',
        'Segment untuk logika, dan Partisi untuk fisik'
      ],
      correctAnswer: 0,
      explanation: 'Alamat logika dibagi menjadi Page (ukuran biasanya 4KB), dan RAM fisik dibagi menjadi Frame berukuran identik (4KB). Dengan paging, sebuah proses tidak perlu ditempatkan di memori fisik yang berdampingan (non-contiguous).'
    },
    {
      id: 'os-4-4',
      question: 'Alamat virtual dalam sistem paging 32-bit dengan ukuran halaman 4 KB (2^12 byte) dibagi menjadi dua komponen struktural, yaitu:',
      options: [
        'Nomor Halaman (Page Number, p: 20 bit) dan Offset Halaman (Page Offset, d: 12 bit)',
        'Alamat Port dan Alamat Bus',
        'Nomor Silinder dan Nomor Sektor',
        'User ID dan Group ID'
      ],
      correctAnswer: 0,
      explanation: 'Ukuran page 4KB membutuhkan 12 bit untuk offset ($2^{12} = 4096$). Sisanya 20 bit ($32 - 12$) digunakan sebagai Page Number untuk mengindeks entri ke dalam Page Table.'
    },
    {
      id: 'os-4-5',
      question: 'Chache perangkat keras berkecepatan sangat tinggi yang menyimpan hasil terjemahan alamat halaman virtual ke frame fisik terbaru untuk mempercepat akses memori disebut:',
      options: ['Translation Lookaside Buffer (TLB)', 'Instruction Register', 'Stack Pointer', 'I/O Buffer Cache'],
      correctAnswer: 0,
      explanation: 'TLB adalah memori asosiatif di dalam CPU yang menyimpan terjemahan page-to-frame terbaru. Jika terjadi TLB Hit, CPU langsung mendapat alamat fisik tanpa perlu 2 kali mengakses RAM untuk membaca tabel halaman.'
    },
    {
      id: 'os-4-6',
      question: 'Waktu Akses Efektif (Effective Access Time / EAT) dengan rasio TLB hit $\\alpha$, waktu pencarian TLB $\\epsilon$, dan waktu akses memori $m$ dihitung dengan rumus:',
      options: [
        'EAT = alpha * (epsilon + m) + (1 - alpha) * (epsilon + 2m)',
        'EAT = alpha * m + (1 - alpha) * epsilon',
        'EAT = epsilon + m',
        'EAT = 2 * (alpha + m)'
      ],
      correctAnswer: 0,
      explanation: 'Jika hit (probabilitas $\\alpha$): butuh $\\epsilon + m$. Jika miss (probabilitas $1 - \\alpha$): cari TLB ($\\epsilon$) + baca Page Table di RAM ($m$) + baca data asli di RAM ($m$), sehingga total $\\epsilon + 2m$.'
    },
    {
      id: 'os-4-7',
      question: 'Apa itu "Page Fault" dalam sistem Virtual Memory?',
      options: [
        'Interupsi perangkat keras yang dipicu ketika proses mencoba mengakses halaman virtual yang bit valid-invalidnya bernilai 0 (belum dimuat di RAM fisik / masih berada di swap disk)',
        'Kerusakan fisik pada chip memori RAM motherboard',
        'Teks yang salah ketik pada dokumen halaman web',
        'Kegagalan koneksi jaringan internet'
      ],
      correctAnswer: 0,
      explanation: 'Page fault bukan kesalahan program (bug), melainkan mekanisme normal Demand Paging: OS menangkap trap ini, mencari frame kosong di RAM, membaca halaman dari disk/swap ke RAM, memperbarui tabel halaman, dan mengulang instruksi yang tertunda.'
    },
    {
      id: 'os-4-8',
      question: 'Konsep "Demand Paging" berarti bahwa:',
      options: [
        'Halaman program tidak dimuat ke dalam memori RAM utama sampai halaman tersebut benar-benar dibutuhkan/diakses oleh instruksi CPU saat runtime',
        'Seluruh program 100 GB harus dimuat penuh ke RAM sebelum tombol start ditekan',
        'Pengguna harus membayar biaya per halaman memori',
        'Halaman memori dihapus setiap 5 detik'
      ],
      correctAnswer: 0,
      explanation: 'Demand paging memuat halaman secara malas (lazy swapper / pager): program 1 GB dapat berjalan di mesin dengan RAM 256 MB karena hanya bagian kode yang sedang aktif dieksekusi yang ada di RAM.'
    },
    {
      id: 'os-4-9',
      question: 'Anomali Belady (Belady\'s Anomaly) adalah fenomena paradoks pada algoritma pergantian halaman FIFO di mana:',
      options: [
        'Menambah jumlah alokasi frame fisik di RAM justru menyebabkan JUMLAH PAGE FAULT BERTAMBAH BANYAK untuk pola referensi memori tertentu',
        'Komputer menjadi lebih lambat saat kabel charger dicolok',
        'Harga RAM turun saat permintaan naik',
        'Memori RAM terbaca bernilai negatif'
      ],
      correctAnswer: 0,
      explanation: 'Laszlo Belady (1969) membuktikan bahwa algoritma FIFO murni rentan terhadap anomali di mana alokasi frame lebih banyak (misal dari 3 frame ke 4 frame) justru meningkatkan page fault dari 9 menjadi 10 kali.'
    },
    {
      id: 'os-4-10',
      question: 'Algoritma penggantian halaman yang terbukti secara teoritis menghasilkan tingkat page fault terendah mutlak (optimal) adalah:',
      options: [
        'Optimal Page Replacement (OPT / MIN) - mengganti halaman yang tidak akan digunakan untuk jangka waktu terlama di masa depan',
        'FIFO (First-In, First-Out)',
        'Random Replacement',
        'Second-Chance Algorithm'
      ],
      correctAnswer: 0,
      explanation: 'Algoritma OPT mengganti halaman yang tidak akan dipakai paling lama di masa depan. Meskipun mustahil diimplementasikan sempurna di sistem nyata (karena masa depan tidak bisa diprediksi pasti), algoritma ini menjadi tolok ukur acuan efisiensi.'
    },
    {
      id: 'os-4-11',
      question: 'Algoritma Least Recently Used (LRU) mengganti halaman di memori berdasarkan prinsip:',
      options: [
        'Halaman yang paling lama tidak pernah diakses di masa lalu yang diganti',
        'Halaman yang pertama kali dimasukkan ke memori',
        'Halaman yang memiliki ukuran file terkecil',
        'Halaman yang dipilih secara acak menggunakan dadu'
      ],
      correctAnswer: 0,
      explanation: 'LRU mengasumsikan masa lalu adalah cerminan masa depan (Prinsip Lokalitas Referensi Waktu): halaman yang sudah lama tidak disentuh kemungkinan besar tidak akan segera dibutuhkan lagi.'
    },
    {
      id: 'os-4-12',
      question: 'Kondisi bencana performa yang disebut "Thrashing" pada manajemen memori virtual terjadi ketika:',
      options: [
        'Sistem menghabiskan sebagian besar waktu CPU-nya untuk bolak-balik menukar halaman (swapping) antara RAM dan disk ketimbang mengeksekusi instruksi produktif',
        'Harddisk terbentur palu secara fisik',
        'Prosesor mengalami korsleting listrik',
        'Pengguna mengetik keyboard secara agresif'
      ],
      correctAnswer: 0,
      explanation: 'Thrashing terjadi saat total ukuran Working Set dari seluruh proses aktif melebihi kapasitas memori fisik yang tersedia. Tingkat page fault meroket hingga 100%, utilisasi CPU jatuh mendekati 0%, dan sistem membeku total.'
    },
    {
      id: 'os-4-13',
      question: 'Prinsip "Locality of Reference" (Lokalitas Referensi) yang membuat sistem virtual memory dan cache bekerja efektif terdiri dari dua jenis:',
      options: [
        'Temporal Locality (Lokalitas Waktu) dan Spatial Locality (Lokalitas Ruang)',
        'Hardware Locality dan Software Locality',
        'Direct Locality dan Indirect Locality',
        'Static Locality dan Dynamic Locality'
      ],
      correctAnswer: 0,
      explanation: 'Temporal Locality: Data yang baru saja diakses kemungkinan besar akan diakses lagi dalam waktu dekat (misal: variabel loop). Spatial Locality: Data di alamat yang berdekatan dengan data yang baru diakses kemungkinan besar akan segera diakses (misal: elemen array).'
    },
    {
      id: 'os-4-14',
      question: 'Model "Working Set" karya Peter Denning mendefinisikan himpunan halaman yang:',
      options: [
        'Sedang aktif direferensikan oleh proses selama jendela waktu tertentu (Delta) di masa lalu',
        'Tersimpan permanen di harddisk tanpa pernah dihapus',
        'Mengalami kerusakan partisi',
        'Dihapus oleh garbage collector'
      ],
      correctAnswer: 0,
      explanation: 'Working Set $W(t, \\Delta)$ memperkirakan kebutuhan memori nyata dari suatu proses. Jika OS menjamin setiap proses mendapatkan alokasi frame sebesar Working Set-nya, fenomena thrashing dapat dicegah.'
    },
    {
      id: 'os-4-15',
      question: 'Struktur Inverted Page Table berbeda dari Hierarchical Page Table konvensional karena:',
      options: [
        'Inverted Page Table hanya memiliki satu entri untuk setiap frame memori fisik di RAM (diindeks oleh PID dan nomor halaman), menghemat ruang memori tabel secara masif pada arsitektur 64-bit',
        'Tabel ditulis secara terbalik dari kanan ke kiri',
        'Tabel disimpan di dalam kartu grafis GPU',
        'Tabel tidak memerlukan perangkat keras MMU'
      ],
      correctAnswer: 0,
      explanation: 'Tabel halaman tradisional mengindeks berdasarkan ruang alamat virtual (sangat boros pada sistem 64-bit). Inverted Page Table memiliki entri tepat sebanyak frame fisik di RAM, sehingga ukurannya tetap konstan dan kecil.'
    },
    {
      id: 'os-4-16',
      question: 'Perbedaan mendasar antara Paging dan Segmentasi adalah:',
      options: [
        'Paging membagi memori secara fisik ke dalam blok berukuran tetap yang tidak terlihat oleh programmer; Segmentasi membagi memori secara logis ke dalam segmen berukuran bervariasi sesuai pandangan programmer (fungsi, stack, heap, array)',
        'Segmentasi tidak menggunakan RAM',
        'Paging hanya untuk file teks, Segmentasi untuk file video',
        'Paging tidak memerlukan sistem operasi'
      ],
      correctAnswer: 0,
      explanation: 'Segmentasi mencerminkan struktur modular program dari kacamata pengembang: segmen kode, segmen data global, segmen stack, masing-masing dengan panjang yang berbeda dan proteksi hak akses terpisah.'
    },
    {
      id: 'os-4-17',
      question: 'Dalam Page Table Entry (PTE), apa fungsi dari "Dirty Bit" (Modified Bit)?',
      options: [
        'Menandai apakah halaman di RAM pernah dimodifikasi/ditulis sejak pertama kali dimuat dari disk (jika tidak dirty, halaman tidak perlu ditulis ulang ke disk saat digusur)',
        'Menandai bahwa halaman terinfeksi virus komputer',
        'Menandai bahwa memori terkena tumpahan air',
        'Menandai bahwa data bersifat rahasia negara'
      ],
      correctAnswer: 0,
      explanation: 'Dirty bit mengoptimalkan pergantian halaman: jika halaman di memori bersih (dirty = 0), OS cukup menimpanya dengan halaman baru tanpa menulis balik ke disk, menghemat operasi I/O disk yang mahal.'
    },
    {
      id: 'os-4-18',
      question: 'Algoritma pergantian halaman "Second-Chance" (Clock Algorithm) bekerja dengan cara:',
      options: [
        'Memeriksa Reference Bit secara melingkar: jika bit bernilai 1, ubah menjadi 0 dan beri kesempatan kedua; jika bernilai 0, halaman tersebut langsung digusur',
        'Memberi waktu 2 menit tambahan sebelum komputer dimatikan',
        'Menghitung waktu menggunakan dua jam dinding',
        'Menduplikasi semua halaman menjadi dua rangkap'
      ],
      correctAnswer: 0,
      explanation: 'Clock algorithm adalah aproksimasi LRU yang sangat murah dan cepat diimplementasikan menggunakan pointer melingkar dan single reference bit yang didukung hardware.'
    },
    {
      id: 'os-4-19',
      question: 'Mengapa arsitektur prosesor 64-bit modern (seperti x86-64) menggunakan skema Multi-Level Paging (misal: 4-level atau 5-level paging)?',
      options: [
        'Untuk menghindari keharusan menyimpan tabel halaman raksasa berukuran terabyte secara contiguous di memori RAM, sehingga hanya tabel yang benar-benar dipakai yang dialokasikan',
        'Karena kabel prosesor memiliki 4 cabang',
        'Untuk membatasi RAM agar tidak melebihi 4 GB',
        'Agar pengguna bisa bermain game 4 dimensi'
      ],
      correctAnswer: 0,
      explanation: 'Ruang alamat $2^{64}$ terlalu besar untuk tabel linear tunggal ($2^{52}$ entri). Skema berjenjang (PML4 -> PDPT -> PD -> PT) membagi tabel menjadi hierarki pohon, sehingga sebagian besar cabang pohon yang tidak digunakan tidak perlu memakan RAM fisik sama sekali.'
    },
    {
      id: 'os-4-20',
      question: 'Apa fungsi dari fitur ASLR (Address Space Layout Randomization) pada manajemen memori modern?',
      options: [
        'Mengacak posisi alamat memori stack, heap, dan pustaka kode di ruang alamat proses untuk mempersulit eksploitasi serangan buffer overflow',
        'Mempercepat kompilasi kode bahasa C',
        'Mengacak urutan lagu di media player',
        'Menghapus memori secara acak untuk menghemat listrik'
      ],
      correctAnswer: 0,
      explanation: 'ASLR adalah mekanisme pertahanan keamanan: penyerang tidak dapat memprediksi secara pasti lokasi kode shellcode atau alamat return instruksi (seperti Return-Oriented Programming / ROP) karena alamat bergeser acak setiap kali program dijalankan.'
    }
  ],

  // =========================================================================
  // MODUL 5: SISTEM BERKAS, MANAJEMEN I/O, RAID & KEAMANAN SISTEM OPERASI (20 Soal)
  // =========================================================================
  os_file_system_io: [
    {
      id: 'os-5-1',
      question: 'Struktur data fundamental dalam sistem berkas Unix (seperti ext4) yang menyimpan seluruh metadata berkas (kecuali nama berkas dan isi data mentah) disebut:',
      options: ['Inode (Index Node)', 'Superblock', 'Directory Entry (Dentry)', 'Master Boot Record'],
      correctAnswer: 0,
      explanation: 'Inode menyimpan ukuran berkas, hak akses izin (permissions), ID pemilik/grup, timestamp (atime, mtime, ctime), serta penunjuk (pointers) ke blok-blok data disk tempat isi berkas disimpan.'
    },
    {
      id: 'os-5-2',
      question: 'Apa perbedaan teknis antara Hard Link dan Soft Link (Symbolic Link) pada sistem berkas Unix?',
      options: [
        'Hard link adalah pointer direktori langsung yang merujuk ke nomor Inode yang sama persis (berbagi kepemilikan data); Soft link adalah berkas independen baru yang hanya berisi string path alamat berkas lain',
        'Hard link untuk SSD, Soft link untuk HDD mekanik',
        'Hard link tidak bisa dihapus selamanya',
        'Soft link hanya bisa dibuat oleh superuser root'
      ],
      correctAnswer: 0,
      explanation: 'Hard link berbagi nomor inode yang sama; data asli tidak akan terhapus dari disk selama inode counter > 0 (masih ada minimal satu link). Soft link (symlink) memiliki inode sendiri dan akan menjadi dangling/broken link jika berkas target dihapus.'
    },
    {
      id: 'os-5-3',
      question: 'Blok spesial di awal partisi disk yang berisi metadata global vital dari seluruh sistem berkas (jumlah total blok, jumlah inode, ukuran blok, status mount) disebut:',
      options: ['Superblock', 'Boot Sector', 'Journal Block', 'Inode Bitmap'],
      correctAnswer: 0,
      explanation: 'Superblock adalah jantung sistem berkas. Kerusakan pada superblock membuat sistem berkas tidak dapat di-mount oleh OS, sehingga umumnya OS menyimpan beberapa salinan cadangan superblock redundan di disk.'
    },
    {
      id: 'os-5-4',
      question: 'Sistem berkas berjurnal (Journaling File System, seperti ext4, NTFS) mencegah kerusakan konsistensi data akibat mati listrik mendadak dengan cara:',
      options: [
        'Mencatat niat perubahan transaksi metadata ke dalam area jurnal sirkular di disk terlebih dahulu sebelum menulisnya ke struktur disk utama',
        'Menggunakan baterai darurat di dalam kabel disk',
        'Menyimpan seluruh berkas di cloud otomatis',
        'Melarang operasi penulisan file saat hujan'
      ],
      correctAnswer: 0,
      explanation: 'Journaling menerapkan konsep transaksi database ACID: jika daya padam di tengah operasi penulisan, saat booting ulang sistem cukup memutar ulang (*replay*) atau membatalkan (*rollback*) jurnal dalam hitungan detik tanpa perlu melakukan scan disk penuh (*fsck*) yang memakan waktu berjam-jam.'
    },
    {
      id: 'os-5-5',
      question: 'Algoritma penjadwalan I/O disk SCAN (Elevator Algorithm) bekerja dengan cara:',
      options: [
        'Lengan disk bergerak terus menerus melintasi silinder dari satu ujung disk ke ujung lainnya melayani permintaan di jalurnya, lalu berbalik arah saat mencapai ujung',
        'Melayani permintaan secara acak menggunakan generator acak',
        'Memindahkan head disk langsung ke sektor pertama setiap detik',
        'Menghentikan putaran piringan saat ada permintaan data'
      ],
      correctAnswer: 0,
      explanation: 'Mirip lift gedung, SCAN bergerak dari silinder 0 ke silinder max melayani antrian, lalu berbalik arah kembali melayani silinder yang berlawanan, mencegah starvation dan mengurangi seek time lengan mekanik.'
    },
    {
      id: 'os-5-6',
      question: 'Konfigurasi RAID 0 (Disk Striping) menawarkan karakteristik:',
      options: [
        'Performa baca/tulis sangat tinggi karena data dipecah melintasi banyak disk, namun TIDAK MEMILIKI TOLERANSI KESALAHAN (jika 1 disk rusak, seluruh data musnah)',
        'Menduplikasi data 100% identik di dua disk',
        'Menyimpan paritas terdistribusi di seluruh disk',
        'Kecepatan paling lambat dari semua tipe RAID'
      ],
      correctAnswer: 0,
      explanation: 'RAID 0 melakukan striping blok data secara paralel tanpa paritas atau redundancy. Kegagalan satu disk saja berakibat fatal pada hilangnya seluruh larik data.'
    },
    {
      id: 'os-5-7',
      question: 'Sebaliknya, konfigurasi RAID 1 (Disk Mirroring) berfokus pada:',
      options: [
        'Redundansi penuh dengan menduplikasi (mirroring) data yang sama persis ke dua atau lebih disk independen',
        'Meningkatkan kapasitas gabungan menjadi 10 kali lipat',
        'Menghitung bit paritas Hamming di disk terpisah',
        'Mengompres ukuran berkas menjadi 0 byte'
      ],
      correctAnswer: 0,
      explanation: 'RAID 1 memberikan keandalan tinggi: jika satu harddisk terbakar atau mati total, sistem tetap dapat beroperasi normal tanpa downtime dengan membaca salinan identik dari disk cerminannya.'
    },
    {
      id: 'os-5-8',
      question: 'Konfigurasi RAID 5 membutuhkan minimal berapa jumlah disk fisik dan bagaimana cara ia menjaga toleransi kesalahan?',
      options: [
        'Minimal 3 disk, menggunakan striping data blok dengan paritas terdistribusi merata di seluruh disk (toleran terhadap kerusakan tepat 1 disk)',
        'Minimal 2 disk tanpa paritas',
        'Minimal 10 disk dengan paritas terpusat di server cloud',
        'Minimal 1 disk tunggal'
      ],
      correctAnswer: 0,
      explanation: 'RAID 5 membutuhkan minimal 3 disk. Bit paritas ($XOR$) disebar bergantian ke seluruh disk. Jika salah satu disk mati, datanya dapat direkonstruksi secara matematis dari sisa disk lain.'
    },
    {
      id: 'os-5-9',
      question: 'Apa perbedaan antara RAID 5 dan RAID 6?',
      options: [
        'RAID 6 menggunakan skema paritas ganda (dual distributed parity) dan mampu bertahan dari kerusakan SIMULTAN HINGGA DUA DISK sekaligus (membutuhkan minimal 4 disk)',
        'RAID 6 hanya untuk SSD M.2 NVMe',
        'RAID 6 tidak memiliki toleransi kesalahan',
        'RAID 6 adalah RAID 5 yang dipasang di kabel USB'
      ],
      correctAnswer: 0,
      explanation: 'RAID 6 menyimpan dua blok paritas independen per stripe menggunakan matematika Galois Field (Reed-Solomon), sehingga larik data tetap selamat meskipun ada 2 disk yang mati bersamaan.'
    },
    {
      id: 'os-5-10',
      question: 'Tiga komponen hak akses standar pada berkas sistem Unix (User, Group, Others) diwakili oleh 3 izin:',
      options: [
        'Read (r: 4), Write (w: 2), dan Execute (x: 1)',
        'Open, Close, dan Save',
        'Create, Retrieve, dan Update',
        'Admin, Guest, dan Anonymous'
      ],
      correctAnswer: 0,
      explanation: 'Nilai oktal izin: Read = 4, Write = 2, Execute = 1. Izin `chmod 754` berarti: User memiliki 7 (4+2+1: rwx), Group memiliki 5 (4+1: r-x), dan Others memiliki 4 (r--).'
    },
    {
      id: 'os-5-11',
      question: 'Izin spesial "SetUID" (SUID) pada berkas eksekusi biner Unix (seperti `/usr/bin/passwd`) memungkinkan:',
      options: [
        'Program dieksekusi dengan hak akses (privilege) dari pemilik berkas tersebut (biasanya root), bukan dengan hak akses pengguna yang menjalankannya',
        'Berkas hanya bisa dibuka pada hari Minggu',
        'Semua pengguna bisa mengedit isi kode program biner',
        'Program otomatis dikirim ke email administrator'
      ],
      correctAnswer: 0,
      explanation: 'Ketika user biasa mengubah password dengan `passwd`, program tersebut membutuhkan izin root untuk menulis ke berkas `/etc/shadow`. SUID memungkinkan proses tersebut berjalan sementara waktu dengan hak istimewa root.'
    },
    {
      id: 'os-5-12',
      question: 'Mekanisme I/O "Memory-Mapped Files" (seperti system call `mmap()`) memungkinkan proses untuk:',
      options: [
        'Memetakan isi berkas di disk langsung ke dalam ruang alamat virtual proses, sehingga berkas dapat dibaca dan ditulis layaknya mengakses array di memori RAM',
        'Membeli RAM baru menggunakan saldo kartu kredit',
        'Menyalin berkas tanpa memerlukan ruang disk',
        'Mengubah berkas video menjadi teks secara otomatis'
      ],
      correctAnswer: 0,
      explanation: '`mmap()` mengeliminasi kebutuhan penyalinan buffer ganda (`read()` dari kernel buffer ke user buffer) karena berkas dipetakan langsung ke page cache virtual memory, menghasilkan performa I/O yang sangat kencang.'
    },
    {
      id: 'os-5-13',
      question: 'Teknik "Spooling" (Simultaneous Peripheral Operations On-Line) secara historis paling populer digunakan untuk mengelola perangkat:',
      options: ['Printer fisik bersama (Print Spooler)', 'Speaker audio stereo', 'Sensor giroskop ponsel', 'Kamera webcam'],
      correctAnswer: 0,
      explanation: 'Karena printer adalah perangkat non-sharable (tidak bisa mencetak dua dokumen bersilangan byte-demi-byte), OS menampung seluruh berkas cetak di antrian spool disk terlebih dahulu dan mencetaknya satu per satu.'
    },
    {
      id: 'os-5-14',
      question: 'Prinsip "Least Privilege" dalam keamanan sistem operasi menyatakan bahwa:',
      options: [
        'Setiap modul, proses, atau pengguna harus beroperasi hanya dengan himpunan hak istimewa (privileges) minimal yang benar-benar esensial untuk menyelesaikan tugasnya',
        'Semua orang harus diberi akses root selamanya',
        'Program dilarang menggunakan memori lebih dari 10 KB',
        'Pengguna tidak boleh mengganti kata sandi'
      ],
      correctAnswer: 0,
      explanation: 'Prinsip Saltzer-Schroeder (1975): Membatasi izin seminimal mungkin membatasi potensi dampak kerusakan (blast radius) jika program tersebut berhasil diretas atau mengalami bug fatal.'
    },
    {
      id: 'os-5-15',
      question: 'Apa fungsi utama dari Access Control List (ACL) pada sistem berkas modern dibanding skema izin tradisional Unix (UGO)?',
      options: [
        'Memberikan kontrol perizinan yang jauh lebih granular (dapat menentukan izin spesifik untuk banyak user dan grup individual yang berbeda pada satu berkas)',
        'Menghapus nama file secara rahasia',
        'Mengunci komputer dari akses internet',
        'Membuat berkas menjadi tidak terlihat oleh antivirus'
      ],
      correctAnswer: 0,
      explanation: 'Skema klasik rwx Unix hanya mengenal 1 owner, 1 group, dan others. Posix ACL memungkinkan Anda menetapkan izin unik berbeda untuk puluhan user spesifik (misal: "Beri user Rama izin rw, tapi user Didi hanya r").'
    },
    {
      id: 'os-5-16',
      question: 'Mekanisme isolasi keamanan kernel Linux yang membatasi hak akses system call yang boleh dipanggil oleh suatu proses adalah:',
      options: ['seccomp (Secure Computing Mode)', 'cron scheduler', 'iptables NAT', 'syslog daemon'],
      correctAnswer: 0,
      explanation: 'Seccomp (seccomp-bpf) memungkinkan proses memasuki sandbox di mana proses hanya diizinkan memanggil subset kecil syscall tertentu (misal: hanya `read`, `write`, `exit`). Syscall lain akan langsung ditolak atau mematikan proses.'
    },
    {
      id: 'os-5-17',
      question: 'Dua teknologi kernel Linux yang menjadi pondasi utama isolasi kontainer Docker adalah:',
      options: [
        'Namespaces (untuk isolasi tampilan sistem seperti PID, Mount, Net) dan Cgroups (untuk pembatasan kuota sumber daya seperti CPU, RAM)',
        'Ext4 dan NTFS',
        'GCC dan Clang',
        'BIOS dan UEFI'
      ],
      correctAnswer: 0,
      explanation: 'Namespaces memisahkan ruang pandang (proses di dalam kontainer merasa menjadi PID 1 dan memiliki network stack sendiri), sementara Control Groups (cgroups) membatasi konsumsi penggunaan sumber daya fisik (misal: kontainer dibatasi max 1 GB RAM dan 50% CPU).'
    },
    {
      id: 'os-5-18',
      question: 'Serangan "Buffer Overflow" pada program bahasa C dapat dieksploitasi penyerang untuk membajak alur program dengan cara:',
      options: [
        'Menulis data melampaui batas buffer array di stack memori sehingga menimpa alamat kembali fungsi (Saved Return Address) ke alamat shellcode jahat',
        'Memasukkan kabel listrik bertegangan tinggi ke port USB',
        'Membuat teks konsol menjadi berkedip merah',
        'Mengirim sinyal suara frekuensi tinggi ke speaker'
      ],
      correctAnswer: 0,
      explanation: 'Fungsi rawan seperti `gets()` atau `strcpy()` tidak memeriksa batas buffer. Data masukan yang terlalu panjang meluap di stack, menimpa EIP/RIP (Instruction Pointer), dan saat fungsi memanggil instruksi `RET`, CPU melompat ke kode peretas.'
    },
    {
      id: 'os-5-19',
      question: 'Fitur keamanan prosesor NX-bit (No-Execute) atau W^X (Write XOR Execute) melindungi sistem dari buffer overflow dengan aturan:',
      options: [
        'Sebuah halaman memori boleh ditulisi (Writable) ATAU boleh dieksekusi (Executable), tetapi TIDAK BOLEH KEDUANYA SEKALIGUS',
        'Mematikan tombol huruf X di keyboard',
        'Melarang komputer menulis data ke disk',
        'Mengizinkan hacker mengeksekusi data apa saja'
      ],
      correctAnswer: 0,
      explanation: 'Halaman stack dan heap ditandai sebagai Non-Executable (NX). Meskipun penyerang berhasil menyuntikkan shellcode biner ke stack memori, CPU menolak mengeksekusi instruksi dari halaman data tersebut.'
    },
    {
      id: 'os-5-20',
      question: 'Sistem deteksi intrusi berbasis integritas berkas (File Integrity Monitoring, seperti Tripwire atau AIDE) mendeteksi manipulasi biner OS oleh hacker dengan cara:',
      options: [
        'Menghitung dan membandingkan cryptographic hash (seperti SHA-256) dari berkas-berkas sistem kritis terhadap basis data tanda tangan awal yang terpercaya',
        'Memeriksa suhu fisik chip motherboard',
        'Menghitung jumlah baris komentar pada script bash',
        'Merekam suara ketikan keyboard pengguna'
      ],
      correctAnswer: 0,
      explanation: 'Jika penyerang menyusupkan rootkit dengan memodifikasi biner `/bin/login`, hash kriptografis SHA-256 berkas tersebut akan berubah drastis, memicu alarm peringatan keamanan seketika.'
    }
  ]
};

/**
 * ARAYA CONSULTING - 5-MODE UNIVERSAL DISC ASSESSMENT ENGINE
 * Mode: Umum, Bisnis/HCM, Parenting, Pemuda, & Guru/Pendidik
 * Framework: People Map × Position Map (Role & Contribution Oriented)
 * URL: https://script.google.com/macros/s/AKfycbxVdhm2w6T4oSB77liXaV_cCWkWGZTps-HPPcMfsBDEw4f1Ef9AD_u9uFlH9h3D1oiSzQ/exec
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxVdhm2w6T4oSB77liXaV_cCWkWGZTps-HPPcMfsBDEw4f1Ef9AD_u9uFlH9h3D1oiSzQ/exec';
const adminWA = "6285232526003";

// Deteksi 5 Mode (Kebal Huruf Besar/Kecil, Query Param & Hash)
function getActiveMode() {
    const fullUrl = (window.location.search + " " + window.location.hash).toLowerCase();
    
    if (fullUrl.includes('educator') || fullUrl.includes('guru') || fullUrl.includes('pendidik') || fullUrl.includes('dosen')) return 'educator';
    if (fullUrl.includes('parenting') || fullUrl.includes('family') || fullUrl.includes('orangtua')) return 'parenting';
    if (fullUrl.includes('youth') || fullUrl.includes('pemuda') || fullUrl.includes('mahasiswa')) return 'youth';
    if (fullUrl.includes('business') || fullUrl.includes('bisnis') || fullUrl.includes('hcm') || fullUrl.includes('sbs')) return 'business';
    return 'general';
}

// Inisialisasi Tampilan Depan Dinamis Berdasarkan Mode
window.addEventListener('DOMContentLoaded', () => {
    const activeMode = getActiveMode();
    const badgeEl = document.getElementById('mode-badge');
    const subTitleEl = document.getElementById('intro-subtitle');

    let badgeText = "Mode: Umum & Pengembangan Diri";
    let badgeColor = "#1a2a6c";
    let subTitleText = "Kenali potensi respon perilaku, gaya komunikasi, dan adaptasi kerja terbaik Anda.";

    if (activeMode === 'business') {
        badgeText = "Mode: Bisnis & HCM";
        badgeColor = "#c5a059";
        subTitleText = "Pemetaan respon perilaku kepemimpinan bisnis, ekosistem kerja, dan sinergi tim.";
    } else if (activeMode === 'parenting') {
        badgeText = "Mode: Parenting & Keluarga";
        badgeColor = "#27ae60";
        subTitleText = "Memahami respon perilaku pengasuhan, harmoni keluarga, dan pendekatan anak.";
    } else if (activeMode === 'youth') {
        badgeText = "Mode: Pemuda & Mahasiswa";
        badgeColor = "#e67e22";
        subTitleText = "Eksplorasi potensi diri, gaya belajar, kolaborasi kelompok, dan arah karier masa depan.";
    } else if (activeMode === 'educator') {
        badgeText = "Mode: Guru & Pendidik";
        badgeColor = "#16a085";
        subTitleText = "Menemukan gaya mengajar alami, pendekatan kelas inspiratif, dan manajemen dinamika siswa.";
    }

    if (badgeEl) {
        badgeEl.textContent = badgeText;
        badgeEl.style.background = badgeColor;
        badgeEl.style.color = "#ffffff";
        badgeEl.style.display = "inline-block";
    }

    if (subTitleEl) {
        subTitleEl.textContent = subTitleText;
    }
});

const quizQuestions = [
    { question: "1. Saat dihadapkan pada keputusan penting, saya cenderung:", options: [{ text: "Mengambil keputusan cepat dan tegas", type: "D" }, { text: "Berdiskusi dengan orang lain sebelum memutuskan", type: "I" }, { text: "Menimbang perasaan semua pihak terlebih dahulu", type: "S" }, { text: "Menganalisis data dan informasi sebelum memutuskan", type: "C" }] },
    { question: "2. Dalam menghadapi konflik, saya biasanya:", options: [{ text: "Menghadapinya secara langsung dan cepat", type: "D" }, { text: "Berusaha mencairkan suasana dengan humor", type: "I" }, { text: "Menenangkan semua orang agar tidak terjadi ketegangan", type: "S" }, { text: "Mengumpulkan fakta sebelum menyimpulkan", type: "C" }] },
    { question: "3. Ketika bekerja dalam tim, saya cenderung:", options: [{ text: "Mengambil peran pemimpin dan mengarahkan", type: "D" }, { text: "Menjaga semangat tim dan membangun hubungan", type: "I" }, { text: "Menjadi pendengar dan penengah yang baik", type: "S" }, { text: "Menjaga struktur dan memastikan ketepatan", type: "C" }] },
    { question: "4. Saat menghadapi perubahan, saya biasanya:", options: [{ text: "Segera bertindak dan menyesuaikan diri", type: "D" }, { text: "Menyambut dengan antusias dan semangat baru", type: "I" }, { text: "Membutuhkan waktu untuk merasa nyaman", type: "S" }, { text: "Menganalisis terlebih dahulu dampaknya", type: "C" }] },
    { question: "5. Gaya komunikasi saya lebih cenderung:", options: [{ text: "Langsung, singkat, dan jelas", type: "D" }, { text: "Ceria, ekspresif, dan spontan", type: "I" }, { text: "Tenang, penuh empati, dan ramah", type: "S" }, { text: "Terstruktur, sopan, dan berbasis data", type: "C" }] },
    { question: "6. Dalam menghadapi tekanan deadline, saya:", options: [{ text: "Fokus pada hasil dan cepat menyelesaikan tugas", type: "D" }, { text: "Mencari bantuan atau mengajak kolaborasi", type: "I" }, { text: "Menjaga suasana agar tetap tenang dan nyaman", type: "S" }, { text: "Membuat daftar prioritas dan mengikuti langkah kerja", type: "C" }] },
    { question: "7. Saat menyampaikan ide, saya lebih suka:", options: [{ text: "Menyampaikan inti ide dengan tegas", type: "D" }, { text: "Menceritakan dengan semangat dan antusiasme", type: "I" }, { text: "Menyesuaikan cara bicara agar tidak menyinggung", type: "S" }, { text: "Menyusun data pendukung sebelum berbicara", type: "C" }] },
    { question: "8. Ketika bertugas di proyek baru, saya:", options: [{ text: "Langsung mulai dan cari tantangan", type: "D" }, { text: "Senang bertemu orang baru dan bekerja kelompok", type: "I" }, { text: "Ingin tahu siapa saja yang akan saya bantu", type: "S" }, { text: "Membaca semua panduan terlebih dahulu", type: "C" }] },
    { question: "9. Jika ada masalah di tim, saya cenderung:", options: [{ text: "Segera selesaikan dan ambil tindakan", type: "D" }, { text: "Mencairkan suasana agar tidak tegang", type: "I" }, { text: "Mendengarkan semua pihak terlebih dahulu", type: "S" }, { text: "Mencari tahu penyebab pastinya dengan teliti", type: "C" }] },
    { question: "10. Dalam mengambil keputusan penting, saya:", options: [{ text: "Fokus pada hasil dan objektif", type: "D" }, { text: "Melibatkan orang lain agar lebih dinamis", type: "I" }, { text: "Memastikan semua orang nyaman", type: "S" }, { text: "Berdasarkan data dan pertimbangan matang", type: "C" }] },
    { question: "11. Dalam menyelesaikan tugas, saya:", options: [{ text: "Suka tantangan dan hasil cepat", type: "D" }, { text: "Butuh suasana menyenangkan", type: "I" }, { text: "Perlu kenyamanan dan ritme stabil", type: "S" }, { text: "Senang membuat checklist dan analisis", type: "C" }] },
    { question: "12. Saat diskusi tim, saya:", options: [{ text: "Menyampaikan pendapat dengan yakin", type: "D" }, { text: "Antusias dan ekspresif", type: "I" }, { text: "Mendukung dan menenangkan tim", type: "S" }, { text: "Teliti dan hati-hati dalam berpendapat", type: "C" }] },
    { question: "13. Ketika diberikan kebebasan, saya:", options: [{ text: "Menentukan tujuan dan langsung bekerja", type: "D" }, { text: "Mencari teman kerja dan kolaborasi", type: "I" }, { text: "Menyesuaikan ritme dan membantu tim", type: "S" }, { text: "Membuat rencana dan evaluasi risiko", type: "C" }] },
    { question: "14. Gaya kerja saya lebih ke arah:", options: [{ text: "Cepat, to the point, dan kompetitif", type: "D" }, { text: "Energik, kreatif, dan spontan", type: "I" }, { text: "Stabil, ramah, dan suportif", type: "S" }, { text: "Teliti, logis, dan sistematis", type: "C" }] },
    { question: "15. Jika tim dalam kondisi tidak ideal, saya:", options: [{ text: "Tetap fokus dan dorong hasil", type: "D" }, { text: "Menghibur agar semangat kembali", type: "I" }, { text: "Menenangkan agar suasana kondusif", type: "S" }, { text: "Analisis masalah dan cari akar penyebab", type: "C" }] },
    { question: "16. Saat presentasi, saya:", options: [{ text: "Langsung ke inti pesan dan solusi", type: "D" }, { text: "Gunakan humor dan energi tinggi", type: "I" }, { text: "Jaga suasana nyaman dan terhubung", type: "S" }, { text: "Beri data, grafik, dan penjelasan runtut", type: "C" }] },
    { question: "17. Jika atasan memberi kritik, saya:", options: [{ text: "Terima dan segera perbaiki", type: "D" }, { text: "Tanyakan sambil tersenyum", type: "I" }, { text: "Pikirkan dulu dan renungkan", type: "S" }, { text: "Catat dan evaluasi", type: "C" }] },
    { question: "18. Dalam tim, saya dikenal sebagai orang yang:", options: [{ text: "Tegas dan berani ambil keputusan", type: "D" }, { text: "Ceria dan penuh semangat", type: "I" }, { text: "Sabar dan penengah", type: "S" }, { text: "Teliti dan detail", type: "C" }] },
    { question: "19. Ketika mendapat tugas baru, saya:", options: [{ text: "Ingin segera menyelesaikan sebaik mungkin", type: "D" }, { text: "Cari teman kerja untuk diskusi", type: "I" }, { text: "Lihat bagaimana dampaknya pada orang lain", type: "S" }, { text: "Minta SOP dan instruksi terlebih dahulu", type: "C" }] },
    { question: "20. Dalam situasi darurat, saya:", options: [{ text: "Langsung bertindak", type: "D" }, { text: "Ajak orang lain bekerja sama", type: "I" }, { text: "Pastikan semua aman secara emosional", type: "S" }, { text: "Pikirkan konsekuensi dan langkah terstruktur", type: "C" }] },
    { question: "21. Saat bekerja, saya lebih suka:", options: [{ text: "Tujuan yang jelas dan hasil cepat", type: "D" }, { text: "Lingkungan seru dan tidak kaku", type: "I" }, { text: "Ritme tenang dan tidak terburu-buru", type: "S" }, { text: "Struktur kerja yang jelas dan detail", type: "C" }] },
    { question: "22. Jika harus memilih peran, saya lebih suka:", options: [{ text: "Pemimpin atau pengambil keputusan", type: "D" }, { text: "Presenter atau penghubung tim", type: "I" }, { text: "Pendengar dan penyeimbang", type: "S" }, { text: "Pengelola data dan sistem kerja", type: "C" }] },
    { question: "23. Saat diberi target tinggi, saya:", options: [{ text: "Tertantang dan siap ngebut", type: "D" }, { text: "Ajukan ide kreatif dan libatkan tim", type: "I" }, { text: "Minta arahan jelas dan waktu stabil", type: "S" }, { text: "Minta acuan data dan strategi jelas", type: "C" }] },
    { question: "24. Kalau tim tidak kompak, saya akan:", options: [{ text: "Tegur dan ambil alih kendali", type: "D" }, { text: "Bikin games atau candaan", type: "I" }, { text: "Dampingi yang merasa tertekan", type: "S" }, { text: "Identifikasi masalah sistem dan peran", type: "C" }] }
];

// NARASI LENGKAP 5 MODE
const fullNarratives5Modes = {
    "Dominance": {
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Dalam menghadapi dinamika lingkungan dan tantangan, profil Dominance merespons dengan determinasi tinggi, ketegasan, dan dorongan kuat mengendalikan situasi. Memandang masalah sebagai hal yang harus diselesaikan cepat dengan orientasi hasil konkret.<br><br><b>Kekuatan & Tantangan Respons:</b> Tangguh di bawah tekanan kritis, berani mengambil risiko, dan mandiri. Namun, di bawah tekanan tinggi bisa terkesan mendominasi atau kurang sabar terhadap proses bertahap.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran pengarah inisiatif baru, penentu target, negosiator utama, dan pemecah kebuntuan.<br><br><b>Saran Pengembangan:</b> Latihlah empati mendengar sebelum memutuskan agar ketegasan tidak dirasakan sebagai intimidasi.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Direct & Action-Driven. Cepat mencari solusi tanpa kompromi bertele-tele.<br><br><b>Partner Sinergi:</b> Membutuhkan figur pendukung yang teliti (C) dan penjaga harmoni (S).<br><br><b>Panduan Komunikasi:</b> Bicaralah langsung ke inti masalah, sediakan opsi solusi nyata, dan hargai efisiensi waktu.</div>`,

        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Dominance merespons dinamika bisnis dengan dorongan kuat mencapai bottom-line results. Memandang dinamika pasar sebagai arena ekspansi, efisiensi eksekusi, dan pencapaian target organisasi yang agresif.<br><br><b>Kekuatan & Tantangan Respons:</b> Sangat unggul dalam percepatan target (scale-up), negosiasi strategis, dan kepemimpinan krisis. Tantangannya adalah potensi mengabaikan kepatuhan sistem atau kelelahan tim.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Penentu arah visi bisnis, akselerator skala organisasi, restrukturisasi divisi, dan eksekutor lapangan.<br><br><b>Saran Pengembangan:</b> Terapkan komunikasi dua arah dan percayakan sistem delegasi yang terukur kepada jajaran manajerial.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Direct & Fast-Paced. Mendorong pencapaian KPI dengan standar eksekusi tinggi.<br><br><b>Sinergi Tim:</b> Sangat membutuhkan mitra Compliance (kontrol SOP/keuangan) dan Steadiness (retensi staf).<br><br><b>Panduan Komunikasi:</b> Sampaikan arahan to-the-point, fokus solusi objektif, dan tentukan target terukur.</div>`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b><br>Orang tua tipe Dominance mendidik dengan ketegasan, visi masa depan, dan dorongan kuat agar anak mandiri serta tangguh mental sejak dini dalam menghadapi tantangan hidup.<br><br><b>Kekuatan & Tantangan:</b> Pelindung keluarga yang sigap dan tegas menegakkan aturan. Namun di bawah tekanan atau saat anak lamban, mudah bereaksi menuntut kepatuhan mutlak secara sepihak.<br><br><b>Kecenderungan Peran Keluarga:</b> Penentu arah pendidikan anak, pelatih disiplin praktis, dan pembangun etos kerja anak.<br><br><b>Saran Pola Asuh:</b> Berikan anak ruang memilih (opsi terkontrol) dan dengarkan emosinya sebelum memberi instruksi.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan penerimaan hangat, bukan sekadar pemenuhan target prestasi.<br><br><b>Sinergi Pasangan:</b> Selaraskan aturan bersama pasangan tanpa saling mendominasi keputusan di depan anak.<br><br><b>Panduan Menegur Anak:</b> Rendahkan intonasi suara, tatap mata anak dengan kasih, dan jelaskan konsekuensi logis.</div>`,

        leftYouth: `<b>Karakteristik & Potensi Diri:</b><br>Pemuda Dominance berjiwa pemimpin mandiri, kompetitif, dan memiliki determinasi tinggi dalam mengejar prestasi akademis maupun organisasi.<br><br><b>Kekuatan & Tantangan:</b> Berani tampil di garis depan dan cepat mengambil keputusan taktis. Tantangannya adalah gengsi mengakui kesalahan dan kurang sabar dengan rekan yang lamban.<br><br><b>Arah Peran & Karier:</b> Manajemen Bisnis, Hukum/Advokasi, Teknik Industri, Militer, Wirausaha, dan Manajemen Proyek.<br><br><b>Saran Pengembangan Diri:</b> Sadari bahwa kepemimpinan sejati dibangun melalui kolaborasi dan merangkul rekan, bukan mendominasi.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Penggerak ritme kerja kelompok dan eksekutor penyelesaian tugas mendesak.<br><br><b>Ekosistem Tumbuh:</b> Organisasi kemahasiswaan, inkubator wirausaha muda, dan kompetisi debat bisnis.<br><br><b>Panduan Komunikasi:</b> Sampaikan saran secara santun dan hargai proses kontribusi setiap anggota tim.</div>`,

        leftEducator: `<b>Gaya Mengajar:</b><br>Guru Dominance tampil tegas, berwibawa, lugas, dan sangat berfokus pada pencapaian ketuntasan kurikulum serta ketertiban kelas yang disiplin.<br><br><b>Kekuatan & Tantangan:</b> Sangat handal mengendalikan kelas dan memacu daya juang siswa. Tantangannya adalah gaya bicara frontal yang dapat membuat siswa pemalu merasa tertekan.<br><br><b>Kecenderungan Peran Sekolah:</b> Koordinator kedisiplinan, penanggung jawab target kelulusan, dan pengambil keputusan krisis.<br><br><b>Saran Pedagogis:</b> Apresiasi usaha dan progres proses belajar siswa, bukan hanya nilai akhir sempurna.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa:</b> Pahami ritme siswa yang tenang (S/C); hindari memberi label negatif secara instan.<br><br><b>Disiplin Adaptif:</b> Panggil siswa secara privat saat menegur agar harga diri siswa tetap terjaga.<br><br><b>Sinergi Dewan Guru:</b> Buka ruang dialog dalam rapat kurikulum tanpa memaksakan standar cara pribadi.</div>`
    },

    "Influence": {
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Profil Influence merespons lingkungan melalui antusiasme, keramahan, dan komunikasi persuasif. Memandang lingkungan sebagai ruang sosial yang dapat digerakkan dengan optimisme dan interaksi terbuka.<br><br><b>Kekuatan & Tantangan Respons:</b> Piawai mencairkan suasana, membangun jejaring luas, dan memotivasi orang lain. Di bawah tekanan, rentan menghindari urusan administratif detail atau inkonsisten.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran komunikasi publik, hubungan relasi, presentasi kreatif, dan penggerak moral kelompok.<br><br><b>Saran Pengembangan:</b> Biasakan mencatat komitmen kerja dan selesaikan satu tugas tuntas sebelum memulai hal baru.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Relational & Expressive. Mencari interaksi suportif dan mencairkan suasana canggung.<br><br><b>Partner Sinergi:</b> Memerlukan figur terstruktur yang disiplin mengawal jadwal dan detail teknis.<br><br><b>Panduan Komunikasi:</b> Sampaikan apresiasi tulus, gunakan nada hangat, lalu pastikan rencana dicatat tertulis.</div>`,

        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Influence menggerakkan bisnis melalui energi antusiasme, promosi kreatif, dan jejaring relasi luas. Sangat kuat dalam membangun daya tarik brand dan budaya kerja positif.<br><br><b>Kekuatan & Tantangan Respons:</b> Unggul dalam negosiasi kemitraan, aktivasi penjualan, dan retensi klien. Tantangannya adalah kedisiplinan alur SOP serta pencatatan data rutin.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Duta brand (PR), business development, penggalangan relasi investor, dan motivator tim promosi.<br><br><b>Saran Pengembangan:</b> Terapkan checklist akuntabilitas tertulis dan gandeng rekan operasional yang teliti mengawal detail.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Inspiratif & People-Centric. Memimpin lewat kedekatan personal dan memupuk antusiasme kerja.<br><br><b>Sinergi Tim:</b> Sangat memerlukan mitra Compliance (audit SOP/keuangan) dan Dominance (penjaga fokus target).<br><br><b>Panduan Komunikasi:</b> Gunakan pendekatan hangat dan komunikatif, tetapi dokumentasikan kesepakatan secara rapi.</div>`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b><br>Orang tua tipe Influence menghidupkan rumah dengan keceriaan, kasih sayang ekspresif, tawa, dan selalu menjadi teman bermain yang menyenangkan bagi anak.<br><br><b>Kekuatan & Tantangan:</b> Sangat mudah dekat secara emosional dengan anak. Tantangannya adalah kurang konsisten menegakkan aturan harian dan suasana hati mudah terpengaruh saat anak rewel.<br><br><b>Kecenderungan Peran Keluarga:</b> Pembangun rasa percaya diri anak, pencipta memori indah keluarga, dan perekat kebersamaan.<br><br><b>Saran Pola Asuh:</b> Buat kesepakatan aturan tertulis bersama anak dan latih ketenangan diri sebelum merespons kerewelan.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan kehadiran yang fokus mendengarkan, bukan sekadar perhatian saat orang tua ceria.<br><br><b>Sinergi Pasangan:</b> Hindari melonggarkan izin anak secara sepihak di belakang pasangan.<br><br><b>Panduan Menegur Anak:</b> Dengarkan cerita anak sampai selesai tanpa memotong, lalu tegakkan konsekuensi secara konsisten.</div>`,

        leftYouth: `<b>Karakteristik & Potensi Diri:</b><br>Pemuda Influence memancarkan aura energik, ramah, dan cepat beradaptasi. Memiliki kecerdasan sosial tinggi dan pandai menyampaikan gagasan di depan publik.<br><br><b>Kekuatan & Tantangan:</b> Jago public speaking dan networking. Tantangannya adalah mudah terdistraksi hal baru (FOMO) dan cepat jenuh pada rutinitas akademis kaku.<br><br><b>Arah Peran & Karier:</b> Ilmu Komunikasi, Public Relations, Marketing Kreatif, Broadcasting/Media, Event Management, dan Pariwisata.<br><br><b>Saran Pengembangan Diri:</b> Tumbuhkan finisher mindset: tuntaskan tanggung jawab akademis sebelum mengambil agenda sosial baru.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Juru bicara tim, penghubung relasi luar kelompok, dan pencipta semangat soliditas tim.<br><br><b>Ekosistem Tumbuh:</b> Komunitas kreatif kampus, forum public relations, dan kepanitiaan festival.<br><br><b>Panduan Komunikasi:</b> Susun poin pembicaraan secara terstruktur dan hindari kebiasaan menyela rekan.</div>`,

        leftEducator: `<b>Gaya Mengajar:</b><br>Guru Influence tampil ekspresif, humoris, dan pandai menyajikan materi dengan analogi seru sehingga kelas terasa hidup dan siswa betah belajar.<br><br><b>Kekuatan & Tantangan:</b> Mahir memantik keaktifan siswa. Tantangannya adalah manajemen alokasi waktu pelajaran dan kejenuhan pada berkas evaluasi administratif.<br><br><b>Kecenderungan Peran Sekolah:</b> Penggerak kegiatan kesiswaan, pembawa acara sekolah, dan pembina kreativitas seni/bahasa.<br><br><b>Saran Pedagogis:</b> Gunakan pengingat waktu (timer) untuk setiap bab materi agar alur modul tetap tuntas sesuai rencana.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa:</b> Dekati siswa pendiam secara personal tanpa langsung memaksanya tampil di depan umum.<br><br><b>Disiplin Adaptif:</b> Hindari melupakan sanksi pelanggaran yang telah disepakati agar kewibawaan guru tetap terjaga.<br><br><b>Sinergi Dewan Guru:</b> Jalin kerja sama dengan rekan guru yang teliti dalam penyiapan dokumen kurikulum.</div>`
    },

    "Steadiness": {
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Profil Steadiness merespons lingkungan dengan mengutamakan kestabilan, ketenangan, dan kesetiaan proses. Memandang lingkungan sebagai ekosistem kerja sama yang membutuhkan rasa aman dan konsistensi.<br><br><b>Kekuatan & Tantangan Respons:</b> Pendengar luar biasa, tekun menjalankan rutinitas, dan handal meredam konflik. Di bawah tekanan perubahan mendadak, cenderung pasif atau lambat mengambil sikap tegas.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran pendukung operasional inti, pemelihara harmoni kelompok, mediator, dan eksekutor prosedur teratur.<br><br><b>Saran Pengembangan:</b> Latihlah ketegasan (asertif) menyuarakan pandangan pribadi dan lebih terbuka pada perubahan baru.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Patient & Accommodating. Menjaga ritme damai dan melindungi lingkungan dari pertengkaran.<br><br><b>Partner Sinergi:</b> Memerlukan figur inisiator yang berani memacu akselerasi dan target baru.<br><br><b>Panduan Komunikasi:</b> Bicaralah dengan ramah, berikan kejelasan alur, dan sediakan waktu pemrosesan informasi.</div>`,

        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Steadiness mengelola ritme bisnis berbasis loyalitas, keandalan operasional, dan kepuasan pelanggan jangka panjang. Menjaga organisasi tetap kokoh melalui stabilitas internal.<br><br><b>Kekuatan & Tantangan Respons:</b> Sangat unggul menjaga retensi karyawan dan konsistensi layanan. Tantangannya adalah keraguan saat harus pivot bisnis mendadak atau menegur staf bermasalah.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Penguatan fondasi operasional, pemeliharaan hubungan klien inti, manajemen SDM internal, dan penjaga ritme harian.<br><br><b>Saran Pengembangan:</b> Latih keberanian mengambil keputusan cepat di tengah dinamika pasar dan tegakkan standar kinerja tegas.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Servant Leadership & Konsisten. Memimpin dengan keteladanan, kesabaran, dan dukungan tim.<br><br><b>Sinergi Tim:</b> Sangat memerlukan mitra Dominance (akselerasi target) dan Influence (ekspansi pasar).<br><br><b>Panduan Komunikasi:</b> Ciptakan komunikasi yang aman secara psikologis dan beri waktu adaptasi sistem baru.</div>`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b><br>Orang tua tipe Steadiness mendidik dengan kesabaran luar biasa, menerima anak apa adanya, menenangkan, dan menciptakan suasana rumah yang damai bebas drama.<br><br><b>Kekuatan & Tantangan:</b> Tempat bersandar yang sangat aman bagi anak. Tantangannya adalah kecenderungan terlalu membiarkan (permissive) dan menunda pendisiplinan demi menghindari konflik.<br><br><b>Kecenderungan Peran Keluarga:</b> Penjaga keharmonisan rumah tangga, pendengar curhat anak, dan penengah perselisihan antaranak.<br><br><b>Saran Pola Asuh:</b> Sadari bahwa disiplin tegas adalah bentuk kasih sayang. Tegakkan batasan tanpa rasa bersalah.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak memerlukan batasan tegas yang konsisten agar merasa terlindungi.<br><br><b>Sinergi Pasangan:</b> Ambil peran aktif dalam penegakan aturan agar pasangan tidak merasa memikul beban sendirian.<br><br><b>Panduan Menegur Anak:</b> Tetap tenang namun tidak bergeming saat anak merajuk menolak instruksi wajib.</div>`,

        leftYouth: `<b>Karakteristik & Potensi Diri:</b><br>Pemuda Steadiness memiliki kedewasaan emosional yang matang, setia kawan, sabar, dan sangat bisa diandalkan dalam tugas jangka panjang kelompok.<br><br><b>Kekuatan & Tantangan:</b> Pendengar objektif dan penjaga kekompakan. Tantangannya adalah suka menunda tugas (prokrastinasi) dan sungkan menolak permintaan teman.<br><br><b>Arah Peran & Karier:</b> Keguruan/Pendidikan, Psikologi/Konseling, Administrasi Negara, Pelayanan Medis, dan Manajemen SDM.<br><br><b>Saran Pengembangan Diri:</b> Beranikan diri bersuara di forum rapat dan tentukan batas kesanggupan diri secara asertif.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Penopang kelancaran tugas harian dan penyejuk saat terjadi gesekan antarteman.<br><br><b>Ekosistem Tumbuh:</b> Organisasi sosial kemasyarakatan, sekretariat tim, dan divisi pelayanan kampus.<br><br><b>Panduan Komunikasi:</b> Nyatakan pendapat secara jelas dan jangan ragu berkata 'tidak' bila tugas melampaui kapasitas.</div>`,

        leftEducator: `<b>Gaya Mengajar:</b><br>Guru Steadiness mengajar dengan kelembutan, kesabaran tanpa batas, dan penuh perhatian, menjadi sosok pelindung yang disayangi siswa.<br><br><b>Kekuatan & Tantangan:</b> Sabar mengulang materi sampai siswa paham. Tantangannya adalah enggan menegur sejak dini sehingga kedisiplinan kelas mudah kendor.<br><br><b>Kecenderungan Peran Sekolah:</b> Konselor/BK, wali kelas penyabar, dan pendamping siswa berkebutuhan khusus.<br><br><b>Saran Pedagogis:</b> Tegakkan tata tertib kelas dengan mantap sejak hari pertama tanpa merasa tidak enak pada siswa.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa:</b> Berikan saluran peran aktif bagi siswa yang agresif agar energinya tersalur positif.<br><br><b>Disiplin Adaptif:</b> Tegur pelanggaran seketika dengan nada tenang dan tatap mata mantap.<br><br><b>Sinergi Dewan Guru:</b> Berperan sebagai mediator kerukunan saat terjadi perbedaan pendapat antarguru.</div>`
    },

    "Compliance": {
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Profil Compliance bertindak berbasis data, logika objektif, dan kepatuhan prosedur. Memandang lingkungan sebagai tatanan yang harus dijalankan dengan presisi, akurasi tinggi, dan standar mutu baku.<br><br><b>Kekuatan & Tantangan Respons:</b> Teliti dalam analisis risiko, sistematis, dan konsisten menjaga standar kualitas. Di bawah tekanan, rentan terjebak analisis berlebih (overthinking) atau terlalu kritis.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran penyusunan SOP, analisa data/keuangan, kontrol mutu (QC), mitigasi risiko, dan audit proses.<br><br><b>Saran Pengembangan:</b> Tingkatkan fleksibilitas terhadap situasi praktis dan bangun komunikasi kerja yang lebih hangat.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Systematic & Evidential. Mengumpulkan fakta logis dan memastikan tidak ada celah kesalahan.<br><br><b>Partner Sinergi:</b> Memerlukan figur visioner yang berani mengambil keputusan cepat di saat darurat.<br><br><b>Panduan Komunikasi:</b> Sediakan parameter data yang valid, alur penjelasan runtut, dan hindari instruksi ambigu.</div>`,

        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Compliance mengelola bisnis berbasis presisi angka, tata kelola sistem yang tertib, dan mitigasi risiko yang ketat. Menjaga bisnis beroperasi secara efisien dengan margin kesalahan minimal.<br><br><b>Kekuatan & Tantangan Respons:</b> Sangat unggul dalam rekayasa SOP, audit keuangan, dan kontrol mutu produk. Tantangannya adalah potensi terjebak analisis terlalu lama sebelum merespons peluang baru.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Perancang sistem kerja & SOP, pengendalian kualitas (QC), manajemen risiko, dan tata kelola keuangan.<br><br><b>Saran Pengembangan:</b> Tingkatkan toleransi terhadap eksperimen pasar awal dan jalin komunikasi luwes dengan divisi kreatif.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> System-Driven & Metodis. Memimpin berbasis fakta objektif dan parameter kerja terukur.<br><br><b>Sinergi Tim:</b> Sangat membutuhkan mitra Influence (pemasaran/relasi) dan Dominance (terobosan pasar cepat).<br><br><b>Panduan Komunikasi:</b> Sampaikan evaluasi berbasis data indikator objektif tanpa terkesan mencari kesalahan.</div>`,

        leftParenting: `<b>Karakteristik Pengasuhan:</b><br>Orang tua tipe Compliance mendidik dengan standar adab yang tinggi, sangat tertib, teliti memperhatikan nutrisi & kesehatan anak, serta menanamkan nilai moral konsisten.<br><br><b>Kekuatan & Tantangan:</b> Sangat terencana mempersiapkan masa depan anak. Tantangannya adalah kecemasan berlebih (overparenting) dan ekspektasi kesempurnaan yang membuat anak takut salah.<br><br><b>Kecenderungan Peran Keluarga:</b> Penjaga keteraturan jadwal rumah, perencana keuangan keluarga, dan teladan kedisiplinan.<br><br><b>Saran Pola Asuh:</b> Terima ketidaksempurnaan rumah dan maklumi kesalahan anak sebagai tangga penting proses eksplorasinya.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan cinta tanpa syarat, bukan hanya kasih sayang saat ia berprestasi sempurna.<br><br><b>Sinergi Pasangan:</b> Hindari mengkritik gaya pengasuhan pasangan secara berlebihan di depan anak.<br><br><b>Panduan Menegur Anak:</b> Batasi poin teguran pada masalah inti, berikan bimbingan perbaikan dengan nada lembut.</div>`,

        leftYouth: `<b>Karakteristik & Potensi Diri:</b><br>Pemuda Compliance memiliki disiplin intelektual yang tinggi, kritis, teliti, dan bertanggung jawab moral atas kualitas karya akademis yang dibuat.<br><br><b>Kekuatan & Tantangan:</b> Sangat tekun dalam riset mendalam. Tantangannya adalah perfeksionisme berlebih yang menunda penyelesaian tugas dan sensitif terhadap kritik langsung.<br><br><b>Arah Peran & Karier:</b> Sains Data, Akuntansi/Keuangan, Teknologi Informasi/Software, Kedokteran/Farmasi, dan Riset Mutu.<br><br><b>Saran Pengembangan Diri:</b> Tanamkan prinsip 'progress over perfection': berani mencoba dan merilis karya tanpa menunggu 100% sempurna.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Insight:</b><br><br><b>Gaya Kolaborasi:</b> Penjaga mutu, ketelitian data, dan keabsahan laporan tugas kelompok.<br><br><b>Ekosistem Tumbuh:</b> Lembaga riset kampus, forum sains, kompetisi karya ilmiah, dan divisi litbang.<br><br><b>Panduan Komunikasi:</b> Sampaikan masukan perbaikan secara suportif tanpa meremehkan usaha teknis rekan.</div>`,

        leftEducator: `<b>Gaya Mengajar:</b><br>Guru Compliance mengajar secara sistematis, mendalam, berbasis data rujukan yang valid, serta menjunjung tinggi standar kualitas evaluasi belajar.<br><br><b>Kekuatan & Tantangan:</b> Sangat rapi dalam administrasi nilai dan objektif. Tantangannya adalah mudah kecewa mendalam saat siswa mengerjakan tugas asal-asalan.<br><br><b>Kecenderungan Peran Sekolah:</b> Perancang kurikulum materi ajar, pengawas mutu ujian, dan koordinator akreditasi sekolah.<br><br><b>Saran Pedagogis:</b> Bangun growth mindset pada siswa bahwa kekeliruan adalah jembatan belajar, bukan kegagalan mutlak.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Insight:</b><br><br><b>Pendekatan Siswa:</b> Beri ruang bagi siswa aktif berekspresi tanpa menganggapnya sebagai bentuk pembangkangan.<br><br><b>Disiplin Adaptif:</b> Fokuskan teguran pada panduan solusi perbaikan tugas, bukan menceramahi kesalahan lampau.<br><br><b>Sinergi Dewan Guru:</b> Sumbangkan keahlian presisi Anda untuk kisi-kisi ajar tanpa bersikap terlalu kritis pada rekan.</div>`
    }
};

let currentIdx = 0, userName = "", userPhone = "", scores = { D: 0, I: 0, S: 0, C: 0 }, scoresLeast = { D: 0, I: 0, S: 0, C: 0 }, radarInstance = null;

// Submit Formulir Awal
document.getElementById('start-form').addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('user-name').value.trim();
    userPhone = document.getElementById('user-phone').value.trim();
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    const q = quizQuestions[currentIdx];
    document.getElementById('question-text').textContent = `(${currentIdx + 1}/24) Pilih Paling & Bukan:`;
    const container = document.getElementById('options-container'); 
    container.innerHTML = '';
    
    q.options.forEach((opt) => {
        const row = document.createElement('div'); 
        row.className = 'option-row';
        row.innerHTML = `<input type="radio" name="most" value="${opt.type}" required> <input type="radio" name="least" value="${opt.type}" required> <span class="option-text">${opt.text}</span>`;
        container.appendChild(row);
    });
    document.getElementById('progress-bar').style.width = `${((currentIdx + 1) / 24) * 100}%`;
}

// Navigasi Pertanyaan
document.getElementById('quiz-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const most = document.querySelector('input[name="most"]:checked').value;
    const least = document.querySelector('input[name="least"]:checked').value;
    
    if (most === least) return alert("Pilihan Paling dan Bukan harus berbeda!");
    
    scores[most]++; 
    scoresLeast[least]++; 
    currentIdx++;
    
    if (currentIdx < 24) {
        showQuestion();
    } else {
        calculateResult();
    }
});

// Perhitungan Skor & Integrasi Database
async function calculateResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    let max = -100, dominant = "D";
    for (let t in scores) { 
        let final = scores[t] - scoresLeast[t]; 
        if (final > max) { max = final; dominant = t; } 
    }
    
    const fullDom = { D: "Dominance", I: "Influence", S: "Steadiness", C: "Compliance" }[dominant];
    
    // Label Mode Aktif
    const activeMode = getActiveMode();
    let modeLabel = "Umum";
    let idPrefix = "ARAYA-DISC-";
    if (activeMode === 'business') { modeLabel = "Bisnis/HCM"; idPrefix = "ARAYA-BIZ-"; }
    else if (activeMode === 'parenting') { modeLabel = "Parenting/Keluarga"; idPrefix = "ARAYA-PAR-"; }
    else if (activeMode === 'youth') { modeLabel = "Pemuda/Mahasiswa"; idPrefix = "ARAYA-YOU-"; }
    else if (activeMode === 'educator') { modeLabel = "Guru/Pendidik"; idPrefix = "ARAYA-EDU-"; }

    const testID = idPrefix + Math.floor(Math.random() * 9000 + 1000);
    
    // Tampilan Sensor Blur Inline & Kunci Seperti Personality Plus
    document.getElementById('result-title').innerHTML = `Hasil: <span id="blurred-personality" style="filter: blur(7px); -webkit-filter: blur(7px); user-select: none; letter-spacing: 2px; background: rgba(26,42,108,0.1); padding: 2px 12px; border-radius: 4px; display: inline-block;">${fullDom}</span> <span style="font-size: 14px; vertical-align: middle; color: #c5a059;">🔒 Terkunci</span>`;
    document.getElementById('result-description').textContent = `Halo ${userName}, peta spektrum kepribadian DISC Anda telah terpetakan. Masukkan kode aktivasi untuk membuka hasil lengkap & sertifikat.`;
    
    // Format Pesan WhatsApp: Memuat Nama dan Mode Aktif
    const waText = encodeURIComponent(`Halo Mas Ali, saya sudah selesai tes DISC dengan nama *${userName}* (Mode: *${modeLabel}*). Saya ingin membeli kode aktivasi untuk mendownload sertifikat.`);
    document.getElementById('buy-wa').href = `https://wa.me/${adminWA}?text=${waText}`;

    // Kirim Data ke Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            nama: userName, 
            whatsapp: userPhone, 
            hasil: fullDom + ` (${modeLabel})`,
            skorD: scores.D - scoresLeast.D, 
            skorI: scores.I - scoresLeast.I,
            skorS: scores.S - scoresLeast.S, 
            skorC: scores.C - scoresLeast.C,
            id: testID
        })
    });

    // Pemilihan Narasi Berdasarkan Mode Aktif
    let leftNarrative = fullNarratives5Modes[fullDom].leftGeneral;
    let rightNarrative = fullNarratives5Modes[fullDom].rightGeneral;

    if (activeMode === 'business') {
        leftNarrative = fullNarratives5Modes[fullDom].leftBusiness;
        rightNarrative = fullNarratives5Modes[fullDom].rightBusiness;
    } else if (activeMode === 'parenting') {
        leftNarrative = fullNarratives5Modes[fullDom].leftParenting;
        rightNarrative = fullNarratives5Modes[fullDom].rightParenting;
    } else if (activeMode === 'youth') {
        leftNarrative = fullNarratives5Modes[fullDom].leftYouth;
        rightNarrative = fullNarratives5Modes[fullDom].rightYouth;
    } else if (activeMode === 'educator') {
        leftNarrative = fullNarratives5Modes[fullDom].leftEducator;
        rightNarrative = fullNarratives5Modes[fullDom].rightEducator;
    }

    // Render Data Sertifikat
    document.getElementById('cert-user-name').textContent = userName.toUpperCase();
    document.getElementById('cert-phone-val').textContent = userPhone;
    document.getElementById('cert-type').textContent = fullDom;
    document.getElementById('cert-col-left').innerHTML = leftNarrative;
    document.getElementById('cert-col-right').innerHTML = rightNarrative;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
    document.getElementById('cert-id').textContent = testID;
}

// Validasi Kode Aktivasi dari Database Spreadsheet
document.getElementById('unlock-button').onclick = async function() {
    const code = document.getElementById('activation-code').value.trim();
    if (!code) return alert("Masukkan kode aktivasi!");
    this.disabled = true; 
    this.textContent = "Memvalidasi...";

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({ whatsapp: userPhone, checkCode: code })
        });
        const result = await response.text();

        if (result === "Valid") {
            alert("Akses Dibuka! Sertifikat resmi Anda siap diunduh.");
            
            // Buka sensor blur dan ubah badge menjadi terbuka
            let dominant = "D", max = -100;
            for (let t in scores) { 
                let final = scores[t] - scoresLeast[t]; 
                if (final > max) { max = final; dominant = t; } 
            }
            const fullDom = { D: "Dominance", I: "Influence", S: "Steadiness", C: "Compliance" }[dominant];
            document.getElementById('result-title').innerHTML = `Hasil: <span style="color: #1a2a6c; font-weight: bold;">${fullDom}</span> <span style="font-size: 16px; color: #27ae60;">🔓 Terbuka</span>`;
            
            document.querySelector('.activation-box').classList.add('hidden');
            document.getElementById('download-cert-button').classList.remove('hidden');
        } else { 
            alert("Kode Aktivasi tidak cocok atau belum terdaftar di sistem."); 
        }
    } catch (e) { 
        alert("Terjadi kendala koneksi saat validasi database."); 
    } finally {
        this.disabled = false; 
        this.textContent = "Buka Akses Sertifikat";
    }
};

// Cetak Sertifikat ke PDF
document.getElementById('download-cert-button').onclick = async function() {
    this.disabled = true; 
    this.textContent = "Mencetak PDF...";
    
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarInstance) radarInstance.destroy();
    
    radarInstance = new Chart(ctx, {
        type: 'radar',
        data: { 
            labels: ['Dominance', 'Influence', 'Steadiness', 'Compliance'], 
            datasets: [{ 
                data: [
                    scores.D - scoresLeast.D, 
                    scores.I - scoresLeast.I, 
                    scores.S - scoresLeast.S, 
                    scores.C - scoresLeast.C
                ], 
                backgroundColor: 'rgba(26,42,108,0.2)', 
                borderColor: '#1a2a6c', 
                borderWidth: 2 
            }] 
        },
        options: { 
            responsive: false, 
            animation: false, 
            scales: { 
                r: { 
                    suggestedMin: -10, 
                    suggestedMax: 24, 
                    ticks: { display: false } 
                } 
            }, 
            plugins: { legend: { display: false } } 
        }
    });

    await new Promise(r => setTimeout(r, 1000));
    const canvas = await html2canvas(document.getElementById('cert-content'), { scale: 2, useCORS: true });
    const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 297, 210);
    pdf.save(`Sertifikat_DISC_${userName.replace(/\s+/g, '_')}.pdf`);
    
    this.disabled = false; 
    this.textContent = "Unduh Sertifikat (PDF)";
};

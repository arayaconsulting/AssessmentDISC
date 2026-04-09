/**
 * ARAYA CONSULTING - DISC ASSESSMENT ENGINE
 * Script Version: Final Database Sync with Extended Narratives
 * URL: https://script.google.com/macros/s/AKfycbxVdhm2w6T4oSB77liXaV_cCWkWGZTps-HPPcMfsBDEw4f1Ef9AD_u9uFlH9h3D1oiSzQ/exec
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxVdhm2w6T4oSB77liXaV_cCWkWGZTps-HPPcMfsBDEw4f1Ef9AD_u9uFlH9h3D1oiSzQ/exec';
const adminWA = "6285232526003";

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

const fullNarratives = {
    "Dominance": {
        left: `<b>Karakteristik Dasar:</b><br>Individu dengan profil Dominance adalah tipe penggerak yang memiliki fokus sangat kuat pada hasil akhir (result-oriented). Anda dikenal sebagai pribadi yang asertif, mandiri, dan berani mengambil risiko besar demi mencapai visi yang telah ditetapkan. Anda cenderung tidak menyukai hal-hal yang bertele-tele dan lebih menyukai lingkungan kerja yang memberikan otonomi penuh.<br><br>Dalam interaksi sosial, Anda sering tampil sebagai pemimpin alami yang mampu mengambil kendali di tengah ketidakpastian. Motivasi internal Anda digerakkan oleh tantangan dan efisiensi, sehingga Anda sering menjadi katalisator perubahan dalam sebuah organisasi.<br><br><b>Kekuatan & Kelemahan:</b> Anda sangat hebat dalam pengambilan keputusan cepat dan eksekusi lapangan. Namun, Anda perlu waspada terhadap kecenderungan sikap yang terlalu dominan atau kurang sabar terhadap detail.<br><br><b>Saran Pengembangan:</b> Berlatihlah untuk mendengarkan perspektif tim secara mendalam agar ketegasan Anda tidak dianggap intimidasi.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin visioner yang fokus pada target akhir (Bottom-line oriented). Anda sangat efektif dalam situasi krisis yang membutuhkan arah tegas dan cepat. Anda menginspirasi tim melalui standar kerja yang tinggi dan keberanian menghadapi tantangan.<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Eksekutor handal dalam proyek baru yang membutuhkan inisiatif tinggi. Anda bekerja paling baik saat diberikan kebebasan untuk menentukan cara kerja sendiri. Dalam tim, Anda berperan sebagai pendorong agar proyek tetap berjalan sesuai jadwal.<br><br>
                <b>Panduan Komunikasi:</b> Berbicaralah langsung ke inti masalah (to-the-point). Sediakan opsi solusi daripada sekadar laporan masalah, dan fokuslah pada pencapaian nyata serta efisiensi waktu dalam setiap diskusi bisnis.</div>`
    },
    "Influence": {
        left: `<b>Karakteristik Dasar:</b><br>Anda adalah pribadi yang hangat, penuh energi, dan persuasif. Sebagai komunikator alami, Anda mahir memotivasi orang lain melalui ide kreatif dan antusiasme yang menular. Anda sangat menghargai interaksi sosial, pengakuan publik, dan keterlibatan tim dalam setiap kegiatan yang dilakukan.<br><br>Daya tarik utama Anda terletak pada optimisme dan kemampuan membangun jejaring dengan cepat. Anda adalah perekat sosial yang mampu mencairkan ketegangan dalam kelompok. Kehadiran Anda seringkali menjadi inspirasi bagi orang-orang di sekitar untuk berpikir lebih kreatif.<br><br><b>Kekuatan & Kelemahan:</b> Hebat dalam membangun hubungan baru dan presentasi persuasif. Namun, Anda mungkin memiliki tantangan dalam hal disiplin manajemen waktu atau pengerjaan detail administratif yang kaku.<br><br><b>Saran Pengembangan:</b> Tingkatkan disiplin dalam penyelesaian rencana aksi nyata dan cobalah untuk lebih objektif dalam menganalisis fakta sebelum mengambil keputusan besar.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin inspiratif yang memimpin melalui hubungan personal. Anda menciptakan atmosfer kerja yang menyenangkan dan mendukung kreativitas. Anda sangat baik dalam memberikan apresiasi yang meningkatkan loyalitas tim.<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Sangat produktif dalam lingkungan yang mengutamakan kolaborasi dan diskusi ide. Anda adalah aset besar dalam tim pemasaran, humas, atau bagian yang membutuhkan kemampuan negosiasi interpersonal tingkat tinggi.<br><br>
                <b>Panduan Komunikasi:</b> Gunakan pendekatan yang hangat, santai, and antusias. Berikan ruang yang luas bagi mereka untuk mengekspresikan ide-ide baru, dan sertakan pujian yang tulus atas kontribusi kreatif yang telah mereka berikan.</div>`
    },
    "Steadiness": {
        left: `<b>Karakteristik Dasar:</b><br>Pilar pendukung organisasi yang tenang, stabil, dan setia. Anda sangat menghargai harmoni, stabilitas emosional, and konsistensi jangka panjang. Anda dikenal sebagai pendengar yang luar biasa and mitra kerja yang kooperatif dalam membantu rekan kerja mencapai kesuksesan bersama.<br><br>Stabilitas emosi membuat Anda mampu bertahan dalam tekanan kerja rutin yang mungkin membosankan bagi profil lain. Anda adalah tipe 'team player' yang sangat bisa diandalkan untuk menjaga keberlangsungan sistem and meredam riak konflik dalam lingkungan internal organisasi.<br><br><b>Kekuatan & Kelemahan:</b> Sabar, loyal, and mampu menjaga kerahasiaan dengan baik. Namun, Anda mungkin merasa kesulitan saat menghadapi perubahan mendadak atau konflik terbuka secara frontal.<br><br><b>Saran Pengembangan:</b> Berlatihlah untuk lebih asertif dalam menyuarakan pendapat pribadi and cobalah untuk lebih terbuka terhadap perubahan spontan yang membawa kemajuan.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin yang melayani (Servant Leader). Anda memastikan setiap anggota tim merasa aman, didengarkan, and memiliki sumber daya yang cukup. Anda memimpin dengan keteladanan dalam hal kesabaran and ketekunan kerja.<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Pekerja tim yang metodis and sangat handal dalam peran dukungan teknis maupun operasional. Anda adalah penjaga ritme kerja yang memastikan semua proses berjalan sesuai prosedur yang stabil tanpa mengorbankan hubungan baik.<br><br>
                <b>Panduan Komunikasi:</b> Berbicaralah dengan nada yang tenang, ramah, and tulus. Berikan waktu yang cukup bagi mereka untuk memproses informasi baru sebelum menuntut jawaban, and hindari sikap yang terlalu agresif atau mendesak.</div>`
    },
    "Compliance": {
        left: `<b>Karakteristik Dasar:</b><br>Individu analitis yang mendasarkan keputusan pada data and fakta objektif. Anda menghargai struktur, aturan yang jelas, and akurasi tinggi dalam segala hal. Standar kualitas Anda terhadap pekerjaan sangat mendalam, teknis, and presisi.<br><br>Keteraturan and struktur adalah kunci kenyamanan kerja Anda. Dalam tim, Anda sering berperan sebagai penjaga kualitas (quality control) yang memastikan setiap proyek berjalan sesuai standar operasi (SOP). Anda cenderung berhati-hati and sangat mematuhi etika serta regulasi yang berlaku.<br><br><b>Kekuatan & Kelemahan:</b> Sangat teliti dalam perencanaan detail and analisis risiko. Namun, Anda mungkin terjebak dalam 'analysis paralysis' (berpikir terlalu lama) atau menjadi terlalu kritis terhadap kesalahan kecil orang lain.<br><br><b>Saran Pengembangan:</b> Belajarlah untuk lebih fleksibel terhadap perubahan yang bersifat non-strategis and kembangkan komunikasi emosional yang lebih hangat dengan rekan kerja.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Kepemimpinan:</b> Pemimpin berbasis sistem yang memastikan organisasi tetap berada pada jalur prosedur yang benar. Anda memimpin dengan logika and fakta, memastikan setiap keputusan didukung oleh bukti and analisis yang kuat.<br><br>
                <b>Gaya Kerja & Kolaborasi:</b> Ahli dalam manajemen kualitas, keuangan, riset, and perencanaan strategis yang kompleks. Anda bekerja paling baik dalam lingkungan yang tenang di mana ketelitian and keahlian teknis Anda sangat dihargai.<br><br>
                <b>Panduan Komunikasi:</b> Sediakan data yang akurat, grafik yang jelas, and penjelasan logis yang terstruktur secara formal. Hindari argumen yang hanya berdasarkan perasaan, and berikan mereka waktu untuk melakukan analisis mendalam.</div>`
    }
};

let currentIdx = 0, userName = "", userPhone = "", scores = { D: 0, I: 0, S: 0, C: 0 }, scoresLeast = { D: 0, I: 0, S: 0, C: 0 }, radarInstance = null;

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
    document.getElementById('question-text').textContent = `(${currentIdx+1}/24) Pilih Paling & Bukan:`;
    const container = document.getElementById('options-container'); container.innerHTML = '';
    q.options.forEach((opt) => {
        const row = document.createElement('div'); row.className = 'option-row';
        row.innerHTML = `<input type="radio" name="most" value="${opt.type}" required> <input type="radio" name="least" value="${opt.type}" required> <span class="option-text">${opt.text}</span>`;
        container.appendChild(row);
    });
    document.getElementById('progress-bar').style.width = `${((currentIdx + 1) / 24) * 100}%`;
}

document.getElementById('quiz-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const most = document.querySelector('input[name="most"]:checked').value;
    const least = document.querySelector('input[name="least"]:checked').value;
    if (most === least) return alert("Pilihan Paling dan Bukan harus berbeda!");
    scores[most]++; scoresLeast[l = least]++; currentIdx++;
    if (currentIdx < 24) showQuestion(); else calculateResult();
});

async function calculateResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    let max = -100, dominant = "D";
    for(let t in scores) { 
        let final = scores[t] - scoresLeast[t]; 
        if(final > max) { max = final; dominant = t; } 
    }
    
    const fullDom = {D:"Dominance", I:"Influence", S:"Steadiness", C:"Compliance"}[dominant];
    const testID = "ARAYA-DISC-" + Math.floor(Math.random() * 9000 + 1000);
    
    document.getElementById('result-title').textContent = `Hasil: ${fullDom}`;
    document.getElementById('result-description').textContent = `Analisis selesai. Silakan hubungi Mas Ali Mahfud untuk mendapatkan Kode Aktivasi sertifikat premium Anda.`;
    document.getElementById('buy-wa').href = `https://wa.me/${adminWA}?text=Halo%20Mas%20Ali,%20saya%20sudah%20selesai%20tes%20DISC.%20Mohon%20kode%20aktivasi%20sertifikat.%20ID%20saya:%20${testID}`;

    // KIRIM KE DATABASE GOOGLE SHEETS
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            nama: userName, whatsapp: userPhone, hasil: fullDom,
            skorD: scores.D-scoresLeast.D, skorI: scores.I-scoresLeast.I,
            skorS: scores.S-scoresLeast.S, skorC: scores.C-scoresLeast.C,
            id: testID
        })
    });

    // Siapkan data sertifikat
    document.getElementById('cert-user-name').textContent = userName.toUpperCase();
    document.getElementById('cert-phone-val').textContent = userPhone;
    document.getElementById('cert-type').textContent = fullDom;
    document.getElementById('cert-col-left').innerHTML = fullNarratives[fullDom].left;
    document.getElementById('cert-col-right').innerHTML = fullNarratives[fullDom].right;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
    document.getElementById('cert-id').textContent = testID;
}

document.getElementById('unlock-button').onclick = async function() {
    const code = document.getElementById('activation-code').value.trim();
    if(!code) return alert("Masukkan kode aktivasi!");
    this.disabled = true; this.textContent = "Validasi...";

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({ whatsapp: userPhone, checkCode: code })
        });
        const result = await response.text();

        if (result === "Valid") {
            alert("Akses Dibuka! Silakan unduh sertifikat premium Anda.");
            document.querySelector('.activation-box').classList.add('hidden');
            document.getElementById('download-cert-button').classList.remove('hidden');
        } else { alert("Maaf, Kode Aktivasi Salah atau tidak sesuai!"); }
    } catch (e) { alert("Terjadi kesalahan koneksi database."); } finally {
        this.disabled = false; this.textContent = "Buka Akses Sertifikat";
    }
};

document.getElementById('download-cert-button').onclick = async function() {
    this.disabled = true; this.textContent = "Mencetak PDF...";
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarInstance) radarInstance.destroy();
    radarInstance = new Chart(ctx, {
        type: 'radar',
        data: { labels: ['Dominance', 'Influence', 'Steadiness', 'Compliance'], datasets: [{ data: [scores.D-scoresLeast.D, scores.I-scoresLeast.I, scores.S-scoresLeast.S, scores.C-scoresLeast.C], backgroundColor: 'rgba(26,42,108,0.2)', borderColor: '#1a2a6c', borderWidth: 2 }] },
        options: { responsive: false, animation: false, scales: { r: { suggestedMin: -10, suggestedMax: 24, ticks: { display: false } } }, plugins: { legend: { display: false } } }
    });
    await new Promise(r => setTimeout(r, 1000));
    const canvas = await html2canvas(document.getElementById('cert-content'), { scale: 2, useCORS: true });
    const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 297, 210);
    pdf.save(`Sertifikat_DISC_${userName.replace(/\s+/g, '_')}.pdf`);
    this.disabled = false; this.textContent = "Unduh Sertifikat (PDF)";
};

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
    "D": {
        name: "Dominance",
        left: `<b>Karakteristik Dasar:</b> Anda adalah penggerak yang berorientasi pada hasil dan efisiensi. Memiliki motivasi internal kuat untuk menaklukkan tantangan.<br><br><b>Kekuatan & Kelemahan:</b> Cepat mengambil keputusan sulit, gigih, dan berani mengambil risiko besar. Namun, terkadang terlihat tidak sabar dan kurang empati.<br><br><b>Saran Pengembangan:</b> Berlatihlah untuk mendengarkan masukan tim.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Visioner dan tegas. Fokus pada target akhir.<br><br><b>Panduan Komunikasi:</b> Bicara langsung ke inti (to-the-point) dan berikan opsi solusi.</div>`
    },
    "I": {
        name: "Influence",
        left: `<b>Karakteristik Dasar:</b> Pribadi yang hangat, penuh energi, dan persuasif. Mahir memengaruhi orang lain melalui ide kreatif dan antusiasme.<br><br><b>Kekuatan & Kelemahan:</b> Komunikator hebat dan optimis. Namun, seringkali kurang teratur dalam detail administrasi.<br><br><b>Saran Pengembangan:</b> Tingkatkan disiplin manajemen waktu.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Demokratis dan inspiratif. Memimpin dengan karisma.<br><br><b>Panduan Komunikasi:</b> Gunakan pendekatan hangat dan santai. Berikan ruang ide.</div>`
    },
    "S": {
        name: "Steadiness",
        left: `<b>Karakteristik Dasar:</b> Pilar pendukung organisasi yang tenang dan setia. Menghargai harmoni, stabilitas, dan konsistensi jangka panjang.<br><br><b>Kekuatan & Kelemahan:</b> Sabar, pendengar baik, dan kooperatif. Namun, cenderung menghindari konflik mendadak.<br><br><b>Saran Pengembangan:</b> Berlatihlah untuk lebih asertif menyatakan pendapat.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Suportif (Servant Leader). Menjaga keamanan tim.<br><br><b>Panduan Komunikasi:</b> Bicara tenang dan ramah. Berikan waktu untuk memproses informasi.</div>`
    },
    "C": {
        name: "Compliance",
        left: `<b>Karakteristik Dasar:</b> Analitis, objektif, dan perfeksionis. Menghargai struktur, aturan, dan akurasi tinggi dalam segala hal.<br><br><b>Kekuatan & Kelemahan:</b> Standar kualitas tinggi dan analisis risiko mendalam. Namun, sering terjebak analysis paralysis.<br><br><b>Saran Pengembangan:</b> Lebih fleksibel terhadap kesalahan non-strategis.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Berbasis sistem. Memastikan standar prosedur berjalan.<br><br><b>Panduan Komunikasi:</b> Sediakan data akurat dan penjelasan logis terstruktur.</div>`
    }
};

let currentIdx = 0, userName = "", scores = { D: 0, I: 0, S: 0, C: 0 }, scoresLeast = { D: 0, I: 0, S: 0, C: 0 }, radarInstance = null;

document.getElementById('start-form').addEventListener('submit', (e) => {
    e.preventDefault(); userName = document.getElementById('user-name').value.trim();
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden'); showQuestion();
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
    scores[most]++; scoresLeast[least]++; currentIdx++;
    if (currentIdx < 24) showQuestion(); else showResult();
});

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    let max = -100, dominant = "D";
    for(let t in scores) { let final = scores[t] - scoresLeast[t]; if(final > max) { max = final; dominant = t; } }
    document.getElementById('result-title').textContent = `Hasil: ${fullNarratives[dominant].name}`;
    document.getElementById('result-description').textContent = `Halo ${userName}, peta kepribadian Anda telah terpetakan secara lengkap.`;
}

function createRadar(m, l) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarInstance) radarInstance.destroy();
    radarInstance = new Chart(ctx, {
        type: 'radar',
        data: { labels: ['Dominance', 'Influence', 'Steadiness', 'Compliance'], datasets: [{ data: [m.D-l.D, m.I-l.I, m.S-l.S, m.C-l.C], backgroundColor: 'rgba(26,42,108,0.2)', borderColor: '#1a2a6c', borderWidth: 2 }] },
        options: { responsive: false, animation: false, scales: { r: { suggestedMin: -10, suggestedMax: 20, ticks: { display: false } } }, plugins: { legend: { display: false } } }
    });
}

document.getElementById('download-cert-button').onclick = async function() {
    this.disabled = true; this.textContent = "Proses...";
    let max = -100, dom = "D";
    for(let t in scores) { let final = scores[t] - scoresLeast[t]; if(final > max) { max = final; dom = t; } }
    
    document.getElementById('cert-user-name').textContent = userName.toUpperCase();
    document.getElementById('cert-type').textContent = fullNarratives[dom].name;
    document.getElementById('cert-col-left').innerHTML = fullNarratives[dom].left;
    document.getElementById('cert-col-right').innerHTML = fullNarratives[dom].right;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
    document.getElementById('cert-id').textContent = "ARAYA-DISC-" + Math.floor(Math.random() * 9000 + 1000);
    
    createRadar(scores, scoresLeast);
    await new Promise(r => setTimeout(r, 800));
    
    const canvas = await html2canvas(document.getElementById('cert-content'), { scale: 2, useCORS: true });
    const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 297, 210);
    pdf.save(`Sertifikat_DISC_${userName.replace(/\s+/g, '_')}.pdf`);
    
    this.disabled = false; this.textContent = "Unduh Sertifikat (PDF)";
};

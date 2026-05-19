import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// HELPER GLOBAL: Otomatis memformat path aset dengan aman untuk lokal & GitHub Pages
const fixPath = (path) => {
  if (!path || path === '#') return '#';
  // Menghilangkan trailing slash dari BASE_URL jika ada, lalu digabung dengan path asli
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
};

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  // Menyembunyikan Welcome Screen otomatis setelah 2.5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 overflow-hidden relative selection:bg-indigo-500/30">
      
      {/* 1. WELCOME SLIDE INTERAKTIF */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center space-y-3"
            >
              <p className="text-xs md:text-sm tracking-[0.4em] text-zinc-500 font-light uppercase">
                WELCOME TO
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
                Rafie's Portfolio
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTAINER PORTFOLIO */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 space-y-40">
        
        {/* 2. ABOUT ME SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-10 pt-12"
        >
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase">
              Hi there! I'm
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
              Rafie Rasydan W.
            </h2>
          </div>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            Berfokus pada ketertarikan di bidang <span className="text-zinc-200 font-medium">Cybersecurity & Infrastruktur Jaringan</span>. 
            Aktif menjabat sebagai anggota <span className="text-zinc-200 font-medium">KMTI UMY (Periode 2025/2026)</span> pada Divisi Media Propaganda, 
            serta berkontribusi dalam kepanitiaan event <span className="text-zinc-200 font-medium">Phoenix 3x3 UKM Basket UMY</span>. 
            In my spare time i'd like to... 🤔 <span className="text-zinc-200 font-medium">Make videos and take pics!</span> Checkout my socials!
          </p>

          {/* KONTAK & SOSIAL MEDIA (SVG MURNI) */}
          <div className="flex justify-center items-center gap-8 text-zinc-500">
            {/* INSTAGRAM */}
            <a 
              href="https://www.instagram.com/rafierasy?igsh=MTdwMjY3NzdoMXV3eA%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            
            {/* WHATSAPP */}
            <a 
              href="https://wa.me/6287788989183" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            
            {/* TELEGRAM */}
            <a 
              href="https://t.me/rasyww" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </a>

            {/* GITHUB */}
            <a 
              href="https://github.com/spicyshibe"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </motion.section>

        {/* 3. FOTO TENGAH DENGAN EASTER EGG FLIP ANIMASI 2 DETIK */}
        <section className="flex flex-col items-center justify-center py-6">
          <InteractivePhoto />
        </section>

        {/* 4. CERTIFICATES SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="space-y-14"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Sertifikasi & Rekam Jejak
            </h3>
            <p className="text-sm text-zinc-500 font-light">Scroll ke bawah untuk melihat berkas sertifikat aktif. Klik kartu untuk membuka PDF.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertificateCard 
              title="UXVidia Arkavidia 10.0" 
              organization="HMIF Institut Teknologi Bandung"
              role="Peserta Kompetisi UXVidia" 
              year="2025"
              pdfLink="/Rafie_Rasydan_Wahyudi.pdf"
            />
            <CertificateCard 
              title="IT Specta 2025" 
              organization="KMTI Universitas Muhammadiyah Yogyakarta"
              role="Anggota Divisi Multimedia" 
              year="2025"
              pdfLink="/Rafie Rasydan Wahyudi IT SPECTA.pdf"
            />
            <CertificateCard 
              title="IT Phoria Fest 2024" 
              organization="KMTI Universitas Muhammadiyah Yogyakarta"
              role="Anggota Divisi Multimedia" 
              year="2024"
              pdfLink="/Rafie Rasydan Wahyudi ITPF.pdf"
            />
            <CertificateCard 
              title="TOEIC Test 3 - Incomplete Sentences" 
              organization="ProProfs Quiz Maker Certified"
              role="Sertifikasi Kompetensi Bahasa (Score: 100/100)" 
              year="2026"
              pdfLink="/Rafie-347320231.pdf"
            />
            <CertificateCard 
              title="Sertifikasi Keanggotaan OJT" 
              organization="KMTI UMY Periode 2024 - 2025"
              role="Anggota OJT Divisi Media Propaganda" 
              year="2025"
              pdfLink="/SERTIFIKASI OJT.pdf"
            />
            <CertificateCard 
              title="Phoenix 3x3 Basketball" 
              organization="UKM Bola Basket UMY"
              role="Kepanitiaan Event" 
              year="2025"
              pdfLink="#" 
            />
          </div>
        </motion.section>

      </div>
    </div>
  );
}

// ================= COMPONENT: INTERACTIVE EASTER EGG PHOTO =================
function InteractivePhoto() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (isFlipped) return;
    setIsFlipped(true);
    setTimeout(() => {
      setIsFlipped(false);
    }, 2000);
  };

  return (
    <div 
      className="relative w-64 h-64 md:w-72 md:h-72 cursor-pointer select-none group" 
      style={{ perspective: 1200 }}
      onClick={handleFlip}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* FRONT SIDE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:border-zinc-700"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img 
            src={fixPath("/16B56116-5AD5-4E5C-9C01-2711183BD5AF.jpg")} 
            alt="Rafie Rasydan" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
        </div>

        {/* BACK SIDE (EASTER EGG) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-indigo-500/40 bg-zinc-900 shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img 
            src={fixPath("/foto-easter-egg.png")}  
            alt="Easter Egg Content" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 to-zinc-950 p-6 text-center space-y-2">
                  <span class="text-2xl">⚡</span>
                  <p class="text-sm font-semibold text-indigo-400">Easter Egg Mode</p>
                  <p class="text-xs text-zinc-500 font-light">Berkas gambar rahasiamu aman.</p>
                </div>
              `;
            }}
          />
        </div>
      </motion.div>
      
      <p className="text-center text-[10px] text-zinc-600 mt-6 tracking-[0.2em] uppercase group-hover:text-zinc-400 transition-colors duration-300">
        Hey! that's ME!! i might hide something tho... 🤔
      </p>
    </div>
  );
}

// ================= COMPONENT: STYLISH CERTIFICATE CARD =================
function CertificateCard({ title, organization, role, year, pdfLink }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.a 
      href={fixPath(pdfLink)}
      target="_blank"
      rel="noreferrer"
      variants={cardVariants}
      whileHover={{ y: -6, bg: 'rgba(24, 24, 27, 0.7)' }}
      className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl hover:border-zinc-800/80 cursor-pointer"
    >
      <div className="space-y-2">
        <div className="flex justify-between items-start gap-4">
          <h4 className="text-base font-medium text-zinc-100 tracking-tight">{title}</h4>
          <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 shrink-0">
            {year}
          </span>
        </div>
        <p className="text-xs text-zinc-500 font-light">{organization}</p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
        <span className="text-xs text-indigo-400/90 font-mono font-light">{role}</span>
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
      </div>
    </motion.a>
  );
}
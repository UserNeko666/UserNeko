
const nomorWA = "";

const dataRank = [
  {
    id: "stone",
    nama: "Stone",
    harga: 5000,
    warna: "#8a9099",
    glow: "rgba(138, 144, 153, 0.4)",
    glowFaint: "rgba(138, 144, 153, 0.15)",
    emoji: "🪨",
    badge: "Starter",
    perks: [
      "Tag [Stone] di chat",
      "Saturation - Mengisi dan menjaga bar makanan tetap penuh.",
      "Clear Effects - Menghapus semua efek yang sedang aktif.",
    ],
    gambar: "https://www.image2url.com/r2/default/images/1779676831851-5b8e6462-f073-417b-a73b-12497f221182.png",
  },
  {
    id: "iron",
    nama: "Iron",
    harga: 10000,
    warna: "#c8d0dc",
    glow: "rgba(200, 208, 220, 0.4)",
    glowFaint: "rgba(200, 208, 220, 0.15)",
    emoji: "⚙️",
    badge: "Popular",
    perks: [
      "Tag [Iron] di chat",
      "Fly ON - Mengaktifkan kemampuan terbang.",
      "Fly OFF - Menonaktifkan kemampuan terbang.",
      "Saturation - Mengisi dan menjaga bar makanan tetap penuh.",
      "Clear Effects - Menghapus semua efek yang sedang aktif.",
    ],
    gambar: "https://www.image2url.com/r2/default/images/1779676905357-6c497e60-a504-4452-a8fa-017b36062718.jpg",
  },
  {
    id: "gold",
    nama: "Gold",
    harga: 15000,
    warna: "#ffc533",
    glow: "rgba(255, 197, 51, 0.4)",
    glowFaint: "rgba(255, 197, 51, 0.15)",
    emoji: "🌟",
    badge: "Best Value",
    perks: [
      "Tag [Gold] di chat",
      "Fly ON - Mengaktifkan kemampuan terbang.",
      "Fly OFF - Menonaktifkan kemampuan terbang.",
      "Saturation - Mengisi dan menjaga bar makanan tetap penuh.",
      "Night Vision - Memberikan penglihatan terang di area gelap.",
      "Heal - Memulihkan kesehatan secara instan.",
      "Clear Effects - Menghapus semua efek yang sedang aktif.",
    ],
    gambar: "https://www.image2url.com/r2/default/images/1779676951411-165d949a-dbcf-4b06-a4a1-330b8623c831.png",
  },
  {
    id: "diamond",
    nama: "Diamond",
    harga: 20000,
    warna: "#00e5ff",
    glow: "rgba(0, 229, 255, 0.4)",
    glowFaint: "rgba(0, 229, 255, 0.15)",
    emoji: "💎",
    badge: "Recommended",
    perks: [
      "Tag [Diamond] di chat",
      "Saturation - Mengisi dan menjaga bar makanan tetap penuh.",
      "Fly ON - Mengaktifkan kemampuan terbang.", 
      "Fly OFF - Menonaktifkan kemampuan terbang.", 
      "Heal - Memulihkan kesehatan secara instan.", 
      "Night Vision - Memberikan penglihatan terang di area gelap.", 
      "Clear Effects - Menghapus semua efek yang sedang aktif.", 
    ],
    gambar: "https://www.image2url.com/r2/default/images/1779677005522-f149c98d-2422-4c5d-bdc0-942ef6147b20.png",
  },
  {
    id: "vip",
    nama: "VIP",
    harga: 25000,
    warna: "#b05cff",
    glow: "rgba(176, 92, 255, 0.45)",
    glowFaint: "rgba(176, 92, 255, 0.15)",
    emoji: "👑",
    badge: "Ultimate",
    perks: [
      "Tag [VIP] warna ungu",
      "Fly ON - Mengaktifkan kemampuan terbang.", 
      "Fly OFF - Menonaktifkan kemampuan terbang.", 
      "Saturation - Mengisi dan menjaga bar makanan tetap penuh.", 
      "Night Vision - Memberikan penglihatan terang di area gelap.", 
      "Heal - Memulihkan kesehatan secara instan.", 
      "Clear Weather - Mengubah cuaca menjadi cerah.", 
      "Haste II - Mempercepat kecepatan menambang.", 
      "Day - Mengubah waktu menjadi siang hari.", 
      "Clear Effects - Menghapus semua efek yang sedang aktif.", 
      "Invisible - Membuat pemain tidak terlihat.", 
    ],
    gambar: "https://www.image2url.com/r2/default/images/1779677052160-ae114702-bbe1-4596-9c28-9db4104c88b8.jpg",
  },
  {
    id: "legend",
    nama: "legend",
    harga: 30000,
    warna: "#845900",
    glow: "rgba(176, 92, 255, 0.45)",
    glowFaint: "rgba(176, 92, 255, 0.15)",
    emoji: "😜",
    badge: "Double Ultimate",
    perks: [
      "Tag [VIP] warna ungu",
      "Fly ON - Mengaktifkan kemampuan terbang.", 
      "Fly OFF - Menonaktifkan kemampuan terbang.", 
      "Saturation - Mengisi dan menjaga bar makanan tetap penuh.", 
      "Night Vision - Memberikan penglihatan terang di area gelap.", 
      "Heal - Memulihkan kesehatan secara instan.", 
      "Clear Weather - Mengubah cuaca menjadi cerah.", 
      "Haste II - Mempercepat kecepatan menambang.", 
      "Day - Mengubah waktu menjadi siang hari.", 
      "Clear Effects - Menghapus semua efek yang sedang aktif.", 
      "Invisible - Membuat pemain tidak terlihat.",
      "Spectator Mode - Mengubah mode permainan menjadi Spectator sehingga pemain dapat melihat dunia tanpa berinteraksi dengan blok atau entitas.",
    ],
    gambar: "https://www.image2url.com/r2/default/images/1779683588885-e3a9ec31-2bb4-41ba-98cc-54aaad97cfe0.jpg",
  },
];

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function bukaWhatsApp(rank) {
  const pesan = encodeURIComponent(
    `Halo Min, saya ingin membeli Rank.

📌 Detail Pesanan:
🎮 Gamertag: [Nama Player]
👑 Rank: ${rank.nama}
💰 Harga: ${formatRupiah(rank.harga)}*.\n\nMohon info lebih lanjut. Terima kasih! 🙏`
  );
  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
}

function renderCards() {
  const grid = document.getElementById("rankGrid");
  if (!grid) return;

  grid.innerHTML = dataRank
    .map(
      (rank) => `
    <div
      class="rank-card"
      id="card-${rank.id}"
      style="
        --rank-color: ${rank.warna};
        --rank-glow: ${rank.glow};
        --rank-glow-faint: ${rank.glowFaint};
      "
      data-id="${rank.id}"
    >
      <span class="card-badge">${rank.badge}</span>

      <div class="card-img-wrap">
        <img
          class="card-img"
          src="${rank.gambar}"
          alt="Rank ${rank.nama}"
          loading="lazy"
          onerror="this.src='https://placehold.co/400x533/0f1218/444?text=${rank.nama}'"
        />
      </div>

      <div class="card-body">
        <div class="card-rank-name">${rank.emoji} ${rank.nama}</div>

        <ul class="card-perks">
          ${rank.perks.map((p) => `<li>${p}</li>`).join("")}
        </ul>

        <div class="card-price-row">
          <div class="card-price">
            ${formatRupiah(rank.harga)}
            <span>/ lifetime</span>
          </div>
        </div>

        <button
          class="btn-buy"
          style="background: ${rank.warna};"
          onclick="bukaModal('${rank.id}')"
        >
          Beli Rank
        </button>
      </div>
    </div>
  `
    )
    .join("");
}

let rankTerpilih = null;

function bukaModal(rankId) {
  rankTerpilih = dataRank.find((r) => r.id === rankId);
  if (!rankTerpilih) return;

  document.getElementById("modalIcon").textContent = rankTerpilih.emoji;
  document.getElementById("modalIcon").style.color = rankTerpilih.warna;
  document.getElementById("modalTitle").textContent = "Rank " + rankTerpilih.nama;
  document.getElementById("modalPrice").textContent = formatRupiah(rankTerpilih.harga);

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function tutupModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  rankTerpilih = null;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();

  document.getElementById("btnConfirm").addEventListener("click", () => {
    if (rankTerpilih) {
      bukaWhatsApp(rankTerpilih);
      tutupModal();
    }
  });

  document.getElementById("btnCancel").addEventListener("click", tutupModal);

  document.getElementById("modalClose").addEventListener("click", tutupModal);

  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) tutupModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") tutupModal();
  });
});

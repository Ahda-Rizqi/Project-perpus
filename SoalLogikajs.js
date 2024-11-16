// Object Perpustakaan:
let perpus = {
  //     - KoleksiBuku (array)
  koleksiBuku: ["Harry potter", "Anna Karenina", "omniscient reader's viewpoint"],
  //     - Peminjam (array)
  peminjam: [],
  //     - BukuDipinjam (array)
  bukuDipinjam: [],
};
// Method:
// 1. tambahBuku(namaBuku):
//     - Tambahkan namaBuku ke KoleksiBuku

function tambahBuku(namaBuku) {
  perpus.koleksiBuku.push(namaBuku);
  return perpus.koleksiBuku;
}

// 2. pinjamBuku(namaBuku, namaPeminjam):
function pinjamBuku(namaBuku, namaPeminjam) {
  if (!namaBuku || !namaPeminjam) {
    console.log("Nama buku dan nama peminjam harus diisi!!");
    return;
  }

  let ditemukan = false;
  for (let i = 0; i < perpus.koleksiBuku.length; i++) {
    //     - Jika namaBuku ada di KoleksiBuku:
    if (namaBuku == perpus.koleksiBuku[i]) {
      ditemukan = true;
      //         - Hapus namaBuku dari KoleksiBuku
      perpus.koleksiBuku.splice(i, 1);
      //         - Tambahkan namaPeminjam ke Peminjam
      perpus.peminjam.push(namaPeminjam);
      //         - Masukkan namaBuku ke BukuDipinjam
      perpus.bukuDipinjam.push(namaBuku);
      return perpus;
    }
  }

  if (!ditemukan) {
    //     - Jika tidak ada:
    console.log("Buku yang ada pinjam tidak ada");
    //         - Tampilkan "Buku tidak tersedia"
    console.log("Buku yang tersedia = " + perpus.koleksiBuku);
    return;
  }
}


// 3. kembalikanBuku(namaBuku):
//     - Jika namaBuku ada di BukuDipinjam:
//         - Hapus namaBuku dari BukuDipinjam
//         - Masukkan namaBuku ke KoleksiBuku
//     - Jika tidak ada:
//         - Tampilkan "Buku tidak ada di daftar pinjaman"

// 4. cekBuku():
//     - Tampilkan semua buku di KoleksiBuku
//     - Tampilkan buku yang sedang dipinjam di BukuDipinjam

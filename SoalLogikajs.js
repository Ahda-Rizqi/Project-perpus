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
  let ditemukan = false;
  for (let i = 0; i < perpus.koleksiBuku.length; i++) {
    if (namaBuku == perpus.koleksiBuku[i]) {
      ditemukan = true;
      console.log(namaBuku + " Sudah ada di Perpustakaan");
      return perpus.koleksiBuku;
    }

    if (!ditemukan) {
      perpus.koleksiBuku.push(namaBuku);
      return perpus.koleksiBuku;
    }
  }
}

// 2. pinjamBuku(namaBuku, namaPeminjam):
function pinjamBuku(namaBuku, namaPeminjam) {
  if (!namaBuku || !namaPeminjam) {
    console.log("Nama buku dan nama peminjam harus diisi!!");
    return perpus;
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
    return perpus;
  }
}

// 3. kembalikanBuku(namaBuku):
function kembalikanBuku(namaBuku, namaPeminjam) {
  if (!namaBuku || !namaPeminjam) {
    console.log("Nama buku dan nama peminjam harus diisi!!");
    return perpus;
  }
  //     - Jika namaBuku ada di BukuDipinjam:
  for (let i = 0; i < perpus.bukuDipinjam.length; i++) {
    let ditemukan = false;
    if (namaBuku == perpus.bukuDipinjam[i]) {
      ditemukan = true;
      //         - Hapus namaBuku dari BukuDipinjam
      perpus.bukuDipinjam.splice(i, 1);
      perpus.peminjam.splice(i, 1);
      //         - Masukkan namaBuku ke KoleksiBuku
      perpus.koleksiBuku.push(namaBuku);
      return perpus;
    }
  }

  if (!ditemukan) {
    //     - Jika tidak ada:
    //         - Tampilkan "Buku tidak ada di daftar pinjaman"
    console.log("Buku tidak ada di daftar pinjaman!!");
    return perpus;
  }
}
// 4. cekBuku():
let cekbuku = function () {
  //     - Tampilkan semua buku di KoleksiBuku
  console.log("koleksi buku di perpustakaan " + perpus.koleksiBuku);
  //     - Tampilkan buku yang sedang dipinjam di BukuDipinjam
  console.log("Buku yang dipinjam: ", perpus.bukuDipinjam);
};

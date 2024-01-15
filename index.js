// =====================================================================================================
// // Perulangan game
// let next = true;

// while (next) {
//   // menangkap pilihan player
//   let player = prompt("masukan pilihan anda : ( Gunting, Batu, Kertas )");
//   // menangkap pilihan komputer
//   // membangkitkan bilangan random
//   let computer = Math.random();
//   if (computer < 0.34) {
//     computer = "Gunting";
//   } else if (computer >= 0.34 && computer < 0.66) {
//     computer = "Batu";
//   } else {
//     computer = "Kertas";
//   }
//   // menentukan rules
//   let hasil = "";

//   if (player == computer) {
//     hasil = "SERI!!!";
//   } else if (player == "Gunting") {
//     hasil = computer == "Batu" ? "Kalah!" : "Menang!";
//   } else if (player == "Batu") {
//     hasil = computer == "Gunting" ? "Menang!" : "Kalah!";
//   } else if (player == "Kertas") {
//     hasil = computer == "Gunting" ? "Kalah!" : "Menang!";
//   } else {
//     alert("Anda Menuliskan Pilihan Yang TIdak Ada!!!");
//   }
//   // tampilkan hasilnya
//   alert(
//     `Anda Memilih ${player} dan Computer memilih ${computer} \n dan hasilnya anda ${hasil}`
//   );

//   next = confirm("main lagi???");
// }
// alert("Terimakasih Telah Bermain Game Sederhana Ini :)");
// =====================================================================================================

// =====================================================================================================
// let ulang = true;
// while (ulang) {
//   // tentukan angka kesempatan untuk bermain
//   let chance = 3;
//   // menentukan angka random
//   let computer = Math.floor(Math.random() * 10) + 1;
//   // menangkap hasil
//   let hasil = "";
//   // melakukan perulangan berdasarkan angka kesempatan yang sudah di tentukan
//   while (chance >= 1) {
//     alert(
//       `Tebak angka dari 1 - 10. \nAnda Mempunyai ${chance} kesempatan untuk menjawab`
//     );
//     // menangkap angka yang di inputkan player
//     let player = parseInt(prompt("Pilih angka 1-10"));
//     // menentukan rules
//     if (player === computer) {
//       hasil = "BENAR";
//       alert(`Anda ${hasil}. \nAngka yang harus di tebak adalah ${computer}`);
//       break;
//     } else if (player < computer) {
//       hasil = "RENDAH";
//       chance -= 1;
//       alert(
//         `Angka yang anda tebak terlalu ${hasil}. \nSekarang anda mempunyai ${chance} kesempatan`
//       );
//     } else if (player > computer) {
//       hasil = "TINGGI";
//       chance -= 1;
//       alert(
//         `Angka yang anda tebak terlalu ${hasil}. \nSekarang anda mempunyai ${chance} kesempatan`
//       );
//     }

//     if (chance === 0) {
//       alert(`Yahhh... anda gagal, angka yang harus di cari adalah ${computer}`);
//     }
//   }
//   ulang = confirm("Ulang Lagi?");
// }
// alert("Terima kasih sudah bermain");
// =====================================================================================================

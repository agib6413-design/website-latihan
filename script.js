window.onload = function(){
    alert("Selamat Datang di Website Sistem Informasi Limbah B3");
    tampilkanwaktu();

};

function tampilkanWaktu(){
    const waktu =new Date();

    const opsi={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",

    };

    document.getElementById("waktu").innerHTML = waktu.tolocaleDateString("id-ID", opsi);
}

function kirimform(event){
    even.preventDefault();

    const nama = document.gerElementById("nama"). value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElemenById("pesan").value.trim();

    if (nama ==="" || email ==="" ||  pesan===""){
        alert("semua data harus diisi!");
        return;
    }

    alert("Terima kasih, data berhasil dikirim.");

    document.getElementById("FormKontak").reset();


}
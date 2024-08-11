let angka1 , angka2 ,operasi_Mtk,hasil_tambah, hasil_kurang, 
    hasil_kali, hasil_bagi;

function operasi_mtk(){
    angka1 = document.getElementById("angka1").valueAsNumber;
    console.log(`angka pertama : ${angka1} dengan tipe data : ${typeof angka1}`);

    angka2 = document.getElementById("angka2").valueAsNumber;
    console.log(`angka kedua : ${angka2} dengan tipe data : ${typeof angka2}`);

    operasi_Mtk = document.getElementById("operasi_Mtk").value;

    hasil_tambah = angka1 + angka2;
    hasil_kurang = angka1 - angka2;
    hasil_kali = angka1 * angka2;
    hasil_bagi = angka1 / angka2;
 
    if(operasi_Mtk == "+"){
        console.log(`${angka1} ${operasi_Mtk} ${angka2} = ${hasil_tambah}`);
        document.getElementById("hasil").textContent = hasil_tambah;
    }else if(operasi_Mtk == "-"){
        console.log(`${angka1} ${operasi_Mtk} ${angka2} = ${hasil_kurang}`);
        document.getElementById("hasil").textContent = hasil_kurang;
    }
    else if(operasi_Mtk == "*"){
        console.log(`${angka1} ${operasi_Mtk} ${angka2} = ${hasil_kali}`);
        document.getElementById("hasil").textContent = hasil_kali;
    }else if(operasi_Mtk == "/"){
        console.log(`${angka1} ${operasi_Mtk} ${angka2} = ${hasil_bagi}`);
        document.getElementById("hasil").textContent = hasil_bagi;
    }

}
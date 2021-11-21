alert(
`Selamat Datang di Permainan Tebak Angka
Kamu akan diminta untuk memilih angka dari 1 - 3
Permainan akan dilakukan dalam 5 ronde
Pemenang ditentukan dari yang skornya lebih tinggi`
)

function getNilai(){

    let benar = true

    while(benar) {

        let nilai1 = prompt(
`Player 1
Silahkan pilih angka dari 1 - 3`
        )

        let nilai2 = prompt(
`Player 2
Silahkan pilih angka dari 1 - 3`
        )

        if (nilai1 > 0 && nilai1 < 4 && nilai2 > 0 && nilai2 < 4){ 
            return {
                player1 : nilai1,
                player2 : nilai2
                }
        } else (
            benar = confirm("Nilai yang anda masukkan tidak valid. Silahkan masukkan nilai dari 1 sampai 3. Apakah anda ingin mengulang?")    
        )
    }
}

let main = true 

while (main){

    let nilai = Math.random() * 3
    let nilaiCari = Math.ceil(nilai)
    let poinPlayer1 = 0
    let poinPlayer2 = 0

    for (let i = 1; i < 6; i++ ){

    let hasil1 = ""
    let hasil2 = ""
    confirm(`Mulai Ronde ${i} ?`)

    let nilai = getNilai()

    let player1 = nilai.player1
    let player2 = nilai.player2


    if (nilaiCari == player1 && nilaiCari == player2){
        poinPlayer1++
        poinPlayer2++
        hasil1 += "benar"
        hasil2 += "benar"  
    }else if (nilaiCari == player1 && nilaiCari != player2){
        poinPlayer1++
        hasil1 += "benar"
        hasil2 += "salah"
    }else if (nilaiCari != player1 && nilaiCari == player2){
        poinPlayer2++
        hasil1 += "salah"
        hasil2 += "benar"
    }else if (nilaiCari != player1 && nilaiCari != player2){
        hasil1 += "salah"
        hasil2 += "salah"
    }


    alert(
`nilai yang dicari ${nilaiCari}
Player 1 ${hasil1}
Player 2 ${hasil2}
Player 1 - Player 2 : ${poinPlayer1} - ${poinPlayer2}`
    )
}


    if (poinPlayer1 == poinPlayer2){
        alert(
            `Hasil Seri. Terimakasih telah bermain`
        )
    } else if ( poinPlayer1 > poinPlayer2){
        alert(
            `Player 1 Menang. Selamat!!`
        )
    } else if ( poinPlayer1 < poinPlayer2){
        alert(
            `Player 2 Menang. Selamat!!`
        )
    }

    main = confirm("Ingin bermain kembali?")
}
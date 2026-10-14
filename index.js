for (let a = 0; a < 5; a++) {
    let bintang = ""
    for (let b = 0; b < 5; b++){
        bintang += "*"
    }
    console.log(bintang)
}

for (let a = 0; a < 5; a++) {
    let star = ""
    for (let b = 0; b <= a; b++){
        star += "*"
    }
    console.log(star)
}

for (let i = 1; i <= 5; i++) {
  let spasi = "";
  let bintang = "";

  for (let j = 0; j < 5 - i; j++) {
    spasi += " ";
  }

  for (let k = 0; k < i; k++) {
    bintang += "* ";
  }

  console.log(spasi + bintang);
}



for (let i = 0; i < 5; i++) {
  let baris = "";

  for (let j = 0; j < 5; j++) {
    if (i == 0 || i == 4 || j == 0 || j == 4) {
      baris += "*";
    } else {
      baris += " ";
    }
  }

  console.log(baris);
}


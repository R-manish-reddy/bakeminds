//Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

// rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

// rot13("SERR YBIR?") should decode to the string FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

function rot13(str) {
  let alphaBasket = [];
  var result = "";
  var ipStr = str.split("");
  for (let i = 65; i < 91; i++) {
    alphaBasket.push(String.fromCharCode(i));
  }

  for (let i_ = 0; i_ < ipStr.length; i_++) {
    // console.log(ipStr[i_])

    var parIndex = alphaBasket.indexOf(ipStr[i_]);

    for (let j = 13; j >= 1; j--) {
      parIndex++;
      if (parIndex == 26) {
        parIndex = 0;
      }
    }

    /*** */
    if (alphaBasket.includes(ipStr[i_])) {
      ipStr[i_] = alphaBasket[parIndex];
    }
  }

  let gems = "";
  ipStr.forEach((a) => (gems += a));
  console.log(gems);

  var str = gems;
  return str;
}

rot13("SERR PBQR PNZC");

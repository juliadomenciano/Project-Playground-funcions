// Desafio 1
function compareTrue(a, b) {
  if(a == true && b == true){
    return true
}
else{
    return false
}
}

// Desafio 2
function calcArea(base, height) {
  var area = ((base*height) / 2)
   return area
}

// Desafio 3
function splitSentence(frase) {
  var dividir = frase.split(' ')
   return dividir
}

// Desafio 4
function concatName(arrStr) {
  var concat = arrStr[arrStr.length -1] + ', ' + arrStr[0]
  return concat
}

// Desafio 5
function footballPoints(wins, ties) {
  var vitoria = 3
   var empate = 1
   var totalPoints = (wins * vitoria) + (ties * empate)
   return totalPoints

}

// Desafio 6
function highestCount(numeros) {
  var vezes = 1
   numeros.sort(function(a, b){return b-a})
   for(let i = 1; i < numeros.length; i++){
      if(numeros[i] == numeros[0]){
         vezes++
      }
   }

   return vezes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 == 0 || cat2 == 0 ){
    return 'os gatos trombam e o rato foge'
  }
  else if(cat1 > cat2){
    return 'cat2'
 }
 else if(cat1 < cat2){
    return 'cat1'
 }
 else{
    return 'os gatos trombam e o rato foge'
 }
}

// Desafio 8
function fizzBuzz(numeros) {
  var res = []
  for(let i = 0; i < numeros.length; i++){
     if(numeros[i] % 3 == 0 && numeros[i] % 5 == 0){
        res.push('fizzBuzz')
     }
     else if(numeros[i] % 3 == 0 && numeros[i] % 5 !== 0){
        res.push('fizz')
     }
     else if(numeros[i] % 5 == 0 && numeros[i] % 3 !== 0){
        res.push('buzz')
     }
     else{
        res.push('bug!')
     }
  }
  return res
}

// Desafio 9
function encode(str) {
  var strArr = str.split("")
   var res = []
   for(let i = 0; i < strArr.length; i++){
      switch(strArr[i]){
         case 'a':
            res.push(1)
            break;
         case 'e':
            res.push(2)
            break;
         case 'i':
            res.push(3)
            break;
         case 'o':
            res.push(4)
            break;
         case 'u':
            res.push(5)
            break;
         default:
            res.push(strArr[i])
            break;

      }
      
   }
   var resFinal = res.join("")
   return resFinal
}
function decode(frase) {
  var fraseArr = frase.split("")
   var result = []
   for(let i = 0; i < fraseArr.length; i++){
      switch(fraseArr[i]){
         case '1':
            result.push('a')
            break;
         case '2':
            result.push('e')
            break;
         case '3':
            result.push('i')
            break;
         case '4':
            result.push('o')
            break;
         case '5':
            result.push('u')
            break;
         default:
            result.push(fraseArr[i])
            break;

      }
   
   }
   var dec = result.join("")
   return dec
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

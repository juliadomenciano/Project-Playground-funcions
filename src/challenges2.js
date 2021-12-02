// Desafio 10
function techList(arr, nome) {
  var res = []
    arr.sort()

    if(arr.length == 0){
        return 'Vazio!'
    }
    else{

        for(let i = 0; i < arr.length; i++){
            let obj = {}
            obj.tech  = arr[i]
            obj.name  = nome
            res.push(obj)
        }
        return res

    }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = lineB -lineC
  let aA = Math.abs(a)
  let b = lineA -lineC
  let bB = Math.abs(b)
  let c = lineB -lineA
  let cC = Math.abs(c)

  if(lineA > (lineB+lineC) || lineB > (lineA+lineC) || lineC > (lineB+lineA)){
     return false
  }
  else if(lineA < aA || lineB < bB || lineC < cC){
     return false
  }
  else{
     return true
  }
}

// Desafio 13
function hydrate(str) {
  let reg = /\d+/g
  let nums = str.match(reg)
  let fNums = []
  let bebidas = 0

  for(let i in nums){
    fNums.push(parseInt(nums[i]))
  }
  for(let i in fNums){
    bebidas += fNums[i]
  }
  if(bebidas == 1){
    return bebidas + ' copo de água'
  }
  else{
    return bebidas + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

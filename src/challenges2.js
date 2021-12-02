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
function generatePhoneNumber(arr) {
  function func(){
    for(let i in arr){
       if(arr[i] > 9 || arr[i] < 0){
          return true
       }
    }
    for(let i in arr){
       let num = arr[i]
       let rep = 0
       for(let n in arr){
          if(num == arr[n]){
             rep++
          }          
          }
          if(rep >= 3){
            return true
       }
    }
 } 
    if(arr.length !== 11){
       return 'Array com tamanho incorreto.'
    }else if(func() == true ){
       return 'não é possível gerar um número de telefone com esses valores'
    }
    else{
       return '(' + arr[0]+arr[1] + ') ' + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + '-' + arr[7] + arr[8] + arr[9] + arr[10]
    }
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

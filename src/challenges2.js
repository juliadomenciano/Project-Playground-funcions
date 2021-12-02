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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

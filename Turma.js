// Listas 

let class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 
              'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 
              'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 
              'geraldo', 'yuri', 'marcio']
let class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 
              'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 
              'zeca', 'caio', 'anthony', 'yasmin', 'claudio']
let class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 'teresinha', 'emanuel', 
              'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 'marcelo', 'benedita', 
              'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo']

/*
    Exercicio 2 Parte 1: ordenar por nomes de forma decrescente
*/

function quicksortReverse (array) 
{
  if (array.length <= 1) 
  {
    return array
  }

  const pivot = array[0]
  const left = []
  const right = []

  for (let i = 1; i < array.length; i++) 
  {
    array[i] > pivot ? left.push(array[i]) : right.push(array[i])
  }
  
  return quicksortReverse(left).concat(pivot, quicksortReverse(right))
};

quicksortReverse (class1);

/*
    Exercicio 2 Parte 2: inverter as listas usando recursividade
*/


 function recursiveRevert(classList, pilha) 
 {
    if (classList.length === 0) 
    {
      return pilha
    }
  
    const lastElement = classList.pop()
    pilha.push(lastElement)  
    return recursiveRevert(classList, pilha)
  }
  
  class1 = recursiveRevert(class1, [])

/*
    Exercicio 2 Parte 3, quantidade de faltas de um determinado aluno.
*/

function binarySearch (list, element) 
{
    let initial = 0
    let end = list.length - 1
  
    while (initial <= end) 
    {
      const center = Math.floor((initial + end) / 2)
      if (list[center] === element) 
      {
        return true
      } 
      else if (list[center] < element) 
      {
        initial = center + 1
      } 
      else 
      {
        end = center - 1
      }
    }
    return false
}

  /*
    faltas de um aluno
  */
  
  const student = "teresinha"
  
  const presentFirst = binarySearch(class1, student)
  const presentSecond = binarySearch(class2, student)
  const presentThird = binarySearch(class3, student)
  
  function absenceToNumber(assist) {
    return assist ? 0 : 1
  }
  
  console.log(student + " faltou: " +
    (absenceToNumber(presentFirst)  + 
    absenceToNumber(presentSecond)  + 
    absenceToNumber(presentThird))  + 
    " vezes"
  )
  
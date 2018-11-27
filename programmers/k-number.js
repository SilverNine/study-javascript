function solution(array, commands) {
  var answer = []

  commands.map(object => {
    let tempArray = array.slice(object[0] - 1, object[1])
    answer.push(
      tempArray.sort((a, b) => a - b).slice(object[2] - 1, object[2])[0]
    )
  })

  return answer
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

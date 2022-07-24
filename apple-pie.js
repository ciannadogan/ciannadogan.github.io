console.log("hello world")

const easterEgg = (apple) => {
  console.log("apple", apple)
  if(apple === "granny") {
    document.getElementById(apple).innerHTML = "🍏"
  } else if(apple === "figi") {
    document.getElementById(apple).innerHTML = "🏝"
  } else if(apple === "red") {
    document.getElementById(apple).innerHTML = "🍎"
  } else {
    return "oops!"
  }
}
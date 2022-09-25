// Created the javascript file with extension .js
// connect the html and js file at the bottom of the html file before the closing tag of the body tag
  // <script src="apple.js"></script>
  alert("Tell your vanilla ice cream that its best friend is on the way. See if you can find the pie 🥧 amongst the apples.")

  // when user click the names of the different apples, we want an emoji to replace the text
  // Content under Ingredients
  // Granny Smith ---> 🍏 ---> id="granny"
  // Honeycrisp ---> 🍎 ---> id="honey"
  // Golden Delicious ---> 🥧 ---> id="gold"
  // Because the id needs to be unique we will have to assign a different id name to each html tag
  // Content on the table
  // Granny Smith ---> 🍏 ---> id="gran"
  // Honeycrisp ---> 🍎 ---> id="crisp"
  // Golden Delicious ---> 🧃 ---> id="deli"
  // create a function called pieFinder
  // const pieFinder = () => {}
  
  // assign custom id's to the opening tags of the html element we want to change
  
  // document.getElementById().innerHTML
    // document - search through the webpage
    // .getElementById() - search html for the id within ()
    // .innerHTML - the html content or text between the html tags
  
  // reassign the innerhtml to an emoji
    // document.getElementById("gran").innerHTML = "🍏"
    // document.getElementById("crisp").innerHTML = "🍎"
    // document.getElementById("deli").innerHTML = "🧃"
  
  // function will need a parameter, so the function knows to expect some information. The parameter id is a place holder for the argument that we will pass in the function call.
  const pieFinder = (id) => {
    if(id === "granny") {
      document.getElementById("granny").innerHTML = "🍏"
    } else if(id === "honey") {
      document.getElementById("honey").innerHTML = "🍎"
    } else if(id === "gold") {
      document.getElementById("gold").innerHTML = "🥧"
    } else if(id === "gran") {
      document.getElementById("gran").innerHTML = "🍏"
    } else if(id === "crisp") {
      document.getElementById("crisp").innerHTML = "🍎"
    } else if(id === "deli") {
      document.getElementById("deli").innerHTML = "🧃"
    } 
  }
  
  // When you add the onclick attribute to the html file comment out these console.log()
  // function call with need an argument because a parameter was passed on the function 
    // console.log(pieFinder("granny"))
    // console.log(pieFinder("honey"))
    // console.log(pieFinder("gold"))
  
  // the onclick attribute is added to the html opening tag of the content we want to change
    // this will allow a user to click that html content and trigger the function call
    // onclick="pieFinder('granny')"
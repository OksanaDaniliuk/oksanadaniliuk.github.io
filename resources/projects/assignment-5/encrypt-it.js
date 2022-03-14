/*
 * Starter file
 */

console.log("Window Loaded!");

(function() {
  "use strict";
  window.addEventListener("load", init);

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
   function init() {
    let encryptItButton = document.getElementById("encrypt-it");
    encryptItButton.addEventListener("click", handleEncryptClick);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleResetClick)

    let radioBtn12 = document.getElementById("radio12");
    radioBtn12.addEventListener("click", fontSize12);
    let radioBtn24 = document.getElementById("radio24");
    radioBtn24.addEventListener("click", fontSize24);

    let checkBtnCaps = document.getElementById("all-caps");
    checkBtnCaps.addEventListener("click", allCaps)
  }
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    function handleEncryptClick() {
      console.log("Encrypt Button Clicked");
      let textField = document.getElementById("input-text");
      let results = shiftCipher(textField);
      document.getElementById("result").textContent = results;
    }
    function handleResetClick() {
      console.log("Reset Button Clicked");
      let textField = document.getElementById("input-text");
      textField.value = "";
    }
    function shiftCipher(text) {
      text = text.value.toLowerCase();
      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] < 'a' || text[i] > 'z') {
          result += text[i];
        } else if (text[i] == 'z') {
          result += 'a';
        } else { // letter is between 'a' and 'y'
          let letter = text.charCodeAt(i);
          let resultLetter = String.fromCharCode(letter + 1);
          result += resultLetter;
        }
      }
      return result;
    }
    function fontSize12() {
      let textField = document.getElementById("input-text");
      if(document.getElementById("radio12").checked) {
        textField.style.fontSize = "12pt";
      }
    }
    function fontSize24() {
      let textField = document.getElementById("input-text");
      if(document.getElementById("radio24").checked) {
        textField.style.fontSize = "24pt";
      }
    }
    function allCaps() {
      let text = document.getElementById("input-text");
      if(document.getElementById("all-caps").checked) {
        text.style.textTransform = "uppercase";
      }
      if(!document.getElementById("all-caps").checked) {
        text.style.textTransform = "lowercase";
      }
    }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

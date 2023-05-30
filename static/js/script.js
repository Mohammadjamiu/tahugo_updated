// Dark and Light Mode

const themeBtn = document.querySelector(".toggle-mode");

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("ta.theme")
    ? (theme = localStorage.getItem("ta.theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");

  root.setAttribute("color-scheme", `${theme}`);
}

themeBtn.addEventListener("click", () => {
  let theme = getCurrentTheme();

  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }

  localStorage.setItem("ta.theme", `${theme}`);
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});

// Main Code Starts

// Copyright Date

const date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();

// Harmburger Menu

const harmburger = document.querySelector(".menu-icon");
const lineOne = document.querySelector(".menu-line-one");
const lineTwo = document.querySelector(".menu-line-two");
const lineThree = document.querySelector(".menu-line-three");

const nav = document.querySelector("header nav");
const logoText = document.querySelector("header tspan");

harmburger.addEventListener("click", () => {
  // console.log("hello");

  lineOne.classList.toggle("line-one");

  lineThree.classList.toggle("line-three");
  lineTwo.classList.toggle("line-two");

  nav.classList.toggle("nav-active");
  logoText.classList.toggle("logo-text-none");
});

// Carousel

// document.querySelectorAll(".snippet-carousel").forEach((snippetCarousel) => {
//   const items = snippetCarousel.querySelectorAll(".snippet-box");
//   const buttonHtml = Array.from(items, () => {
//     return ` <span class="carousel-btn"></span>`;
//   });

//   snippetCarousel.insertAdjacentHTML(
//     "beforeend",
//     `
//      <div class="carousel-nav">
//      ${buttonHtml.join("")}
//       </div>
//   `
//   );
//   const buttons = snippetCarousel.querySelectorAll(".carousel-btn");

//   buttons.forEach((button, i) => {
//     button.addEventListener("click", () => {
//       // Un-select or un active all the items
//       items.forEach((item) => item.classList.remove("snippet-box-active"));
//       buttons.forEach((button) =>
//         button.classList.remove("carousel-btn-active")
//       );
//       items[i].classList.add("snippet-box-active");
//       button.classList.add("carousel-btn-active");
//     });
//   });

//   // select first item on page load
//   items[0].classList.add("snippet-box-active");
//   buttons[0].classList.add("carousel-btn-active");
// });

// Code block

function createCopyButton(highlightDiv) {
  const button = document.createElement("button");

  button.className = "copy-code-button";
  button.type = "button";
  button.innerHTML = "Copy";
  button.addEventListener("click", () =>
    copyCodeToClipboard(button, highlightDiv)
  );
  highlightDiv.insertBefore(button, highlightDiv.firstChild);

  const wrapper = document.createElement("div");
  wrapper.className = "highlight-wrapper";
  highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
  wrapper.appendChild(highlightDiv);
}

document
  .querySelectorAll(".highlight")
  .forEach((highlightDiv) => createCopyButton(highlightDiv));

// Code Async

async function copyCodeToClipboard(button, highlightDiv) {
  const codeToCopy = highlightDiv.querySelector(
    ":last-child > .chroma > code"
  ).innerText;
  try {
    var result = await navigator.permissions.query({
      name: "clipboard-write",
    });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    } else {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
    }
  } catch (_) {
    copyCodeBlockExecCommand(codeToCopy, highlightDiv);
  } finally {
    button.blur();
    button.innerText = "Copied!";
    setTimeout(function () {
      button.innerText = "Copy";
    }, 2000);
  }
}

function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
  const textArea = document.createElement("textArea");
  textArea.contentEditable = "true";
  textArea.readOnly = "false";
  textArea.className = "copyable-text-area";
  textArea.value = codeToCopy;
  highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
  const range = document.createRange();
  range.selectNodeContents(textArea);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  textArea.setSelectionRange(0, 999999);
  document.execCommand("copy");
  highlightDiv.removeChild(textArea);
}

// Google sheet + Abstractive text

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbwyQgYrdZqbNHDYRPZ8TDHyU7TQi34YN90sFKKTiURhusLFAFGMfhBZ3r_iIcJ5KFvc/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Thanks for Sharing Your Abstractions....";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) =>   {  msg.innerHTML = "Network Failed!";
//   setTimeout(function () {
//     msg.innerHTML = "";
//   }, 5000);
//   form.reset();});
// });

// JavaScript code to toggle the table of contents
// const toggleButton = document.querySelector(".toggle-button");
// const tocContainer = document.querySelector(".table-of-contents");

// toggleButton.addEventListener("click", function () {
//   tocContainer.classList.toggle("show-toc");
// });

// Get all <code> elements on the page
const codeElements = document.getElementsByTagName("code");

// Iterate over the <code> elements
for (let i = 0; i < codeElements.length; i++) {
  const codeElement = codeElements[i];

  // Check if the <code> element is not nested within 'ul li' or 'p' and the "data-lang" attribute is missing or equal to "log"
  if (
    !codeElement.closest("ul li, p") &&
    (!codeElement.hasAttribute("data-lang") ||
      codeElement.getAttribute("data-lang") === "log")
  ) {
    // Add specific style to the <code> element
    codeElement.style.backgroundColor = "#071c3d";
    codeElement.style.padding = "1.5rem 1rem";
    codeElement.style.display = "block";
    codeElement.style.margin = "0.5rem 0";
    codeElement.style.fontSize = "1.54rem";
    codeElement.style.fontFamily = "Muli, sans-serif";
    codeElement.style.fontWeight = "500";
    codeElement.style.borderRadius = "0.6rem";
    codeElement.style.color = "#fff";
    codeElement.style.maxWidth = "80rem";
//  codeElement.style.lineHeight = "2";
    // Create a pseudo-element for ::before
    const beforeElement = document.createElement("span");
    beforeElement.classList.add("before-pseudo-element");

    // Set the content and styles for the pseudo-element
    beforeElement.textContent = "Output:";
    beforeElement.style.backgroundColor = "#0056b3";
    beforeElement.style.padding = ".45rem .4rem";
    beforeElement.style.borderRadius = ".4rem";
    beforeElement.style.marginRight = "1rem";
   
    // Insert the pseudo-element as the first child of the <code> element
    codeElement.insertBefore(beforeElement, codeElement.firstChild);
  }
}

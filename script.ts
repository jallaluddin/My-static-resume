function printResume() {
    window.print();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const printButton = document.createElement("button");
    printButton.textContent = "Print Resume";
    printButton.style.cssText = `
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      margin-top: 20px;
      display: block;
      margin: 0 auto;
    `;
  
    printButton.addEventListener("click", printResume);
  
    document.body.appendChild(printButton);
  });
  
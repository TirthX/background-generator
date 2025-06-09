const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const cssCode = document.getElementById('css-code');

    function setGradient() {
      const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
      document.body.style.background = gradient;
      cssCode.textContent = `background: ${gradient};`;
    }

    function copyCSS() {
      navigator.clipboard.writeText(cssCode.textContent)
        .then(() => alert("CSS Copied!"))
        .catch(() => alert("Failed to copy"));
    }

    color1.addEventListener('input', setGradient);
    color2.addEventListener('input', setGradient);
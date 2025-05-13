(function () {
    const themeSelect = document.getElementById('themeSelect');
    const body = document.body;
  
    function changeTheme() {
      const selectedTheme = themeSelect.value;
      body.className = ''; // Reset all classes
      body.classList.add(selectedTheme); // Add selected theme class
    }
  
    themeSelect.addEventListener('change', changeTheme);
  
    // Initialize on loading
    window.onload = () => {
      changeTheme();
    };
  })();
  
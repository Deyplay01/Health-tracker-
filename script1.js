document.addEventListener("DOMContentLoaded", function () {
  const uploadImage = document.getElementById("uploadImage");
  const previewImage = document.getElementById("previewImage");

  if (uploadImage) {
    uploadImage.addEventListener("change", function () {
      const file = uploadImage.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          previewImage.src = imageUrl;
          localStorage.setItem("profilePic", imageUrl); // Save to local storage

          // Update navbar profile picture
          const navProfileImage = document.getElementById("navProfileImage");
          if (navProfileImage) {
            navProfileImage.src = imageUrl;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Load profile picture from local storage on all pages
  const savedProfilePic = localStorage.getItem("profilePic");
  if (savedProfilePic) {
    const profileImage = document.getElementById("profileImage");
    const editProfileImage = document.getElementById("previewImage");
    const navProfileImage = document.getElementById("navProfileImage");

    if (profileImage) profileImage.src = savedProfilePic;
    if (editProfileImage) editProfileImage.src = savedProfilePic;
    if (navProfileImage) navProfileImage.src = savedProfilePic;
  }
});
// Theme toggle logic
  const setTheme = (theme) => {
    document.body.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme);
  };

  // Load theme from local storage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  // Toggle theme on button click
  themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    setTheme(currentTheme);
    });
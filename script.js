const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const toggleBtn = document.getElementById('toggle-btn');
  const themeBtn = document.getElementById('theme-btn');

  // Toggle sidebar visibility
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
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
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
window.addEventListener('click', function (e) {
  const dropdown = document.getElementById('dropdown');
  const profile = document.querySelector('.profile');
  if (!profile.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
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
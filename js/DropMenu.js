const Button = document.getElementById('Button');
const DropMenu = document.getElementById('DropMenu');

if (Button && DropMenu) { 
  Button.addEventListener('click', (event) => {
    event.preventDefault();
    DropMenu.style.display = DropMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.Mobile')) {
      DropMenu.style.display = 'none';
    }
  });
} else {
  console.error('Button or DropMenu element not found in the DOM.');
}
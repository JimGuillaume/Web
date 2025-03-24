document.getElementById('dropDownMenu').addEventListener('click', function() {
  var DropItem = document.getElementById('accueilItem');
  if (DropItem.style.display === 'none' || DropItem.style.display === '') {
      DropItem.style.display = 'flex';
  } else {
      DropItem.style.display = 'none';
  }
});
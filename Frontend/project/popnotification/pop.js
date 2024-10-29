
document.getElementById('show-notification').addEventListener('click', showNotification);

function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.remove('hidden');

  setTimeout(() => {
    notification.classList.add('hidden');
  }, 5000); // 5000ms = 5 seconds
}

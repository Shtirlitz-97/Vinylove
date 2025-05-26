document.querySelectorAll('.btn-order, .btn-application').forEach(btn => {
  btn.addEventListener('click', function() {
  const target = document.querySelector(this.dataset.target);
  const modal = document.querySelector('.modal');
  
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'center'})
  
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        modal.style.visibility = 'hidden';
        modal.style.opacity = 0;
    }, 10);
  
  });
});
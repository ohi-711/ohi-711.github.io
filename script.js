function toggleMoreWork() {
    const moreWork = document.querySelectorAll('.more-work');
    const btn = document.getElementById('see-more-btn');
    const isHidden = moreWork[0].classList.contains('show');

    moreWork.forEach(work => work.classList.toggle('show'));
    btn.textContent = isHidden ? 'See more' : 'See less';
}
function toggleMoreWork() {
    const moreWork = document.querySelectorAll('.more-work');
    const btn = document.getElementById('see-more-btn');
    const isHidden = moreWork[0].classList.contains('show');

    moreWork.forEach(work => work.classList.toggle('show'));
    btn.textContent = isHidden ? 'See more' : 'See less';
}

function toggleMoreExperience() {
    const moreExperience = document.querySelectorAll('.more-experience');
    const btn = document.getElementById('see-more-exp-btn');
    const isHidden = moreExperience[0].classList.contains('show');

    moreExperience.forEach(exp => exp.classList.toggle('show'));
    btn.textContent = isHidden ? 'See more' : 'See less';
}
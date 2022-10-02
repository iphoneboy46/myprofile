const introItems = document.querySelectorAll('.section__items');	

const sectionContents = document.querySelectorAll('.section__contents');

const introItemsActive = document.querySelector('.section__items.active');
const line = document.querySelector('.line');

line.style.left = introItemsActive.offsetLeft + 'px';
line.style.width = introItemsActive.offsetWidth + 'px';

introItems.forEach(function (item, index) {
    const sectionContent = sectionContents[index]
    item.onclick = function () {
        document.querySelector('.section__items.active').classList.remove('active');
        item.classList.add('active');
        document.querySelector('.section__contents.active').classList.remove('active');
        sectionContent.classList.add('active');
        line.style.left = item.offsetLeft + 'px';
        line.style.width = item.offsetWidth + 'px';
    }
})

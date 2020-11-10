'use strict';

//scroll Event -fade In
document.addEventListener('scroll', () => {
  const wH = window.scrollY + window.innerHeight * 0.8;
  // test
  const test = document.querySelector('.test');
  const testAsoluteTopSize = getAbsoluteTop(test);
  changeStyle(test, wH, testAsoluteTopSize, 'bgcolor');
  // section
  const fadeSection = document.querySelector('.fade-in2');
  const sectionAsoluteTopSize = getAbsoluteTop(fadeSection);
  changeStyle(fadeSection, wH, sectionAsoluteTopSize, 'bgcolor');
  //fadeIn box
  const fadeItem = document.querySelector('.fade-in');
  const ItemAsoluteTopSize = getAbsoluteTop(fadeItem);
  changeStyle(fadeItem, wH, ItemAsoluteTopSize, 'on');
});

function getAbsoluteTop(item) {
  const ItemY = item.getBoundingClientRect().y;
  const scrolledTopLength = window.pageYOffset;
  return scrolledTopLength + ItemY;
}

function changeStyle(target, wH, size, className) {
  if (wH > size) {
    target.classList.add(className);
  } else {
    target.classList.remove(className);
  }
}

'use strict';

const container = document.querySelector(".wrap");
const containerHeight = container.getBoundingClientRect().height;
const sectionIds = ['#section1','#section2','#section3','#section4','#section5'];
const sections = sectionIds.map(id => document.querySelector(id));

window.addEventListener('load', () => {
  getnavItemWidth(containerHeight, sections);
})

function getnavItemWidth(containerHeight, sections) {
  sections.forEach(section => {
    const sectionHeight = section.getBoundingClientRect().height;
    const navWidth = (sectionHeight / containerHeight) * 100;
    const sectionId = section.id;
    document.querySelector(`li[data-link="#${sectionId}"]`).style.width = navWidth + '%';
  });
}

window.addEventListener('scroll', () => {
  fillProgressBar(containerHeight);
})

function fillProgressBar(containerHeight) {
  const winScroll = window.scrollY;
  var scrolled = (winScroll / containerHeight) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const navbarMenu = document.querySelector('.progress__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
}
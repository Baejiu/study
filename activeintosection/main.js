'use strict';

document.addEventListener('scroll', () => {
    const wH = window.scrollY + window.innerHeight*0.2;
    
    const section1 = document.querySelector("#section1");
    const section1AsoluteTopSize = getAbsoluteTop(section1);
    const section1ScrollHeight = getScrollHeight(section1);
    changeStyle("section1", wH, section1ScrollHeight, section1AsoluteTopSize, 'active');
    
    const section2 = document.querySelector("#section2");
    const section2AsoluteTopSize = getAbsoluteTop(section2);
    const section2ScrollHeight = getScrollHeight(section2);
    changeStyle("section2", wH, section2ScrollHeight, section2AsoluteTopSize, 'active');
    
    const section3 = document.querySelector("#section3");
    const section3AsoluteTopSize = getAbsoluteTop(section3);
    const section3ScrollHeight = getScrollHeight(section3);
    changeStyle("section3", wH, section3ScrollHeight, section3AsoluteTopSize, 'active');
  });
  
  function getAbsoluteTop(item) {
    const ItemY = item.getBoundingClientRect().y;
    const scrolledTopLength = window.pageYOffset;
    return scrolledTopLength + ItemY;
  }
  function getScrollHeight(item) {
    const ItemScrollHeight = item.scrollHeight;
    return ItemScrollHeight;
  }
  
  function changeStyle(target, wH, sH, size, className) {
      const navItem = document.querySelector(`.nav__list li[data-link="${target}"]`);
      
    if (wH > size) {
        if (wH > sH + size) {
            navItem.classList.remove(className);
        } else {
            
            navItem.classList.add(className);
        }
        console.log(`${target}wh : ${wH}, size: ${size}, sh: ${sH}`)
    } else {
        navItem.classList.remove(className);
    }
  }
  
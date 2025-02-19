/* ======================
   #EXPAND LINK TO PARENT
   ====================== */

function expandLink() {
  const linkExpands = document.querySelectorAll('.js-link-expand');
  let down;
  let up;

  // Set cursor style for all expandable links
  linkExpands.forEach(link => {
    link.style.cursor = 'pointer';
  });

  linkExpands.forEach(link => {
    link.addEventListener('mousedown', (e) => {
      down = +new Date();
    });

    link.addEventListener('mouseup', (e) => {
      up = +new Date();
      if (up - down < 200) {
        const link = e.target.closest('.js-link-expand-holder').querySelector('.js-link-expand__target');
        link.click();
      }
    });
  });
}

expandLink();

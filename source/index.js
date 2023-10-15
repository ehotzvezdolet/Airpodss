document.addEventListener('DOMContentLoaded', function () {
 const bannerList = document.querySelectorAll('.banner__wrapper');
 const optionsListItems = document.querySelectorAll('.options__list > li');
 const optionsList = document.querySelector('.options__list'); 

 // add artibute for banner
 for (let i = 0; i < bannerList.length; i++) {
  const bannerListAttr = bannerList[i].setAttribute('data-content', i);
 }

 // add atribute for option button
 for (let i = 0; i < optionsListItems.length; i++) {
  const optionsListAttr = optionsListItems[i].setAttribute('data-content', i);
 }

 // choose options button
 optionsListItems.forEach(option => {
  option.addEventListener('click', e => {
   if (!e.currentTarget.classList.contains('choosed')) {
    optionsListItems.forEach(i => {
     if (i.classList.contains('choosed')) i.classList.remove('choosed');
    })
    e.currentTarget.classList.add('choosed');
    // hide effect optionsList
    if (optionsList.classList.contains('effect')) optionsList.classList.remove('effect');
    function effect() {
     optionsList.classList.add('effect');
    };
    setTimeout(effect, 10);
    // change banner
    const optionAttr = e.currentTarget.getAttribute('data-content');
    bannerList.forEach(banner => {
     const bannerAttr = banner.getAttribute('data-content');
     if (optionAttr == bannerAttr) banner.classList.add('choosed');
     else banner.classList.remove('choosed');
    });
   }
  });
 })



});
document.addEventListener('DOMContentLoaded', function () {
  //burger menu
  if (document.querySelectorAll('.header__nav').length) {
    const nav = document.querySelector('.header__nav'),
      btn = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__nav_mobile'),
      body = document.body;

    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('hidden');
    });
  }


  const bannerList = document.querySelectorAll('.banner__wrapper');
  const optionsListItems = document.querySelectorAll('.options__list > li');
  const optionsList = document.querySelector('.options__list');
  const descriptionImageList = document.querySelectorAll('.description__image > img');
  const advantagesImageList = document.querySelectorAll('.advantages__image > img');

  // add artibute for banner
  for (let i = 0; i < bannerList.length; i++) {
    const bannerListAttr = bannerList[i].setAttribute('data-content', i);
  }

  // add atribute for option button
  for (let i = 0; i < optionsListItems.length; i++) {
    const optionsListAttr = optionsListItems[i].setAttribute('data-content', i);
  }

  // add atribute for description image
  for (let i = 0; i < descriptionImageList.length; i++) {
    const descriptionImageListAttr = descriptionImageList[i].setAttribute('data-content', i);
  }

  // add atribute for advantages image
  for (let i = 0; i < advantagesImageList.length; i++) {
    const advantagesImageListAttr = advantagesImageList[i].setAttribute('data-content', i);
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
        // change description image
        descriptionImageList.forEach(image => {
          const imageAttr = image.getAttribute('data-content');
          if (optionAttr == imageAttr) image.classList.add('choosed');
          else image.classList.remove('choosed');
        });
        // change advantages image
        advantagesImageList.forEach(image => {
          const imageAttr = image.getAttribute('data-content');
          if (optionAttr == imageAttr) image.classList.add('choosed');
          else image.classList.remove('choosed');
        });
      }
    });
  })



});
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger'),
          mainMenu = document.querySelector('.header_main');

    burger.addEventListener('click', function() {
        console.log(1)
        burger.classList.toggle('active')
        mainMenu.classList.toggle('active')
    })


    const jsTriggers = document.querySelectorAll('.filter_item'),
        jsContents = document.querySelectorAll('.filter_item-content');

    jsTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const id = this.getAttribute('data-tab'),
                content = document.querySelector('.filter_item-content[data-tab="' + id + '"]'),
                activeTrigger = document.querySelector('.filter_item.active'),
                activeContent = document.querySelector('.filter_item-content.active');

            activeTrigger.classList.remove('active'); // 1
            trigger.classList.add('active'); // 2

            activeContent.classList.remove('active'); // 3
            content.classList.add('active'); // 4
        });
    });

  });
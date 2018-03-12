      $(document).ready(function () {
            $('#sidebarCollapse').mouseenter(function () {
                $('#sidebar').toggleClass('active');
            });
        });

            $(document).ready(function () {
                $('#sidebarCollapse').click(function () {
                    $('#mobilesidebar').toggleClass('active');
                });
            });

        $(document).ready(function() {
          function pulsate() {
            $(".pulsate").
            animate({opacity: 0.2}, 1000, 'linear').
            animate({opacity: 1}, 1000, 'linear', pulsate);
          }
          pulsate();
        });

          $(document).ready(function(){
          'use strict';
          class Menu {
            constructor(settings) {
              this.nodeMenu = settings.nodeMenu;
              settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
            }
            toggle() {
              return this.nodeMenu.classList.toggle('js-menu_activated');
            }
          }
          let nodeMenu = document.querySelector('body');
          new Menu({
            nodeMenu: nodeMenu,
            nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
          });
      });

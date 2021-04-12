window.onload = () => {
  clickEvent.init()
  tabEvent.init()
  owlCarousel.init()
  chartBarJs.init()
  tabBasicEvent.init()
  modalCustom.init()
  modalImage.init()
  switchBtn.init()
  ckEditor4.init()
}

const clickEvent = {
  init: function () {
    this.advancedSearchDropdown()
    this.menuBar()
    this.menuDarkBar()
    this.bangTinhTab()
    this.advancedSearchDropdownDark()
    this.notificationDropdownDark()
  },
  advancedSearchDropdown: function () {
    const main = document.querySelector('.search-form')
    if (main) {
      const btn = main.querySelector('.seach-advanced')
      btn.addEventListener('click', () => {
        main.classList.toggle('active')
      })
    }
  },
  advancedSearchDropdownDark: function() {
    const main = document.querySelector('.header-dark .header-search-dropdown')
    const notificationMain = document.querySelector('.header-dark .header-notification-dropdown')
    const btnOpen = document.querySelector('.header-dark .form-search .search-icon')
    if (main && btnOpen) {
      const btnClose = main.querySelector('.header-search-close')
      btnOpen.addEventListener('click', () => {
        main.classList.add('active')
        notificationMain.classList.remove('active')
      })
      btnClose.addEventListener('click', () => {
        main.classList.remove('active')
      })
    }
  },
  notificationDropdownDark: function() {
    const main = document.querySelector('.header-dark .header-notification-dropdown')
    const searchMain = document.querySelector('.header-dark .header-search-dropdown')
    const btnOpen = document.querySelector('.header-dark .header-notification ')
    if (main && btnOpen) {
      const btnClose = main.querySelector('.header-notification-close')
      btnOpen.addEventListener('click', () => {
        main.classList.add('active')
        searchMain.classList.remove('active')
      })
      btnClose.addEventListener('click', () => {
        main.classList.remove('active')
      })
    }
  },
  menuBar: function () {
    const btnMenu = document.querySelector('.header-btn-mobile')
    const mainMenu = document.querySelector('.header-menu-wrapper')
    if (btnMenu && mainMenu) {
      btnMenu.addEventListener('click', () => {
        mainMenu.classList.toggle('active')
      })
    }
  },
  menuDarkBar: function () {
    const body = document.querySelector('body.layout-dark')
    if (body) {
      const btnMenu = body.querySelector('.header-dark .header-btn-bar')
      const navBack = body.querySelector('.header-nav-dark .nav-back')
      btnMenu.addEventListener('click', () => {
        body.classList.toggle('active')
      })
      navBack.addEventListener('click', (e) => {
        e.preventDefault()
        body.classList.remove('active')
      })
    }
  },
  bangTinhTab: function() {
    const btn = document.querySelector('.bang-tinh-btn-mobile')
    if (btn) {
      const main = document.querySelector('.deposit-detail-form')
      const btnContent = btn.querySelector('.button-title')
      btn.addEventListener('click', () => {
        main.classList.toggle('active')
        btn.classList.toggle('active')
        if (!btn.className.includes('active')) btnContent.innerHTML = 'Bảng tính trả góp'
        else btnContent.innerHTML = 'Ẩn bảng tính trả góp'
      })
    }
  }
}

const owlCarousel = {
  init: function () {
    this.setupHomeBannerCarousel()
    this.setupProjectBannerCarousel()
    this.setupPropertiesBannerCarousel()
    this.setupContactBannerCarousel()
  },
  setupHomeBannerCarousel: function () {
    const carousel = $("#section-home-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      nav: false,
      center: true,
      margin: 15,
    });
  },
  setupContactBannerCarousel: function() {
    const carousel = $("#section-contact-banner-carousel").owlCarousel({
      responsive: {
        0: {
          items: 3
        },
        768: {
          items: 5
        },
        1200: {
          items: 9
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      center: true,
      margin: 0,
    });
  },
  setupProjectBannerCarousel: function() {
    const carousel = $("#section-project-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      center: true,
      margin: 0,
    });
  },
  setupPropertiesBannerCarousel: function() {
    const carouselView = $("#section-properties-carousel-view").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
      },
      loop: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      touchDrag: false,
      mouseDrag: false,
      center: true,
      margin: 0,
    });


    const carouselControl = $("#section-properties-carousel-control").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 3
        },
        768: {
          items: 5
        },
        991: {
          items: 7
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 300,
      dots: false,
      nav: true,
      navText: ["<img src='./assets/icons/icon-arrow-circle-left-white.svg'>","<img src='./assets/icons/icon-arrow-circle-right-white.svg'>"],
      center: true,
      margin: 15,
    });

    const configCurrentIndex = (value) => {
      carouselControl.on('changed.owl.carousel', function(e) {
        const currentIndex = e.item.index + value
        carouselView.trigger('to.owl.carousel', [currentIndex, 200]);
      })
    }
    if (window.innerWidth > 990) configCurrentIndex(2)
    else configCurrentIndex(4)
  },
}

const tabEvent = {
  init: function () {
    this.tabClickEvent()
    this.tabDropdownClick()
  },
  tabClickEvent: function () {
    const tabWrapper = document.querySelectorAll('.tab-item-wrapper.not-child')
    if (tabWrapper.length !== 0) {
      tabWrapper.forEach((item) => item.addEventListener('click', () => {
        tabWrapper.forEach(i => i.classList.remove('active'))
        item.classList.add('active')
      }))
    }
  },
  tabDropdownClick: function () {
    const tabWrapper = document.querySelectorAll('.tab-item-wrapper.have-child .tab-item')
    if (tabWrapper.length !== 0) {
      tabWrapper.forEach((item) => item.addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('active')
      }))
    }
  }
}

const chartBarJs = {
  init: function () {
    this.configChart()
  },
  configChart: function () {
    var ctx = document.querySelector('#myChart')
    if (ctx) {
      ctx.getContext('2d')
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ''],
          datasets: [{
            data: ['', 20, 56, 50, 104, 87, 90, 20, 56, 50, 104, 87, 90, ''],
            backgroundColor: '#D8D8D8',
            borderColor: '#979797',
            borderWidth: 1
          }]
        },
        options: {
          events: [],
          showDatapoints: true,
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0,
            },
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              fontColor: "blue",
              fontSize: 24,
              scaleLabel: {
                display: true,
                labelString: 'Mã căn'
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 20,
                display: false,
                maxTicksLimit: 14,
              },
              scaleLabel: {
                display: true,
                rotate: 1,
                labelString: 'Đã bán (Căn)',
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            }]
          },
          animation: {
            duration: 1,
            onComplete: function () {
              var chartInstance = this.chart,
              ctx = chartInstance.ctx;
              ctx.textAlign = 'center';
              ctx.fillStyle = "#00162E";
              ctx.textBaseline = 'bottom';
              // Loop through each data in the datasets
              this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                  var data = dataset.data[index];
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
              });
            }
          },
        }
      });
    }
  }
}

const tabBasicEvent = {
	init: function () {
		this.setupTabEvent()
	},
	setupTabEvent: function () {
		const main = document.querySelectorAll('.tab-wrapper')
		if (main.length !== 0) {
			main.forEach((mainTarget) => {
				const tabClick = mainTarget.querySelectorAll('.tab-group .tab-item')
				const tabMain = mainTarget.querySelectorAll('.tab-main-group .tab-item')

				tabClick.forEach((item, index) => item.addEventListener('click', () => {
					tabClick.forEach(i => i.classList.remove('active'))
					tabMain.forEach(i => i.classList.remove('active'))

					tabClick[index].classList.add('active')
					tabMain[index].classList.add('active')
				}))
			})
		}
	}
}

const modalCustom = {
  init: function(){
    this.setupModal('#open-deposit-modal-detail', '#deposit-modal-detail')
  },
  setupModal(idOpen, idWrapper) {
    const openBtn = document.querySelectorAll(idOpen)
    const wrapperModal = document.querySelector(idWrapper)

    if (openBtn.length !== 0 && wrapperModal) {
      const closeBtn = wrapperModal.querySelector('.modal-close')
      const overlayModal = wrapperModal.querySelector('.modal-overlay')
      const body = document.querySelector('body')

      openBtn.forEach((item) => item.addEventListener('click', () => {
        wrapperModal.classList.add('active')
        body.style.overflow = 'hidden'
      }))

      closeBtn.addEventListener('click', () => {
        wrapperModal.classList.remove('active')
        body.style.overflow = 'auto'
      })

      overlayModal.addEventListener('click', () => {
        wrapperModal.classList.remove('active')
        body.style.overflow = 'auto'
      })
    }
  }
}

const modalImage = {
  init: function() {
    this.configGalleryImage()
  },
  configGalleryImage() {
    $('.js-gallery-item').magnificPopup({
      type: 'image',
      showCloseBtn: false,
      removalDelay: 300,
      gallery:{
        enabled: true,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><img class="mfp-custom-arrow %dir%" src="./assets/icons/icon-arrow-circle-left-white.svg"></button>',
        tCounter: '',
      }
    });
    // magnificPopup.goTo(4)
  }
}

const switchBtn = {
  init: function() {
    this.config()
  },
  config: function() {
    const btn = document.querySelectorAll('.switch-btn')
    btn.forEach((item) => item.addEventListener('click', () => {
      item.classList.toggle('active')
    }))
  }
}

const ckEditor4 = {
  init: function () {
    this.config()
  },
  config: function() {
    CKEDITOR.replace('ckEditor-input')
  }
}
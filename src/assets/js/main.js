window.onload = () => {
  clickEvent.init()
  tabEvent.init()
  owlCarousel.init()
}

const clickEvent = {
  init: function() {
    this.advancedSearchDropdown()
    this.menuBar()
    this.menuDarkBar()
  },
  advancedSearchDropdown: function() {
    const main = document.querySelector('.search-form')
    if (main) {
      const btn = main.querySelector('.seach-advanced')
      btn.addEventListener('click', () => {
        main.classList.toggle('active')
      })
    }
  },
  menuBar: function() {
    const btnMenu = document.querySelector('.header-btn-mobile')
    const mainMenu = document.querySelector('.header-menu-wrapper')
    if (btnMenu && mainMenu) {
      btnMenu.addEventListener('click', () => {
        mainMenu.classList.toggle('active')
      })
    }
  },
  menuDarkBar: function() {
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
  }
}

const owlCarousel = {
	init: function () {
		this.setupHomeBannerCarousel()
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
}

const tabEvent = {
  init: function() {
    this.tabClickEvent()
    this.tabDropdownClick()
  },
  tabClickEvent: function() {
    const tabWrapper = document.querySelectorAll('.tab-item-wrapper.not-child')
    if (tabWrapper.length !== 0) {
      tabWrapper.forEach((item) => item.addEventListener('click', () => {
        tabWrapper.forEach(i => i.classList.remove('active'))
        item.classList.add('active')
      }))
    }
  },
  tabDropdownClick: function() {
    const tabWrapper = document.querySelectorAll('.tab-item-wrapper.have-child .tab-item')
    if (tabWrapper.length !== 0) {
      tabWrapper.forEach((item) => item.addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('active')
      }))
    }
  }
}
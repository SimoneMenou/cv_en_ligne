function sliderFunc() {
    document.querySelectorAll('.slider__dot').forEach(element => {
      element.addEventListener('click', (e) => {
        let num = parseInt(element.dataset.dot - 1)
        document.querySelector('.slider__dot.active').classList.remove('active')
        document.querySelector('.slider__item.active').classList.remove('active')
        element.classList.add('active')
        document.querySelector('.slider__item[data-slide="' + (num + 1) + '"]').classList.add('active')
        let margin = 36
        let offset
        if (num == 0) {
          offset = 0
        } else {
          offset = (document.querySelector('.slider__item').clientWidth + margin) * num
        }
        document.querySelector('.slider__list').style.transform = 'translateX(-' + offset + 'px)'
      })
    })
  }
  
  document.querySelector('.slider__list').style.setProperty("--heightItem", (document.documentElement.clientHeight/2)+'px')
  
  window.addEventListener('load', () => {
    sliderFunc()
  })
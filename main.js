import 'normalize.css'
import '/style.scss'

const productSlider = () => {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css'),
    import('swiper/css/navigation')
  ]).then(([{ Navigation, Thumbs }, Swiper]) => {
    try {
      const swiperThumbnails = new Swiper.default(
        '.product__slider-thumbnails',
        {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true
        }
      )

      const swiperGallery = new Swiper.default('.product__slider-main', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.product__arrow-next',
          prevEl: '.product__arrow-prev'
        },
        modules: [Navigation, Thumbs],
        thumbs: {
          swiper: swiperThumbnails
        }
      })
    } catch (error) {
      console.log(new Error(error))
    }
  })
}
productSlider()

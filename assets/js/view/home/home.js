import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home"
    }

  },

  methods: {

  },

  async mounted() {

 
    
    AOS.init({
      duration: 1000,
    });

     var swiper = new Swiper(".init-swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
   
  
  },
  template: await get_template('./assets/js/view/home/home')
}
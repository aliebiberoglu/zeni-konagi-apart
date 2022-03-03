<template lang="pug">
header.header
  .container
    .row
      .col-9.col-sm-3
        .header-logo
          h1 Zeni Konağı Apart
      .col-3.col-sm-9
        .header-right
          nav
            a.mobile-menu.d-block.d-md-none(@click="showMobileMenu()")
              BIconList
            ul.d-none.d-md-block(:class="isMobileMenu ? 'active' : ''")
              li
                a(@click="scroolToElement('home-slider')") Anasayfa
              li
                a(@click="scroolToElement('about-us')") Hakkımızda
              li
                a(@click="scroolToElement('rooms')") Odalarımız
              li
                a(@click="scroolToElement('galery')") Galeri
              li
                a(@click="scroolToElement('contact')") İletişim
              li.start-free-trial
                a(href="tel:+90 542 798 5353") Tel: +90 542 798 5353
</template>

<script>
import { BIconList } from 'bootstrap-vue'

export default {
  name: 'Header',

  components: {
    BIconList
  },

  data() {
    return {
      isMobileMenu: false,
    };
  },

  methods: {
    showMobileMenu() {
      this.isMobileMenu = !this.isMobileMenu;
    },

    scroolToElement(e) {
      this.isMobileMenu = false;
      document.getElementById(e).scrollIntoView({ behavior: 'smooth', block: 'start'});
    },
  }
}
</script>

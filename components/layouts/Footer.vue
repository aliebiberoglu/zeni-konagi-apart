<template lang="pug">
footer#footer
  .container.clearfix
    nav.main-menu
      ul
        li
          a(@click="scroolToElement('about-us')") Hakkımızda
        li
          a(@click="scroolToElement('rooms')") Odalarımız
        li
          a(@click="scroolToElement('galery')") Galeri
        li
          a(@click="scroolToElement('contact')") İletişim
    .footer-text Zeni Konağı @ 2022
</template>

<script>

export default {
  name: 'Footer',

  methods: {
    scroolToElement(e) {
      this.isMobileMenu = false;
      const offsetTop = document.getElementById(e).offsetTop;
      window.scrollTo({
        top: offsetTop - 50,
        behavior: 'smooth',
      });
    },
  }
}
</script>

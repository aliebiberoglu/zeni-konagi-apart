<template lang="pug">
header.header
  .container
    .row
      .col.col-lg-3
        .header-logo Zeni Konağı Apart
      .col.col-lg-9
        .header-right
          nav
            ul
              li
                a(@click="scroolToElement('home-slider')") Anasayfa
              li
                a(@click="scroolToElement('about-us')") Hakkımızda
              li
                a(@click="scroolToElement('rooms')") Odalarımız
              li
                a(@click="scroolToElement('galery')") Galeri
              li
                a(@click="scroolToElement('blog')") Blog
              li
                a(@click="scroolToElement('contact')") İletişim
              li.start-free-trial
                a(href="tel:+90 542 798 5353") Tel: +90 542 798 5353
</template>

<script>
export default {
  name: 'Header',

  methods: {
    scroolToElement(e) {
      document.getElementById(e).scrollIntoView({ behavior: 'smooth', block: 'start'});
    },
  }
}
</script>

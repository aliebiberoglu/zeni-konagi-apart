<template lang="pug">
section.content
  section#home-slider
    .slider-image
      img(src="/slider/view1.png")
    .slider-text
      h1 Zeni Konağı 
        br
        | Apart
      h3 THE ULTIMATE SKI CHALET IN THE CHAMONIX VALLEY
      p Le Chalet Mont Blanc, the Chamonix chic and modern chalet retreat is five floors of unrivalled excellence facing Mont Blanc. Within the 1000m2 (3,330 ft 2) of living space are 12 executive-style bedrooms, 16 bathrooms, an indoor swimming pool, sauna and jacuzzi.
      div
        .btn.btn-primary Rezervasyon Yap
  section#about-us
    .container
      .row
        .col.col-lg-12
          h2.heading-title Hakkımızda
          hr.hr-short
        .col.col-lg-6
          h3.heading-sub-title Hoşgeldiniz
          p Yepyeni bir apart da, doğanın sessizliği, yeşilin huzuru ve deniz manzarasıyla unutulmaz bir tatil deneyimine hoşgeldiniz.  Otelimiz Adrasan merkezde olup mavi bayraklı plajlara yürüme mesafesindedir. Siz misafirlerimize kaliteli, konforlu ve huzurlu bir konaklama sunmak için odalarımız tam donanımlı olarak modern tarzda hazırlanmıştır.  
        .col.col-lg-6.pl-0
          video(width="100%" controls)
            source(src="/videos/movie.mp4" type="video/mp4")
  section#rooms
    .row.mx-0
      .col.col-lg-12
        h2.heading-title Odalarımız
        hr.hr-short
    .row.mx-0
      .col.col-lg-6.px-0
        img(src="/photos/room-1.png")
      .col.col-lg-6.px-0
        .rooms-content
          h3.heading-sub-title Oda - 1
          p " Le Chalet has set a new benchmark for understated luxury within a majestic alpine setting. I am delighted that this intimate retreat has been acknowledged by both the travel trade and the public by being voted ‘World’s Best New Ski Chalet 2019. "
          .text * The chic and modern retreat is five floors of unrivalled excellence. Within the 1000m2 (3,330 ft 2) of living space are 12 executive-style bedrooms, 16 bathrooms, an indoor swimming pool, sauna and jacuzzi.
            br
            | * The chic and modern retreat is five floors 
            br
            | * The chic and modern retreat is five floors of unrivalled excellence. Within the 1000m2 (3,330 ft 2) of living space are 12 executive-style bedrooms, 16 bathrooms, an indoor swimming pool, sauna and jacuzzi.
    .row.mx-0
      .col.col-lg-6.px-0
        .rooms-content
          h3.heading-sub-title Oda - 2
          p " Le Chalet has set a new benchmark for understated luxury within a majestic alpine setting. I am delighted that this intimate retreat has been acknowledged by both the travel trade and the public by being voted ‘World’s Best New Ski Chalet 2019. "
          .text * The chic and modern retreat is five floors of unrivalled excellence. Within the 1000m2 (3,330 ft 2) of living space are 12 executive-style bedrooms, 16 bathrooms, an indoor swimming pool, sauna and jacuzzi.
            br
            | * The chic and modern retreat is five floors 
            br
            | * The chic and modern retreat is five floors of unrivalled excellence. Within the 1000m2 (3,330 ft 2) of living space are 12 executive-style bedrooms, 16 bathrooms, an indoor swimming pool, sauna and jacuzzi.
      .col.col-lg-6.px-0
        img(src="/photos/room-2.png")
  section#galery
    .row.mx-0
      .col.col-lg-12
        h2.heading-title Galeri
        hr.hr-short
      .col.col-lg-3.px-0(v-for="image in imageList")
        .galery-list
          .image
            img(:src="image.url" :alt="`Zeni Konağı Apart - ${image.tag}`")
          .text
            p Zeni Konağı Apart
            span {{ image.tag }}
  section#contact
    .row.mx-0
      .col.col-lg-12
        h2.heading-title İletişim
        hr.hr-short
      .col.col-lg-12.px-0
        iframe(
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.0615794272867!2d40.99569931552183!3d41.15500761833128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4066463d96de4c61%3A0xe5f85eff3a50bcfe!2zWmVuaSBLb25hxJ_EsSBBcGFydA!5e0!3m2!1sen!2str!4v1646154438111!5m2!1sen!2str"
          width="100%"
          height="460"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        )
</template>

<script>
export default {
  layout: 'detault',

  data() {
    return {
      imageList: [
        {
          tag: 'Bahçe',
          url: '/photos/galery-1.png',
        }, {
          tag: 'Oturma Salonu',
          url: '/photos/galery-2.png',
        }, {
          tag: 'Oturma Salonu',
          url: '/photos/galery-3.png',
        }, {
          tag: 'Oturma Salonu',
          url: '/photos/galery-4.png',
        }, {
          tag: 'Yatak Odası - 1',
          url: '/photos/galery-5.png',
        }, {
          tag: 'Yatak Odası - 1',
          url: '/photos/galery-6.png',
        }, {
          tag: 'Yatak Odası - 2',
          url: '/photos/galery-7.png',
        }, {
          tag: 'Yatak Odası - 2',
          url: '/photos/galery-8.png',
        }, {
          tag: 'Mutfak',
          url: '/photos/galery-9.png',
        }, {
          tag: 'Merdiven',
          url: '/photos/galery-10.png',
        }, {
          tag: 'Lavoba',
          url: '/photos/galery-11.png',
        }, {
          tag: 'Banyo',
          url: '/photos/galery-12.png',
        },
      ]
    };
  },
}
</script>

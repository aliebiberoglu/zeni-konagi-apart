<template lang="pug">
section.content
  section#home-slider
    .slider-image
      img(src="/slider/view1.png")
    .slider-text
      h2
        span Zeni Konağı 
      h3
        span Jeep safari, Çadır kamp Rehberlik, Konaklama
      p Fırtına deresi kenarında organik bahçesi ve kümesi bulunan mevsimine göre meyve ağaçları, bahçesiyle birlikte kullanabilecek şöminesi ve yine bahçe içerisinde huzurla oturulabilecek dere manzaralı verandası bulunmaktadır.
      div
        a.btn.btn-primary(href="tel:+90 542 798 5353") Rezervasyon Yap
  section#about-us
    .container
      .row
        .col-12.col-sm-12
          h3.heading-title Hakkımızda
          hr.hr-short
        .col-12.col-sm-6
          h4.heading-sub-title Hoşgeldiniz
          p Fırtına deresi kenarında organik bahçesi ve kümesi bulunan mevsimine göre meyve ağaçları, bahçesiyle birlikte kullanabilecek şöminesi ve yine bahçe içerisinde huzurla oturulabilecek dere manzaralı verandası bulunmaktadır.
            br
            | Denize 4 km uzaklıkta dünyaca ünlü fırtına vadisi üzerinde, Ünlü turistik bölgesi Ayder Yaylasına 38 km uzalıkta, Trabzon Uzun göl 72 km ve Pokut Yaylası, Hüser Yaylası, Elevit Yaylası vb. yaylalara günlük gidilip gelinebilecek uzaklıkta.
        .col-12.col-sm-6
          video(width="100%" controls)
            source(src="/videos/movie.mp4" type="video/mp4")
  section#rooms
    .container-fluid
      .row
        .col-12
          h3.heading-title Odalarımız
          hr.hr-short
      .row
        .col-12.col-sm-6.px-sm-0
          img(src="/photos/room-1.png" alt="Zeni Konağı Kaveşkala oda")
        .col-12.col-sm-6.px-sm-0
          .rooms-content.px-sm-5
            h4.heading-sub-title Kaveşkala Oda
            p Dereyi doğrudan teras manzarası ile görebilmeyi sağlayan "Kaveşkala Oda", evin üst katında bulunmaktadır.Evin en büyük odası olmasının yanı sıra, balkona çıkabileceğiniz ayrı bir kapısı bulunmaktadır.Yatağınıza uzandığınız zaman bile dereyi görebileceğiniz bu odada, rahatlığın tadını çıkarırken aynı zamanda Kaçkar Dağları ve Fırtına Deresi manzarasını seyrederek en unutulmaz deneyimleri yaşayın.
            .text 
              | * 2 Tek Kişilik Yatak
              br
              | * 2 Kişilik Oturma Alanı
              br
              | * Sabah Kahvaltısı
              br
              | * Fırtına Deresi Manzarası
              br
              | * Dağ Manzarası
      .row
        .col-12.col-sm-6.px-sm-0
          .rooms-content.px-sm-5
            h4.heading-sub-title Toba Oda
            p Kaveşkala Oda ile hemen yanında "Toba Oda" evin üst katında teras manzarası ve doğruran balkona çıkabileceğiniz bir kapısı bulunmaktadır.Dere sesini en iyi şekilde duyabileceğiniz oda olmasının yanında odanın yapısından dolayı kendinizi otantik ve doğallığın tam ortasında hissedebilirsiniz.
            .text
              | * 1 Çift Kişilik Yatak
              br
              | * 1 Tek Kişilik Yatak
              br
              | * Sabah Kahvaltısı
              br
              | * Fırtına Deresi Manzarası
              br
              | * Dağ Manzarası
              br
              | * Bahçe Manzarası
        .col-12.col-sm-6.px-sm-0
          img(src="/photos/room-2.png" alt="Zeni Konağı Toba oda")
  section#galery
    .container-fluid
      .row
        .col-12
          h3.heading-title Galeri
          hr.hr-short
        .col-6.col-sm-3.px-0(v-for="image in imageList")
          .galery-list
            .image
              img(:src="image.url" :alt="`Zeni Konağı Apart - ${image.tag}`")
            .text
              p Zeni Konağı Apart
              span {{ image.tag }}
  section#contact
    .container-fluid
      .row
        .col-12
          h3.heading-title İletişim
          hr.hr-short
        .col-12.text-center
          address
            div Çamlıhemşin Yolu Üzeri 4 km. No: 27/1
            div
              strong Ardeşen/Rize
            div
              a(href="tel:+90 542 798 5353") Tel: +90 542 798 5353
        .col-12.px-0
          iframe(
            width="100%"
            height="460"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.954121792761!2d40.993594215521874!3d41.157352418186704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4066463d96de4c61%3A0xe5f85eff3a50bcfe!2zWmVuaSBLb25hxJ_EsSBBcGFydA!5e0!3m2!1sen!2str!4v1650565602472!5m2!1sen!2str"
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

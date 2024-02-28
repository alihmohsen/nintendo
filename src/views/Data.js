const data = {
     LightBoxSliders : [
        {
          src: require("../assets/images/banner-carousel/1.jpg"),
          title: "Puppy in sunglasses",
          description: "Mollie Sivaram",
        },
        {
          src: require("../assets/images/banner-carousel/2.jpg"),
          title: "Miami Beach",
          description:
            "Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States",
        },
        {
          src: require("../assets/images/banner-carousel/3.jpg"),
          title: "Flamingo",
          description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
        },
        {
          type: "video",
          title: "Big Buck Bunny",
          description:
            "The Peach Open Movie Project\n\nBlender Institute, Netherlands",
          width: 1280,
          height: 720,
          poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          sources: [
            {
              src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "video/mp4",
            },
          ],
        },
        {
          src: require("../assets/images/banner-carousel/4.jpg"),
          title: "Flamingo",
          description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
        },
      ],
       CardsData : [
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: false,
          discounted_price: "$13.99",
          discount_percentage: "-20%",
          sale_duration: "12 hrs",
          is_favorite: false,
          free_demo: false,
          image: require("../assets/images/banner-carousel/1.jpg"),
        },
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: false,
          discounted_price: "$13.99",
          discount_percentage: "-30%",
          sale_duration: "12 hrs",
          is_favorite: false,
          free_demo: true,
          image: require("../assets/images/banner-carousel/2.jpg"),
        },
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: true,
          discounted_price: "$13.99",
          discount_percentage: "-20%",
          sale_duration: "12 hrs",
          is_favorite: true,
          free_demo: false,
          image: require("../assets/images/banner-carousel/1.jpg"),
        },
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: false,
          discounted_price: "$13.99",
          discount_percentage: "-20%",
          sale_duration: "12 hrs",
          is_favorite: true,
          free_demo: false,
          image: require("../assets/images/banner-carousel/3.jpg"),
        },
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: true,
          discounted_price: "$13.99",
          discount_percentage: "-20%",
          sale_duration: "12 hrs",
          is_favorite: false,
          free_demo: false,
          image: require("../assets/images/banner-carousel/4.jpg"),
        },
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: true,
          discounted_price: "$13.99",
          discount_percentage: "-20%",
          sale_duration: "12 hrs",
          is_favorite: true,
          free_demo: false,
          image: require("../assets/images/banner-carousel/1.jpg"),
        },
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: false,
          discounted_price: "$13.99",
          discount_percentage: "-20%",
          sale_duration: "12 hrs",
          is_favorite: true,
          free_demo: false,
          image: require("../assets/images/banner-carousel/3.jpg"),
        },
        {
          name: "Potion Permit",
          date: "9/2/22",
          price: "$19.99",
          label: "Nintendo Switch",
          discount: true,
          discounted_price: "$13.99",
          discount_percentage: "-20%",
          sale_duration: "12 hrs",
          is_favorite: false,
          free_demo: false,
          image: require("../assets/images/banner-carousel/4.jpg"),
        },
      ],
       CardBreakpoints : {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1168: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
       carouselBreakpoints : {
        // when window width is >= 480px
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        500: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1168: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
       StoreProducts : [
        {
          description: "Nintendo Switch™ - OLED Model: Mario Red Edition",
          path: "/",
          name: "Hardware",
          isFavorite: false,
          colorBar: "secondary",
          image:
            "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/My%20Nintendo%20Store/EN-US/Hardware/nintendo-switch-oled-model-mario-red-edition-112872/112872-nintendo-switch-oled-model-mario-red-edition-package-1200x675",
        },
        {
          description: "Nintendo Switch",
          path: "/",
          name: "Nintendo Switch",
          isFavorite: true,
          colorBar: "primary",
          image:
            "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/software/switch/70010000068688/87e8aa5f1fdc950b88eae7d7c62ed185c8a6373c845090bbdb2e2cf039b38da1",
        },
        {
          description: "Super Mario Bros. Wonder",
          path: "/",
          name: "Nintendo Switch",
          isFavorite: false,
          colorBar: "primary",
          image:
            "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/software/switch/70010000068683/fe4afe940b0e707798332e86f0af56cdbde48da59dc37cdfb8d59febb88ac72a",
        },
        {
          description: "Nintendo Switch games",
          path: "/",
          name: "Nintendo Switch",
          isFavorite: false,
          colorBar: "primary",
          image:
            "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/software/switch/70010000068678/5b072b55e8a6993071b4cde9f74d9cf7aeac0b52141177efed6c8ce9b580a435",
        },
      ],
       TrendingTopics : [
        {
          title: "Nintendo Switch™ - OLED Model: Mario Red Edition",
          path: "/",
        },
        {
          title: "Nintendo Switch",
          path: "/",
        },
        {
          title: "Super Mario Bros. Wonder",
          path: "/",
        },
        {
          title: "Nintendo Switch games",
          path: "/",
        },
        {
          title: "Zelda games",
          path: "/",
        },
      ],
       product_info : [
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg>',
          title: "Release date",
          description: "October 5, 2017",
          links: null,
        },
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path></svg>',
          title: "No. of players",
          description: null,
          links: [
            {
              path: "/",
              title: "Everyone 10+",
            },
            {
              path: "/",
              title: "Local wireless (1)",
            },
            {
              path: "/",
              title: "Online (1-4)",
            },
          ],
        },
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0h-3Zm1.288 2.34a.25.25 0 0 1 .424 0l.799 1.278A.25.25 0 0 1 8.799 4H7.201a.25.25 0 0 1-.212-.382l.799-1.279Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"></path></svg>',
          title: "Genre",
          description: null,
          links: [
            {
              path: "/",
              title: "Role-Playing",
            },
            {
              path: "/",
              title: "Simulation",
            },
          ],
        },
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path></svg>',
          title: "Publisher",
          description: null,
          links: [
            {
              path: "/",
              title: "ConcernedApe",
            },
          ],
        },
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z"></path></svg>',
          title: "ESRB rating",
          description: null,
          links: [
            {
              path: "/",
              title: "Everyone 10+",
            },
          ],
        },
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"></path><circle cx="14.5" cy="13.5" r="1.5"></circle><circle cx="18.5" cy="10.5" r="1.5"></circle></svg>',
          title: "Supported play modes",
          description: "TV mode, Tabletop mode, Handheld mode",
          links: null,
        },
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path></svg>',
          title: "Game file size",
          description: "1.5 GB",
          links: null,
        },
        {
          icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>',
          title: "Supported languages",
          description:
            "English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese",
          links: null,
        },
      ],
  };
export default data;
  
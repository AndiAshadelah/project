const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2307", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Hai, Monyet! Hayoloh apa ini", // Title displayed on the passcode entry page
  successMessage: "anjay ingat", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Why does adel love him more?", // Another example query
    `Adel's birthdate (coz her bf forgets)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-07-23", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Heavenly", // Title of the song
      artist: "Cigarettes After Sex", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "The Boy Is Mine",
      artist: "Brandy, Monica",
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      left: "15%",
      top: "40%",
    },
    {
      title: "Last Night on Earth",
      artist: "Green Day",
      left: "30%",
      top: "75%",
    },
    {
      title: "American Boy",
      artist: "Estelle, Kanye West",
      left: "5%",
      top: "65%",
    },
    {
      title: "Sparks",
      artist: "Coldplay",
      left: "25%",
      top: "90%",
    },
    {
      title: "Kiss Me Thru The Phone",
      artist: "Soulja Boy, Sammie",
      left: "35%",
      top: "50%",
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Message", // Title for the messages recap page
    messageGallery: [
      { title: "Home.", description: "Sebenernya aku bingung mau mulai dari mana, soalnya kalau ngomong langsung kayaknya aku bakal malu mali kucing gitu, hahaha. Tapi intinya, aku cuma lagi pengen keluarin semua isi pikiran aku tentang kamu di surat ini.Aku mau bilang makasih banget kamu udah mampir dan menetap di hidup aku. Kadang aku masih suka mikir, \"Kok bisa ya aku nemu orang senyebelin kamu?\" Aku ngerasa vibe kita itu klop banget. Kamu bukan cuma pacar, tapi udah kayak bestie yang bisa diajak ghibah, diajak deep talk malem-malem, sampai diajak ngelakuin hal-hal random yang nggak jelas tujuannya.\n\nSatu hal yang paling aku syukuri adalah aku nggak perlu effort buat jadi orang lain pas bareng kamu. Aku nggak perlu jaim, nggak perlu jaga image, dan aku bisa bener-bener jadi diri aku yang paling apa adanya bahkan yang paling clumsy sekalipun. Makasih ya udah jadi safe place aku pas dunia lagi capek-capeknya. Kamu tuh kayak charger otomatis buat adel ketemu kamu bentar aja rasanya energi aku langsung keisi lagi.\n\nAku tau aku bukan orang yang sempurna, kadang aku masih suka egois atau bikin kamu kesel. Makasih udah sesabar itu ngadepin aku. Makasih udah selalu dengerin keluhan aku yang sebenernya itu-itu aja. Aku beneran appreciate setiap hal kecil yang kamu lakuin buat aku, dari yang cuma sekadar random call sampai cara kamu nenangin aku pas aku lagi overthinking.\n\nKe depannya. Aku cuma pengen kita tetep kayak gini, tetep seru, tetep saling support, dan tetep jadi tim yang solid. Aku pengen kita bisa eksplor banyak tempat bareng, nyobain makanan enak bareng, dan tumbuh bareng-bareng juga.\n\nAnyway, thanks for being the best part of my day, every day. Jangan bosen-bosen ya sama aku, karena aku sendiri nggak pernah kepikiran buat nyari yang lain. I really, really love you." }, // Message entry      { title: "October 5, 2024", description: "Cherishing moments together." },
      { title: "Harapan Aku Buat Kita ke Depannya... ", description: "Jujur, kalau ditanya soal harapan buat hubungan kita, aku nggak pengen kayak di film romance. Aku cuma pengen kita tetep jadi \"kita\" yang sekarang, tapi versi yang lebih dewasa dan lebih kuat lagi.Pertama, aku pengen kita makin pinter dalam hal komunikasi. Aku berharap ke depannya kita nggak perlu lagi ada drama \"pikir aja sendiri\" atau kode-kodean yang bikin pusing. Aku pengen kita bisa saling terbuka tentang apa pun—dari hal paling nggak penting sampai ketakutan terbesar kita—tanpa ada rasa takut di judge. Aku pengen kita jadi tim yang kalau ada masalah, yang kita lawan itu masalahnya, bukan satu sama lain.Kedua, aku pengen kita tetep bisa tumbuh bareng. Aku bakal selalu ada di barisan paling depan buat dukung semua mimpi dan ambisi kamu. Aku mau kita sama-sama sukses, tapi kita tetep punya waktu buat ngerayain kemenangan kecil bareng-bareng. Aku nggak pengen kita cuma jalan di tempat, aku pengen kita saling narik ke atas buat jadi versi terbaik diri kita masing-masing.Ketiga, aku berharap kita nggak pernah kehilangan \"serunya\" hubungan ini. Meskipun nanti kita makin sibuk sama urusan masing-masing, aku pengen kita tetep punya waktu buat hal-hal random. Tetap bisa mabar sampai subuh, tetep bisa ghibah lucu, tetep bisa deep talk di motor, dan tetep bisa ketawa sampai perut sakit cuma gara-gara hal receh. Jangan sampai rutinitas bikin kita jadi ngerasa \"biasa aja\", karena buat aku, setiap momen sama kamu itu selalu spesial.Dan yang terakhir, aku pengen kita punya stok sabar yang nggak ada batasnya. Kita berdua manusia biasa yang pasti punya salah dan kurangnya. Aku berharap kita nggak bosen buat saling belajar, saling memaafkan, dan saling ngingetin dengan cara yang baik. Aku pengen hubungan ini jadi tempat yang paling aman buat kita beristirahat dari capeknya dunia luar. Pokoknya, aku pengen kita terus bikin memori baru yang lebih seru lagi di tahun depan dan tahun-tahun berikutnya. adel siap banget buat lewatin semua rollercoaster kehidupan bareng ido." },
      { title: "Satu hal lagi yang paling penting...", description: "Di balik semua rasa sayang aku, aku mau minta maaf dari hati yang paling dalem. Aku sadar banget kalau belakangan ini (atau mungkin udah lumayan lama), aku sering banget bikin kamu capek karena sikap aku yang suka menuduh atau curigaan tanpa alasan yang jelas. Aku tau, rasanya nggak enak banget dituduh atas hal yang nggak kamu lakuin. Aku sadar itu bikin kamu ngerasa nggak dipercaya, padahal selama ini kamu udah berusaha kasih yang terbaik buat aku. Maafin aku ya, karena seringkali rasa takut dan overthinking aku malah jadi beban buat kamu. Aku nggak bermaksud bikin kamu ngerasa terpojok, aku cuma kadang masih susah kontrol rasa insecure aku sendiri, tapi aku tau itu bukan alasan buat aku terus-terusan kayak gitu ke kamu. Dan yang paling bikin aku ngerasa bersalah adalah fakta kalau aku sering bilang mau berubah, tapi nyatanya aku masih sering ngulangin kesalahan yang sama. Aku minta maaf karena aku terkesan \"nggak mau berubah\" dan keras kepala sama sifat-sifat buruk aku. Aku sadar kalau kata /\"maaf\"/ aja nggak bakal cukup kalau nggak ada pembuktiannya. Aku pengen kamu tau kalau aku dengerin semua keluhan kamu. Aku dengerin pas kamu bilang kamu capek, dan jujur aku pun sebenernya capek sama sifat aku sendiri. Aku nggak mau hubungan kita rusak cuma gara-gara ego dan rasa takut aku yang nggak beralasan. Tolong kasih aku kesempatan dan bantu aku ya buat bener-bener berbenah. Aku nggak janji bakal berubah jadi sempurna dalam semalam, tapi aku beneran mau usaha buat lebih percaya sama kamu dan lebih bisa kontrol diri. Aku sayang banget sama kamu, dan aku nggak mau kehilangan kamu cuma karena sifat buruk aku yang sebenernya bisa aku perbaiki. Makasih ya udah sesabar itu nungguin aku \"dewasa\". I'll try my best to be better for us." },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "August 14, 2025", description: "First date ga sih?" }, // Picture entry
      { title: "September 10, 2025", description: "DI SINI SERU KRN LAMA SM KAMU" },
      { title: "September 18, 2025", description: "Ini karena lucu ajaa" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "ilysm, happy new year ido.", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;

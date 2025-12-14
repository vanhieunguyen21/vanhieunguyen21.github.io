const MuslimPrayeriOSProject = {
  image: require("./assets/images/muslimPrayerIcon.png"),
  projectId: "muslimprayerios",
  projectName: "Muslim Prayer",
  projectDesc:
    "An ultilities app for Muslim: Qibla Compass, Quran, Prayer Times, Hijri Calendar...",
  platforms: ["iOS"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/muslimprayerios"
    }
  ],
  features: [
    "Prayer Times calculation based on current location, time and prayer calculation method.",
    "Quran with every verse with 80+ translation languages.",
    "Quran audio with many reciters to choose from.",
    "Qibla compass with many custom compass styles.",
    "Digital Tasbih counter with special UI.",
    "Dual Hijri and Gregorian calendar with lists of Islamic Events.",
    "Many other Muslim related content such as: Duas, Azkar, Kalimas, Prophet stories.",
    "Multiple app themes.",
    "Fully support Right to Left (RTL) layout direction for RTL languages such as Arabic.",
  ],
  details: [
    "MVVM with multi-packages app architecture with Swift Navigation.",
    "ORM Sqlite Database with GRDB.swift.",
    "SwiftUI with multiple custom multiple custom layouts.",
    "Store Quran audio data in Firebase Storage and let users download to use later on demand.",
    "Dependencies injection using Swinject.",
    "Use SwiftGen tool to generate compile time type safe resources.",
    "Monetization: Contains Admob ads, in-app purchases and subscriptions."
  ],
  showcases: [
    require("./assets/showcase/MuslimPrayer_iOS_1.webp"),
    require("./assets/showcase/MuslimPrayer_iOS_2.webp"),
    require("./assets/showcase/MuslimPrayer_iOS_3.webp"),
    require("./assets/showcase/MuslimPrayer_iOS_4.webp"),
    require("./assets/showcase/MuslimPrayer_iOS_5.webp"),
    require("./assets/showcase/MuslimPrayer_iOS_6.webp"),
    require("./assets/showcase/MuslimPrayer_iOS_7.webp"),
    require("./assets/showcase/MuslimPrayer_iOS_8.webp")
  ],
  downloadText: "App Store",
  downloadUrl:
    "https://apps.apple.com/hr/app/muslim-prayer-qibla-quran/id6755532521"
};

const HekaProject = {
  image: require("./assets/images/hekaIcon.png"),
  projectId: "heka",
  projectName: "Heka - Calories Counter",
  projectDesc:
    "A health app that lets you scan your meal to analyze its nutrient and help you control your nutrient.",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/heka"
    }
  ],
  features: [
    "Scan your meal and get detailed nutrient informations.",
    "Scan food barcode to view details about the food.",
    "Log your meal to track your calories across the day.",
    "Create weight gain, weight loss plans to see how much to eat per day.",
    "Log how much calories burned.",
    "Synchronize health data (burned calories) with Android Health Connect.",
    "View reports about health by days, weeks or months.",
  ],
  details: [
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "Implement identity service with OAuth and OpenID Connect.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI.",
    "Dependencies injection using Koin.",
    "Network requests handle with Ktor.",
    "Monetization: Contains in-app purchases and subscriptions."
  ],
  showcases: [
    require("./assets/showcase/Heka_1.webp"),
    require("./assets/showcase/Heka_2.webp"),
    require("./assets/showcase/Heka_3.webp"),
    require("./assets/showcase/Heka_4.webp"),
    require("./assets/showcase/Heka_5.webp"),
    require("./assets/showcase/Heka_6.webp"),
    require("./assets/showcase/Heka_7.webp"),
    require("./assets/showcase/Heka_8.webp")
  ],
  downloadText: "Google Play",
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.heka.ai.caloriecounter.mealplan"
};

const CharmeiOSProject = {
  image: require("./assets/images/charmeIcon.png"),
  projectId: "charmeios",
  projectName: "Charme - Photo Editor",
  projectDesc:
    "A photography app, allowing capturing, editing images and more...",
  platforms: ["iOS"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/charmeios"
    }
  ],
  features: [
    "Add filters to images.",
    "Adjust image parameters such as brightness, contrast, saturation, vignette...",
    "Adjust different color profiles.",
    "Apply frame to image.",
    "Add stickers, text or image brush overlay on image.",
    "Add makeup or beauty related adjustments.",
  ],
  details: [
    "MVVM app architecture with Swift Navigation.",
    "Handle image editing with Graphics pipeline using Apple Metal.",
    "Integrate local AI model (Face Landmark) using Google Mediapipe.",
    "SwiftUI with multiple custom multiple custom layouts.",
    "Dependencies injection using Swinject.",
    "Use SwiftGen tool to generate compile time type safe resources."
  ],
  showcases: [
    require("./assets/showcase/CharmeiOS_1.webp"),
    require("./assets/showcase/CharmeiOS_2.webp"),
    require("./assets/showcase/CharmeiOS_3.webp"),
    require("./assets/showcase/CharmeiOS_4.webp"),
    require("./assets/showcase/CharmeiOS_5.webp"),
  ]
};

const BecasaProject = {};

const DramaPopProject = {
  image: require("./assets/images/dramaPopIcon.png"),
  projectId: "dramapop",
  projectName: "DramaPop",
  projectDesc:
    "A video streaming app that lets users stream short videos from server.",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/dramapop"
    }
  ],
  features: [
    "Watch thousands drama short episodes streaming from server.",
    "Recommended drama shorts based on your previous watched.",
    "Save watch history or favourite drama shorts.",
    "Earn rewards by doing daily tasks to unlock more drama shorts."
  ],
  details: [
    "Use Firebase Firestore + Firebase Cloud Functions to manage users credit points.",
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI.",
    "Dependencies injection using Hilt.",
    "Monetization: Contains Admob ads, in-app purchases and subscriptions."
  ],
  showcases: [
    require("./assets/showcase/DramaPop_1.jpg"),
    require("./assets/showcase/DramaPop_2.jpg"),
    require("./assets/showcase/DramaPop_3.jpg"),
    require("./assets/showcase/DramaPop_4.jpg")
  ]
};

const RetroEmulatorProject = {
  image: require("./assets/images/retroEmulatorIcon.png"),
  projectId: "retroemulator",
  projectName: "Retro Emulator",
  projectDesc:
    "An emulator application that lets you play retro games such as Gameboy, Nintendo, Atari...",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/retroemulator"
    }
  ],
  features: [
    "Emulate retro games from multiple platforms: Gameboy, Nintendo, Atari,...",
    "Apply cheat code from cheat code database.",
    "Customize controllers and theme.",
  ],
  details: [
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI interopt with View UI.",
    "Use open source emulator library to emulate games.",
    "Dependencies injection using Hilt.",
    "Monetization: Contains Admob ads, in-app purchases and subscriptions."
  ],
  showcases: [
    require("./assets/showcase/RetroEmulator_1.webp"),
    require("./assets/showcase/RetroEmulator_5.webp"),
    require("./assets/showcase/RetroEmulator_2.webp"),
    require("./assets/showcase/RetroEmulator_3.webp"),
    require("./assets/showcase/RetroEmulator_4.webp"),
    require("./assets/showcase/RetroEmulator_6.webp")
  ],
  downloadText: "Google Play",
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.retrogame.retroemulator"
};

const BluenProject = {
  image: require("./assets/images/bluenIcon.png"),
  projectId: "bluen",
  projectName: "Bluen - Collage Maker",
  projectDesc:
    "A photography app focusing on assembling multiple images into one.",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/bluen"
    }
  ],
  features: [
    "Create collages from many predefined layout, suitable for different number of images.",
    "Create a freestyle collage where you freely choose position and size of the images.",
    "Add sticker, text or brush onto the final image.",
  ],
  details: [
    "Implement custom sticker overlays and image/text brush from scratch.",
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "Jetpack Compose UI.",
    "Dependencies injection using Koin.",
    "Monetization: Contains Admob ads."
  ],
  showcases: [
    require("./assets/showcase/Bluen_1.jpg"),
    require("./assets/showcase/Bluen_2.jpg"),
    require("./assets/showcase/Bluen_3.jpg"),
    require("./assets/showcase/Bluen_4.jpg")
  ],
  downloadText: "Release APK",
  downloadUrl: require("./assets/binaries/Bluen-release.apk"),
  disclaimer:
    "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app. APK may have been modified to serve the demo purposes."
};

const MiraeProject = {
  image: require("./assets/images/miraeIcon.png"),
  projectId: "mirae",
  projectName: "Mirae - Video Editor",
  projectDesc:
    "A video app that lets you record, create and edit videos with many features...",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/mirae"
    }
  ],
  features: [
    "Record video with limitless time or predefined time (5s, 10s, 30s).",
    "Chain multiple video into one or cut one video into multiple videos.",
    "Apply filters or adjustment to videos.",
    "Add stickers or text or audio into videos.",
    "Create video based on templates.",
  ],
  details: [
    "Create and manipulate videos using Android Media3 Transformer.",
    "Create custom filters and adjust effects using OpenGL.",
    "Implement custom sticker and text overlays.",
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "Jetpack Compose UI with multiple custom layout components.",
    "ORM Sqlite Database using Room.",
    "Dependencies injection using Hilt.",
    "Monetization: Contains Admob ads."
  ],
  showcases: [
    require("./assets/showcase/Mirae_1.jpg"),
    require("./assets/showcase/Mirae_2.jpg"),
    require("./assets/showcase/Mirae_3.jpg"),
    require("./assets/showcase/Mirae_4.jpg"),
    require("./assets/showcase/Mirae_5.jpg"),
    require("./assets/showcase/Mirae_6.jpg"),
  ],
  downloadText: "Release APK",
  downloadUrl: require("./assets/binaries/Mirae-release.apk"),
  disclaimer:
    "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app. APK may have been modified to serve the demo purposes."
};

const ReticaProject = {
  image: require("./assets/images/reticaIcon.png"),
  projectId: "retica",
  projectName: "Retica - Photo Editor",
  projectDesc:
    "A photography app, allowing capturing, editing images and more...",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/retica"
    }
  ],
  features: [
    "Add filters to images.",
    "Adjust image parameters such as brightness, contrast, saturation, vignette...",
    "Adjust different color profiles.",
    "Apply frame to image.",
    "Add stickers, text or image brush overlay on image.",
    "Add makeup or beauty related adjustments.",
    "Transform your image into an artist style using AI Artistic.",
    "Remove background, remove object and enhance image on-device.",
  ],
  details: [
    "Initially used OpenCV to handle image editting, later create OpenGL pipeline and use it instead to improve performance.",
    "Integrate multiple Tensorflow Lite models to use on-device such as Subject Segmentation (for background remove), Inpainting (for object remove), Upsampling (for enhance) and Style Transfer (for AI Artistic).",
    "Integrate Face Landmark model using Google Mediapipe to assist in makeup features.",
    "Implement custom sticker overlays and image/text brush from scratch.",
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "Jetpack Compose UI.",
    "Dependencies injection using Koin.",
    "Monetization: Contains Admob ads."
  ],
  showcases: [
    require("./assets/showcase/Retica_1.jpg"),
    require("./assets/showcase/Retica_2.jpg"),
    require("./assets/showcase/Retica_3.jpg"),
    require("./assets/showcase/Retica_4.jpg"),
    require("./assets/showcase/Retica_5.jpg"),
    require("./assets/showcase/Retica_6.jpg"),
    require("./assets/showcase/Retica_7.jpg"),
    require("./assets/showcase/Retica_8.jpg"),
    require("./assets/showcase/Retica_9.jpg"),
    require("./assets/showcase/Retica_10.jpg"),
    require("./assets/showcase/Retica_11.jpg"),
    require("./assets/showcase/Retica_12.jpg")
  ],
  downloadText: "Release APK",
  downloadUrl: "https://firebasestorage.googleapis.com/v0/b/era003-gba-emulator.firebasestorage.app/o/Retica-release.apk?alt=media&token=bd746429-f4b8-450d-9364-4fbf3ce8fb3e",
  disclaimer:
    "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app. APK may have been modified to serve the demo purposes."
};

const MuslimPrayerProject = {
  image: require("./assets/images/muslimPrayerIcon.png"),
  projectId: "muslimprayer",
  projectName: "Muslim Prayer",
  projectDesc:
    "An Ultilities app for Muslim: Qibla Compass, Quran, Prayer Times, Hijri Calendar...",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/muslimprayer"
    }
  ],
  features: [
    "Prayer Times calculation based on current location, time and prayer calculation method.",
    "Quran with every verse with 80+ translation languages.",
    "Quran audio with many reciters to choose from.",
    "Qibla compass with many custom compass styles.",
    "Digital Tasbih counter with special UI.",
    "Dual Hijri and Gregorian calendar with lists of Islamic Events.",
    "Many other Muslim related content such as: Duas, Azkar, Kalimas, Prophet stories.",
    "Multiple app themes.",
    "Fully support Right to Left (RTL) layout direction for RTL languages such as Arabic.",
  ],
  details: [
    "MVVM with multi-modules app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI with multiple custom multiple custom layouts and Glance widgets.",
    "Store Quran audio data in Firebase Storage and let users download to use later on demand. Previously used Google Play Asset Delivery to deliver audio data, but later migrated to Firebase Storage.",
    "Dependencies injection using Koin.",
    "Fully support Right to Left (RTL) layout direction for RTL languages such as Arabic.",
    "Multiple app themes.",
    "Monetization: Contains Admob ads, in-app purchases and subscriptions."
  ],
  showcases: [
    require("./assets/showcase/MuslimPrayer_1.jpg"),
    require("./assets/showcase/MuslimPrayer_2.jpg"),
    require("./assets/showcase/MuslimPrayer_3.jpg"),
    require("./assets/showcase/MuslimPrayer_4.jpg"),
    require("./assets/showcase/MuslimPrayer_5.jpg"),
    require("./assets/showcase/MuslimPrayer_6.jpg"),
    require("./assets/showcase/MuslimPrayer_7.jpg"),
    require("./assets/showcase/MuslimPrayer_8.jpg")
  ],
  downloadText: "Google Play",
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.muslimprayer.qibladirection.quran"
};

const QRScannerProject = {
  image: require("./assets/images/qrScannerIcon.png"),
  projectId: "qrscanner",
  projectName: "QR Scanner",
  projectDesc:
    "Lets you scan QR codes and automatically categorize them. Provide other tools such as create QR Code and scan documents.",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/qrscanner"
    }
  ],
  features: [
    "Scan QR and automatically categorize them.",
    "Create QR and customize created QR style.",
    "Scan documents and save them in PDF pages.",
  ],
  details: [
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI with multiple custom layout components.",
    "Use Google MLKit models to handle QR codes scanning and document scanning.",
    "Allowing creating and customize QR codes both background and QR code styles.",
    "Dependencies injection using Hilt.",
    "Network requests handle with Retrofit.",
    "Monetization: Contains Admob ads."
  ],
  showcases: [
    require("./assets/showcase/QRScanner_1.jpg"),
    require("./assets/showcase/QRScanner_2.jpg"),
    require("./assets/showcase/QRScanner_3.jpg"),
    require("./assets/showcase/QRScanner_4.jpg"),
    require("./assets/showcase/QRScanner_5.jpg"),
    require("./assets/showcase/QRScanner_6.jpg")
  ],
  downloadText: "Release APK",
  downloadUrl: require("./assets/binaries/QRScanner-release.apk"),
  disclaimer:
    "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app. APK may have been modified to serve the demo purposes."
};

const NutrigenProject = {
  image: require("./assets/images/nutrigenIcon.png"),
  projectId: "nutrigen",
  projectName: "Nutrigen - Meals Generator and Calories Calculator",
  projectDesc:
    "A health app that lets you generate your meals based on your preferences and monitor your diet progress.",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/nutrigen"
    }
  ],
  features: [
    "Create or Generate meal plans based on your preferences and plan types.",
    "Record eaten food or drink in a day for intake calories.",
    "Get recommendation about foods and drinks based on current goal and status.",
    "Record exercises taken for burned calories.",
    "View reports about health stauts."
  ],
  details: [
    "Generate random meal plans based on preferences (calories, macro and micro) using Genetic algorithm. (https://en.wikipedia.org/wiki/Genetic_algorithm).",
    "Use official database from USDA and scraping other sites to populate food database.",
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI with multiple custom layout components.",
    "Dependencies injection using Hilt.",
    "Network requests handle with Retrofit.",
    "Monetization: Contains Admob ads."
  ],
  showcases: [
    require("./assets/showcase/Nutrigen_1.jpg"),
    require("./assets/showcase/Nutrigen_2.jpg"),
    require("./assets/showcase/Nutrigen_3.jpg"),
    require("./assets/showcase/Nutrigen_4.jpg"),
    require("./assets/showcase/Nutrigen_5.jpg"),
    require("./assets/showcase/Nutrigen_6.jpg")
  ],
  downloadText: "Release APK",
  downloadUrl: require("./assets/binaries/Nutrigen-release.apk"),
  disclaimer:
    "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app. APK may have been modified to serve the demo purposes."
};

const BloodSugarProject = {
  image: require("./assets/images/bloodSugarIcon.png"),
  projectId: "bloodsugar",
  projectName: "Blood Sugar",
  projectDesc:
    "A health app that lets you record blood sugar, blood pressure, heart rate records as well as create your medicine reminders..",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/bloodsugar"
    }
  ],
  features: [
    "Record blood sugar measurement with different methods: OGTT, FPG or HbA1c.",
    "Record blood pressure measurement.",
    "Measure and record heart rate on-device using camera.",
    "Add medicine prescription and get reminded when to take medicine.",
    "View history and reports about past measure activities.",
    "Read various articles about blood sugar, blood pressure or heart rates."
  ],
  details: [
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI with multiple custom multiple custom layouts.",
    "Create and export medical reports in PDFs by manually drawing into PDF file using canvas.",
    "Use camera to measure heart rate by observing the changes in color of blood.",
    "Integrate OCR model to let users scan measured data from devices.",
    "Dependencies injection using Hilt.",
    "Monetization: Contains Admob ads, in-app purchases and subscriptions."
  ],
  showcases: [
    require("./assets/showcase/BloodSugar_1.jpg"),
    require("./assets/showcase/BloodSugar_2.jpg"),
    require("./assets/showcase/BloodSugar_3.jpg"),
    require("./assets/showcase/BloodSugar_4.jpg"),
    require("./assets/showcase/BloodSugar_5.jpg"),
    require("./assets/showcase/BloodSugar_6.jpg"),
    require("./assets/showcase/BloodSugar_7.jpg"),
    require("./assets/showcase/BloodSugar_8.jpg"),
    require("./assets/showcase/BloodSugar_9.jpg")
  ],
  downloadText: "Release APK",
  downloadUrl: require("./assets/binaries/BloodSugar-release.apk"),
  disclaimer:
    "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app. APK may have been modified to serve the demo purposes."
};

const ViridisProject = {
  image: require("./assets/images/viridisIcon.png"),
  projectId: "viridis",
  projectName: "Viridis AI Art",
  projectDesc:
    "A Front-end app that lets users turn their images into styled AI generated images. Also support drawing to elevate imaginations.",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/viridis"
    }
  ],
  features: [
    "Generate AI images from image or text.",
    "Draw your own image input to generate AI image based on it.",
    "View previously created images.",
    "Get inspiration from predefined prompts."
  ],
  details: [
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI with multiple custom multiple custom layouts.",
    "Doodle drawer using Canvas and Gestures.",
    "Handle network requests with Retrofit2.",
    "Dependencies injection using Hilt.",
    "Monetization: Contains Admob ads, in-app purchases and subscriptions."
  ],
  showcases: [
    require("./assets/showcase/Viridis_1.webp"),
    require("./assets/showcase/Viridis_2.webp"),
    require("./assets/showcase/Viridis_3.webp"),
    require("./assets/showcase/Viridis_4.webp"),
    require("./assets/showcase/Viridis_5.webp"),
    require("./assets/showcase/Viridis_6.webp")
  ],
  downloadText: "Release APK",
  downloadUrl: require("./assets/binaries/SheCalendar-release.apk"),
  disclaimer:
    "Disclaimer: AI Generation feature is not functional and modified for demo purpose. " + 
    "Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app."
};

const SheCalendarProject = {
  image: require("./assets/images/sheCalendarIcon.png"),
  projectId: "shecalendar",
  projectName: "She Calendar",
  projectDesc:
    "An app that helps predicting Women Period days along with abilities to note symtoms, view historical data or set reminders.",
  platforms: ["Android"],
  footerLink: [
    {
      name: "View Details",
      url: "/project/shecalendar"
    }
  ],
  features: [
    "Record menstrual days along with symtoms and notes on that day.",
    "Predict next ovulation days and next menstrual days based on historical data.",
    "Get reminded about health status with reminder feature.",
    "View reports about menstrual status.",
    "Read many articles about menstruation and ovulation.",
  ],
  details: [
    "MVVM app architecture. Single activities with Fragments and Navigation2.",
    "ORM Sqlite Database with Room.",
    "Jetpack Compose UI with multiple custom multiple custom layouts.",
    "Dependencies injection using Hilt.",
    "Monetization: Contains Admob ads."
  ],
  showcases: [
    require("./assets/showcase/SheCalendar_1.webp"),
    require("./assets/showcase/SheCalendar_2.webp"),
    require("./assets/showcase/SheCalendar_3.webp"),
    require("./assets/showcase/SheCalendar_4.webp"),
    require("./assets/showcase/SheCalendar_5.webp"),
    require("./assets/showcase/SheCalendar_6.webp")
  ],
  downloadText: "Release APK",
  downloadUrl: require("./assets/binaries/SheCalendar-release.apk"),
  disclaimer:
    "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app. APK may have been modified to serve the demo purposes."
};

const Projects = [
  MuslimPrayeriOSProject,
  ReticaProject,
  MiraeProject,
  CharmeiOSProject,
  MuslimPrayerProject,
  RetroEmulatorProject,
  HekaProject,
  BluenProject,
  QRScannerProject,
  NutrigenProject,
  BloodSugarProject,
  DramaPopProject,
  ViridisProject,
  SheCalendarProject
];

export {Projects};

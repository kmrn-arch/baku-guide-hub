// Curated Baku places. `image` uses Wikimedia Commons URLs where stable;
// where omitted, the UI shows a "REPLACE WITH REAL PHOTO" mark.
// TODO(real-photo): For places with image: null, drop a real photo URL/import here.

import type { Lang } from "@/i18n/dictionary";

export type Place = {
  id: string;
  image: string | null;
  district: string;
  name: Record<Lang, string>;
  short: Record<Lang, string>;
  long: Record<Lang, string>;
  tips?: Record<Lang, string>;
};

export const PLACES: Place[] = [
  {
    id: "flame-towers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flame_Towers_at_night_2017.jpg/1280px-Flame_Towers_at_night_2017.jpg",
    district: "Yasamal",
    name: { en: "Flame Towers", ru: "Башни Пламени", az: "Alov Qüllələri", tr: "Alev Kuleleri" },
    short: {
      en: "Three flame-shaped skyscrapers lit up nightly with fire animations.",
      ru: "Три небоскрёба-пламени с ночной подсветкой.",
      az: "Gecələr alov animasiyası ilə işıqlanan üç qüllə.",
      tr: "Geceleri alev animasyonuyla aydınlanan üç gökdelen.",
    },
    long: {
      en: "Baku's most iconic modern silhouette. Best viewed from Highland Park at dusk when the LED facade ignites.",
      ru: "Самый узнаваемый современный силуэт Баку. Лучший вид — из Нагорного парка на закате.",
      az: "Bakının ən tanınmış müasir siluetidir. Ən gözəl mənzərə Dağüstü Parkdan günbatandan sonra açılır.",
      tr: "Bakü'nün en ikonik modern silueti. En iyi manzara, alacakaranlıkta Dağüstü Parkı'ndan.",
    },
  },
  {
    id: "old-city",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Baku_old_city.jpg/1280px-Baku_old_city.jpg",
    district: "Sabail",
    name: { en: "Old City (Icherisheher)", ru: "Старый город (Ичери-шехер)", az: "İçərişəhər", tr: "İçeri Şehir" },
    short: {
      en: "UNESCO-listed walled medina with caravanserais, hammams and palaces.",
      ru: "Старая крепость ЮНЕСКО — караван-сараи, хаммамы, дворцы.",
      az: "UNESCO siyahısında qədim qala — karvansara, hamam və saraylar.",
      tr: "UNESCO listesindeki surlu eski şehir — kervansaraylar ve saraylar.",
    },
    long: {
      en: "Wander narrow lanes from the Maiden Tower to the Shirvanshahs' Palace. Free to roam; small fees for monuments.",
      ru: "Прогуляйтесь от Девичьей башни к Дворцу Ширваншахов. Вход свободный, билеты только в музеи.",
      az: "Qız Qalasından Şirvanşahlar Sarayına qədər gəzin. Giriş pulsuzdur, yalnız muzeylər biletlidir.",
      tr: "Kız Kulesi'nden Şirvanşahlar Sarayı'na yürüyün. Giriş ücretsiz; sadece müzeler ücretli.",
    },
  },
  {
    id: "maiden-tower",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Maiden_Tower_in_Baku_%28cropped%29.jpg/800px-Maiden_Tower_in_Baku_%28cropped%29.jpg",
    district: "Sabail",
    name: { en: "Maiden Tower", ru: "Девичья башня", az: "Qız Qalası", tr: "Kız Kulesi" },
    short: {
      en: "12th-century stone tower at the heart of the Old City.",
      ru: "Каменная башня XII века в сердце Старого города.",
      az: "İçərişəhərin mərkəzində XII əsr daş qüllə.",
      tr: "Eski Şehir'in kalbinde 12. yüzyıldan bir taş kule.",
    },
    long: {
      en: "Climb to the rooftop for sweeping views of the bay. Small museum inside.",
      ru: "Поднимитесь на крышу — панорама бухты. Внутри небольшой музей.",
      az: "Damına qalxaraq körfəzin panoramasına baxın. İçəridə kiçik muzey var.",
      tr: "Çatıya çıkıp körfez manzarasını izleyin. İçeride küçük bir müze var.",
    },
  },
  {
    id: "heydar-aliyev-center",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Heydar_Aliyev_Cultural_Center.jpg/1280px-Heydar_Aliyev_Cultural_Center.jpg",
    district: "Narimanov",
    name: { en: "Heydar Aliyev Center", ru: "Центр Гейдара Алиева", az: "Heydər Əliyev Mərkəzi", tr: "Haydar Aliyev Merkezi" },
    short: {
      en: "Zaha Hadid's flowing white masterpiece — galleries, exhibits, café.",
      ru: "Белый шедевр Захи Хадид — галереи, выставки, кафе.",
      az: "Zaha Hadidin ağ şedevri — qalereyalar, sərgilər, kafe.",
      tr: "Zaha Hadid'in akan beyaz başyapıtı — galeriler ve sergiler.",
    },
    long: {
      en: "An award-winning building with rotating exhibitions of art, classic cars and Azerbaijani culture.",
      ru: "Знаменитое здание с выставками искусства, ретро-авто и азербайджанской культуры.",
      az: "Mükafatlı bina; rəssamlıq, klassik avtomobillər və Azərbaycan mədəniyyəti sərgiləri.",
      tr: "Ödüllü bina; sanat, klasik otomobiller ve Azerbaycan kültürü sergileri.",
    },
  },
  {
    id: "boulevard",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Baku_Boulevard.jpg/1280px-Baku_Boulevard.jpg",
    district: "Sabail",
    name: { en: "Baku Boulevard", ru: "Приморский бульвар", az: "Dənizkənarı Bulvar", tr: "Bakü Bulvarı" },
    short: {
      en: "Caspian seafront promenade — fountains, gardens, ferris wheel.",
      ru: "Приморский променад — фонтаны, сады, колесо обозрения.",
      az: "Xəzər sahili gəzinti — fəvvarələr, parklar, fələk çarxı.",
      tr: "Hazar sahili yürüyüş yolu — çeşmeler, bahçeler, dönme dolap.",
    },
    long: {
      en: "Stretches for over 6 km along the bay. Free, walkable, perfect at sunset.",
      ru: "Тянется более 6 км вдоль бухты. Бесплатно, пешком, особенно красиво на закате.",
      az: "Körfəz boyunca 6 km uzanır. Pulsuz, gəzinti üçün ideal, gün batanda gözəldir.",
      tr: "Körfez boyunca 6 km'den uzun. Ücretsiz, yürünebilir, gün batımında muhteşem.",
    },
  },
  {
    id: "fountains-square",
    image: null,
    district: "Sabail",
    name: { en: "Fountains Square", ru: "Площадь фонтанов", az: "Fəvvarələr Meydanı", tr: "Fıskiyeler Meydanı" },
    short: {
      en: "Lively pedestrian square ringed by cafés and shops.",
      ru: "Оживлённая пешеходная площадь, кафе и магазины.",
      az: "Kafe və mağazalarla əhatə olunmuş canlı meydan.",
      tr: "Kafeler ve mağazalarla çevrili canlı meydan.",
    },
    long: {
      en: "The city's main meeting point. Free Wi-Fi in some cafés. Great for people-watching.",
      ru: "Главное место встреч. В некоторых кафе бесплатный Wi-Fi.",
      az: "Şəhərin əsas görüş yeri. Bəzi kafelərdə pulsuz Wi-Fi.",
      tr: "Şehrin ana buluşma noktası. Bazı kafelerde ücretsiz Wi-Fi.",
    },
  },
  {
    id: "nizami-street",
    image: null,
    district: "Sabail",
    name: { en: "Nizami Street", ru: "Улица Низами", az: "Nizami Küçəsi", tr: "Nizami Caddesi" },
    short: {
      en: "Long pedestrian shopping street linking Old City to Fountains Square.",
      ru: "Длинная пешеходная торговая улица.",
      az: "Uzun piyada ticarət küçəsi.",
      tr: "Uzun yaya alışveriş caddesi.",
    },
    long: {
      en: "Locally called 'Targovi'. International brands, local sweets, street performers.",
      ru: "Местные зовут её «Тарговая». Бренды, восточные сладости, уличные музыканты.",
      az: "Yerli adı «Tarqovı». Beynəlxalq brendlər, şərqi şirniyyatlar.",
      tr: "Yerel adıyla 'Targovı'. Uluslararası markalar, yerel tatlılar.",
    },
  },
  {
    id: "heydar-mosque",
    image: null,
    district: "Binagadi",
    name: { en: "Heydar Mosque", ru: "Мечеть Гейдара", az: "Heydər Məscidi", tr: "Haydar Camii" },
    short: {
      en: "One of the largest mosques in the Caucasus.",
      ru: "Одна из крупнейших мечетей Кавказа.",
      az: "Qafqazın ən böyük məscidlərindən biri.",
      tr: "Kafkasya'nın en büyük camilerinden biri.",
    },
    long: {
      en: "Modern Shirvan-style architecture with four 95m minarets. Modest dress required.",
      ru: "Современная ширванская архитектура, минареты 95 м. Скромная одежда обязательна.",
      az: "Müasir Şirvan üslubu, 95 m minarələr. Təvazökar geyim tələb olunur.",
      tr: "Modern Şirvan stili, 95 m minareler. Mütevazı kıyafet zorunlu.",
    },
  },
];

export const EMERGENCY = [
  { key: "emergency.unified", number: "112" },
  { key: "emergency.police", number: "102" },
  { key: "emergency.fire", number: "101" },
  { key: "emergency.ambulance", number: "103" },
  { key: "emergency.gas", number: "104" },
  { key: "emergency.tourist", number: "+994 12 598 0098" },
];

export const METRO_LINES: Record<string, { color: string; stations: string[] }> = {
  "Red Line (Line 1)": {
    color: "oklch(0.58 0.22 27)",
    stations: ["Icherisheher", "Sahil", "28 May", "Ganjlik", "Nariman Narimanov", "Bakmil", "Ulduz", "Koroglu", "Qara Qarayev", "Neftchilar", "Khalqlar Dostlugu", "Ahmadli", "Hazi Aslanov"],
  },
  "Green Line (Line 2)": {
    color: "oklch(0.55 0.15 150)",
    stations: ["Darnagul", "Azadliq Prospekti", "Nasimi", "Memar Ajami", "8 Noyabr", "Inshaatchilar", "Elmler Akademiyasi", "Nizami", "28 May"],
  },
  "Purple Line (Line 3)": {
    color: "oklch(0.45 0.18 310)",
    stations: ["Khojasan", "Avtovaghzal", "Memar Ajami-2"],
  },
};

export const BUS_ROUTES = [
  { number: "H1", route: "Airport (GYD) ↔ 28 May metro", note: "Express airport bus, runs 24/7." },
  { number: "5", route: "Sahil ↔ Bayil", note: "Along the Boulevard." },
  { number: "65", route: "Old City ↔ Heydar Aliyev Center", note: "Tourist favorite." },
  { number: "125", route: "Fountains Sq ↔ Highland Park", note: "Best Flame Towers viewpoint." },
  { number: "11", route: "Sahil ↔ Bibi-Heybat Mosque", note: "Coastal route south." },
];

export const DISTRICTS = [
  { name: { en: "Sabail", ru: "Сабаил", az: "Səbail", tr: "Sabail" }, note: { en: "Historic center, Old City, Boulevard.", ru: "Исторический центр, Старый город, Бульвар.", az: "Tarixi mərkəz, İçərişəhər, Bulvar.", tr: "Tarihi merkez, Eski Şehir, Bulvar." } },
  { name: { en: "Yasamal", ru: "Ясамал", az: "Yasamal", tr: "Yasamal" }, note: { en: "Flame Towers, Highland Park.", ru: "Башни Пламени, Нагорный парк.", az: "Alov Qüllələri, Dağüstü Park.", tr: "Alev Kuleleri, Dağüstü Park." } },
  { name: { en: "Narimanov", ru: "Нариманов", az: "Nərimanov", tr: "Nerimanov" }, note: { en: "Heydar Aliyev Center, modern shopping.", ru: "Центр Алиева, современные ТРЦ.", az: "Heydər Əliyev Mərkəzi, müasir alış-veriş.", tr: "Haydar Aliyev Merkezi, modern alışveriş." } },
  { name: { en: "Nasimi", ru: "Насими", az: "Nəsimi", tr: "Nesimi" }, note: { en: "Fountains Square, Nizami Street, nightlife.", ru: "Площадь фонтанов, ул. Низами, ночная жизнь.", az: "Fəvvarələr Meydanı, Nizami Küçəsi, gecə həyatı.", tr: "Fıskiyeler Meydanı, Nizami Caddesi, gece hayatı." } },
  { name: { en: "Binagadi", ru: "Бинагади", az: "Binəqədi", tr: "Binakedi" }, note: { en: "Heydar Mosque, residential.", ru: "Мечеть Гейдара, жилой район.", az: "Heydər Məscidi, yaşayış sahəsi.", tr: "Haydar Camii, konut bölgesi." } },
];

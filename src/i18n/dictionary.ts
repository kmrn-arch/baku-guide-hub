export type Lang = "en" | "ru" | "az" | "tr";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "az", label: "Azərbaycan", flag: "🇦🇿" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
];

type Dict = Record<string, Record<Lang, string>>;

export const t: Dict = {
  "nav.home": { en: "Home", ru: "Главная", az: "Ana səhifə", tr: "Ana Sayfa" },
  "nav.about": { en: "About Baku", ru: "О Баку", az: "Bakı haqqında", tr: "Bakü Hakkında" },
  "nav.emergency": { en: "Emergency", ru: "Экстренные", az: "Təcili", tr: "Acil" },
  "nav.tourist": { en: "Top Places", ru: "Места", az: "Yerlər", tr: "Yerler" },
  "nav.transport": { en: "Transport", ru: "Транспорт", az: "Nəqliyyat", tr: "Ulaşım" },
  "nav.browse": { en: "Browse", ru: "Обзор", az: "Kəşf et", tr: "Keşfet" },
  "nav.signin": { en: "Sign in", ru: "Войти", az: "Daxil ol", tr: "Giriş" },
  "nav.profile": { en: "Profile", ru: "Профиль", az: "Profil", tr: "Profil" },
  "nav.signout": { en: "Sign out", ru: "Выйти", az: "Çıxış", tr: "Çıkış" },

  "hero.kicker": { en: "Your offline-friendly Baku companion", ru: "Ваш офлайн-помощник по Баку", az: "Bakı üçün oflayn bələdçiniz", tr: "Çevrimdışı Bakü rehberiniz" },
  "hero.title": { en: "Discover Baku, the city of fire and sea", ru: "Откройте Баку — город огня и моря", az: "Bakını kəşf edin — od və dəniz şəhəri", tr: "Bakü'yü keşfedin — ateş ve deniz şehri" },
  "hero.sub": { en: "Essential info, emergency numbers, and transport guidance — available even without internet.", ru: "Главная информация, экстренные номера и транспорт — даже без интернета.", az: "Əsas məlumat, təcili nömrələr və nəqliyyat — internet olmadan belə.", tr: "Temel bilgiler, acil numaralar ve ulaşım — internet olmadan bile." },
  "hero.cta.explore": { en: "Explore the city", ru: "Изучить город", az: "Şəhəri kəşf et", tr: "Şehri keşfet" },
  "hero.cta.emergency": { en: "Emergency numbers", ru: "Экстренные номера", az: "Təcili nömrələr", tr: "Acil numaralar" },

  "home.public.title": { en: "No login needed", ru: "Без регистрации", az: "Qeydiyyat tələb olunmur", tr: "Giriş gerekmez" },
  "home.public.sub": { en: "Critical info works offline. For favorites and reviews, sign in.", ru: "Важная информация работает офлайн. Для избранного — войдите.", az: "Vacib məlumat oflayn işləyir. Sevimlilər üçün daxil olun.", tr: "Kritik bilgiler çevrimdışı çalışır. Favoriler için giriş yapın." },

  "home.places.title": { en: "Top landmarks", ru: "Главные достопримечательности", az: "Əsas məkanlar", tr: "Önemli yerler" },
  "home.places.sub": { en: "Iconic stops every traveler should see.", ru: "Легендарные места для каждого путешественника.", az: "Hər səyahətçinin görməli olduğu yerlər.", tr: "Her gezginin görmesi gereken yerler." },

  "footer.tagline": { en: "Built for travelers. Works offline.", ru: "Создано для путешественников. Работает офлайн.", az: "Səyahətçilər üçün. Oflayn işləyir.", tr: "Gezginler için. Çevrimdışı çalışır." },

  "about.title": { en: "About Baku", ru: "О Баку", az: "Bakı haqqında", tr: "Bakü Hakkında" },
  "about.lead": {
    en: "Baku is the capital of Azerbaijan, a UNESCO-listed city where medieval walls meet modern flame towers on the shores of the Caspian Sea.",
    ru: "Баку — столица Азербайджана, город ЮНЕСКО, где средневековые стены встречаются с современными Башнями Пламени на берегу Каспийского моря.",
    az: "Bakı — Azərbaycanın paytaxtıdır, UNESCO siyahısına daxil olan şəhərdir, burada orta əsr divarları Xəzər dənizi sahilində müasir Alov Qüllələri ilə birləşir.",
    tr: "Bakü, Azerbaycan'ın başkenti, UNESCO listesindeki bir şehirdir; Hazar Denizi kıyısında ortaçağ surları modern Alev Kuleleri ile buluşur.",
  },
  "about.history.title": { en: "History", ru: "История", az: "Tarix", tr: "Tarih" },
  "about.history.body": {
    en: "Baku has been continuously inhabited for over a thousand years. Its walled Old City (Icherisheher) holds the 12th-century Maiden Tower and the Palace of the Shirvanshahs.",
    ru: "Баку населён более тысячи лет. Старый город Ичери-шехер хранит Девичью башню XII века и Дворец Ширваншахов.",
    az: "Bakı min ildən artıqdır məskunlaşmışdır. İçərişəhər XII əsr Qız Qalasını və Şirvanşahlar Sarayını qoruyur.",
    tr: "Bakü bin yıldan fazladır iskan edilmektedir. Surlu İçeri Şehir, 12. yüzyıldan kalma Kız Kulesi ve Şirvanşahlar Sarayı'na ev sahipliği yapar.",
  },
  "about.culture.title": { en: "Culture", ru: "Культура", az: "Mədəniyyət", tr: "Kültür" },
  "about.culture.body": {
    en: "A crossroads of Persian, Russian, Turkic and European influences. Tea (çay), kebab, plov and dolma are everywhere; hospitality is taken seriously.",
    ru: "Перекрёсток персидских, русских, тюркских и европейских влияний. Чай, кебаб, плов и долма — повсюду; гостеприимство священно.",
    az: "Fars, rus, türk və Avropa təsirlərinin qovşağı. Çay, kabab, plov və dolma hər yerdədir; qonaqpərvərlik müqəddəsdir.",
    tr: "Pers, Rus, Türk ve Avrupa etkilerinin kavşağı. Çay, kebap, pilav ve dolma her yerde; misafirperverlik kutsaldır.",
  },
  "about.when.title": { en: "When to visit", ru: "Когда ехать", az: "Nə vaxt gəlmək", tr: "Ne zaman gelinir" },
  "about.when.body": {
    en: "April–June and September–October are ideal: warm sea breezes, mild temperatures. Summer is hot and windy; winter is cool with strong gusts.",
    ru: "Апрель–июнь и сентябрь–октябрь идеальны: морской бриз, мягкая погода. Лето жаркое и ветреное; зима прохладная.",
    az: "Aprel–iyun və sentyabr–oktyabr idealdır: dəniz mehi, mülayim hava. Yay isti və küləklidir; qış sərindir.",
    tr: "Nisan–Haziran ve Eylül–Ekim ideal: deniz meltemi, ılıman hava. Yaz sıcak ve rüzgarlı; kış serindir.",
  },

  "emergency.title": { en: "Emergency Numbers", ru: "Экстренные номера", az: "Təcili Nömrələr", tr: "Acil Numaralar" },
  "emergency.lead": { en: "Tap any number to call. Save this page for offline access.", ru: "Нажмите номер, чтобы позвонить. Сохраните страницу.", az: "Zəng etmək üçün nömrəyə toxunun. Səhifəni saxlayın.", tr: "Aramak için numaraya dokunun. Sayfayı kaydedin." },
  "emergency.unified": { en: "Unified emergency", ru: "Единая служба", az: "Vahid təcili", tr: "Birleşik acil" },
  "emergency.police": { en: "Police", ru: "Полиция", az: "Polis", tr: "Polis" },
  "emergency.fire": { en: "Fire", ru: "Пожарная", az: "Yanğın", tr: "İtfaiye" },
  "emergency.ambulance": { en: "Ambulance", ru: "Скорая", az: "Təcili yardım", tr: "Ambulans" },
  "emergency.gas": { en: "Gas leak", ru: "Утечка газа", az: "Qaz sızması", tr: "Gaz sızıntısı" },
  "emergency.tourist": { en: "Tourist police", ru: "Туристическая полиция", az: "Turist polisi", tr: "Turist polisi" },

  "tourist.title": { en: "Top Tourist Places", ru: "Топ туристических мест", az: "Əsas Turist Yerləri", tr: "Turistik Yerler" },
  "tourist.lead": { en: "A curated read-only list. No login required.", ru: "Подборка для чтения. Регистрация не нужна.", az: "Yalnız oxumaq üçün siyahı. Qeydiyyat lazım deyil.", tr: "Salt okunur liste. Giriş gerekmez." },

  "transport.title": { en: "Transport & Districts", ru: "Транспорт и районы", az: "Nəqliyyat və Rayonlar", tr: "Ulaşım ve İlçeler" },
  "transport.lead": { en: "Metro, buses, taxis, and the main districts you'll move between.", ru: "Метро, автобусы, такси и районы.", az: "Metro, avtobus, taksi və rayonlar.", tr: "Metro, otobüs, taksi ve ilçeler." },
  "transport.metro": { en: "Metro lines", ru: "Линии метро", az: "Metro xətləri", tr: "Metro hatları" },
  "transport.bus": { en: "Key bus routes", ru: "Основные автобусы", az: "Əsas avtobus marşrutları", tr: "Önemli otobüs hatları" },
  "transport.districts": { en: "Main districts", ru: "Основные районы", az: "Əsas rayonlar", tr: "Ana ilçeler" },
  "transport.map": { en: "Offline map", ru: "Офлайн-карта", az: "Oflayn xəritə", tr: "Çevrimdışı harita" },
  "transport.download": { en: "Download pocket guide (PDF)", ru: "Скачать карманный гид (PDF)", az: "Cib bələdçisini endir (PDF)", tr: "Cep rehberini indir (PDF)" },

  "auth.welcome": { en: "Welcome back", ru: "С возвращением", az: "Xoş gəldiniz", tr: "Tekrar hoş geldiniz" },
  "auth.signup": { en: "Create your account", ru: "Создать аккаунт", az: "Hesab yaradın", tr: "Hesap oluştur" },
  "auth.email": { en: "Email", ru: "Email", az: "E-poçt", tr: "E-posta" },
  "auth.password": { en: "Password", ru: "Пароль", az: "Şifrə", tr: "Şifre" },
  "auth.signin.btn": { en: "Sign in", ru: "Войти", az: "Daxil ol", tr: "Giriş" },
  "auth.signup.btn": { en: "Sign up", ru: "Зарегистрироваться", az: "Qeydiyyat", tr: "Kaydol" },
  "auth.google": { en: "Continue with Google", ru: "Продолжить с Google", az: "Google ilə davam et", tr: "Google ile devam et" },
  "auth.toggle.signup": { en: "No account? Sign up", ru: "Нет аккаунта? Зарегистрируйтесь", az: "Hesabınız yoxdur? Qeydiyyatdan keçin", tr: "Hesabınız yok mu? Kaydolun" },
  "auth.toggle.signin": { en: "Have an account? Sign in", ru: "Есть аккаунт? Войти", az: "Hesabınız var? Daxil olun", tr: "Hesabınız var mı? Giriş yapın" },

  "browse.title": { en: "Browse places", ru: "Все места", az: "Bütün yerlər", tr: "Tüm yerler" },
  "profile.title": { en: "Your profile", ru: "Ваш профиль", az: "Sizin profil", tr: "Profiliniz" },
  "favorites.title": { en: "Your favorites", ru: "Избранное", az: "Sevimliləriniz", tr: "Favorileriniz" },
};

export function tr(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? key;
}

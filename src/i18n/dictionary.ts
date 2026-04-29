export type Lang = "en" | "ru" | "az" | "tr";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "az", label: "Azərbaycan", flag: "🇦🇿" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
];

type Dict = Record<string, Record<Lang, string>>;

// Helper to keep the file readable
const e = (en: string, ru: string, az: string, tr: string) => ({ en, ru, az, tr });

export const t: Dict = {
  // ============ NAV / FOOTER ============
  "nav.features":   e("Features", "Возможности", "İmkanlar", "Özellikler"),
  "nav.safety":     e("Safety", "Безопасность", "Təhlükəsizlik", "Güvenlik"),
  "nav.partners":   e("Partners", "Партнёры", "Tərəfdaşlar", "Ortaklar"),
  "nav.pricing":    e("Pricing", "Цены", "Qiymət", "Fiyatlandırma"),
  "nav.about":      e("About", "О нас", "Haqqımızda", "Hakkımızda"),
  "nav.contact":    e("Contact", "Контакты", "Əlaqə", "İletişim"),
  "nav.demo":       e("Live Demo", "Демо", "Canlı Demo", "Canlı Demo"),
  "nav.download":   e("Download", "Скачать", "Yüklə", "İndir"),
  "nav.signin":     e("Sign in", "Войти", "Daxil ol", "Giriş"),
  "nav.profile":    e("Profile", "Профиль", "Profil", "Profil"),

  // Demo sub-nav (reused old keys)
  "nav.home":       e("Home", "Главная", "Ana səhifə", "Ana Sayfa"),
  "nav.about.demo": e("About Baku", "О Баку", "Bakı haqqında", "Bakü Hakkında"),
  "nav.emergency":  e("Emergency", "Экстренные", "Təcili", "Acil"),
  "nav.tourist":    e("Top Places", "Места", "Yerlər", "Yerler"),
  "nav.transport":  e("Transport", "Транспорт", "Nəqliyyat", "Ulaşım"),
  "nav.browse":     e("Browse", "Обзор", "Kəşf et", "Keşfet"),

  "footer.tagline": e(
    "Travel smart. Travel safe. Travel local.",
    "Путешествуйте умно, безопасно и как местные.",
    "Ağıllı, təhlükəsiz və yerli kimi səyahət edin.",
    "Akıllı, güvenli ve yerel gibi seyahat edin."
  ),
  "footer.product":   e("Product", "Продукт", "Məhsul", "Ürün"),
  "footer.company":   e("Company", "Компания", "Şirkət", "Şirket"),
  "footer.legal":     e("Legal", "Юридическое", "Hüquqi", "Hukuki"),
  "footer.connect":   e("Connect", "Контакты", "Əlaqə", "Bağlantı"),
  "footer.privacy":   e("Privacy Policy", "Политика конфиденциальности", "Məxfilik Siyasəti", "Gizlilik Politikası"),
  "footer.terms":     e("Terms of Service", "Условия использования", "Xidmət Şərtləri", "Hizmet Şartları"),
  "footer.rights":    e("All rights reserved.", "Все права защищены.", "Bütün hüquqlar qorunur.", "Tüm hakları saklıdır."),

  // Common CTAs
  "cta.download":    e("Download App", "Скачать приложение", "Tətbiqi yüklə", "Uygulamayı indir"),
  "cta.getStarted":  e("Get Started", "Начать", "Başla", "Başla"),
  "cta.exploreFeatures": e("Explore Features", "Возможности", "İmkanları gör", "Özellikleri gör"),
  "cta.tryDemo":     e("Try the live demo", "Попробовать демо", "Demonu yoxla", "Demoyu deneyin"),
  "cta.becomePartner": e("Become a Partner", "Стать партнёром", "Tərəfdaş ol", "Ortak olun"),
  "cta.joinWaitlist": e("Join the waitlist", "В лист ожидания", "Növbəyə yazıl", "Bekleme listesine katıl"),
  "cta.send":        e("Send", "Отправить", "Göndər", "Gönder"),
  "cta.submit":      e("Submit", "Отправить", "Təqdim et", "Gönder"),
  "comingSoon":      e("Coming soon", "Скоро", "Tezliklə", "Yakında"),

  // ============ HERO ============
  "gl.hero.kicker": e(
    "Smart travel assistant",
    "Умный помощник для путешествий",
    "Ağıllı səyahət köməkçisi",
    "Akıllı seyahat asistanı"
  ),
  "gl.hero.title": e(
    "Travel Smart. Travel Safe. Travel Local.",
    "Путешествуйте умно, безопасно и как местные.",
    "Ağıllı, təhlükəsiz və yerli kimi səyahət edin.",
    "Akıllı, güvenli ve yerel gibi seyahat edin."
  ),
  "gl.hero.sub": e(
    "GoLocal helps travelers find trusted services, transparent prices, and reliable information — all in one simple app.",
    "GoLocal помогает находить надёжные сервисы, честные цены и достоверную информацию — в одном приложении.",
    "GoLocal etibarlı xidmətləri, şəffaf qiymətləri və dəqiq məlumatı bir tətbiqdə tapmağa kömək edir.",
    "GoLocal güvenilir hizmetleri, şeffaf fiyatları ve doğru bilgileri tek bir uygulamada bulmanıza yardım eder."
  ),
  "gl.hero.tagline": e(
    "GoLocal — Explore Like a Local.",
    "GoLocal — исследуй как местный.",
    "GoLocal — Yerli kimi kəşf et.",
    "GoLocal — Yerli gibi keşfet."
  ),

  // ============ PROBLEM ============
  "gl.problem.kicker": e("The problem", "Проблема", "Problem", "Sorun"),
  "gl.problem.title":  e("Traveling can be difficult.", "Путешествия бывают сложными.", "Səyahət çətin ola bilər.", "Seyahat zor olabilir."),
  "gl.problem.sub":    e(
    "First-time visitors face the same issues over and over — and most of them are avoidable.",
    "Новые путешественники сталкиваются с одними и теми же проблемами — большинства из них можно избежать.",
    "İlk dəfə gələnlər eyni problemlərlə üzləşir — bunların əksəriyyətindən qaçmaq olar.",
    "İlk kez gelenler aynı sorunlarla karşılaşır — birçoğundan kaçınılabilir."
  ),
  "gl.problem.1.title": e("Language barriers", "Языковой барьер", "Dil maneəsi", "Dil engelleri"),
  "gl.problem.1.body":  e("Locals don't speak your language; you don't speak theirs.", "Местные не говорят на вашем языке.", "Yerlilər sizin dilinizi bilmir.", "Yerel halk dilinizi konuşmuyor."),
  "gl.problem.2.title": e("Risk of scams", "Мошенничество", "Fırıldaq riski", "Dolandırıcılık riski"),
  "gl.problem.2.body":  e("Fake taxis, fake guides, fake prices — every traveler's story.", "Поддельные такси, гиды, цены.", "Saxta taksi, saxta bələdçi, saxta qiymətlər.", "Sahte taksi, sahte rehber, sahte fiyatlar."),
  "gl.problem.3.title": e("Overcharging", "Завышенные цены", "Aşırı qiymət", "Aşırı ücret"),
  "gl.problem.3.body":  e("Tourists routinely pay 2–10× the local price.", "Туристы часто платят в 2–10 раз больше.", "Turistlər adətən 2-10 dəfə artıq ödəyir.", "Turistler genelde 2-10 kat fazla öder."),
  "gl.problem.4.title": e("Getting lost", "Можно заблудиться", "Yolu itirmək", "Kaybolmak"),
  "gl.problem.4.body":  e("Maps that don't work offline. Streets in unfamiliar scripts.", "Карты не работают офлайн.", "Xəritələr oflayn işləmir.", "Haritalar çevrimdışı çalışmıyor."),
  "gl.problem.5.title": e("Hard to find services", "Сложно найти сервисы", "Xidmət tapmaq çətindir", "Hizmet bulmak zor"),
  "gl.problem.5.body":  e("Where is the nearest pharmacy? A safe taxi? A real restaurant?", "Где аптека? Безопасное такси?", "Yaxın aptek hardadır? Etibarlı taksi?", "En yakın eczane nerede? Güvenli taksi?"),
  "gl.problem.6.title": e("Unreliable info", "Недостоверная информация", "Etibarsız məlumat", "Güvenilmez bilgi"),
  "gl.problem.6.body":  e("Outdated blogs and biased reviews can ruin your day.", "Устаревшие блоги портят день.", "Köhnəlmiş bloqlar gününüzü korlaya bilər.", "Eski bloglar gününüzü mahvedebilir."),

  // ============ SOLUTION ============
  "gl.solution.kicker": e("The solution", "Решение", "Həll yolu", "Çözüm"),
  "gl.solution.title":  e("Introducing GoLocal.", "Знакомьтесь — GoLocal.", "Tanış olun — GoLocal.", "Tanışın — GoLocal."),
  "gl.solution.sub":    e(
    "GoLocal brings every essential travel service into one trusted, multilingual platform — built around local knowledge, not tourist traps.",
    "GoLocal объединяет всё необходимое для путешествия — на основе местных знаний, а не туристических ловушек.",
    "GoLocal bütün vacib səyahət xidmətlərini bir etibarlı, çoxdilli platformada birləşdirir — turist tələləri yox, yerli biliyə əsaslanır.",
    "GoLocal tüm temel seyahat hizmetlerini güvenilir, çok dilli tek bir platformda birleştirir — turist tuzakları değil, yerel bilgi temelli."
  ),
  "gl.solution.p1.title": e("All-in-one app", "Всё в одном", "Hamısı bir tətbiqdə", "Hepsi tek uygulamada"),
  "gl.solution.p1.body":  e("Hotels, taxis, food, attractions, navigation, translation — one place.", "Отели, такси, еда, навигация — в одном месте.", "Otel, taksi, yemək, naviqasiya — bir yerdə.", "Otel, taksi, yemek, navigasyon — tek yerde."),
  "gl.solution.p2.title": e("Locally verified", "Проверено местными", "Yerli təsdiqli", "Yerel onaylı"),
  "gl.solution.p2.body":  e("Every business is reviewed before it goes live.", "Каждый сервис проверяется.", "Hər müəssisə əvvəlcədən yoxlanılır.", "Her işletme önceden incelenir."),
  "gl.solution.p3.title": e("Transparent pricing", "Честные цены", "Şəffaf qiymət", "Şeffaf fiyatlandırma"),
  "gl.solution.p3.body":  e("See the local price before you arrive — no surprises.", "Видите цену заранее.", "Yerli qiyməti əvvəlcədən görün.", "Yerel fiyatı önceden görün."),
  "gl.solution.p4.title": e("Works offline", "Работает офлайн", "Oflayn işləyir", "Çevrimdışı çalışır"),
  "gl.solution.p4.body":  e("Emergency numbers, maps and key info available without internet.", "Без интернета — главное под рукой.", "İnternet olmadan əsas məlumat.", "İnternet olmadan temel bilgiler."),

  // ============ FEATURES (12) ============
  "gl.features.kicker": e("Features", "Возможности", "İmkanlar", "Özellikler"),
  "gl.features.title":  e("Everything you need in one app.", "Всё необходимое в одном приложении.", "Bir tətbiqdə lazım olan hər şey.", "İhtiyacınız olan her şey tek uygulamada."),
  "gl.features.sub":    e(
    "Twelve carefully chosen tools that replace ten browser tabs and five sketchy apps.",
    "Двенадцать инструментов вместо десяти вкладок и пяти сомнительных приложений.",
    "On vərəq və beş şübhəli tətbiqi əvəz edən on iki alət.",
    "On sekme ve beş şüpheli uygulamayı değiştiren on iki araç."
  ),
  "gl.feat.hotels":      e("Find hotels", "Отели", "Otellər", "Oteller"),
  "gl.feat.restaurants": e("Find restaurants", "Рестораны", "Restoranlar", "Restoranlar"),
  "gl.feat.taxis":       e("Safe taxis", "Безопасные такси", "Etibarlı taksilər", "Güvenli taksiler"),
  "gl.feat.attractions": e("Tourist attractions", "Достопримечательности", "Turist obyektləri", "Gezilecek yerler"),
  "gl.feat.nav":         e("Navigation support", "Навигация", "Naviqasiya", "Navigasyon"),
  "gl.feat.lang":        e("Multilingual support", "Несколько языков", "Çoxdilli dəstək", "Çok dilli destek"),
  "gl.feat.translate":   e("Translation tools", "Перевод", "Tərcümə alətləri", "Çeviri araçları"),
  "gl.feat.emergency":   e("Emergency contacts", "Экстренные контакты", "Təcili nömrələr", "Acil numaralar"),
  "gl.feat.offline":     e("Offline access", "Офлайн доступ", "Oflayn giriş", "Çevrimdışı erişim"),
  "gl.feat.ai":          e("AI recommendations", "AI рекомендации", "AI tövsiyələri", "AI önerileri"),
  "gl.feat.reviews":     e("Ratings & reviews", "Отзывы и рейтинги", "Rəylər və reytinqlər", "Değerlendirmeler"),
  "gl.feat.rewards":     e("Rewards & discounts", "Награды и скидки", "Mükafat və endirimlər", "Ödüller ve indirimler"),

  "gl.feat.hotels.body":      e("Verified rooms with the local price already shown.", "Проверенные номера с местной ценой.", "Yerli qiymətlə yoxlanılmış otaqlar.", "Yerel fiyatla doğrulanmış odalar."),
  "gl.feat.restaurants.body": e("Where locals actually eat — not just where tourists go.", "Куда ходят местные — а не только туристы.", "Yerlilər həqiqətən hara gedir.", "Yerel halkın gerçekten gittiği yerler."),
  "gl.feat.taxis.body":       e("Background-checked drivers and metered fares.", "Проверенные водители, фиксированные цены.", "Yoxlanılmış sürücülər, sabit qiymət.", "Doğrulanmış şoförler, sabit fiyat."),
  "gl.feat.attractions.body": e("Curated landmarks with practical visiting tips.", "Лучшие места с советами.", "Tövsiyələrlə əsas yerlər.", "İpuçlarıyla başlıca yerler."),
  "gl.feat.nav.body":         e("Walking and transit directions that work offline.", "Маршруты офлайн.", "Oflayn marşrutlar.", "Çevrimdışı yol tarifleri."),
  "gl.feat.lang.body":        e("English, Russian, Azerbaijani, Turkish — and growing.", "EN, RU, AZ, TR — и больше.", "EN, RU, AZ, TR — və artır.", "EN, RU, AZ, TR — ve büyüyor."),
  "gl.feat.translate.body":   e("Quick translation for menus, signs, and conversations.", "Перевод меню, вывесок, диалогов.", "Menyu və danışıq tərcüməsi.", "Menü ve konuşma çevirisi."),
  "gl.feat.emergency.body":   e("Tap-to-call police, ambulance, fire and tourist police.", "Звонок одним нажатием.", "Bir toxunuşla zəng.", "Tek dokunuşla arama."),
  "gl.feat.offline.body":     e("Critical pages cached on your device for no-signal zones.", "Кеш для зон без сигнала.", "Siqnalsız zonalar üçün keş.", "Sinyalsiz bölgeler için önbellek."),
  "gl.feat.ai.body":          e("Personalized suggestions that learn what you actually like.", "Персональные рекомендации.", "Şəxsi tövsiyələr.", "Kişiselleştirilmiş öneriler."),
  "gl.feat.reviews.body":     e("Verified reviews from real travelers who actually visited.", "Реальные отзывы.", "Real rəylər.", "Gerçek değerlendirmeler."),
  "gl.feat.rewards.body":     e("Earn stars on every booking and trade them for discounts.", "Звёзды за бронирования.", "Hər sifariş üçün ulduz.", "Her rezervasyon için yıldız."),

  // Feature group labels
  "gl.featGroup.discover": e("Discover", "Открой", "Kəşf et", "Keşfet"),
  "gl.featGroup.navigate": e("Navigate", "Ориентируйся", "İstiqamətlən", "Yön bul"),
  "gl.featGroup.safe":     e("Stay safe", "Безопасность", "Təhlükəsiz qal", "Güvende kal"),
  "gl.featGroup.save":     e("Save money", "Экономь", "Pula qənaət", "Tasarruf et"),

  // ============ HOW IT WORKS ============
  "gl.how.kicker": e("How it works", "Как это работает", "Necə işləyir", "Nasıl çalışır"),
  "gl.how.title":  e("Four simple steps.", "Четыре простых шага.", "Dörd sadə addım.", "Dört basit adım."),
  "gl.how.1.title": e("Search", "Найдите", "Axtar", "Ara"),
  "gl.how.1.body":  e("Tell GoLocal where you are and what you need.", "Скажите, где вы и что нужно.", "Harada olduğunuzu və nə lazım olduğunu deyin.", "Nerede olduğunuzu ve ne istediğinizi söyleyin."),
  "gl.how.2.title": e("Compare", "Сравните", "Müqayisə et", "Karşılaştır"),
  "gl.how.2.body":  e("See verified options with real prices side by side.", "Сравните проверенные варианты.", "Yoxlanılmış variantları müqayisə edin.", "Doğrulanmış seçenekleri karşılaştırın."),
  "gl.how.3.title": e("Choose", "Выберите", "Seç", "Seç"),
  "gl.how.3.body":  e("Book or call directly — no middlemen, no markup.", "Бронируйте без посредников.", "Vasitəçisiz sifariş edin.", "Aracısız rezervasyon yapın."),
  "gl.how.4.title": e("Enjoy", "Наслаждайтесь", "Zövq al", "Keyfini çıkar"),
  "gl.how.4.body":  e("Travel relaxed — and earn stars while you explore.", "Путешествуйте спокойно.", "Rahat səyahət edin.", "Rahatça seyahat edin."),

  // ============ SAFETY / TRUST ============
  "gl.trust.kicker": e("Safety & trust", "Безопасность", "Təhlükəsizlik", "Güvenlik"),
  "gl.trust.title":  e("No scams. No surprises.", "Без обмана. Без сюрпризов.", "Fırıldaq yox. Sürpriz yox.", "Dolandırıcılık yok. Sürpriz yok."),
  "gl.trust.sub":    e(
    "Trust is the product. Every business, every price and every review goes through verification.",
    "Доверие — наш продукт.",
    "Etibar — bizim məhsulumuzdur.",
    "Güven — ürünümüzdür."
  ),
  "gl.trust.1.title": e("Verified businesses", "Проверенные бизнесы", "Yoxlanılmış müəssisələr", "Doğrulanmış işletmeler"),
  "gl.trust.1.body":  e("We meet every partner before they appear in the app.", "Мы встречаемся с каждым партнёром.", "Hər tərəfdaşla görüşürük.", "Her ortakla görüşürüz."),
  "gl.trust.2.title": e("Transparent prices", "Прозрачные цены", "Şəffaf qiymətlər", "Şeffaf fiyatlar"),
  "gl.trust.2.body":  e("The price you see is the price locals pay.", "Цена как для местных.", "Yerli qiymət.", "Yerel fiyat."),
  "gl.trust.3.title": e("Real reviews", "Реальные отзывы", "Real rəylər", "Gerçek değerlendirmeler"),
  "gl.trust.3.body":  e("Only travelers who used the service can leave a review.", "Только реальные пользователи оставляют отзывы.", "Yalnız xidməti istifadə edənlər rəy yaza bilər.", "Sadece kullananlar değerlendirme bırakabilir."),
  "gl.trust.4.title": e("Privacy first", "Приватность", "Məxfilik öncədir", "Gizlilik önce"),
  "gl.trust.4.body":  e("We never sell your data. Encryption end-to-end.", "Мы не продаём данные.", "Məlumatlarınızı satmırıq.", "Verilerinizi satmıyoruz."),
  "gl.trust.5.title": e("Secure platform", "Защищённая платформа", "Təhlükəsiz platforma", "Güvenli platform"),
  "gl.trust.5.body":  e("Audited infrastructure with industry-standard protections.", "Аудит и стандарты индустрии.", "Audit edilmiş infrastruktur.", "Denetlenmiş altyapı."),

  // ============ TESTIMONIALS ============
  "gl.test.kicker": e("Travelers", "Путешественники", "Səyahətçilər", "Gezginler"),
  "gl.test.title":  e("Loved by first-time visitors.", "Любим теми, кто едет впервые.", "İlk dəfə gələnlər tərəfindən sevilir.", "İlk kez gelenler tarafından seviliyor."),
  "gl.test.1": e("This app made my first trip much easier — I knew the price before I even called the taxi.", "Сделал мою первую поездку гораздо легче.", "İlk səyahətimi çox asanlaşdırdı.", "İlk yolculuğumu çok kolaylaştırdı."),
  "gl.test.2": e("I felt safe walking around a new city for the first time. The emergency page is genius.", "Впервые чувствовала себя безопасно в новом городе.", "Yeni şəhərdə təhlükəsiz hiss etdim.", "Yeni bir şehirde güvende hissettim."),
  "gl.test.3": e("Finally a travel app that actually works offline when you need it most.", "Наконец-то приложение, которое работает офлайн.", "Nəhayət, oflayn işləyən tətbiq.", "Nihayet çevrimdışı çalışan bir uygulama."),
  "gl.test.1.author": e("Sofia · Italy", "София · Италия", "Sofia · İtaliya", "Sofia · İtalya"),
  "gl.test.2.author": e("Aiko · Japan", "Айко · Япония", "Aiko · Yaponiya", "Aiko · Japonya"),
  "gl.test.3.author": e("Marco · Brazil", "Марко · Бразилия", "Marco · Braziliya", "Marco · Brezilya"),
  "gl.test.disclaimer": e("Sample testimonials shown for design purposes.", "Образцы отзывов.", "Nümunə rəylər.", "Örnek değerlendirmeler."),

  // ============ REWARDS ============
  "gl.rewards.kicker": e("Rewards", "Награды", "Mükafatlar", "Ödüller"),
  "gl.rewards.title":  e("Earn stars. Get discounts.", "Зарабатывайте звёзды.", "Ulduz qazan. Endirim al.", "Yıldız kazanın. İndirim alın."),
  "gl.rewards.body":   e(
    "Every booking, review and check-in earns stars you can spend on real discounts at partner businesses.",
    "Бронирования и отзывы приносят звёзды, которые можно тратить.",
    "Hər sifariş və rəy ulduz gətirir.",
    "Her rezervasyon yıldız kazandırır."
  ),

  // ============ PARTNERS ============
  "gl.partners.kicker": e("Partners", "Партнёры", "Tərəfdaşlar", "Ortaklar"),
  "gl.partners.title":  e("Partner with GoLocal.", "Станьте партнёром GoLocal.", "GoLocal ilə tərəfdaş olun.", "GoLocal ile ortak olun."),
  "gl.partners.sub":    e(
    "Reach millions of travelers searching for trusted services in your city.",
    "Получите доступ к миллионам путешественников.",
    "Şəhərinizdəki etibarlı xidmət axtaran milyonlarla səyahətçiyə çatın.",
    "Şehrinizde güvenilir hizmet arayan milyonlarca gezgine ulaşın."
  ),
  "gl.partners.b1": e("More customers", "Больше клиентов", "Daha çox müştəri", "Daha fazla müşteri"),
  "gl.partners.b2": e("Better visibility", "Лучшая видимость", "Daha yaxşı görünürlük", "Daha iyi görünürlük"),
  "gl.partners.b3": e("Business growth", "Рост бизнеса", "Biznesin böyüməsi", "İş büyümesi"),
  "gl.partners.b4": e("Marketing support", "Маркетинговая поддержка", "Marketinq dəstəyi", "Pazarlama desteği"),

  "gl.partners.form.title": e("Tell us about your business", "Расскажите о бизнесе", "Bizim haqqımızda danışın", "İşinizden bahsedin"),
  "gl.form.business":  e("Business name", "Название", "Müəssisənin adı", "İşletme adı"),
  "gl.form.type":      e("Business type", "Тип бизнеса", "Müəssisə növü", "İşletme türü"),
  "gl.form.contact":   e("Contact name", "Контактное лицо", "Əlaqəli şəxs", "İletişim adı"),
  "gl.form.email":     e("Email", "Email", "E-poçt", "E-posta"),
  "gl.form.phone":     e("Phone", "Телефон", "Telefon", "Telefon"),
  "gl.form.city":      e("City", "Город", "Şəhər", "Şehir"),
  "gl.form.message":   e("Message", "Сообщение", "Mesaj", "Mesaj"),
  "gl.form.subject":   e("Subject", "Тема", "Mövzu", "Konu"),
  "gl.form.name":      e("Your name", "Ваше имя", "Adınız", "Adınız"),
  "gl.form.optional":  e("optional", "необязательно", "məcburi deyil", "isteğe bağlı"),
  "gl.form.success":   e("Thanks! We'll be in touch.", "Спасибо! Мы свяжемся.", "Sağ olun! Sizinlə əlaqə saxlayacağıq.", "Teşekkürler! Sizinle iletişime geçeceğiz."),
  "gl.form.error":     e("Something went wrong. Please try again.", "Что-то пошло не так.", "Xəta baş verdi. Yenidən cəhd edin.", "Bir hata oluştu."),
  "gl.bizType.hotel":  e("Hotel", "Отель", "Otel", "Otel"),
  "gl.bizType.restaurant": e("Restaurant", "Ресторан", "Restoran", "Restoran"),
  "gl.bizType.taxi":   e("Taxi / Transport", "Такси / Транспорт", "Taksi / Nəqliyyat", "Taksi / Ulaşım"),
  "gl.bizType.tour":   e("Tour agency", "Турагентство", "Tur agentliyi", "Tur acentesi"),
  "gl.bizType.other":  e("Other", "Другое", "Digər", "Diğer"),

  // ============ PRICING ============
  "gl.pricing.kicker": e("Pricing", "Цены", "Qiymət", "Fiyatlandırma"),
  "gl.pricing.title":  e("Simple, fair pricing.", "Просто и честно.", "Sadə və ədalətli qiymət.", "Basit ve adil fiyatlandırma."),
  "gl.pricing.sub":    e(
    "Free for travelers. Paid only if you want the extras.",
    "Бесплатно для путешественников.",
    "Səyahətçilər üçün pulsuz.",
    "Gezginler için ücretsiz."
  ),
  "gl.pricing.free":          e("Free", "Бесплатно", "Pulsuz", "Ücretsiz"),
  "gl.pricing.free.price":    e("$0", "0 ₽", "0 ₼", "0 ₺"),
  "gl.pricing.free.desc":     e("Everything you need to get started.", "Всё для старта.", "Başlamaq üçün hər şey.", "Başlamak için her şey."),
  "gl.pricing.free.f1":       e("Core features", "Основные функции", "Əsas xüsusiyyətlər", "Temel özellikler"),
  "gl.pricing.free.f2":       e("Multilingual support", "Несколько языков", "Çoxdilli dəstək", "Çok dilli destek"),
  "gl.pricing.free.f3":       e("Emergency numbers", "Экстренные номера", "Təcili nömrələr", "Acil numaralar"),
  "gl.pricing.free.f4":       e("Ads supported", "С рекламой", "Reklamlı", "Reklam destekli"),
  "gl.pricing.premium":       e("Premium", "Премиум", "Premium", "Premium"),
  "gl.pricing.premium.price": e("$4.99 / month", "$4.99 / мес", "$4.99 / ay", "$4.99 / ay"),
  "gl.pricing.premium.desc":  e("For frequent travelers who want the best.", "Для частых путешественников.", "Tez-tez səyahət edənlər üçün.", "Sık gezginler için."),
  "gl.pricing.premium.f1":    e("Everything in Free", "Всё из Free", "Free-dəki hər şey", "Free'deki her şey"),
  "gl.pricing.premium.f2":    e("No ads", "Без рекламы", "Reklamsız", "Reklamsız"),
  "gl.pricing.premium.f3":    e("AI personalized recommendations", "AI-рекомендации", "AI tövsiyələri", "AI önerileri"),
  "gl.pricing.premium.f4":    e("Full offline access", "Полный офлайн", "Tam oflayn", "Tam çevrimdışı"),
  "gl.pricing.premium.f5":    e("Priority support", "Приоритетная поддержка", "Prioritet dəstək", "Öncelikli destek"),
  "gl.pricing.popular":       e("Most popular", "Популярный", "Ən populyar", "En popüler"),
  "gl.pricing.cta.free":      e("Get started free", "Начать бесплатно", "Pulsuz başla", "Ücretsiz başla"),
  "gl.pricing.cta.premium":   e("Go Premium", "Перейти на Premium", "Premium-a keç", "Premium'a geç"),

  // ============ ABOUT ============
  "gl.about.kicker": e("About", "О нас", "Haqqımızda", "Hakkımızda"),
  "gl.about.title":  e("Built by travelers, for travelers.", "Создано путешественниками.", "Səyahətçilər tərəfindən yaradılıb.", "Gezginler tarafından yapıldı."),
  "gl.about.mission.title": e("Our mission", "Наша миссия", "Missiyamız", "Misyonumuz"),
  "gl.about.mission.body":  e("Make first-time travel safer, fairer and more enjoyable for everyone — starting in Baku, scaling worldwide.", "Сделать первое путешествие безопаснее и честнее.", "İlk səyahəti hamı üçün təhlükəsiz etmək.", "İlk seyahati herkes için güvenli kılmak."),
  "gl.about.scale.title": e("Starting in Baku, scaling globally", "Начинаем в Баку, масштабируемся глобально", "Bakıdan başlayır, qloballaşır", "Bakü'den başlayıp küresel"),
  "gl.about.scale.body":  e("We launch in cities where the gap between local and tourist experience is widest. Next: Tbilisi, Istanbul, Tashkent.", "Запускаемся там, где разрыв между местными и туристами максимален.", "Yerli və turist təcrübəsi arasındakı fərqi azaldırıq.", "Yerel ve turist deneyimi farkını kapatıyoruz."),
  "gl.about.team.title":  e("The team", "Команда", "Komanda", "Ekip"),
  "gl.about.team.body":   e("A small, multidisciplinary team based between Baku and Istanbul.", "Небольшая команда между Баку и Стамбулом.", "Bakı və İstanbul arasında kiçik komanda.", "Bakü ve İstanbul arasında küçük bir ekip."),

  // ============ CONTACT ============
  "gl.contact.kicker": e("Contact", "Контакты", "Əlaqə", "İletişim"),
  "gl.contact.title":  e("Let's talk.", "Давайте поговорим.", "Gəlin danışaq.", "Konuşalım."),
  "gl.contact.sub":    e("Questions, press, partnerships — we read everything.", "Вопросы, пресса, партнёрства.", "Suallar, mətbuat, tərəfdaşlıq.", "Sorular, basın, ortaklık."),

  // ============ DOWNLOAD ============
  "gl.download.kicker": e("Download", "Скачать", "Yüklə", "İndir"),
  "gl.download.title":  e("Download GoLocal today.", "Скачайте GoLocal сегодня.", "GoLocal-u bu gün yüklə.", "GoLocal'i bugün indirin."),
  "gl.download.sub":    e("Coming soon to iOS and Android. Join the waitlist and we'll email you the moment it lands.", "Скоро на iOS и Android. Подпишитесь на лист ожидания.", "iOS və Android üçün tezliklə.", "iOS ve Android için yakında."),
  "gl.download.appstore": e("App Store", "App Store", "App Store", "App Store"),
  "gl.download.playstore": e("Google Play", "Google Play", "Google Play", "Google Play"),
  "gl.download.appstore.line1": e("Download on the", "Загрузите в", "Yüklə", "İndir"),
  "gl.download.playstore.line1": e("Get it on", "Доступно в", "Əldə et", "Edinin"),
  "gl.waitlist.placeholder": e("you@example.com", "you@example.com", "you@example.com", "you@example.com"),
  "gl.waitlist.thanks": e("You're on the list — talk soon!", "Вы в листе ожидания!", "Növbədəsiniz!", "Listedeyim!"),
  "gl.waitlist.already": e("You're already on the list.", "Вы уже в списке.", "Artıq siyahıdasınız.", "Zaten listedesiniz."),

  // ============ DEMO BANNER ============
  "gl.demo.banner.title": e("See GoLocal in action — try the live Baku demo", "Попробуйте живое демо Баку", "Bakı demonu yoxlayın", "Bakü canlı demoyu deneyin"),
  "gl.demo.banner.body":  e("Real emergency numbers, real metro routes, real landmarks — exactly what travelers will see in our first launch city.", "Реальные данные первого города запуска.", "İlk şəhərimizdən real məlumat.", "İlk şehrimizden gerçek veriler."),

  // ============ DEMO SUB-NAV / SHELL ============
  "demo.subbanner": e(
    "You're inside the live Baku demo — this is what real users will experience in the app.",
    "Вы в живом демо Баку.",
    "Siz canlı Bakı demosundasınız.",
    "Canlı Bakü demosundasınız."
  ),
  "demo.title": e("Live demo · Baku", "Живое демо · Баку", "Canlı demo · Bakı", "Canlı demo · Bakü"),

  // ============ Existing Baku content (kept) ============
  "hero.kicker": e("Your offline-friendly Baku companion", "Ваш офлайн-помощник по Баку", "Bakı üçün oflayn bələdçiniz", "Çevrimdışı Bakü rehberiniz"),
  "hero.title": e("Discover Baku, the city of fire and sea", "Откройте Баку — город огня и моря", "Bakını kəşf edin — od və dəniz şəhəri", "Bakü'yü keşfedin — ateş ve deniz şehri"),
  "hero.sub": e("Essential info, emergency numbers, and transport guidance — available even without internet.", "Главная информация, экстренные номера и транспорт — даже без интернета.", "Əsas məlumat, təcili nömrələr və nəqliyyat — internet olmadan belə.", "Temel bilgiler, acil numaralar ve ulaşım — internet olmadan bile."),
  "hero.cta.explore": e("Explore the city", "Изучить город", "Şəhəri kəşf et", "Şehri keşfet"),
  "hero.cta.emergency": e("Emergency numbers", "Экстренные номера", "Təcili nömrələr", "Acil numaralar"),
  "home.public.title": e("No login needed", "Без регистрации", "Qeydiyyat tələb olunmur", "Giriş gerekmez"),
  "home.public.sub": e("Critical info works offline. For favorites and reviews, sign in.", "Важная информация работает офлайн.", "Vacib məlumat oflayn işləyir.", "Kritik bilgiler çevrimdışı çalışır."),
  "home.places.title": e("Top landmarks", "Главные достопримечательности", "Əsas məkanlar", "Önemli yerler"),
  "home.places.sub": e("Iconic stops every traveler should see.", "Легендарные места.", "Əsas yerlər.", "Önemli yerler."),

  "about.title": e("About Baku", "О Баку", "Bakı haqqında", "Bakü Hakkında"),
  "about.lead": e(
    "Baku is the capital of Azerbaijan, a UNESCO-listed city where medieval walls meet modern flame towers on the shores of the Caspian Sea.",
    "Баку — столица Азербайджана, город ЮНЕСКО.",
    "Bakı — Azərbaycanın paytaxtıdır.",
    "Bakü, Azerbaycan'ın başkenti."
  ),
  "about.history.title": e("History", "История", "Tarix", "Tarih"),
  "about.history.body": e(
    "Baku has been continuously inhabited for over a thousand years. Its walled Old City (Icherisheher) holds the 12th-century Maiden Tower and the Palace of the Shirvanshahs.",
    "Баку населён более тысячи лет.",
    "Bakı min ildən artıqdır məskunlaşmışdır.",
    "Bakü bin yıldan fazladır iskan edilmektedir."
  ),
  "about.culture.title": e("Culture", "Культура", "Mədəniyyət", "Kültür"),
  "about.culture.body": e(
    "A crossroads of Persian, Russian, Turkic and European influences. Tea, kebab, plov and dolma are everywhere; hospitality is taken seriously.",
    "Перекрёсток влияний.",
    "Mədəniyyətlərin qovşağı.",
    "Kültürlerin kavşağı."
  ),
  "about.when.title": e("When to visit", "Когда ехать", "Nə vaxt gəlmək", "Ne zaman gelinir"),
  "about.when.body": e(
    "April–June and September–October are ideal: warm sea breezes, mild temperatures.",
    "Апрель–июнь и сентябрь–октябрь идеальны.",
    "Aprel–iyun və sentyabr–oktyabr idealdır.",
    "Nisan–Haziran ve Eylül–Ekim ideal."
  ),

  "emergency.title": e("Emergency Numbers", "Экстренные номера", "Təcili Nömrələr", "Acil Numaralar"),
  "emergency.lead": e("Tap any number to call. Save this page for offline access.", "Нажмите номер.", "Zəng üçün toxunun.", "Aramak için dokunun."),
  "emergency.unified": e("Unified emergency", "Единая служба", "Vahid təcili", "Birleşik acil"),
  "emergency.police": e("Police", "Полиция", "Polis", "Polis"),
  "emergency.fire": e("Fire", "Пожарная", "Yanğın", "İtfaiye"),
  "emergency.ambulance": e("Ambulance", "Скорая", "Təcili yardım", "Ambulans"),
  "emergency.gas": e("Gas leak", "Утечка газа", "Qaz sızması", "Gaz sızıntısı"),
  "emergency.tourist": e("Tourist police", "Туристическая полиция", "Turist polisi", "Turist polisi"),

  "tourist.title": e("Top Tourist Places", "Топ туристических мест", "Əsas Turist Yerləri", "Turistik Yerler"),
  "tourist.lead": e("A curated read-only list. No login required.", "Подборка для чтения.", "Yalnız oxumaq üçün siyahı.", "Salt okunur liste."),

  "transport.title": e("Transport & Districts", "Транспорт и районы", "Nəqliyyat və Rayonlar", "Ulaşım ve İlçeler"),
  "transport.lead": e("Metro, buses, taxis, and the main districts you'll move between.", "Метро, автобусы, такси.", "Metro, avtobus, taksi.", "Metro, otobüs, taksi."),
  "transport.metro": e("Metro lines", "Линии метро", "Metro xətləri", "Metro hatları"),
  "transport.bus": e("Key bus routes", "Основные автобусы", "Əsas avtobus marşrutları", "Önemli otobüs hatları"),
  "transport.districts": e("Main districts", "Основные районы", "Əsas rayonlar", "Ana ilçeler"),
  "transport.map": e("Offline map", "Офлайн-карта", "Oflayn xəritə", "Çevrimdışı harita"),
  "transport.download": e("Download pocket guide (PDF)", "Скачать карманный гид", "Cib bələdçisini endir", "Cep rehberini indir"),

  "auth.welcome": e("Welcome back", "С возвращением", "Xoş gəldiniz", "Tekrar hoş geldiniz"),
  "auth.signup": e("Create your account", "Создать аккаунт", "Hesab yaradın", "Hesap oluştur"),
  "auth.email": e("Email", "Email", "E-poçt", "E-posta"),
  "auth.password": e("Password", "Пароль", "Şifrə", "Şifre"),
  "auth.signin.btn": e("Sign in", "Войти", "Daxil ol", "Giriş"),
  "auth.signup.btn": e("Sign up", "Зарегистрироваться", "Qeydiyyat", "Kaydol"),
  "auth.google": e("Continue with Google", "Продолжить с Google", "Google ilə davam et", "Google ile devam et"),
  "auth.toggle.signup": e("No account? Sign up", "Нет аккаунта? Зарегистрируйтесь", "Hesabınız yoxdur?", "Hesabınız yok mu?"),
  "auth.toggle.signin": e("Have an account? Sign in", "Есть аккаунт? Войти", "Hesabınız var?", "Hesabınız var mı?"),

  "browse.title": e("Browse places", "Все места", "Bütün yerlər", "Tüm yerler"),
  "profile.title": e("Your profile", "Ваш профиль", "Sizin profil", "Profiliniz"),
  "favorites.title": e("Your favorites", "Избранное", "Sevimliləriniz", "Favorileriniz"),
};

export function tr(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? key;
}

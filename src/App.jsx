import { useEffect } from 'react'
import './App.css'

import abusimbel from './assets/abusimbel.png'
import bookingNile from './assets/booking-nile.png'
import guest1 from './assets/guest-1.png'
import guest2 from './assets/guest-2.png'
import guest3 from './assets/guest-3.png'
import guest4 from './assets/guest-4.png'
import heroCollage from './assets/hero-collage.png'
import map from './assets/map.png'
import nubian from './assets/nubian.png'
import philae from './assets/philae.png'

const navItems = ['مرنخ', 'البرنامج', 'التقييمات', 'الحجز', 'اتصل بنا']

const stats = [
  { value: '+500', label: 'رحلة', text: 'تم تنظيمها بنجاح بأعلى معايير الجودة والأمان' },
  { value: '25', label: 'وجهة', text: 'تغطي أجمل المدن المصرية من النوبة إلى الساحل الشمالي' },
  { value: '10', label: 'سنوات', text: 'من الخبرة في تنظيم الرحلات السياحية داخل مصر' },
  { value: '10', label: 'آلاف', text: 'عميل سعيد شاركونا مغامراتهم في اكتشاف مصر' },
]

const itinerary = [
  {
    title: 'جزيرة الفنتين',
    image: philae,
    icon: '⛵',
    text: 'تقع جزيرة الفنتين وسط النيل بأسوان، وكانت قديما مركزا دينيا وتجاريا هاما وحصنا جنوبيا لمصر. الجزيرة محاطة بالأزقة كمعبد خنوم ومقاييس النيل وقرى نوبية نابضة بالحياة.',
  },
  {
    title: 'القرية النوبية',
    image: nubian,
    icon: '🏘',
    text: 'ليست مجرد مكان للسكن، بل هي تجسيد حي لتاريخ وحضارة شعب عريق. تحمل في طياتها ملامح أصالة وتراث فريد يستحق الاستكشاف والتقدير.',
  },
  {
    title: 'معبد أبو سمبل',
    image: abusimbel,
    icon: '🛕',
    text: 'تحفة معمارية منحوتة في الصخر بأمر رمسيس الثاني في النوبة، تجسد عظمة مصر القديمة وتحدي الإنسان في إتقان من الفن وبناء إرث عظيم.',
  },
]

const reviews = [
  { name: 'أبو سالم', country: 'السعودية', rating: '4.2', image: guest1 },
  { name: 'بن نجاح', country: 'الإمارات', rating: '4.5', image: guest2 },
  { name: 'دكتور إياس', country: 'البحرين', rating: '4.2', image: guest3 },
  { name: 'عبد الله أحمد', country: 'السودان', rating: '4.5', image: guest4 },
]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function Header() {
  return (
    <header className="site-header" data-reveal>
      <a className="stamp" href="#hero" aria-label="حلوة يا بلدي">
        حلوة
        <span>يا بلدي</span>
      </a>
      <nav aria-label="التنقل الرئيسي">
        {navItems.map((item) => (
          <a key={item} href={`#${item === 'مرنخ' ? 'about' : item === 'البرنامج' ? 'program' : item === 'التقييمات' ? 'reviews' : item === 'الحجز' ? 'book' : 'contact'}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="brand">
        <span>إرث مصر</span>
        <strong>ERTH MASR</strong>
      </div>
    </header>
  )
}

function App() {
  useReveal()

  return (
    <main>
      <Header />

      <section className="hero-section" id="hero">
        <div className="hero-art" data-reveal>
          <img src={heroCollage} alt="مجموعة رمزية من أشخاص ومعالم مصرية" />
          <span className="sun-glow" />
        </div>
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">إرث مصر يقدم</p>
          <h1>رحلة داخل مصر</h1>
          <p>استمتع بتجربة سياحية لا تنسى في أرض الحضارة مع برامج مصممة خصيصا لك.</p>
          <a className="primary-cta" href="#book">احجز الآن</a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-heading" data-reveal>
          <p>مرنخ</p>
          <h2>منصة سياحية متخصصة تعيد إحياء الوعي بالتراث</h2>
        </div>
        <div className="about-grid">
          <article data-reveal>
            <span />
            <p>الرؤية: أن نكون المرجع الأول في تقديم السياحة القائمة على الهوية، وتحويل مصر من وجهة تقليدية إلى تجربة معرفية ملهمة.</p>
          </article>
          <article data-reveal>
            <span />
            <p>الرسالة: تمكين السياح والمهتمين من استكشاف الإرث المصري الحقيقي من خلال تدفق معلوماتي موحد التنظيم.</p>
          </article>
          <article data-reveal>
            <span />
            <p>نصمم رحلات تجمع بين المعرفة والراحة، وتفتح الباب لتجارب محلية أصيلة.</p>
          </article>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" data-reveal key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="program-section" id="program">
        <div className="section-heading" data-reveal>
          <p>برنامج الرحلة</p>
          <h2>مسار حي يمر على أجمل محطات الجنوب</h2>
        </div>
        <div className="route-line" aria-hidden="true" />
        <div className="itinerary">
          {itinerary.map((stop) => (
            <article className="stop" data-reveal key={stop.title}>
              <div className="stop-copy">
                <span className="stop-icon">{stop.icon}</span>
                <h3>{stop.title}</h3>
                <p>{stop.text}</p>
              </div>
              <img src={stop.image} alt={stop.title} />
            </article>
          ))}
        </div>
        <div className="program-actions" data-reveal>
          <a className="primary-cta" href="#book">للحجز</a>
          <button type="button">تحميل البرنامج</button>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section-heading" data-reveal>
          <p>شاركنا عملاؤنا لحظات استثنائية</p>
          <h2>تقييمات من رحلات إرث مصر الحقيقية</h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" data-reveal key={review.name}>
              <img src={review.image} alt={review.name} />
              <h3>{review.name}</h3>
              <p>({review.country})</p>
              <strong>{review.rating}</strong>
              <span>★★★★★</span>
              <small>رحلة لطيفة التفاصيل، كل شيء كان منظم والطاقم مهتم بكل لحظة.</small>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section" id="book">
        <img className="booking-image" src={bookingNile} alt="مشهد نهر النيل عند الغروب" data-reveal />
        <form className="booking-form" data-reveal>
          <p>ابدأ رحلتك الآن</p>
          <h2>احجز رحلتك الآن</h2>
          <label>
            البريد الإلكتروني
            <input type="email" name="email" />
          </label>
          <label>
            كلمة السر
            <input type="password" name="password" />
          </label>
          <button type="submit">الإرسال</button>
          <div className="socials" aria-label="تواصل معنا">
            <a href="#contact">ف</a>
            <a href="#contact">◎</a>
            <a href="#contact">♪</a>
          </div>
        </form>
      </section>

      <section className="contact-section" id="contact">
        <img src={map} alt="خريطة موقع إرث مصر" data-reveal />
        <form className="contact-form" data-reveal>
          <div>
            <label>
              الاسم الأول
              <input placeholder="محمد" />
            </label>
            <label>
              الاسم الأخير
              <input placeholder="محمود" />
            </label>
          </div>
          <label>
            رقم الهاتف
            <input placeholder="Enter here" />
          </label>
          <label>
            رسالتك
            <textarea placeholder="Enter here" />
          </label>
          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  )
}

export default App

import styles from "./index.module.scss";
import ForumIcon from "@mui/icons-material/Forum";
import SchoolIcon from "@mui/icons-material/School";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <p className={styles.welcome}>Welcome to Rever Center</p>
            <h1 className={styles.header}>
              Because young people understand young people!
            </h1>
            <p className={styles.description}>
              Career, education, work, community and various services are here.
              This place is perfect for you!
            </p>
            <div className={styles.btns}>
              <span className={styles.getBtn}>Get started!</span>
              <span className={styles.aboutBtn}>About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.second}>
        <div className={styles.right}></div>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={styles.header}>
              <p>About Us</p>
              <h1>What is the purpose of Rever Center?</h1>
              <hr />
            </div>
            <div className={styles.cardList}>
              <div className={styles.card}>
                <ForumIcon fontSize="large" className={styles.icon} />
                <div>
                  <h5>Community</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti vel facere beatae animi non soluta saepe.
                    Doloremque architecto assumenda libero.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <SchoolIcon fontSize="large" className={styles.icon} />
                <div>
                  <h5>Study</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti vel facere beatae animi non soluta saepe.
                    Doloremque architecto assumenda libero.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <MiscellaneousServicesIcon
                  fontSize="large"
                  className={styles.icon}
                />
                <div>
                  <h5>Services</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti vel facere beatae animi non soluta saepe.
                    Doloremque architecto assumenda libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.firstBanner}>
        <div className={styles.glass}>
          <h1>
            Rever With You <p>Forever!</p>
          </h1>
        </div>
      </section>
      <section className={styles.slider}>
        <div className="container">
          <Swiper 
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay , Pagination]}
            className={styles.sliderList}
          >
            <SwiperSlide className={styles.sliderItem}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 3</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 4</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 5</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 6</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 7</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 8</SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

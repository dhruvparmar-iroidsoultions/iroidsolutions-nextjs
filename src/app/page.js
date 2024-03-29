import styles from "./page.module.css";
import "./page.css";
import HeroSection from "@/components/home/heroSection";
import VideoTestimonial from "@/components/home/videoTestimonial";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <VideoTestimonial />
    </main>
  );
}

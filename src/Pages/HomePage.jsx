//! Imported Components/Variables----------------
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import HomeSection from "../Components/HomeSection";
import Testimonial from "../Components/Testimonial/Testimonial";
import Work from "../Components/Work/Work";
import ContactSection from "../Components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      {/* <Navbar className="" /> */}
      <main className="main">
        <HomeSection />

        <Services />

        <Work />

        <Testimonial />

        <ContactSection />
      </main>
    </>
  );
}

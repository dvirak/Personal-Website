//! Imported Components/Variables----------------
import Navbar from "../Components/Navbar";

export default function Home() {
  const pathname = window.location.pathname;

  console.log(pathname);

  return (
    <>
      <Navbar className="" />
      <main className="main">
        {/* /*=============== HOME ===============*/}

        <section className="home section"></section>

        {/* /*=============== SERVICES ===============*/}

        <section className="services section"></section>

        {/* /*=============== WORK ===============*/}

        <section className="work section"></section>

        {/* /*=============== TESTIMONIAL ===============*/}

        <section className="testimonial section"></section>
      </main>
    </>
  );
}

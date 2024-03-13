//! Imported Components/Variables----------------
import Navbar from "../Components/Navbar";

export default function Home() {
  const pathname = window.location.pathname;

  console.log(pathname);

  return (
    <>
      <Navbar className="" />
      <div className="home-div">
        <h1>HOME</h1>
      </div>
    </>
  );
}

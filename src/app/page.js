// import Image from "next/image";

import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";

export const metadata = {
  title : "Home - Task Manager"
}

const Home = () => {
  return (
    <div className="text-center">
      <CustomNavbar/>
      <div className="text-center text-2xl text-blue-500 m-4">
          <>This is the Home Page</>
          <br/>
          Welcome to Next.js with Tailwind CSS!
      </div>
      <Footer/>
    </div>   
  );
};

export default Home;
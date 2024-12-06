// import Image from "next/image";

import ActionSection from "@/components/homepage/ActionSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/TestimonialSection";

export const metadata = {
  title : "Home - Task Manager"
}

const Home = () => {
  return (
    <div>
      <BannerSection/>
      <FeatureSection/>
      <ActionSection/> 
      <TestimonialSection/>
      <ContactForm/>
    </div>   
  );
};

export default Home;
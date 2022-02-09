import { useEffect, useState } from "react";
import { ToTopBtn } from "./backToTopButtonStyles";

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
      showButton? <ToTopBtn onClick={scrollToTop}>&#8679;</ToTopBtn>:null
    )
};

export default BackToTopBtn;

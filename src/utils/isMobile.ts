import { useState, useEffect } from "react";

export const useIsMobile = (): boolean => {
  const mobileMaxWidth = 980;
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileStatus = () => {
    const viewportWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setIsMobile(viewportWidth <= mobileMaxWidth);
  };

  useEffect(() => {
    checkMobileStatus();

    window.addEventListener("resize", checkMobileStatus);

    return () => {
      window.removeEventListener("resize", checkMobileStatus);
    };
  }, []);

  return isMobile;
};

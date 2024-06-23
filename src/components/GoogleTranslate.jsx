import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const scriptId = "google-translate-script";

    if (window.google && window.google.translate) {
      return;
    }

    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.onerror = () => {
        console.error("Failed to load the Google Translate script");
      };
      document.body.appendChild(script);
    };

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    if (document.getElementById(scriptId)) {
      if (window.googleTranslateElementInit) {
        googleTranslateElementInit();
      }
    } else {
      window.googleTranslateElementInit = googleTranslateElementInit;
      addGoogleTranslateScript();
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;

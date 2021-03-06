import React, { useEffect } from "react";
import {
  Header,
  Banner,
  BestCard,
  CardOrder,
  CalculatorCashback,
  HowToGetCard,
  HelpYou,
  MobileBanking,
  AdditionalInfo,
  Partners,
  Footer,
  FixedHeader,
  OldCardOrder,
} from "./components";
import { useTranslation } from "react-i18next";

import { YMInitializer } from "react-yandex-metrika";
import SnackBarBottom from "./components/SnackBar";
import * as Scroll from "react-scroll";

function App() {
  const { t, i18n } = useTranslation();
  const orderRef: any = React.useRef(null);
  const oldOrderRef: any = React.useRef(null);
  const [lang, setLang] = React.useState(i18n.language ? i18n.language : "ru");

  // useEffect(() => {
  //   i18n.changeLanguage('ru');
  // })

  const handleLangChange = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  const scrollToOrderRef = (flag: boolean) =>
    Scroll.animateScroll.scrollTo(
      flag ? orderRef.current.offsetTop - 100 : orderRef.current.offsetTop - 100
    );

  const scrollToOldOrderRef = (flag: boolean) =>
    Scroll.animateScroll.scrollTo(
      flag
        ? oldOrderRef.current.offsetTop - 100
        : oldOrderRef.current.offsetTop - 100
    );

  const [isSend, setSend] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("default");
  const snackUp = (message: string) => {
    setMessage(message);
    setSend(true);
  };

  return (
    <div>
      <YMInitializer
        accounts={[65756602]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
        }}
      />
      <Header
        lang={lang}
        changeLang={handleLangChange}
        scrollToOrder={scrollToOrderRef}
      />
      <FixedHeader
        lang={lang}
        changeLang={handleLangChange}
        scrollToOrder={scrollToOrderRef}
      />
      <Banner />
      <BestCard />
      <CalculatorCashback scrollToOrder={scrollToOrderRef} />
      <HowToGetCard />
      <CardOrder
        refProp={orderRef}
        scrollToOrder={scrollToOrderRef}
        snackUp={(message: string) => snackUp(message)}
      />
      <Partners />

      <OldCardOrder refProp={oldOrderRef} scrollToOrder={scrollToOldOrderRef} />
      <MobileBanking />
      <AdditionalInfo />
      <HelpYou />
      <Footer />
      <SnackBarBottom
        open={isSend}
        message={message}
        close={() => setSend(false)}
      />
    </div>
  );
}

export default App;

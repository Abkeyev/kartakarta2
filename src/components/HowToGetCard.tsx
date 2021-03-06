import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm,
        position: "relative",
      },
      gridRoot: {
        display: "grid",
        gridTemplateAreas: ' "b" "a" "c" ',
        alignItems: "unset",
      },
      gridRootRight: {
        display: "grid",
        gridTemplateAreas: ' "b" "a" "c" ',
        alignItems: "unset",
      },
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 28,
        lineHeight: "1.2",
        color: "#141414",
        display: "grid",
        alignItems: "end",
        gridArea: "b",
      },
      circleIphone: {
        width: 300,
        height: 300,
        gridArea: "a",
        margin: "auto",
        marginTop: 16,
        "& > img": {
          width: "100%",
        },
      },
      animPhone: {
        animationName: "$upDown",
        transform: "translate3d(0, 0, 0)",
        animationDuration: "2s",
        animationDelay: "1s",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
      },
      onOff: {
        display: "none",
      },
      circleIphoneRight: {
        width: 300,
        height: 300,
        gridArea: "a",
        margin: "auto",
        marginTop: 16,
        "& > img": {
          width: "100%",
        },
      },
      ul: {
        gridArea: "c",
        padding: 0,
        paddingLeft: 24,
        margin: 0,
        marginTop: 16,
        listStyle: "none",
        position: "relative",
        "& > li": {
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          marginBottom: 14,
          color: "#5B5B5B",
        },
        "& > li:before": {
          content: "''",
          display: "block",
          marginTop: 6,
          width: 8,
          height: 8,
          borderRadius: "50%",
          position: "absolute",
          left: 0,
          background: "#FF6056",
        },
      },
      mb30: {
        marginBottom: "1rem",
      },
      numCashGive: {
        background: "linear-gradient(72.71deg, #FFF6F5 0%, #FFF9EC 99.19%)",
        borderRadius: 8,
        padding: 64,
      },
      subTextCash: {
        display: "block",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        textAlign: "center",
        color: "#4D565F",
      },
      numTextCash: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 34,
        textAlign: "center",
        color: "#000D1A",
      },
      mainTextCash: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 30,
        textAlign: "center",
        color: "#000D1A",
        margin: "32px 0",
      },
      circleClients: {
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 24,
        color: "#000000",
        "& img": {
          marginRight: 16,
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      ...rootSmXl,
      gridRoot: {
        display: "grid",
        gridTemplateAreas: ' "a b" "a c" ',
        alignItems: "unset",
      },
      gridRootRight: {
        display: "grid",
        gridTemplateAreas: ' "b a" "c a" ',
        alignItems: "unset",
      },
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 56,
        lineHeight: "1.2",
        color: "#141414",
        display: "grid",
        alignItems: "end",
        gridArea: "b",
        marginLeft: 50,
      },
      circleIphone: {
        width: 450,
        height: 450,
        gridArea: "a",
        "& > img": {
          width: "100%",
        },
      },
      circleIphoneRight: {
        width: 450,
        height: 450,
        gridArea: "a",
        "& > img": {
          width: "100%",
        },
      },
      ul: {
        gridArea: "c",
        padding: 0,
        paddingLeft: 24,
        margin: 0,
        marginTop: 16,
        width: "60%",
        listStyle: "none",
        position: "relative",
        marginLeft: 50,
        "& > li": {
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          marginBottom: 14,
          color: "#5B5B5B",
        },
        "& > li:before": {
          content: "''",
          display: "block",
          marginTop: 6,
          width: 8,
          height: 8,
          borderRadius: "50%",
          position: "absolute",
          left: 0,
          background: "#FF6056",
        },
      },
      mb30: {
        marginBottom: "5rem",
      },
      numCashGive: {
        background: "linear-gradient(72.71deg, #FFF6F5 0%, #FFF9EC 99.19%)",
        borderRadius: 8,
        padding: 64,
      },
      subTextCash: {
        display: "block",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        textAlign: "center",
        color: "#4D565F",
      },
      numTextCash: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 96,
        textAlign: "center",
        color: "#000D1A",
      },
      mainTextCash: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 36,
        textAlign: "center",
        color: "#000D1A",
        margin: "64px 0",
      },
      circleClients: {
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 24,
        color: "#000000",
        "& img": {
          marginRight: 16,
        },
      },
    },

    [theme.breakpoints.between("xs", "sm")]: {
      gridRoot: {
        display: "grid",
        gridTemplateAreas: ' "b" "a" "c" ',
        alignItems: "unset",
      },

      circleIphone: {
        width: 300,
        height: 300,
        margin: "auto",
        gridArea: "a",
        marginTop: 16,
        "& img": {
          width: "100%",
        },
      },
      animPhone: {
        animationName: "$upDown",
        transform: "translate3d(0, 0, 0)",
        animationDuration: "2s",
        animationDelay: "1s",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
      },
      onOff: {
        display: "none",
      },
      circleIphoneRight: {
        width: 300,
        height: 300,
        margin: "auto",
        marginTop: 16,
        gridArea: "a",
        "& > img": {
          width: "100%",
        },
      },

      mainTitle: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 28,
        textAlign: "center",
        lineHeight: "1.2",
        color: "#141414",
        display: "grid",
        alignItems: "end",
        gridArea: "b",
      },

      ul: {
        gridArea: "c",
        padding: 0,
        paddingLeft: 24,
        margin: 0,
        marginTop: 16,
        listStyle: "none",
        position: "relative",
        "& > li": {
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          marginBottom: 14,
          color: "#5B5B5B",
        },
        "& > li:before": {
          content: "''",
          display: "block",
          marginTop: 6,
          width: 8,
          height: 8,
          borderRadius: "50%",
          position: "absolute",
          left: 0,
          background: "#FF6056",
        },
      },
    },
  })
);

const HowToGetCard = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();
  const [countUp, setCountUp] = React.useState(false);

  React.useEffect(() => {
    window.document.addEventListener("scroll", (d) => {
      const doc = document;
      const element = doc && doc.getElementById("countUp");
      const scrollTop = element && element.offsetTop;
      scrollTop && window.scrollY + 700 >= scrollTop && setCountUp(true);
    });
  });

  return (
    <Grid container className={classes.mainRoot}>
      <Grid
        container
        alignItems="center"
        className={`${classes.root} ${classes.gridRoot}`}
      >
        <Grid className={classes.circleIphone}>
          <img src="circlePhone-1.png" className={classes.animPhone} />
        </Grid>

        <Typography className={classes.mainTitle}>
          Любимые <br className={classes.onOff} /> категории
        </Typography>
        <ul className={classes.ul}>
          <li className={classes.li}>
            Каждый месяц вы получаете новый набор категорий с повышенным
            кэшбэком до 10%
          </li>
          <li className={classes.li}>
            Выбирайте 2 любимые категории на месяц в приложении BCC.KZ
          </li>
          <li className={classes.li}>
            Переводите накопленный кэшбэк на #картакарта в любое время
          </li>
        </ul>
      </Grid>

      <Grid container className={classes.root} id="countUp">
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.numCashGive}
        >
          <span className={classes.subTextCash}>
            Зачислено кэшбэка наших клиентов с января 2020 года
          </span>
          {countUp ? (
            <Typography className={classes.numTextCash}>
              {" "}
              <CountUp delay={0} start={88} end={108} duration={10} /> 0
              <CountUp
                delay={0}
                start={61}
                end={91}
                duration={5}
                separator=" "
              />{" "}
              <CountUp delay={0} start={243} end={443} duration={5} /> ₸
            </Typography>
          ) : (
            ""
          )}
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.mainTextCash}>
            Наши клиенты выбирают
          </Typography>
          <Grid container>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="1_cart.svg" />
              Продукты и <br />
              супермаркеты
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="2_eat.svg" />
              Кафе и рестораны
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="3_fly.svg" />
              АЗС
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="4_heart.svg" />
              Аптеки и оптики
            </Grid>

            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="5_play.svg" />
              Развлечения
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="6_medicine.svg" />
              Медицинские <br />
              услуги
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="7_ball.svg" />
              Спорт
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="8_taxi.svg" />
              Такси
            </Grid>

            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="9_clothes.svg" />
              Одежда и обувь
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="10_video.svg" />
              Кино
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="11_beauty.svg" />
              Услуги красоты
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={classes.circleClients}
            >
              <img src="12_other.svg" />И многое другое
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        className={`${classes.root} ${classes.gridRootRight}`}
      >
        <Typography className={classes.mainTitle}>
          У нас - <br className={classes.onOff} />
          Умная рассрочка
        </Typography>
        <ul className={classes.ul}>
          <li className={classes.li}>
            Решайте сами, как провести покупку – <br />в рассрочку или нет
          </li>
          <li className={classes.li}>Включайте режим рассрочки в один клик</li>
          <li className={classes.li}>
            Покупайте в рассрочку у партнеров до 12 мес, вне сети партнеров на 3
            мес
          </li>
        </ul>

        <Grid className={classes.circleIphoneRight}>
          <img src="gifka.gif" className={classes.animPhone} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowToGetCard;

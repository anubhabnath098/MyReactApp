import React from "react";
import Card from "./card";
import FrontPage from "./FrontPage";
import "../styles.css";
function Home() {
  return (
    <div className="home_page">
      <FrontPage></FrontPage>
      <div className="cards">
        <Card
          img="https://m.media-amazon.com/images/I/51kZRxvxg0L._AC_UY1000_.jpg"
          title="Walk like a pro"
          sub="featured"
          description="Choose from the best collection of sneakers that you have never seen before"
        />
        <Card
          img="https://m.media-amazon.com/images/I/81yCp+Z5YsL._AC_UY1000_.jpg"
          title="Be the best verson of yourself"
          sub="featured"
          description="Browse through a collection of budget friendly options"
        ></Card>
        <Card
          img="https://assets.ajio.com/medias/sys_master/root/20230816/jNff/64dcf126eebac147fcce6e94/-473Wx593H-460800206-grey-MODEL.jpg"
          title="Run not just for the sake of running"
          sub="featured"
          description="Choose among the pairs that best suit your personality"
        ></Card>
        <Card
          img="https://www.goldstarshoes.com/MediaThumb/medium/Media/p301.png"
          title="Welcome onboard"
          sub="featured"
          description="Become the coolest among the cools"
        ></Card>
        <Card
          img="https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Bless your feet with the future"
          sub="featured"
          description="Select from a collection of rare futuristic sneakers"
        ></Card>
      </div>
    </div>
  );
}
export default Home;

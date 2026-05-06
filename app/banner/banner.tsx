import "./banner.css";

export default function Banner() {
  return (
    <div className="banner"> 
      <div className="container">
        <div className="banner__all banner__one">
          <p className="banner__one__p1">Best Deals </p>
          <p className="banner__one__p2">Sale of the Month</p>
          <div className="timer">
            <p>00 <br/> DAYS</p>
            <p>:</p>
            <p>02 <br/> HOURS</p>
            <p>:</p>
            <p>18 <br/> MINS</p>
            <p>:</p>
            <p>46 <br/> SECS</p>
          </div>
          <a className="banner__button" href="">
            <p>Shop Now</p>
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

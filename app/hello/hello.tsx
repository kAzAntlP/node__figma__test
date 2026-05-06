import "./hello.css";

export default function Hello() {
  return (
    <div className="Hello">
      <div className="container">
        <div className="food">
          {/* <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a> */}
        </div>

        <div className="fresh">
          <h1>Fresh & Healthy Organic Food</h1>
          <p className="fresh__p">Sale Up to <br/> 48% off</p>
            <a href="" className="fresh__button">
              <p>Shop now</p>
              <img src="/Group (1).svg" alt="" />
            </a>
            <div className="ellipse">
              <img src="/Ellipse 10.svg" alt="" />
              <img src="/Ellipse 9.svg" alt="" />
              <img src="/Ellipse 9.svg" alt="" />
            </div>
        </div>

        
      </div>
    </div>
  );
}

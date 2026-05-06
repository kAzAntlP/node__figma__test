import "./header.css";

export default function Header() {
  return (
    <div className="container">

      

      <div className="hight">
        <div className="hight__one">
          <img src="/Map Pin.svg" alt="картинка" />
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div className="links">
          <div className="links__one">
            <p>Eng</p>
            <img src="/Vector.svg" alt="" />
          </div>
          <div className="links__two">
            <p>Usd</p>
            <img src="/Vector.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="header">
        <div className="plant">
          <img className="plant__img" src="/plant 1.svg" alt="картинка" />
          <h1>Ecobazar</h1>
        </div>
        <div className="form">
            <form action="#!" method="get">
              <input type="search" placeholder="Search"/>
              <button type="submit">Search</button>
            </form>
        </div>

        <div className="group">
            <img src="/Group.svg" alt="картинка" />
            <div className="p">
                <p className="p__one">Customer Services</p>
                <p className="p__two">(219) 555-0114</p>
            </div>
        </div>
      </div>

      
{/* <div className="dropdown">
        <button className="dropbtn">
          <img src="/menu 1.svg" alt="" />
        </button>
        <div className="dropdown-content">
          <a className="food__a vegetables" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/fish 2.svg" alt="" />
            <p>River Fish</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
          <a className="food__a" href="">
            <img src="/apple 1.svg" alt="" />
            <p>Fresh Fruit</p>
          </a>
        </div>
      </div> */}
    </div>
  );
}

import "./Home.css";
import Mercury2 from "../../image/png/Mercury2.png"
import Venus2 from "../../image/png/Venus2.png"
import Earth2 from "../../image/png/Earth2.png"
import Mars2 from "../../image/png/Mars2.png"
import Jupiter2 from "../../image/png/Jupiter2.png"
import Saturn2 from "../../image/png/Saturn2.webp"
import Uranus2 from "../../image/png/Uranus2.png"
import Neptune2 from "../../image/png/Neptune2.png"
import { useEffect, useRef, useState } from "react";

const Home = () => {
  // Select elements
  const imgSliderRef = useRef(null);

  // Initialize state
  const [indexSlider, setIndexSlider] = useState(0);
  const [index, setIndex] = useState(0);
  const [imgItems, setImgItems] = useState([]);
  const [items, setItems] = useState([]);
  const [infoItems, setInfoItems] = useState([]);

  useEffect(() => {
    const imgItems = document.querySelectorAll(".img-item");
    const items = document.querySelectorAll(".item");
    const infoItems = document.querySelectorAll(".info-item");

    setItems(items);
    setImgItems(imgItems);
    setInfoItems(infoItems);
  }, []);

  // Slider function
  const slider = () => {
    if (imgSliderRef.current) {
      imgSliderRef.current.style.transform = `rotate(${indexSlider * 60}deg)`;
    }

    items.forEach((item) => {
      item.style.transform = `rotate(${indexSlider * -60}deg)`;
    });

    document.querySelector(".img-item.active").classList.remove("active");
    imgItems[index].classList.add("active");

    document.querySelector(".info-item.active").classList.remove("active");
    infoItems[index].classList.add("active");
  };

  // Event handlers
  const handleNextClick = () => {
    setIndexSlider((prevState) => prevState + 1);

    setIndex((prevState) => {
      const newIndex = prevState + 1;
      return newIndex > imgItems.length - 1 ? 0 : newIndex;
    });

    slider();
  };

  const handlePrevClick = () => {
    setIndexSlider((prevState) => prevState - 1);

    setIndex((prevState) => {
      const newIndex = prevState - 1;
      return newIndex < 0 ? imgItems.length - 1 : newIndex;
    });

    slider();
  };

  return (
    <div className="parent h-dvh overflow-hidden">
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      />
      <div className="carousel">
        <div className="img-box">
          <div className="img-list">
            <div ref={imgSliderRef} className="img-slider">
              <div className="img-item active" style={{ "--i": 1 }}>
                <div className="item ">
                  <img className="size-[700px]" src={Mercury2} alt="" />
                </div>
              </div>

              <div className="img-item" style={{ "--i": 2 }}>
                <div className="item">
                  <img src={Venus2} alt="" />
                </div>
              </div>

              <div className="img-item" style={{ "--i": 3 }}>
                <div className="item">
                  <img src={Earth2} alt="" />
                </div>
              </div>

              <div className="img-item" style={{ "--i": 4 }}>
                <div className="item ">
                  <img className="size-[700px]" src={Mars2} alt="" />
                </div>
              </div>

              <div className="img-item" style={{ "--i": 5 }}>
                <div className="item">
                  <img src={Jupiter2} alt="" />
                </div>
              </div>

              <div className="img-item" style={{ "--i": 6 }}>
                <div className="item">
                  <img src={Saturn2} alt="" />
                </div>
              </div>

              <div className="img-item" style={{ "--i": 7 }}>
                <div className="item">
                  <img className="size-[700px]" src={Uranus2} alt="" />
                </div>
              </div>

              <div className="img-item" style={{ "--i": 8 }}>
                <div className="item">
                  <img className="size-[700px]" src={Neptune2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="info-item active">
          <h2>Mercury Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>

        <div className="info-item">
          <h2>Venus Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>

        <div className="info-item">
          <h2>Earth Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>

        <div className="info-item">
          <h2>Mars Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>

        <div className="info-item">
          <h2>Jupiter Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>

        <div className="info-item">
          <h2>Saturn Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>

        <div className="info-item">
          <h2>Uranus Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>

        <div className="info-item">
          <h2>Neptune Dragon DuoalShock 4 Wireless</h2>
          <h2>$50</h2>
          <div className="colors">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt
            veniam harum sed molestias quas rem atque iste molestiae, repellat
            accusamus asperiores pariatur, voluptas voluptates earum culpa,
            commodi voluptatibus aspernatur!
          </p>
          <a href="#" className="btn">
            {" "}
            buy Now
          </a>
        </div>
      </div>

      <div className="navigation">
        <button
          onClick={handleNextClick}
          className="prev-btn size-16 flex items-center justify-center p-2 rounded-full bg-white/30 backdrop-blur-sm"
          disabled={index === 7}
        >
          <i className="bx bx-chevron-left"></i>
        </button>
        <button
          onClick={handlePrevClick}
          className="next-btn size-16 flex items-center justify-center p-2 rounded-full bg-white/30 backdrop-blur-sm"
          disabled={index === 0}
        >
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;

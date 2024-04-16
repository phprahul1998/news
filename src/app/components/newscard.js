"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Newscard = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {}, []);

  function getNewsFeeds() {
    console.log("rahul");
    axios
      .post("/api/session", {
        query: "Top Stories of india",
      })
      .then((response) => {
        // const news = response.data;
        console.log(response.data["newsdata"]);
        setNewsData(response.data["newsdata"]);
      })
      .catch((error) => {});
  }

  const WheelControls = (slider) => {
    let touchTimeout;
    let position;
    let wheelActive;

    function dispatch(e, name) {
      position.x -= e.deltaX;
      position.y -= e.deltaY;
      slider.container.dispatchEvent(
        new CustomEvent(name, {
          detail: {
            x: position.x,
            y: position.y,
          },
        })
      );
    }

    function wheelStart(e) {
      position = {
        x: e.pageX,
        y: e.pageY,
      };
      dispatch(e, "ksDragStart");
    }

    function wheel(e) {
      dispatch(e, "ksDrag");
    }

    function wheelEnd(e) {
      dispatch(e, "ksDragEnd");
    }

    function eventWheel(e) {
      e.preventDefault();
      if (!wheelActive) {
        wheelStart(e);
        wheelActive = true;
      }
      wheel(e);
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        wheelActive = false;
        wheelEnd(e);
      }, 50);
    }

    slider.on("created", () => {
      slider.container.addEventListener("wheel", eventWheel, {
        passive: false,
      });
    });
  };
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );
  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        <button style={{ zIndex: "9999" }} onClick={getNewsFeeds}>
          get news
        </button>
        {newsData.map((item, index) => (
          <div className="keen-slider__slide" key={index}>
            <div className="NewsCard" style={{ backgroundColor: "red" }}>
              <div className="newImg">
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="newsdata">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <div>
                  <CiShare2 />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newscard;

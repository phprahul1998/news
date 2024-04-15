import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import { CiShare2 } from "react-icons/ci";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="main-container">
              <div className="title text-capitalize text-center fixed-top w-100 d-flex align-items-center justify-content-center">
                <h4>Discover</h4>
              </div>
              <div className="NewsCard" style={{ backgroundColor: "#515f3f" }}>
                <div className="newImg">
                  <img src="/first.webp" alt="" />
                </div>
                <div className="newsdata">
                  <h1>Billie Eilish joins musicians rallying against AI</h1>
                  <p>
                    Billie Eilish is one of nearly 250 prominent musicians who
                    have called for tech and music outfits to stop misusing
                    artificial intelligence, claiming the technology is being
                    used to devalue music, infringe upon the rights of artists,
                    and is an “assault on human creativity”.
                  </p>
                  <div>
                    <CiShare2 />
                  </div>
                </div>
              </div>
              <div className="NewsCard" style={{ backgroundColor: "#30333f" }}>
                <div className="newImg">
                  <img src="/second.webp" alt="" />
                </div>
                <div className="newsdata">
                  <h1>
                    Inside Mark Zuckerberg's controversial decision to turn down
                    Yahoo's $1 billion early offer to buy Facebook
                  </h1>
                  <p>
                    This is an excerpt from the book "Becoming Facebook" by Mike
                    Hoefflinger. It's the inside story of Facebook told by the
                    former Head of Global Business Marketing, chronicling the 10
                    major decisions Facebook made that led from their disastrous
                    stock drop in 2012 to one of the biggest companies in the
                    world.
                  </p>
                  <div>
                    <CiShare2 />
                  </div>
                </div>
              </div>
              <div className="NewsCard" style={{ backgroundColor: "#5d2601" }}>
                <div className="newImg">
                  <img src="/third.jpg" alt="" />
                </div>
                <div className="newsdata">
                  <h1>
                    Robert Kiyosaki Reacts to Prediction of Bitcoin Price
                    Dropping to $200
                  </h1>
                  <p>
                    The author of Rich Dad Poor Dad, Robert Kiyosaki, has
                    responded to some predictions by economist and best-selling
                    author Harry Dent, including one about bitcoin’s price
                    crashing to $200. Rich Dad Poor Dad is a 1997 book
                    co-authored by Kiyosaki and Sharon Lechter.
                  </p>
                  <div>
                    <CiShare2 />
                  </div>
                </div>
              </div>
              <div className="container-fluid d-flex justify-content-center footer-section">
                <Footer />
              </div>
            </div>
          </div>

          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
}

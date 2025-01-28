import "./collectionstyle/Home.css";
import { BsEmojiSmile } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="header">
        <div>
          <h1>Level up Your styles</h1>
          <p>With our stunning Collection</p>
          <button>Shop</button>
        </div>
        <div>
          <img
            className="header-img"
            src="https://media.istockphoto.com/id/1301194623/photo/asian-chinese-male-hand-holding-menswear-shirt-at-clothing-store-choosing-the-right-one.jpg?s=612x612&w=0&k=20&c=cPS28dY3VIJ9YcfY4WQXuxMbOQjjSD9zKbD_I9jQwXY="
          />
        </div>
      </div>

      {/* service */}

      <div className="service">
        <div className="service-container-1">
          <div>
            <h2>We Provide Best</h2>
            <h2>Customer Experience</h2>
          </div>
          <div>
            <p>
              {" "}
              || we ensure that one Customer have the best shopping experience
            </p>
          </div>
        </div>
        <div className="service-container-2">
          <div>
            <i>
              <BsEmojiSmile />
            </i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div>
            <i>
              <BsEmojiSmile />
            </i>
            <h4>New Arrivel</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div>
            <i>
              <BsEmojiSmile />
            </i>
            <h4>Fast and free shop</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ padding: "20px" }}>New Arrivel</h2>
      </div>

      <div className="new-arrivel">
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/1092199330/photo/variety-of-colorful-shirts-hanging-on-the-wooden-hangers-close-up.jpg?s=612x612&w=0&k=20&c=BB524K8b0HuzzmyKeDf1Jt4CbZCjlGwLnuCOeFUlOGo="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/2047679178/photo/set-of-four-colored-cotton-t-shirts-mockups-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=wo9bAKmONZEWXxQAaNfV0vVjokX6tABBTNhJk7QGOPg="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/2149783286/photo/mans-hand-pulls-out-one-hoodie-on-a-hanger-among-the-same-others.jpg?s=612x612&w=0&k=20&c=XfgXWYRi-QHrehjOnr_DAsaxHMt6SWc_hT3u5t0hN1Q="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/2192049947/photo/male-hand-holding-blue-jeans-by-the-waistband.jpg?s=612x612&w=0&k=20&c=jYOX1r61eS2xLqNTkNXAomgHRx7s203amtoBhN2kX1c="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
      </div>
      <div>
        <h2 style={{ padding: "20px" }}>Most wanted</h2>
      </div>

      <div className="new-arrivel">
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/1092199330/photo/variety-of-colorful-shirts-hanging-on-the-wooden-hangers-close-up.jpg?s=612x612&w=0&k=20&c=BB524K8b0HuzzmyKeDf1Jt4CbZCjlGwLnuCOeFUlOGo="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/2047679178/photo/set-of-four-colored-cotton-t-shirts-mockups-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=wo9bAKmONZEWXxQAaNfV0vVjokX6tABBTNhJk7QGOPg="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/2149783286/photo/mans-hand-pulls-out-one-hoodie-on-a-hanger-among-the-same-others.jpg?s=612x612&w=0&k=20&c=XfgXWYRi-QHrehjOnr_DAsaxHMt6SWc_hT3u5t0hN1Q="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img
            className="new-arrivel-img"
            src="https://media.istockphoto.com/id/2192049947/photo/male-hand-holding-blue-jeans-by-the-waistband.jpg?s=612x612&w=0&k=20&c=jYOX1r61eS2xLqNTkNXAomgHRx7s203amtoBhN2kX1c="
          />
          <button>
            Shop Now{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
      </div>

      {/* News */}
      <div className="news">
        <h2>Join our News Letter</h2>
        <p>
          Signup for our email newsletter to get exclusive discount and updates
        </p>
        <div>
          <input type="text" className="search"></input>
        </div>
        <div>
          <button>
            Subscribe{" "}
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-box-1">
            <h2 className="heading-text"> FLYWALK</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className="footer-icon-container">
              <i style={{ color: "#ffffff" }}>
                <FaInstagram />
              </i>
              <i style={{ color: "#ffffff" }}>
                <CiFacebook />
              </i>
              <i style={{ color: "#ffffff" }}>
                <BsTwitter />
              </i>
            </div>
          </div>
        </div>

        <p>@2025 FLYWALK</p>
      </div>
    </>
  );
}

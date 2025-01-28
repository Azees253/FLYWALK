import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./collectionstyle/Collection.css";

export default function Collection() {
  function handleClick(e) {
    const list = document.querySelectorAll("#product > div");
    const searchVal = e.target.value.toUpperCase();
    list.forEach((el) => {
      el.style.display = el
        .querySelector("p")
        .textContent.toUpperCase()
        .includes(searchVal)
        ? "block"
        : "none";
    });
  }
  return (
    <>
      {/* product */}
      <div className="product-section">
        <form className="product-search">
          <input
            type="text"
            id="search"
            placeholder="Search"
            onKeyUp={handleClick}
          ></input>
          <i>
            <FaMagnifyingGlass />
          </i>
        </form>
        <div className="product" id="product">
          <div className="product-box">
            <img
              style={{ width: "200px", height: "200px" }}
              src="https://media.istockphoto.com/id/590039970/photo/man-wearing-a-white-shirt-white-background.jpg?s=612x612&w=0&k=20&c=r15FPjb--n45lV9lWTeUXQspeC1OrX9Nk55GMt6jae8="
            ></img>
            <p>White shirt</p>
          </div>
          <div className="product-box">
            <img
              style={{ width: "200px", height: "200px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZ5yPYvJ-oRt3wrkf7lzmHhdyhxD_8_pi7g&s"
            ></img>
            <p>Black shirt</p>
          </div>
          <div className="product-box">
            <img
              style={{ width: "200px", height: "200px" }}
              src="https://media.istockphoto.com/id/2171108543/photo/black-and-white-t-shirts-hanging-on-wooden-hangers-3d-rendering.jpg?s=612x612&w=0&k=20&c=22Rt7B5mUNWlB5umA9kmQmqUkbDndTcnMeU5bfUDDD8="
            ></img>
            <p>T -shirt</p>
          </div>
          <div className="product-box">
            <img
              style={{ width: "200px", height: "200px" }}
              src="https://media.istockphoto.com/id/186870715/photo/blue-jeans.jpg?s=612x612&w=0&k=20&c=MInRLnEABmDYzvxjnEiFBu1V20OaB1zHmgzCqUV5hzk="
            ></img>
            <p>Jeans</p>
          </div>
          <div className="product-box">
            <img
              style={{ width: "200px", height: "200px" }}
              src="https://media.istockphoto.com/id/171265514/photo/blue-and-pink-elegant-button-down-shirts-hanging-on-hangers.jpg?s=612x612&w=0&k=20&c=moHBkOegEKT9iUeZUyeEVdy27ptjP24C901Qqp36dDg="
            ></img>
            <p>Cotten-shirt</p>
          </div>
          <div className="product-box">
            <img
              style={{ width: "200px", height: "200px" }}
              src="https://media.istockphoto.com/id/1239108954/photo/handsome-elegant-fashionable-man-in-dark-suit-dark-checks-jacket.jpg?s=612x612&w=0&k=20&c=Krhsb58PO93fXdfIew7St_1MmprVs3XQphOqKO7wPyo="
            ></img>
            <p>Placer</p>
          </div>
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

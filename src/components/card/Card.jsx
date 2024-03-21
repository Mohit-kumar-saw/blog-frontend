import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./card.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineTags,
} from "react-icons/ai";
import { BASE_URL } from "../../Url";

const Card = ({ prop }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();

  console.log(
    "all users: ",
    cards.filter((user) => user.username.includes(`${prop}`))
  );

  useEffect(() => {
    const getAllCards = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        };

        const response = await axios.get(
          `${BASE_URL}/api/post`,
          config
        );
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setError(
          "An error occurred while fetching the data. Please try again later."
        );
        setLoading(false);
      }
    };

    getAllCards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (cards.length === 0) {
    return <div>No blog posts found.</div>;
  }

  return (
    <section className="blog">
      <div className="catagory-card">
        <div className="select-blog">
          {" "}
          <select name="All" id="select">
            <option value="">All</option>
            <option value="soprts">Sports</option>
            <option value="fun">Fun</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
          </select>
          <div className="popular">
            <button className="my-blog-btn">
              <Link to={"/blog"} className="link-btn">
                My Blog's
              </Link>
            </button>
            <button>
              {" "}
              <FavoriteIcon /> Popular
            </button>
          </div>
        </div>
        <div className="create-blog">
          <button className="btn">
            <Link to={"/create"} className="link-btn2">
              {" "}
              <AddCircleOutlineIcon />
              Create
            </Link>
          </button>
        </div>
      </div>

      <h3 className="card-heading">All Blogs</h3>
      <div className="card-container ">
        {cards
          .filter((user) => user.username.includes(`${prop}`)
          )
          .map((item) => (
            <div className="card-box boxItem" key={item._id}>
              <div className="card-img">
                <img src={item.pic} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>
                <Link to={`/details/${item._id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p className="desc">{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />
                  <label htmlFor="">{item.date}</label>
                  <AiOutlineComment className="icon" />{" "}
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" />{" "}
                  <label htmlFor="">567</label>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Card;

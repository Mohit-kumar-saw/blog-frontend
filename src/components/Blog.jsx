import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import { BASE_URL } from "../Url";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    console.log("id :", userData.user.name);
    const fetchData = async () => {
      try {
        if (!userData || !userData.token) {
          throw new Error("User data or token not available");
        }

        const config = {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        };

        const response = await axios.get(
          `${BASE_URL}/api/post/${userData.user.name}`,
          config
        );
        setData(response.data); // Set data to response.data
        setLoading(false);
        console.log("this is blog data :", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="blog-container">
      <Header />
      <p className="blog-heading">My blogs</p>
      <div className="blog-card-container ">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="blog-card-box boxItem" key={item._id}>
              <div className="blog-card-img">
                <img src={item.pic} alt="" />
              </div>
              <div className="blog-details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>
                <Link to={`/details/${item._id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
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
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Blog;

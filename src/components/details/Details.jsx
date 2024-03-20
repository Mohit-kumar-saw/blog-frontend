import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import "./details.css";
import axios from "axios";
import Header from "../header/Header";
import { BASE_URL } from "../../Url";

const Details = () => {
  const { id } = useParams();
  const [foundBlog, setFoundBlog] = useState(null); // Use state to store the found blog
  const token = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    // Fetch blog data from the API

    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/api/post`, config)
      .then((response) => {
        const blogData = response.data;

        // Find the specific blog by id
        const blog = blogData.find((blog) => blog._id === id);

        if (blog) {
          setFoundBlog(blog); // Update the state with the found blog
          console.log("Found blog:", blog);
        } else {
          console.log("Blog not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching blog data:", err);
      });
  }, [id]);

  return (
    <>
      <Header />
      {foundBlog ? (
        <section className="singlePost">
          <div className="postContainer">
            <div className="left">
              <img src={foundBlog.pic} alt="" />
            </div>
            <div className="right">
              <div className="button2">
                <button className="button">Edit</button>
                <button className="button">
                  <AiOutlineDelete />
                </button>
              </div>
              <h2 className="postHeading">{foundBlog.title}</h2>
              <p>{foundBlog.desc}</p>
            </div>
          </div>{" "}
        </section>
      ) : null}
    </>
  );
};

export default Details;

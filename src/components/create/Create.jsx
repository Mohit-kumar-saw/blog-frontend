import React, { useState } from "react";
import "./create.css";
import axios from "axios";
import Header from "../header/Header";
import { TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Url";

const Create = () => {
const nav= useNavigate();
  const [pic, setPic] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  // const [category, setCategory] = useState("");
  const token = JSON.parse(localStorage.getItem("userData"));

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      console.log("Pic Undefined");
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "montycoder");
      fetch("https://api.cloudinary.com/v1_1/montycoder/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
          console.log(data.url);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("image uploading fail...");
      setLoading(false);
      return;
    }
  };

  const handlePost = (event) => {
    event.preventDefault();
    console.log(pic);
    console.log(token.token);

    if (!username || !title || !desc || !pic) {
      alert("please fill all the filelds");

      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };
      axios
        .post(`${BASE_URL}/api/post/add`, { username, title, desc, pic }, config)
        .then((data) => {
          console.log(data);
          alert("post successfully");
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
    nav("/home")
  };

  return (
    <div>
      <Header />
      {/* <div className="create-msg">
      <p className="msg1">CREATE </p><p className="msg2">Blog</p>
      </div> */}
      <section className="newPost">
      
        <div className="container boxItem">
          <div className="img">
            <p>
              <AddPhotoAlternateIcon /> Choose Photo
            </p>
            <img src={pic} alt="" width={"80px"} />
          </div>
          <form>
            <div className="inputFile flexCenter">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
              />
            </div>

            <div className="create-input">
              <TextField
                id="standard-basic"
                label="Enter Username"
                className="input2"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    handlePost();
                  }
                }}
              />

              <TextField
                id="standard-basic"
                label=" Enter Title"
                className="input2"
                variant="standard"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    handlePost();
                  }
                }}
              />
              {/* <select
         value={category}
          onChange={(e) => setCategory(e.target.value)}
           
           >
              <option value="sports">sports</option>
              <option value="fun">Fun</option>
              <option value="travel">travel</option>
              <option value="tech">Technology</option>
              <option value="business">Business</option>
            </select> */}

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={desc}
                placeholder="Enter Your Description..."
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>

             
              <button className="button2" onClick={handlePost}>
          <p> <AddCircleOutlineIcon />Create </p> <div className="green2"></div>
        </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Create;

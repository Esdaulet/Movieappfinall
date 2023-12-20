import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { homeData, upcome, recommended, trending } from "../../dummyData";
import Upcomming from "../Upcoming/Upcoming";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  useEffect(() => {
    let item = upcome.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  useEffect(() => {
    let item = trending.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  const [rec, setRec] = useState(recommended);
  useEffect(() => {
    let item = recommended.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name} </h1> <span> | {item.time} | </span>{" "}
              <span> HD </span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3>Дата : {item.date}</h3>
                <p>{item.desc}</p>
                <p></p>
              </div>
              <div className="soical">
                <h3>Поделиться : </h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" />
                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title="Рекомендуемые фильмы" />
        </>
      ) : (
        "no"
      )}
    </>
  );
};

export default SinglePage;

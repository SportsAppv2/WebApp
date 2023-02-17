import React, { useEffect, useState } from "react";
import RightBar from "./RightBar";
import FeedHeader from "./FeedHeader";
import NewsCard1 from "./NewsCard1";
import TopHeadlines from "./TopHeadlines";
import NewsCard2 from "./NewsCard2";
import { useDispatch } from "react-redux";
import { fetchNewsArticles } from "../../../store/homeSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const fetchNewsData = async () => {
    const response = await axios
        .get("https://newsapi.org/v2/top-headlines?category=sports&apiKey=3982d22a5c784cc39b7cd2c4a5fb3468&language=en", JSON.stringify(), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setNews(res.data.articles)
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
        return response;
  }
  console.log(news);
  useEffect(()=> {fetchNewsData()},[])


  return (
    <div className="bg-[black] w-[-webkit-fill-available] overflow-y-scroll">
      <div className="h-fit flex">
        <div className="content w-[80%] py-11 border-gray-600 border-r-[1px]">
          <FeedHeader sticky="true" />
          <div className="flex m-11 h-[270px]">
            <NewsCard1 />
            <div className="w-[1px] mx-8 h-full bg-gray-600"></div>
            <TopHeadlines />
          </div>
          <div className="h-[1px] bg-gray-600 w-[90%] ml-14"></div>
          {news.map((item,idx)=>{
            return <NewsCard2 key={idx} title={item.title} description={item.description} author={item.author} image={item.urlToImage} time={item.publishedAt} url={item.url}/>      
          })}
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Body;

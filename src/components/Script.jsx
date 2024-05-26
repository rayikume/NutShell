import React from "react";
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick, DualBall } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Script = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesStorage = JSON.parse(localStorage.getItem("articles"));
    if (articlesStorage) {
      setAllArticles(articlesStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      console.log(newArticle);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className="url_input peer"
          ></input>
          <button type="submit" className="submit_btn text-gray-100">
            🡆
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => {
                setArticle(item);
              }}
              className="link_card"
            >
              <div className="copy_btn">✦</div>
              <p className="flex-1 font-satoshi text-white font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img
            src={DualBall}
            alt="loader"
            className="w-20 h-20 object-contain"
          />
        ) : error ? (
          <p className="font-inter font-bold text-gray-100 text-center">
            ERROR <br />{" "}
            <span className="font-satoshi font-normal text-gray-200">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-white">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box .gradient-border">
                <p className="font-inter font-medium text-sm text-white">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Script;

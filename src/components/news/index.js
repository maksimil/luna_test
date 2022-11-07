import React from "react";

import styles from "./news.module.scss";

const API_URL = "http://theatre.restomatik.ru:1337";

export default function News({ itemsNews, setItemsNews }) {
  console.log(itemsNews);
  const news = React.useMemo(() => {
    const res = itemsNews.map((item) => ({ item, style: styles.smallNews }));
    if (res.length > 0) {
      res[0].style = styles.bigNews;
    }
    return res;
  }, [itemsNews]);

  function scrollNews(d) {
    setItemsNews((items) =>
      Array.from(
        { length: items.length },
        (_, i) => items[(i + d + items.length) % items.length]
      )
    );
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>НОВОСТИ ТЕАТРА</p>
        </div>
        <a href="http://www.lunatheatre.ru/news">
          <div className={styles.btn}>
            <p>ЧИТАТЬ ВСЕ</p>
          </div>
        </a>
      </div>
      <div className={styles.newsContent}>
        {news.map(({ item, style }, i) => (
          <a href={`${API_URL}/news/${item.id}`} key={i} className={style}>
            <img
              src={API_URL + item.attributes.cover.data.attributes.url}
              alt=""
            />
            <div className={styles.date}>{item.attributes.date_str}</div>
            <div className={styles.title}>{item.attributes.title}</div>
            {i === 0 ? (
              <div className={styles.text}>{item.attributes.text}</div>
            ) : null}
          </a>
        ))}
      </div>
      <div className={styles.arrowsContainer}>
        <img src="/img/newsLarr.png" alt="" onClick={() => scrollNews(-1)} />
        <img src="/img/newsRarr.png" alt="" onClick={() => scrollNews(1)} />
      </div>
    </>
  );
}

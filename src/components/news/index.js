import React from "react";

import Separator from "../separator";

import styles from "./news.module.scss";

const API_URL = "http://theatre.restomatik.ru:1337";

export default function News({ itemsNews /*setItemsNews*/ }) {
  console.log(itemsNews);

  // function scrollNews(d) {
  //   setItemsNews((items) =>
  //     Array.from(
  //       { length: items.length },
  //       (_, i) => items[(i + d + items.length) % items.length]
  //     )
  //   );
  // }

  return (
    <>
      <div className={styles.wrapper}>
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
        {itemsNews.length === 0 ? (
          "Loading.."
        ) : (
          <div className={styles.newsContent}>
            <a
              className={styles.bigNewsImage}
              href={`${API_URL}/news/${itemsNews[0].id}`}
            >
              <img
                src={
                  API_URL + itemsNews[0].attributes.cover.data.attributes.url
                }
                alt=""
              />
            </a>
            <a
              className={styles.bigNewsText}
              href={`${API_URL}/news/${itemsNews[0].id}`}
            >
              <div className={styles.title}>
                {itemsNews[0].attributes.title}
              </div>
              <div className={styles.date}>
                {itemsNews[0].attributes.date_str}
              </div>
            </a>
            {[0, 1].map((i) => {
              const item = itemsNews[i + 1];
              const st = [styles.smallNewsItem1, styles.smallNewsItem2][i];
              return (
                <a key={i} className={st} href={`${API_URL}/news/${item.id}`}>
                  <img
                    src={API_URL + item.attributes.cover.data.attributes.url}
                    alt=""
                  />
                  <div className={styles.boxWrapper}>
                    <div className={styles.box}>
                      <div className={styles.title}>
                        {item.attributes.title}
                      </div>
                      <div className={styles.date}>
                        {item.attributes.date_str}
                      </div>
                      <div className={styles.text}>{item.attributes.text}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <Separator />
    </>
  );
}

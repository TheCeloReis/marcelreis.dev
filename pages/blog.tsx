import React from "react";

const cache = [];

function importAll(r: any) {
  r.keys().forEach((key: any) => cache.push(r(key)));
}

importAll(require.context("../content/", true, /\.md$/));

export default function Blog() {
  console.log("cache", cache);
  return (
    <>
      {cache.map((post: any) => {
        let {
          html,
          attributes: { title },
        } = post;

        console.log("html", html);

        return (
          <article>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ul></ul>
          </article>
        );
      })}
    </>
  );
}

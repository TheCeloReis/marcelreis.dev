import React from "react";

const cache = [];

function importAll(r: any) {
  r.keys().forEach((key: any) => cache.push(r(key)));
}
importAll(require.context("../content/", true, /\.md$/));

cache.sort((a, b) => {
  console.log("sorting");
  if (a.attributes.date < b.attributes.date) return 1;
  if (a.attributes.date > b.attributes.date) return -1;
  return 0;
});

export default function Blog() {
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

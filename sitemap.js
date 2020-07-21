/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.yaml");

  const pages = await globby(["out/en-us/**/*.html", "out/pt-br/**/*.html"]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page.replace("out/", "").replace(".html", "");

                return `<url>\n<loc>${`https://marcelreis.dev/${path}`}</loc>\n</url>`;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("out/sitemap.xml", formatted);
})();

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Select from "src/ui/select";

const options = [
  { value: "en-us", text: "English" },
  { value: "pt-br", text: "Português" },
];

type PropsType = {
  className?: string;
};
function LanguageSelector(props: PropsType) {
  const router = useRouter();
  const [lang, setLang] = useState(router.query.lang as string);

  useEffect(() => {
    if (lang !== router.query.lang) {
      router.replace(router.route, router.pathname.replace("[lang]", lang));
    }
  }, [lang, router]);

  return (
    <Select
      className={props.className}
      options={options}
      value={lang}
      onChange={(value) => setLang(value)}
    />
  );
}

export default LanguageSelector;

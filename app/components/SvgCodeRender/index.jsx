import { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as prettier from "prettier/standalone";
import * as parserHtml from "prettier/parser-html";
import CodeRender from "../CodeRender";
import "./index.css";

const SvgCodeRender = ({ children, sheets, layout = "flex" }) => {
  const [codeStr, setCodeStr] = useState();

  useEffect(() => {
    const run = async () => {
      try {
        const rawCode = renderToStaticMarkup(children);
        const formattedCode = await prettier.format(rawCode, {
          parser: "html",
          plugins: [parserHtml],
        });
        setCodeStr(formattedCode);
      } catch (e) {
        console.error("Prettier format error", e);
      }
    };
    run();
  }, [children]);

  return (
    <div className={layout}>
      <div className="code">{children}</div>
      <div className="codeStr">
        {codeStr ? <CodeRender code={codeStr} /> : null}
      </div>
      <ul className="sheets">
        {sheets?.map((item) => {
          return (
            <div className="sheet">
              <CodeRender code={item} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SvgCodeRender;

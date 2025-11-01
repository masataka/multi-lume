import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

// deno.jsonc > tasks で環境変数を積んでいる
const SITE_NO = Deno.env.get("SITE_NO");

const site = lume({
  src: "src"

  // includesでsrc指定フォルダの上のパスを相対パス指定しても登れなかった
  // src指定を切り替える場合はテンプレート群を複製してそれぞれのsrc指定の下に配置せざるを得ない
});

// 環境変数に応じて、ビルド除外を指定する。以下の例ではサブフォルダを判別させている
if (SITE_NO === "1") {
  site.ignore((path) => path.match(/^\/site[2|3]\//) !== null);
}
if (SITE_NO === "2") {
  site.ignore((path) => path.match(/^\/site[1|3]\//) !== null);
}
if (SITE_NO === "3") {
  site.ignore((path) => path.match(/^\/site[1|2]\//) !== null);
}

site.use(jsx());

export default site;

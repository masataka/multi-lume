export default (data: Lume.Data) => (
  <html lang="ja">
    <head>
      <title>{data.title}</title>
    </head>
    <body>
      <div>layouts/base.tsx</div>
      {data.children}
    </body>
  </html>
);

export function main() {
  const srcFile = Deno.readTextFileSync("input.txt");
  const srcUrls = srcFile.split("\n").filter((line) => line.length > 0);
  const cdnUrls = srcUrls.map((url) => url.replace("/browse/", "/"));
  const htmlTags = cdnUrls.map(
    (url) =>
      `<img src="${url}" alt="${url
        .replace("https://unpkg.com/simple-icons@9.4.0/icons/", "")
        .replace(".svg", "")} icon" width="40" height="40" />`
  );

  const html = htmlTags.join("\n");

  Deno.writeTextFileSync("output.html", html);
}

if (import.meta.main) {
  main();
}

import parse from "./parse";

const html = `
  <div>
    <h3 class="111" id="10">文字</h3>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
`

console.log(parse(html))
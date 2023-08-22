import * as marked from "marked";

const content: string = marked.parse('# Marked in the browser\n\nRendered by **marked**.');

console.log(content);
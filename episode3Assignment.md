## Assignment

- **What is JSX?**
    JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript. JSX makes it easier to create and visualize the structure of the UI components in React.

- **Superpowers of JSX**
    JSX allows you to write HTML elements in JavaScript and place them in the DOM without using functions like `createElement()` or `appendChild()`. It also supports embedding JavaScript expressions within the HTML, making it more powerful and flexible for building dynamic user interfaces.

- **Role of `type` attribute in `<script>` tag? What options can I use there?**
    The `type` attribute in the `<script>` tag specifies the scripting language of the script. The most common value is `text/javascript`, which indicates that the script is written in JavaScript. Other options include `module` for JavaScript modules and `application/json` for embedding JSON data.

- **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**
    - `{TitleComponent}` refers to the component itself, which can be used to pass it as a prop or render it conditionally.
    - `{<TitleComponent/>}` is a self-closing tag that renders the `TitleComponent` with no children.
    - `{<TitleComponent></TitleComponent>}` is a standard tag that renders the `TitleComponent` and can include children elements inside it.
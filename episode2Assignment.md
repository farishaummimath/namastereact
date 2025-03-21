# Theory Assignment:

### What is `NPM`?
NPM stands for Node Package Manager. It is a package manager for JavaScript, allowing developers to share and reuse code. It also manages dependencies for projects.

### What is `Parcel/Webpack`? Why do we need it?
Parcel and Webpack are module bundlers. They take modules with dependencies and generate static assets representing those modules. We need them to bundle JavaScript files for usage in a browser, optimize the code, and manage dependencies.

### What is `.parcel-cache`?
`.parcel-cache` is a directory created by Parcel to store cache files. It helps in speeding up the build process by caching previously built files.

### What is `npx`?
`npx` is a package runner tool that comes with NPM. It allows you to execute binaries from the node_modules directory or from a remote registry without installing them globally.

### What is the difference between `dependencies` vs `devDependencies`?
- `dependencies`: Packages required for the application to run in production.
- `devDependencies`: Packages required only during development and testing.

### What is Tree Shaking?
Tree Shaking is a technique used to eliminate dead code from the final bundle. It ensures that only the code that is actually used gets included in the bundle.

### What is Hot Module Replacement?
Hot Module Replacement (HMR) is a feature that allows modules to be updated in the browser without a full reload. It improves development speed by retaining the application state.

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
1. Zero Configuration
2. Fast Bundling
3. Built-in HMR
4. Code Splitting
5. Tree Shaking

**Zero Configuration**: Parcel works out of the box without the need for configuration files, making it easy to set up and use.

**Fast Bundling**: Parcel uses worker processes to enable multicore compilation, resulting in faster build times.

**Built-in HMR**: Parcel has built-in Hot Module Replacement, which allows for instant updates without a full page reload.

### What is `.gitignore`? What should we add and not add into it?
`.gitignore` is a file that tells Git which files or directories to ignore in a project. We should add files like `node_modules`, build directories (`dist`), and sensitive information (`.env`). We should not add source code files or configuration files necessary for the project.

### What is the difference between `package.json` and `package-lock.json`?
- `package.json`: Lists the dependencies and scripts for the project.
- `package-lock.json`: Records the exact versions of dependencies installed, ensuring consistent installs across different environments.

### Why should I not modify `package-lock.json`?
Modifying `package-lock.json` can lead to inconsistencies and unexpected behavior in the project dependencies. It is automatically generated and should be managed by the package manager.

### What is `node_modules`? Is it a good idea to push that on git?
`node_modules` is a directory where NPM installs the project's dependencies. It is not a good idea to push it to git because it can be regenerated using `package.json` and `package-lock.json`.

### What is the `dist` folder?
The `dist` folder (short for distribution) contains the final, bundled output files of the project, ready for deployment.

### What is `browserlists`?
`browserlists` is a configuration used to specify which browsers should be supported by the project. It is used by tools like Babel and Autoprefixer to ensure compatibility.

### Read about different bundlers: Vite, Webpack, Parcel
Vite, Webpack, and Parcel are popular JavaScript bundlers with different features and performance characteristics. Vite is known for its fast development server, Webpack for its extensive plugin ecosystem, and Parcel for its zero-configuration setup.

### Read about: ^ - caret and ~ - tilde
- `^` (caret): Allows updates that do not change the leftmost non-zero digit.
- `~` (tilde): Allows updates to the most recent patch version.

### Read about Script types in HTML (MDN Docs)
HTML supports different script types such as `text/javascript`, `module`, and `application/json`. Each type serves a different purpose and has specific use cases.

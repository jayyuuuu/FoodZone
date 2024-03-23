# Lets ROckkk

# Parcel

what is parecl doing for us?

- Dev Build => it creates a dev build for us.
- Local Server => it creates a local srever for us./ it host our app to the server.
- HMR = Hot Module Replacement. // Automatocally refresh the server.
- Parcel uses a file watching Algorithm. - Written in C++.
- Cashing - Faster Build. because of cashing.
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Supports older browsers.// gives ability to have different bundels for different types of apps./ different types of older browsers./it will add some extra things that will help you do all of it.
- Diagnostic.
- Error Handling.
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundles

# When Using Parcel

- Remove "Main": "App.js" from package.json file. because we are providing the entry point in the command.

---

- If we have to given attributed to jsx, we have to use camelCase.

* React.createElement => React Element -JS Object => (render)HTML Element.
* JSX - HTML like or XML like Syntex. Not HTML in JS.
* JSX (transpiled before it reaches to JS)- PARCEL - Babel.
* JSX => babel transpile it to React.CreateElement => React Element- JS object => (render) HTML Element.

# React Component:

- There are two types of component in react-

1. Class Based Component. => It Uses JS classes. / OLD Way / Nobody Uses Now.
2. Functional Component. => It Uses JS Function. / New Way.

# React Functional component

- Functional component is just a normal JS function which return some jsx or jsx element.
- OR we can say: A JS function which returns a react Element is React Functional Component.

# Component Composition:

Composing two components. Using one component in another component is known as component composition.

# Food_Web App Design

- Components Our App Can have..
-
- Header
- - Logo
- - NavItems
- Body
- - search
- - RestorantContainer
- - Restorent Cards
- Footer
- - Copyright
- - Links
- - Address
- - Contacts

# There Are two types of exports and imports:

1. Default Import/ Export :

- Export : export default component;
- Import : import component from "path";

2. Named Import/ Export

- - Export : export const component;
  - Import : import {component} from "path";
    -------Note: When you have to export multiple thing, Use named export otherwise use default export.

# React Hooks

there are 2 Important Hooks in react:

- UseState() : Superpowerful state variable in react.
  syntex: const [xyz] = useState("assignmnet to xyz");

  ====> Whenever local state variable updates react trigggerd re-conciliation cycle (re-render the component).

- UseEffact() :
  syntex: useEffect(()=>{callback function},[dependency array]);

--IN useEffect Hook-
--if no dependency Array => useEffect is called on every render.
--if depencency Array is Empty [] => useEffect is called on initial render (Just Once).
--if there is some dependency in the array => useEffect is called every time the dependency is updated.
if we have use btnNameReact in dependency array - [btnNameReact] => then useEffect is called every time the btnNameReact is updated.

---- useEffect will definitely called after initial render everytime.

# Routes:

- npm i react-router-dom
- import {createBrowserRouter}
  syntex : const appRouter = createBrowserRouter([array of objects]);
- ecah object defines a different path.

import{RouterProvider} => proviedes the routing configuration.
to render the routs component => root.render(<RouterProvider router = {appRouter}/>);

# Errors:

-useRouterError:
-import UseRouterError
------- const err = useRouterError() -> console.log(err);

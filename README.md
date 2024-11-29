# ⭐ React UI Library for @magnidev-org

This project is a React component library created for the used by the Magni Developer team. It is a collection of components that are used across multiple projects.

## Installation

To install the library, run the following command:

```bash
npm install @magnidev-org/ui-react
```

## Usage

To use the library, import the components you need from the library:

```jsx
import { UIProvider, Button } from "@magnidev-org/ui-react";

/*
  The UIProvider provide the theme to the components 

  If you already installed the "next-themes" package, you can use the ThemeProvider from that package.
*/

function App() {
  return (
    <div>
      <UIProvider>
        <Button>Click me</Button>
      </UIProvider>
    </div>
  );
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

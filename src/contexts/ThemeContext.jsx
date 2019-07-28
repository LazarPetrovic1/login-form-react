import React, { Component, createContext } from "react";
import useToggleState from "../hooks/useToggleState";
export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkTheme, toggleTheme] = useToggleState();

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

// export class ThemeProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDarkTheme: false
//     };
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }
//   toggleTheme() {
//     this.setState({
//       isDarkTheme: !this.state.isDarkTheme
//     });
//   }
//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ ...this.state, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

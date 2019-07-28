import React, { Component, useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function PageContent(props) {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkTheme ? "#333" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{props.children}</div>;
}

// class PageContent extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme } = this.context;
//     const styles = {
//       backgroundColor: isDarkTheme ? "#333" : "white",
//       height: "100vh",
//       width: "100vw"
//     };
//     return <div style={styles}>{this.props.children}</div>;
//   }
// }

export default PageContent;

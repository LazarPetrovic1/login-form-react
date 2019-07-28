import React, { Component, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
// import { withLanguageContext } from "./contexts/LanguageContext";
import { LanguageContext } from "./contexts/LanguageContext";

const content = {
  english: {
    search: "Search...",
    flag: "EN"
  },
  french: {
    search: "Chercher...",
    flag: "FR"
  },
  spanish: {
    search: "Buscar...",
    flag: "SP"
  }
};

function Navbar(props) {
  const { classes } = props;
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { classes } = this.props;
//     const { isDarkTheme, toggleTheme } = this.context;
//     const { language } = this.props.languageContext;
//     const { search, flag } = content[language];
//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
//           <Toolbar>
//             <IconButton className={classes.menuButton} color="inherit">
//               <span>{flag}</span>
//             </IconButton>
//             <Typography className={classes.title} variant="h6" color="inherit">
//               App
//             </Typography>
//             <Switch onChange={toggleTheme} />
//             <div className={classes.grow} />
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder={search}
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput
//                 }}
//               />
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// export default withLanguageContext(withStyles(styles)(Navbar)); for class based components
export default withStyles(styles)(Navbar); /* for functional components */

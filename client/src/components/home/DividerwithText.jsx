import React from "react";
import { makeStyles,Chip } from "@material-ui/core";
import './Headings.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: 350,
    marginRight: 350,
  },
  border: {
    borderBottom: "2px solid grey",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: "black"
  },
 
}));

const DividerWithText = ({ children }) => {
 const classes = useStyles();
 return (
  <div className={classes.container}>
    
    <div class="chip">
        New Arrivals
    </div>
    <div className={classes.border} />
  </div>
 );
};

export default DividerWithText;
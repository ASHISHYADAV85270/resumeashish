import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
  theme,
  resp,
  responsibility,
}) {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.secondary}`,
      color: theme.secondary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: theme.tertiary_heading }}
          >
            {name}
          </h2>
          <img src={image ? image : placeholder} alt={name} />
          <div className="project--showcaseBtn">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className={classes.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className={classes.icon}
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <div
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          <p>{desc}</p>
          <p
            style={{
              textAlign: "left",
              marginTop: "1em",
              marginBottom: ".5em",
            }}
          >
            {resp}

            <ul>
              {responsibility.map((ele) => {
                return <li key={ele.id}>{ele}</li>;
              })}
            </ul>
          </p>
        </div>
        <div
          className="project--lang"
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          {tags.map((tag, id) => (
            <img className="stackImg" key={id} src={tag} alt="imag" />
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default SingleProject;

import React from "react";

export default function ButtonDefault({ children, href="", type="text" }){
  const classes = {
    master: "relative px-4 py-3 font-semibold text-white overflow-hidden border bg-transparent group",
    transition: "absolute inset-0 bg-zinc-600 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100",
    content: "relative transition-colors duration-300"
  }

  return (
    <>
      {href != "" ? (
        <a href={href} className={classes.master}>
          <span className={classes.transition}></span>
          <span className={classes.content}>{children}</span>
        </a>
      ) : (
        <button type={type} className={classes.master}>
          <span className={classes.transition}></span>
          <span className={classes.content}>{children}</span>
        </button>
      )}
    </>
  );
};

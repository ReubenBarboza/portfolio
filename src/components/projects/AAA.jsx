import React from "react";
import ProjectCard from "./ProjectCard";
import AAAImgSrc from "../../assets/AAA.png";

function AAA() {
  return (
    <ProjectCard
      imgLogoSrc={AAAImgSrc}
      projectTitle={"AAA"}
      liveUrl={"https://ask-and-answer-34ab1.web.app/"}
      contentList={[
        {
          content:
            "A forum made using Reactjs and Firebase, styled predominantly using Material UI with sx prop.",
        },
        {
          content:
            "Features include peer moderation, mobile responsiveness, minimalistic design, realtime updation.",
        },
        {
          content:
            "This was my final year (TYBScIT) college project where I scored 160/200.",
        },
      ]}
    ></ProjectCard>
  );
}

export default AAA;

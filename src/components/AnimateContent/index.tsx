import React, { useEffect, useRef } from "react";
import styles from "./index.less";

interface IProps {
  title: string;
  content: string;
}

const AnimateContent: React.FC<IProps> = ({ title, content }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    let glowInTexts = [titleRef?.current, contentRef?.current];
    glowInTexts.forEach((glowInText: any) => {
      let letters = glowInText?.textContent?.split("");
      glowInText.textContent = "";
      letters.forEach((letter: string, i: number) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        glowInText.append(span);
      });
    });
  }, []);
  return (
    <div>
      <h1 className={styles.glowIn} ref={titleRef}>
        {title}
      </h1>
      <p className={styles.glowIn} ref={contentRef}>
        {content}
      </p>
    </div>
  );
};
export default AnimateContent;

import "./styles.css";
import "./animation.css";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";

export default function App() {
  const { ref: sectionOnoRef, inView: sectionOneInView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: sectionThreeRef, inView: sectionThreeInView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: sectionFourRef, inView: sectionFourInView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <>
      <div className="view-infos">
        <span>
          {" "}
          Is section one on view
          <strong>{sectionOneInView.toString()}</strong>
        </span>
        <span>
          {" "}
          Is section two on view
          <strong>{sectionTwoInView.toString()}</strong>
        </span>
        <span>
          {" "}
          Is section one on view
          <strong>{sectionThreeInView.toString()}</strong>
        </span>
        <span>
          {" "}
          Is section two on view
          <strong>{sectionFourInView.toString()}</strong>
        </span>
      </div>
      <div className="wrapper">
        <h1> Section top </h1>
        <div
          ref={sectionOnoRef}
          className={classnames("section-one", {
            "section-one--animate": sectionOneInView
          })}
        >
          <h1> Section one </h1>
        </div>
        <div
          ref={sectionTwoRef}
          className={classnames("section-two", {
            "section-two--animate": sectionTwoInView
          })}
        >
          <h1> Section two </h1>
        </div>
        <div
          ref={sectionThreeRef}
          className={classnames("section-three", {
            "section-three--animate": sectionThreeInView
          })}
        >
          <h1> Section three </h1>
        </div>
        <div
          ref={sectionFourRef}
          className={classnames("section-four", {
            "section-four--animate": sectionFourInView
          })}
        >
          <h1> Section four </h1>
        </div>
      </div>
    </>
  );
}

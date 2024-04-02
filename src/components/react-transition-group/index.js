import "./transitionGroup.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TransitionGroupComponent = ({
  children,
  currentSlideIndex,
  timeout = 300,
}) => (
  <TransitionGroup>
    <CSSTransition key={currentSlideIndex} classNames="slide" timeout={timeout}>
      {children}
    </CSSTransition>
  </TransitionGroup>
);

export default TransitionGroupComponent;

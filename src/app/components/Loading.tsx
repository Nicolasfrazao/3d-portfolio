import { Html, useProgress } from '@react-three/drei';

/**
 * CanvasLoader is a function component that renders a progress bar
 * showing the status of the scene's loading progress.
 *
 * It uses the useProgress hook from @react-three/drei to get the
 * progress value between 0 and 1.
 *
 * The progress value is then used to display a CSS-based loading
 * animation and a percentage value next to it.
 *
 * The loading animation is a simple CSS animation that
 * scales the width of a <span> element to represent the progress
 * value.
 *
 * The percentage value is displayed as a string next to the
 * loading animation. If the progress value is 0, it renders the
 * string 'Loading...' instead.
 */
const CanvasLoader = () => {
  /**
   * useProgress is a hook from @react-three/drei that returns
   * an object with a single property called progress, which
   * is a number between 0 and 1 that represents the current
   * loading progress of the scene.
   */
  const { progress } = useProgress();

  return (
    <Html
      /**
       * as is a prop that can be passed to the Html component
       * to specify the root element to render. In this case, we
       * want to render a <div> element.
       */
      as="div"
      /**
       * center is a prop that can be passed to the Html component
       * to center the rendered element both horizontally and
       * vertically.
       */
      center
      style={{
        /**
         * We use flexbox to center the rendered element
         * horizontally and vertically.
         */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <span
        /**
         * We use a <span> element to render the loading animation.
         * The animation is a simple CSS animation that scales the
         * width of this element to represent the progress value.
         */
        className="canvas-loader"></span>
      <p
        /**
         * We use a <p> element to render the percentage value next
         * to the loading animation.
         */
        style={{
          /**
           * We use a smaller font size to make the percentage value
           * less prominent.
           */
          fontSize: 14,
          /**
           * We use a white color to make the percentage value stand
           * out against the dark background.
           */
          color: '#F1F1F1',
          /**
           * We use a bold font weight to make the percentage value
           * stand out.
           */
          fontWeight: 800,
          /**
           * We add some margin to the top to separate the percentage
           * value from the loading animation.
           */
          marginTop: 40,
        }}>
        {
          /**
           * If the progress value is not 0, we render the percentage
           * value as a string. Otherwise, we render the string
           * 'Loading...'
           */
          progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'
        }
      </p>
    </Html>
  );
};

export default CanvasLoader;


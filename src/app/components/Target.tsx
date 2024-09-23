import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/**
 * The Target component.
 * This component renders a target stand model loaded from
 * a remote URL. The model is animated to move up and down
 * by using the useGSAP hook from @gsap/react.
 * The ref prop is used to get a reference to the mesh element
 * that renders the model, and the position property of the
 * ref is animated to move the target stand up and down.
 * The rotation and scale props are used to position and scale
 * the target stand in the scene.
 *
 * @param props - The props passed to the component.
 * @returns The JSX element that renders the target stand.
 */
const Target = (props) : JSX.Element => {
  // Get a reference to the mesh element that renders the model.
  const targetRef = useRef();

  // Load the target stand model from a remote URL.
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );

  // Animate the position of the target stand up and down.
  useGSAP(() => {
    // Move the target stand up and down by animating the y position.
    gsap.to(targetRef.current.position, {
      // Move the target stand up by 0.5 units.
      y: targetRef.current.position.y + 0.5,
      // Animate the movement over a duration of 1.5 seconds.
      duration: 1.5,
      // Repeat the animation indefinitely.
      repeat: -1,
      // Yoyo the animation, so that it moves up and then back down.
      yoyo: true,
    });
  });

  // Render the target stand model.
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Render the model as a primitive object. */}
      <primitive object={scene} />
    </mesh>
  );
};

// Export the Target component.
export default Target;


import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';

/**
 * A component that renders a group of 4 torus rings in 3D space.
 * The rings are positioned at the given position, and then animated
 * to rotate around their y-axis using GSAP's timeline feature.
 *
 * The animation is done using a single timeline that is created
 * once, and then reused each time the component is re-rendered
 * with a new position.
 *
 * The animation is done in a way that the rings seem to be orbiting
 * around the origin, with a slight delay between each ring.
 *
 * The rings are also given a random rotation around their z-axis
 * to add some randomness to their movement.
 *
 * The component uses the useGSAP hook from @gsap/react to create
 * the animation timeline. The useGSAP hook takes a callback function
 * that is called when the component is mounted, and then again each
 * time the component is re-rendered with new props.
 *
 * The callback function creates a new timeline if one doesn't exist
 * already, and then adds a new animation to the timeline each time
 * the component is re-rendered with a new position.
 *
 * The animation is done using GSAP's to() method, which takes an object
 * with the properties to animate, and an object with the animation options.
 *
 * In this case, the animation is done on the rotation property of the
 * rings, and the animation options are set to make the animation repeat
 * indefinitely, with a slight delay between each repeat.
 *
 * The animation is also staggered, so that each ring starts animating
 * a little bit after the previous one.
 *
 * The component also uses the useRef hook to keep track of the refs
 * of the rings, and the useCallback hook to memoize the getRef function
 * that is used to get the ref of each ring.
 *
 * The getRef function is called each time a new ring is created, and
 * adds the ref to the refList if it doesn't already exist.
 *
 * The component also uses the useTexture hook from @react-three/drei
 * to load the texture for the rings.
 */
const Rings = ({ position } : { position: number[] }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;


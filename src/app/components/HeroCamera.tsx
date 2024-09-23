import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

/**
 * HeroCamera is a component that wraps a group of 3D objects and animates
 * the camera to smoothly follow the position of the group.
 *
 * When the user is not on a mobile device, the camera also rotates to follow
 * the user's pointer position.
 *
 * The component takes a prop called "isMobile" which is a boolean that
 * indicates whether the user is on a mobile device or not. If it is true, the
 * camera does not rotate to follow the user's pointer position.
 *
 * The component also takes a prop called "children" which is a React node
 * that represents the 3D objects that should be wrapped in a group and
 * have their position animated.
 *
 * The component uses the "useFrame" hook from the "@react-three/fiber" library
 * to animate the camera's position and rotation over time. The animation is
 * done using the "easing.damp3" and "easing.dampE" functions from the "maath"
 * library.
 *
 * The animation is done in such a way that the camera smoothly follows the
 * position of the group of 3D objects, and the rotation of the camera smoothly
 * follows the user's pointer position when the user is not on a mobile device.
 */
const HeroCamera = ({ isMobile, children } : { isMobile: boolean, children: React.ReactNode }) => {
  const group = useRef<THREE.Group>();

  useFrame((state, delta) => {
    /**
     * Animate the camera's position to smoothly follow the position of the group.
     * The easing function used is "easing.damp3" which takes the current value
     * of the camera's position, the target value (in this case [0, 0, 20]),
     * the damping factor (in this case 0.25), and the time delta (in this
     * case "delta") as arguments.
     */
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    /**
     * If the user is not on a mobile device, animate the camera's rotation to
     * smoothly follow the user's pointer position.
     * The easing function used is "easing.dampE" which takes the current value
     * of the group's rotation, the target value (in this case [-state.pointer.y / 3,
     * state.pointer.x / 5, 0]), the damping factor (in this case 0.25), and the
     * time delta (in this case "delta") as arguments.
     */
    if (!isMobile) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;


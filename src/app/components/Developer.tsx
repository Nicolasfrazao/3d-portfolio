/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 developer.glb -T 
Files: developer.glb [981.62KB] > /Users/hsuwinlat/Desktop/jsm pj/threejscc-portfolio/public/models/developer-transformed.glb [395.08KB] (60%)
*/

import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

/**
 * This component loads the developer model and animations from the following files:
 * - /models/animations/developer.glb
 * - /models/animations/idle.fbx
 * - /models/animations/salute.fbx
 * - /models/animations/clapping.fbx
 * - /models/animations/victory.fbx
 * 
 * The developer model is a skinned mesh, which means it has a skeleton that can be animated.
 * The animations are loaded from the FBX files and then applied to the developer model using the useAnimations hook.
 * The useAnimations hook returns an object with the following properties:
 * - actions: an object with the animation names as keys, and the animation actions as values.
 * - names: an array of animation names.
 * - mixer: a THREE.AnimationMixer instance that can be used to control the animations.
 * 
 * The component uses the useEffect hook to reset and play the animation when the component mounts, and to fade out the animation when the component unmounts.
 * The animation name is determined by the animationName prop, which defaults to 'idle'.
 * 
 * The component also uses the useGraph hook to get a reference to the developer model's scene.
 * The useGraph hook returns an object with the following properties:
 * - scene: the developer model's scene.
 * - nodes: an object with the names of the nodes as keys, and the nodes as values.
 * - materials: an object with the names of the materials as keys, and the materials as values.
 * 
 * The component renders a group element with the developer model and its animations.
 * The group element has a ref that is passed to the useAnimations hook.
 * The group element also has a dispose property that is set to null, which means that the group element will not be disposed when the component is unmounted.
 * The group element's children are the developer model's nodes, which are rendered as skinned meshes.
 * The skinned meshes have the following properties:
 * - geometry: the geometry of the mesh.
 * - material: the material of the mesh.
 * - skeleton: the skeleton of the mesh.
 * - morphTargetDictionary: the morph target dictionary of the mesh.
 * - morphTargetInfluences: the morph target influences of the mesh.
 * 
 * The component also uses the SkeletonUtils.clone function to clone the developer model's scene.
 * The SkeletonUtils.clone function returns a new scene with the same nodes and materials as the original scene, but with a new skeleton.
 * The cloned scene is then passed to the useGraph hook to get a reference to the new scene.
 * 
 * Finally, the component exports the Developer component, which can be used in other components to render the developer model with animations.
 * The Developer component has the following props:
 * - animationName: the name of the animation to play, defaults to 'idle'.
 * 
 */
const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  const { actions } = useAnimations(
    [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
    group,
  );

  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName].fadeOut(0.5);
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;


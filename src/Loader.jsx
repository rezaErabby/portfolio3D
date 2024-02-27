import { useProgress , Html} from "@react-three/drei"

export function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html 
  center
  style={
    {color: 'white', fontSize:'30px'}
  }
  >{progress} % loaded</Html>
}
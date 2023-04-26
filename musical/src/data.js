import { BiRadio } from 'react-icons/bi'
import {
  BsCollectionPlayFill,
  BsFillCpuFill,
  BsFillHouseFill,
} from 'react-icons/bs'

export const navLinks = [
  {
    id: 'home',
    path: '/',
    icon: <BsFillHouseFill />,
  },
  {
    id: 'chart',
    path: '/chart',
    icon: <BsCollectionPlayFill />,
  },
  {
    id: 'collection',
    path: '/collection',
    icon: <BiRadio />,
  },
  {
    id: 'radio',
    path: '/radio',
    icon: <BsFillCpuFill />,
  },
]

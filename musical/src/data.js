import { BiRadio } from 'react-icons/bi'
import {
  BsCollectionPlayFill,
  BsFillCpuFill,
  BsFillHouseFill,
} from 'react-icons/bs'

import curated1 from './assets/curated-artist-1.png'
import curated2 from './assets/curated-artist-2.png'
import curated3 from './assets/curated-artist-3.png'
import curated4 from './assets/curated-artist-4.png'
import curated5 from './assets/curated-artist-5.png'

import topChart1 from './assets/top-chart-1.png'
import topChart2 from './assets/top-chart-2.png'
import topChart3 from './assets/top-chart-3.png'

export const navLinks = [
  {
    id: 'home',
    path: '/',
    icon: BsFillHouseFill,
  },
  {
    id: 'chart',
    path: '/chart',
    icon: BsCollectionPlayFill,
  },
  {
    id: 'collection',
    path: '/collection',
    icon: BiRadio,
  },
  {
    id: 'radio',
    path: '/radio',
    icon: BsFillCpuFill,
  },
]

export const curatedImages = [
  {
    id: 1,
    img: curated1,
    alt: 'artist1',
  },
  {
    id: 2,
    img: curated2,
    alt: 'artist2',
  },
  {
    id: 3,
    img: curated3,
    alt: 'artist3',
  },
  {
    id: 4,
    img: curated4,
    alt: 'artist4',
  },
  {
    id: 5,
    img: curated5,
    alt: 'artist5',
  },
]

export const topChart = [
  {
    id: 1,
    image: topChart1,
    title: 'Golden age of 80s',
    artist: 'Sean swadder',
    time: '2:34:45',
  },
  {
    id: 2,
    image: topChart2,
    title: 'Reggae “n” blues',
    artist: 'Dj YK mule',
    time: '1:02:42',
  },
  {
    id: 3,
    image: topChart3,
    title: 'Tomorrow’s tunes',
    artist: 'Obi Datti',
    time: '2:01:25',
  },
]

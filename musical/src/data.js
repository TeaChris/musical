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

// import collection1 from './assets/collection1.png'
import collection2 from './assets/collection2.png'
import collection3 from './assets/collection3.png'
import collection4 from './assets/collection4.png'
import collection5 from './assets/collection5.png'
import collection6 from './assets/collection6.png'

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

// export const btns = [
//   {
//     category: 'collection',
//     name: 'my collection',
//   },
//   {
//     category: 'likes',
//     name: 'likes',
//   },
// ]

export const collections = [
  // {
  //   id: 1,
  //   img: collection1,
  //   title: 'limits',
  //   artist: 'john smith',
  //   category: 'likes',
  // },
  {
    id: 2,
    img: collection2,
    title: 'limits',
    artist: 'john smith',
    category: 'collection',
  },
  // {
  //   id: 3,
  //   img: collection3,
  //   title: 'limits',
  //   artist: 'john smith',
  //   category: 'collection',
  // },
  {
    id: 4,
    img: collection4,
    title: 'limits',
    artist: 'john smith',
    category: 'likes',
  },
  {
    id: 5,
    img: collection5,
    title: 'limits',
    artist: 'john smith',
    category: 'collection',
  },
  {
    id: 6,
    img: collection6,
    title: 'limits',
    artist: 'john smith',
    category: 'collection',
  },
]

export const newRelease = [
  {
    id: 1,
    img: collection5,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 2,
    img: collection2,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 3,
    img: collection3,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 4,
    img: collection4,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 5,
    img: collection5,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 6,
    img: collection6,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 7,
    img: collection4,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 8,
    img: collection4,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 9,
    img: collection5,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 10,
    img: collection6,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
  {
    id: 11,
    img: collection4,
    title: 'Life in a bubble',
    artist: 'john smith',
  },
]

export const chart = [
  {
    img: topChart1,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '4:17',
    id: 1,
  },
  {
    img: topChart2,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:30',
    id: 2,
  },
  {
    img: topChart3,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:02',
    id: 3,
  },
  {
    img: topChart1,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '4:17',
    id: 4,
  },
  {
    img: topChart2,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:30',
    id: 5,
  },
  {
    img: topChart3,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:02',
    id: 6,
  },
  {
    img: topChart1,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '4:17',
    id: 7,
  },
  {
    img: topChart2,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:30',
    id: 8,
  },
  {
    img: topChart3,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:02',
    id: 9,
  },
  {
    img: topChart1,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '4:17',
    id: 10,
  },
  {
    img: topChart2,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:30',
    id: 11,
  },
  {
    img: topChart3,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:02',
    id: 12,
  },
  {
    img: topChart1,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '4:17',
    id: 13,
  },
  {
    img: topChart2,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:30',
    id: 14,
  },
  {
    img: topChart3,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:02',
    id: 15,
  },
  {
    img: topChart1,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '4:17',
    id: 16,
  },
  {
    img: topChart2,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:30',
    id: 17,
  },
  {
    img: topChart3,
    title: 'Stand strong ~ Davido',
    album: 'Single',
    time: '2:02',
    id: 18,
  },
]

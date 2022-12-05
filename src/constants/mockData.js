import { HIP_HOP, POP } from './genres';

export const HIP_HOP_ALBUMS = [
  {
    id: 'hip_hop_1',
    name: 'Kamikaze',
    artist: 'Eminem',
    year: 2018,
    genre: HIP_HOP,
    image: '/images/album_cover_kamikaze.jpg',
    songs: [
      {
        id: 'album_kamikaze_1',
        name: 'The Ringer',
        duration: '5:37',
        artists: ['Eminem'],
      },
      {
        id: 'album_kamikaze_2',
        name: 'Greatest',
        duration: '3:46',
        artists: ['Eminem'],
      },
      {
        id: 'album_kamikaze_3',
        name: 'Lucky You',
        duration: '4:04',
        artists: ['Eminem', 'Joyner Lucas'],
      },
      {
        id: 'album_kamikaze_4',
        name: 'Paul (Skit)',
        duration: '0:35',
        artists: ['Paul Rosenberg'],
      },
    ],
  },
  {
    id: 'hip_hop_2',
    name: 'Graduation',
    artist: 'Kanye West',
    year: 2007,
    genre: HIP_HOP,
    image: '/images/album_cover_graduation.jpg',
    songs: [
      {
        id: 'album_graduation_1',
        name: 'Good Morning',
        duration: '3:16',
        artists: ['Kanye West'],
      },
      {
        id: 'album_graduation_2',
        name: 'Champion',
        duration: '2:48',
        artists: ['Kanye West'],
      },
      {
        id: 'album_graduation_3',
        name: 'Stronger',
        duration: '5:12',
        artists: ['Kanye West'],
      },
      {
        id: 'album_graduation_4',
        name: 'I Wonder',
        duration: '4:04',
        artists: ['Kanye West'],
      },
    ],
  },
  {
    id: 'hip_hop_3',
    name: 'Damn.',
    artist: 'Kendrick Lamar',
    year: 2017,
    genre: HIP_HOP,
    image: '/images/album_cover_damn.png',
    songs: [
      {
        id: 'album_damn_1',
        name: 'BLOOD.',
        duration: '1:58',
        artists: ['Kendrick Lamar'],
      },
      {
        id: 'album_damn_2',
        name: 'DNA.',
        duration: '3:05',
        artists: ['Kendrick Lamar'],
      },
      {
        id: 'album_damn_3',
        name: 'YAH.',
        duration: '2:40',
        artists: ['Kendrick Lamar'],
      },
      {
        id: 'album_damn_4',
        name: 'ELEMENT.',
        duration: '3:28',
        artists: ['Kendrick Lamar'],
      },
    ],
  },
  {
    id: 'hip_hop_4',
    name: 'Best Of 50 Cent',
    artist: '50 Cent',
    year: 2017,
    genre: HIP_HOP,
    image: '/images/album_cover_best50Cent.jpg',
    songs: [
      {
        id: 'album_best50Cent_1',
        name: 'Window Shopper',
        duration: '3:10',
        artists: ['50 Cent'],
      },
      {
        id: 'album_best50Cent_2',
        name: 'Hustler\'s Ambition',
        duration: '3:57',
        artists: ['50 Cent'],
      },
      {
        id: 'album_best50Cent_3',
        name: 'Best Friend - Remix',
        duration: '4:13',
        artists: ['50 Cent', 'Olivia'],
      },
      {
        id: 'album_best50Cent_4',
        name: 'Candy Shop',
        duration: '3:27',
        artists: ['50 Cent', 'Olivia'],
      },
    ],
  },
];

export const POP_ALBUMS = [
  {
    id: 'pop_1',
    name: 'Midnights',
    artist: 'Taylor Swift',
    year: 2022,
    genre: POP,
    image: '/images/album_cover_midnights.png',
    songs: [
      {
        id: 'album_midnights_1',
        name: 'Lavender Haze',
        duration: '3:22',
        artists: ['Taylor Swift'],
      },
      {
        id: 'album_midnights_2',
        name: 'Maroon',
        duration: '3:38',
        artists: ['Taylor Swift'],
      },
      {
        id: 'album_midnights_3',
        name: 'Anti-Hero',
        duration: '3:20',
        artists: ['Taylor Swift'],
      },
      {
        id: 'album_midnights_4',
        name: 'You\'re On Your Own, Kid',
        duration: '3:14',
        artists: ['Taylor Swift', 'Lana Del Rey'],
      },
    ],
  },
];

export const ALBUMS_BY_GENRES = {
  [HIP_HOP]: {
    name: 'Hip-Hop',
    albums: HIP_HOP_ALBUMS,
  },
  [POP]: {
    name: 'Pop',
    albums: POP_ALBUMS,
  },
};

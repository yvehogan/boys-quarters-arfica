interface CarouselItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  link: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    imageSrc: '/images/carousel1.png',
    imageAlt: 'Item 1',
    title: '#BoysToo',
    link: '/the-boys-too',
  },
  {
    id: 2,
    imageSrc: '/images/carousel2.png',
    imageAlt: 'Item 2',
    title: 'Guyversations',
    link: '/guyversations',
  },
  {
    id: 3,
    imageSrc: '/images/carousel3.png',
    imageAlt: 'Item 3',
    title: 'International Boys Summit',
    link: '/boys-summit',
  },
  {
    id: 4,
    imageSrc: '/images/carousel4.png',
    imageAlt: 'Item 4',
    title: 'Project SABI',
    link: '/project-sabi',
  },
  {
    id: 5,
    imageSrc: '/images/carousel3.png',
    imageAlt: 'Item 4',
    title: 'Project SABI',
    link: '/item4',
  },
];

import workShop1 from "./assets/images/workshop1.png";
import workShop2 from "./assets/images/workshop2.png";

export const getEvents = () => {
  return [
    {
      id: 1,
      image: workShop2,
      name: "Zenpattern Workshop",
      slug: "zenpattern-workshop-160721",
      subHeading:
        "The word Zen in Japanese means emphasising the value of meditation. With intricate patterns, this art form allows your mind to be at rest. Zenpatterns also enhance your creativity. And lead to beautiful abstract depictions, without much effort but just dedication and hard work!",
      description:
        "The word 'Zen' in Japanese means emphasising the value of meditation. With intricate patterns, this art form allows your mind to be at rest. Zenpatterns also enhance your creativity. And lead to beautiful abstract depictions, without much effort but just dedication and hard work!\n\nThe workshop is open to all age groups. It will be hosted online via Zoom. The medium of instruction will be a mix of Hindi and English.\n\n### Schedule\n- **16 July**: Introduction to components of Zenpattern\n- **17 July**: Lettering Zenpattern\n- **18 July**: Animal depiction Zenpattern \n\n\n### What you will learn\n- Elements of Zenpattern\n- Making components and elements in a figure\n- Choosing the right tools\n- Zen pattern depiction\n- Understanding Zenpattern as a meditation and mind-booster activity \n\n\n### Material required\n- Plain white sheets (preferred: 140gsm)\n- Black gel pens (preferred: Brustro/Micron pens)\n- Pencils\n- Eraser \n- Sharpener \n- Compass\n- Scale\n\n*Participation certificates to be provided*\n\n*Limited Seats!! Register Soon.*",
      startDate: new Date(2021, 6, 16, 17),
      endDate: new Date(2021, 6, 18, 18),
      registrationDeadline: new Date(2021, 6, 14),
      fee: 400,
      category: "workshop",
      mode: "online",
      eventFor: "student",
      forClass: {
        from: 3,
        to: 7,
      },
      isRegistered: true,
      isLimited: true,
    },
    {
      id: 2,
      image: workShop1,
      name: "Water Color Galaxy Painting Workshop",
      slug: "water-color-galaxy-painting-workshop-310721",
      subHeading:
        "Get ready for our creative and colorful Watercolor Galaxy Painting Workshop. A fun-filled session to learn some Watercolor Galaxies and creating a final artwork on your own.",
      description:
        "Get ready for our creative and colorful Watercolor Workshop. It will be a fun-filled session to learn some Watercolor galaxies and then creating a final artwork on your own.\n\nThis is a beginner friendly workshop and no experience is required. \n\nThe workshop is open to all age groups. It will be hosted online via Zoom. The medium of instruction will be a mix of Hindi and English.\n\n### Schedule\n- Session 1:- *31st July*\n- Session 2:- *1st August*\n\n### What will you learn\n- Watercolor techniques for beginners\n- Watercolor painting and blending techniques\n- Compositions of Watercolor Galaxy\n- Composition of a final artwork\n\n### Materials Required\n- Watercolours \n- Drawing sheets 140gsm \n- Brush\n- Scale \n\n*Limited Seats!! Register Soon*",
      startDate: new Date(2021, 6, 31, 17),
      endDate: new Date(2021, 7, 1, 18),
      registrationDeadline: new Date(2021, 6, 28),
      fee: 300,
      category: "workshop",
      mode: "online",
      eventFor: "student",
      forClass: {
        from: 9,
        to: 12,
      },
      isRegistered: true,
      isLimited: true,
    },
  ];
};

export const getSlugHash = () => {
  return getEvents().map(({ slug, startDate, registrationDeadline }) => {
    return [slug, startDate, registrationDeadline];
  });
};

export const calendarEvents = [
  {
    year: 2021,
    month: 7,
    day: 16,
    eventCount: 1,
    events: [getEvents()[0]],
  },
  {
    year: 2021,
    month: 7,
    day: 31,
    eventCount: 1,
    events: [getEvents()[1]],
  },
];

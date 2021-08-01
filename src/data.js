import workShop1 from "./assets/images/workshop1.png";
import workShop2 from "./assets/images/workshop2.png";
import contest1 from "./assets/images/contest1.png";
import contest2 from "./assets/images/contest2.png";
import contest3 from "./assets/images/contest3.png";

export const supportTitles = [
  "Technical",
  "Event Related",
  "Credit Related",
  "Others",
];

export const getEvents = () => {
  return [
    {
      id: 1,
      image: workShop2,
      title: "Zenpattern Workshop",
      slug: "zenpattern-workshop-160721",
      summary:
        "The word Zen in Japanese means emphasising the value of meditation.",
      description:
        "The word 'Zen' in Japanese means emphasising the value of meditation. With intricate patterns, this art form allows your mind to be at rest. Zenpatterns also enhance your creativity. And lead to beautiful abstract depictions, without much effort but just dedication and hard work!\n\nThe workshop is open to all age groups. It will be hosted online via Zoom. The medium of instruction will be a mix of Hindi and English.\n\n### Schedule\n- **16 July**: Introduction to components of Zenpattern\n- **17 July**: Lettering Zenpattern\n- **18 July**: Animal depiction Zenpattern \n\n\n### What you will learn\n- Elements of Zenpattern\n- Making components and elements in a figure\n- Choosing the right tools\n- Zen pattern depiction\n- Understanding Zenpattern as a meditation and mind-booster activity \n\n\n### Material required\n- Plain white sheets (preferred: 140gsm)\n- Black gel pens (preferred: Brustro/Micron pens)\n- Pencils\n- Eraser \n- Sharpener \n- Compass\n- Scale\n\n*Participation certificates to be provided*\n\n*Limited Seats!! Register Soon.*",
      startDate: new Date(2021, 7, 16, 17),
      endDate: new Date(2021, 7, 18, 18),
      registrationDeadline: new Date(2021, 7, 14),
      fee: 400,
      category: "workshop",
      mode: "online",
      eventFor: "student",
      forClass: {
        from: 3,
        to: 7,
      },
      isFeatured: true,
      isRegistered: true,
      hasTeam: false,
      isLimited: false,
      isEventForStudent: true,
    },
    {
      id: 2,
      image: workShop1,
      title: "Water Color Galaxy Painting Workshop",
      slug: "water-color-galaxy-painting-workshop-310721",
      summary:
        "Get ready for our creative and colorful Watercolor Galaxy Painting Workshop.",
      description:
        "Get ready for our creative and colorful Watercolor Workshop. It will be a fun-filled session to learn some Watercolor galaxies and then creating a final artwork on your own.\n\nThis is a beginner friendly workshop and no experience is required. \n\nThe workshop is open to all age groups. It will be hosted online via Zoom. The medium of instruction will be a mix of Hindi and English.\n\n### Schedule\n- Session 1:- *31st July*\n- Session 2:- *1st August*\n\n### What will you learn\n- Watercolor techniques for beginners\n- Watercolor painting and blending techniques\n- Compositions of Watercolor Galaxy\n- Composition of a final artwork\n\n### Materials Required\n- Watercolours \n- Drawing sheets 140gsm \n- Brush\n- Scale \n\n*Limited Seats!! Register Soon*",
      startDate: new Date(2021, 7, 31, 17),
      endDate: new Date(2021, 8, 1, 18),
      registrationDeadline: new Date(2021, 7, 28),
      fee: 300,
      category: "workshop",
      mode: "online",
      eventFor: "student",
      forClass: {
        from: 9,
        to: 12,
      },
      isRegistered: true,
      isLimited: false,
      hasTeam: true,
      isEventForStudent: true,
    },
    {
      id: 3,
      image: contest1,
      title: "Pictionary - Playing With Pictures",
      slug: "pictionary-playing-with-pictures-010821",
      summary:
        "We have always learned more by visual images rather than black and white words.We have always learned more by visual images rather than black and white words.",
      description:
        "We have always learned more by visual images rather than black and white words. Visual images tap into your imagination and give you a sense of looking at the world through the third eye. Pictionary is all about recollecting visual images and naming them when called upon. Hope your third eye roams the world through history.\n\n### Competition Guidelines\n- The competition is open for students of **classes 3, 4, and 5**\n- Students can participate in teams. A maximum of 3 students in a team\n- The medium of the competition will be English\n\n### About Pictionary\n- A team will be exposed to **different pictures.** \n- The participant and the team will need to **find the right** Name, Place, Object, etc. given in the picture. \n- The team to find the **highest number of pictures wins.**\n- The Pictionary will be bounded by **time constraints** for each picture.\n- **Famous Personality, Monuments, Places (Heritage), and Space** will be the core of the Competition\n- The competition will take place on 1st August from 10.00 AM to 11.30 AM (IST) on Zoom Platform\n\n### What Will You Get\n- **Winner Certificates** to top 3 teams\n- **Participation Certificates** to all other teams\n\n\n\n\n",
      startDate: new Date(2021, 8, 1, 10),
      endDate: new Date(2021, 8, 1, 11, 30),
      registrationDeadline: new Date(2021, 7, 30),
      isFree: true,
      category: "competitive",
      mode: "online",
      eventFor: "student",
      forClass: {
        from: 3,
        to: 5,
      },
      isFeatured: true,
      isRegistered: true,
      hasTeamParticipation: true,
      maxTeamMembers: 3,
      hasTeam: true,
      isLimited: true,
      isEventForStudent: true,
    },
    {
      id: 4,
      image: contest3,
      title: "Scribble - Joy of Art",
      slug: "scribble-joy-of-art-080821",
      summary:
        "Getting creative is all that we can think about when it comes to drawing something.",
      description:
        "Getting creative is all that we can think about when it comes to drawing something. But what if we said you don’t need to be too good at drawing, but instead try to communicate through your drawings. That is right, communicate what you want to express through your drawings, and this all about Scribble. \n\n### Competition Guidelines\n- The competition is open for students of **classes 6,7, and 8**\n- Students can participate in teams. A maximum of **3 students **in a team\n- The medium of the competition will be English\n\n### About Scribble\n- A participant from each team will be given a particular object and they will need to **draw the object/thing on the blank screen.**\n- Other teams will need to **find the right** description of the object  given in the picture \n- The team will be awarded points  based on the number of teams guessing their picture correctly\n- The team with the highest points wins\n- The Scribble will be bounded by **time constraints** for each drawing\n- The competition will take place on** 8th August from 10.00 AM to 11.30 AM (IST)**\n\n### Flow of the Event\n- Each team will have 3 participants and **one participant** from each team will be made to **draw the particular word** that has been given.\n- There will be a total of **3 pictures** for a team and each picture will have **90 seconds to draw an answer.**\n- The competition will be happening on Zoom Platform\n\n### What Will You Get\n- 1st, 2nd & 3rd prize of **₹500, ₹300, &₹200** for top 3 teams\n- **Winner Certificates** to top 3 teams\n- **Participation Certificates** to all other teams\n\n\n\n\n",
      startDate: new Date(2021, 8, 8, 10),
      endDate: new Date(2021, 8, 8, 11, 30),
      registrationDeadline: new Date(2021, 8, 2),
      fee: 50,
      category: "competitive",
      mode: "online",
      eventFor: "student",
      forClass: {
        from: 6,
        to: 8,
      },
      isRegistered: false,
      hasTeamParticipation: true,
      maxTeamMembers: 3,
      hasTeam: false,
      isLimited: true,
      isEventForStudent: true,
    },
    {
      id: 5,
      image: contest2,
      title: "Virtual Tour Guide - A Journey",
      slug: "virtual-tour-guide-a-journey-080821",
      summary:
        "We have always been fond of travelling the world and we all do have our favourite destination.",
      description:
        "We have always been fond of travelling the world and we all do have our favourite destination. What if you can become a Virtual Tour Guide and show us your dream destination. VTG (Virtual Tour Guide) is all about exploring places that you want to visit.\n\n### Competition Guidelines\n- The competition is open for students of ** classes 9 and 10**\n- Students can participate in teams. A maximum of **3 students in a team**\n- The medium of the competition will be English\n- The competition will  be happening in 2 Rounds\n- A team will be bounded by** time constraints **for each round\n\n### Round 1\n- A team can take up any **Indian** city/region as per their convenience and will need to be the virtual tour guide of that city/region\n- Each team needs to record a **video** and submit it as part of Round 1 by  **8th August, 7 PM**\n- Video shall be of **2 mins** time duration. The entry will be disqualified if it exceeds the time limit of 2 mins\n- In the video, a team is required to tell us about their city/region of choice,  cover important aspects (Historical, Social, Geographical etc.) of their region of choice and why we should visit their place\n\n#### Evaluation Criteria for Round 1\n- **Famous spots** in their particular destination\n- **Historical and Cultural Significance** in correlation to the famous spot\n- Better **explanation** and** convincing** at why their destination is the best and worth visiting\n\n#### Submission Guidelines for Round 1\n- The video shall not exceed the size of 100 MBs\n- A team can submit only 1 video. Submitting multiple entries will lead to disqualification\n- Submit your video [**HERE**](https://forms.gle/ACKuGpoFS7NC4coJ9)\n\n### Round 2\n- **7 teams** will be chosen from Round 1\n- This round will take place on **22nd August**. Timing will be communicated later\n- This round will happen as an Online Virtual Tour, where selected teams will take the audience through a virtual tour. It will happen on Zoom Platform\n- This round will be made** Live on Youtube and Facebook** for a general audience to be part of Virtual Tours\n- The selected teams will be given a particular **Indian** city/region and based on which they will be preparing their Virtual Tour and be the tourist guide.\n- Students can get creative and create their Virtual Tour with the help of **visual aids such as pictures, video snippets, audios**, etc\n- A team will get only** 5 mins** to present their Virtual Tour\n\n#### Evaluation Criteria for Round 2\n- Use of **Visual Aids**\n- **Famous spots** in the particular destination\n- **Historical and Cultural Significance**  in correlation to the famous spot\n- Audience Engagement\n- Better **explanation** and **convincing** at why your destination is the best and worth visiting\n\n**Note:** Questions will be asked in the end about your destination and answering it will get you additional points.\n\n### What Will You Get\n- 1st, 2nd & 3rd prize of **₹500, ₹300, &₹200** for top 3 teams\n- **Winner Certificates** to top 3 teams\n- **Participation Certificates** to all other teams\n\n\n\n ",
      startDate: new Date(2021, 8, 8, 17),
      endDate: new Date(2021, 8, 22, 17),
      registrationDeadline: new Date(2021, 8, 5),
      fee: 100,
      category: "competitive",
      mode: "online",
      eventFor: "student",
      forClass: {
        from: 9,
        to: 10,
      },
      isFeatured: true,
      isRegistered: false,
      hasTeamParticipation: true,
      maxTeamMembers: 3,
      hasTeam: false,
      isLimited: false,
      isEventForStudent: false,
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
    month: 8,
    day: 16,
    eventCount: 1,
    events: [getEvents()[0]],
  },
  {
    year: 2021,
    month: 8,
    day: 31,
    eventCount: 1,
    events: [getEvents()[1]],
  },
  {
    year: 2021,
    month: 9,
    day: 1,
    eventCount: 1,
    events: [getEvents()[2]],
  },
  {
    year: 2021,
    month: 9,
    day: 8,
    eventCount: 2,
    events: [getEvents()[3], getEvents()[4]],
  },
];

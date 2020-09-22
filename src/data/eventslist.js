const defaultData = {
  events: [
    {
      id: 1,
      name: "Meditation and well-being",
      image: "meditate",
      date: "THU, SEPT 17,",
      time: "17:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus voluptatibus beatae repellat excepturi minima et maxime sequi? Placeat illum architecto nesciunt at tempore porro modi hic! Suscipit, natus amet.",
      attendees: 10,
    },
    {
      id: 2,
      name: "Halloween home deco ideas",
      image: "Halloween",
      date: "TUE, OCT 20,",
      time: "14:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus voluptatibus beatae repellat excepturi minima et maxime sequi? Placeat illum architecto nesciunt at tempore porro modi hic! Suscipit, natus amet.",
      attendees: 15,
    },
    {
      id: 3,
      name: "Amigurumi learn to crochet",
      image: "amigurumi",
      date: "SUN, NOV 09,",
      time: "19:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus voluptatibus beatae repellat excepturi minima et maxime sequi? Placeat illum architecto nesciunt at tempore porro modi hic! Suscipit, natus amet.",
      attendees: 7,
    },
    {
      id: 4,
      name: "Serial programming session",
      image: "programming",
      date: "THU, SEPT 17,",
      time: "17:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus voluptatibus beatae repellat excepturi minima et maxime sequi? Placeat illum architecto nesciunt at tempore porro modi hic! Suscipit, natus amet.",
      attendees: 8,
    },
  ],
};

function getEvents() {
  const LS_KEY = "viewlist-events";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(defaultData));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

export { getEvents };

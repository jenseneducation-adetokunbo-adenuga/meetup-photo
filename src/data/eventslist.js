const defaultData = {
  events: [
    {
      id: 1,
      name: "Portrait Photography",
      image: "street portrait",
      date: "THU, SEPT 17,",
      time: "17:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus voluptatibus beatae repellat excepturi minima et maxime sequi? Placeat illum architecto nesciunt at tempore porro modi hic! Suscipit, natus amet.",
      attendees: 10,
    },
    {
      id: 2,
      name: "Landscape Photography",
      image: "Scenic Image",
      date: "TUE, OCT 20,",
      time: "14:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus voluptatibus beatae repellat excepturi minima et maxime sequi? Placeat illum architecto nesciunt at tempore porro modi hic! Suscipit, natus amet.",
      attendees: 15,
    },
    {
      id: 3,
      name: "Sports Photography",
      image: "Stadium",
      date: "SUN, NOV 09,",
      time: "19:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus voluptatibus beatae repellat excepturi minima et maxime sequi? Placeat illum architecto nesciunt at tempore porro modi hic! Suscipit, natus amet.",
      attendees: 7,
    },
    {
      id: 4,
      name: "Macro Photography",
      image: "Insect Image",
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

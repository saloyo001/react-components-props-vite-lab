import logo from "../assets/logo";

const blogData = {
  name: "My Personal Blog",

  image: logo,

  about:
    "Welcome to my personal blog! This is a space where I share my experiences, thoughts, interests and journey as I learn new things. Join me as I explore technology, personal growth and everyday life.",

  posts: [
    {
      id: 1,
      title: "My Journey into Technology",
      date: "November 1, 2026",
      preview:
        "Technology has always interested me. Starting my journey into programming has opened my eyes to how websites and applications are created. Every day brings something new to learn.",
      minutes: 5,
    },
    {
      id: 2,
      title: "Learning to Code: The Beginning",
      date: "November 3, 2026",
      preview:
        "Learning to code is not always easy. There are errors, confusing concepts and moments when things do not work as expected. However, every challenge teaches me something new.",
      minutes: 15,
    },
    {
      id: 3,
      title: "The Importance of Never Giving Up",
      date: "November 5, 2026",
      preview:
        "Personal growth comes from being patient with yourself. Whether learning a new skill or facing a difficult challenge, consistency and determination make a big difference.",
      minutes: 8,
    },
  ],
};

export default blogData;
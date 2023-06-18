import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import DribbleShot from "../assets/DribbleShot.png";

const TaskStatus = [
  {
    status: "To Do",
    cardItem: [
      {
        id: 0,
        priority: 0,
        title: "Brainstorming",
        images: [],
        desc: "Brainstorming brings team members' diverse experience into play. ",
        comments: 12,
        files: 0,
        profiles: [profile1, profile4, profile3],
      },
      {
        id: 1,
        priority: 1,
        title: "Research",
        images: [],
        desc: "User research helps you to create an optimal product for users.",
        comments: 10,
        files: 3,
        profiles: [profile2, profile1],
      },
      {
        id: 2,
        priority: 1,
        title: "Wireframes",
        images: [],
        desc: "Low fidelity wireframes include the most basic content and visuals.",
        comments: 2,
        files: 0,
        profiles: [profile1, profile2, profile4],
      },
    ],
  },
  {
    status: "On Progress",
    cardItem: [
      {
        id: 3,
        priority: 0,
        title: "Onboarding Illustrations ",
        images: [
          "https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=652&q=80",
        ],
        desc: "",
        comments: 14,
        files: 15,
        profiles: [profile3, profile4, profile1],
      },
      {
        id: 4,
        priority: 0,
        title: "Moodboard",
        images: [
          "https://images.unsplash.com/photo-1502920873987-ac48e660a95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          "https://images.unsplash.com/photo-1601758123927-4f7acc7da589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        desc: "",
        comments: 9,
        files: 10,
        profiles: [profile3],
      },
    ],
  },
  {
    status: "Done",
    cardItem: [
      {
        id: 5,
        priority: 2,
        title: "Mobile App Design",
        images: [DribbleShot],
        desc: "",
        comments: 12,
        files: 15,
        profiles: [profile2, profile4],
      },
      {
        id: 6,
        priority: 2,
        title: "Design System",
        images: [],
        desc: "It just needs to adapt the UI from what you did before ",
        comments: 12,
        files: 15,
        profiles: [profile1, profile3, profile4],
      },
    ],
  },
];

export default TaskStatus;

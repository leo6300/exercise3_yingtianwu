import { Directory } from "../types";

export const directories: Directory[] = [
  {
    id: "you",
    title: "You",
    image: require("../../assets/icons/you.png"),
    color: "#ff3b1f",
    textColor: "#e53920",
    description: "Personal reminders and notes",
    messages: [
      {
        id: "you-1",
        sender: "System",
        text: "Finish Exercise 3 and test it on Android Emulator.",
        time: "09:10 AM",
      },
      {
        id: "you-2",
        sender: "You",
        text: "Prepare README.pdf with screenshots and project structure.",
        time: "10:25 AM",
      },
      {
        id: "you-3",
        sender: "Reminder",
        text: "Zip the project without node_modules before submission.",
        time: "11:40 AM",
      },
    ],
  },
  {
    id: "home",
    title: "Home",
    image: require("../../assets/icons/home.png"),
    color: "#6ed7e9",
    textColor: "#1fb6d4",
    description: "Messages related to home life",
    messages: [
      {
        id: "home-1",
        sender: "Home",
        text: "Buy groceries after class.",
        time: "08:20 AM",
      },
      {
        id: "home-2",
        sender: "Mom",
        text: "Call home this weekend.",
        time: "02:15 PM",
      },
      {
        id: "home-3",
        sender: "Dad",
        text: "Remember to check your mailbox.",
        time: "06:00 PM",
      },
    ],
  },
  {
    id: "love",
    title: "Love",
    image: require("../../assets/icons/love.png"),
    color: "#0d83bd",
    textColor: "#0d83bd",
    description: "Messages from someone special",
    messages: [
      {
        id: "love-1",
        sender: "Love",
        text: "Dinner at 7 PM tonight.",
        time: "12:10 PM",
      },
      {
        id: "love-2",
        sender: "Love",
        text: "Good luck with your assignment!",
        time: "01:30 PM",
      },
      {
        id: "love-3",
        sender: "You",
        text: "I will send you a message after class.",
        time: "03:45 PM",
      },
    ],
  },
  {
    id: "family",
    title: "Family",
    image: require("../../assets/icons/family.png"),
    color: "#6047d9",
    textColor: "#6047d9",
    description: "Family updates and reminders",
    messages: [
      {
        id: "family-1",
        sender: "Family Group",
        text: "Family meeting this Sunday.",
        time: "09:00 AM",
      },
      {
        id: "family-2",
        sender: "Sister",
        text: "Share the holiday photos when you have time.",
        time: "04:20 PM",
      },
      {
        id: "family-3",
        sender: "Mom",
        text: "How is your semester going?",
        time: "07:30 PM",
      },
    ],
  },
  {
    id: "friends",
    title: "Friends",
    image: require("../../assets/icons/friends.png"),
    color: "#ff31aa",
    textColor: "#ec249b",
    description: "Messages from friends",
    messages: [
      {
        id: "friends-1",
        sender: "Alex",
        text: "Basketball at 5 PM?",
        time: "11:15 AM",
      },
      {
        id: "friends-2",
        sender: "Group Chat",
        text: "Movie night this Friday.",
        time: "03:00 PM",
      },
      {
        id: "friends-3",
        sender: "Chris",
        text: "Let's review the project together tomorrow.",
        time: "08:45 PM",
      },
    ],
  },
  {
    id: "school",
    title: "School",
    image: require("../../assets/icons/school.png"),
    color: "#00bce9",
    textColor: "#00a9d6",
    description: "Course and assignment messages",
    messages: [
      {
        id: "school-1",
        sender: "Instructor",
        text: "Exercise 3 must be submitted as a ZIP package.",
        time: "10:00 AM",
      },
      {
        id: "school-2",
        sender: "Course Reminder",
        text: "README.pdf should include screenshots and project structure.",
        time: "01:10 PM",
      },
      {
        id: "school-3",
        sender: "D2L",
        text: "Submit all JS/TS files, images, and README.pdf.",
        time: "05:50 PM",
      },
    ],
  },
];
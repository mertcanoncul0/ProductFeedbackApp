export const productRequests = [
  {
    id: 1,
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    date: "2024-07-15T10:00:00Z",
    comments: [
      {
        id: 1,
        content:
          "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        user: {
          image: "./assets/user-images/image-suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811",
        },
        date: "2024-07-15T11:00:00Z",
      },
      {
        id: 2,
        content:
          "Please use fun, color-coded labels to easily identify them at a glance",
        user: {
          image: "./assets/user-images/image-thomas.jpg",
          name: "Thomas Hood",
          username: "brawnybrave",
        },
        date: "2024-07-15T12:00:00Z",
      },
    ],
  },
  {
    id: 2,
    title: "Add a dark theme option",
    category: "feature",
    upvotes: 99,
    status: "suggestion",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    date: "2024-07-16T10:00:00Z",
    comments: [
      {
        id: 3,
        content:
          "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        user: {
          image: "./assets/user-images/image-elijah.jpg",
          name: "Elijah Moss",
          username: "hexagon.bestagon",
        },
        date: "2024-07-16T11:00:00Z",
      },
      {
        id: 4,
        content:
          "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and apparently saves battery life.",
        user: {
          image: "./assets/user-images/image-james.jpg",
          name: "James Skinner",
          username: "hummingbird1",
        },
        date: "2024-07-16T12:00:00Z",
        replies: [
          {
            content:
              "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
            replyingTo: "hummingbird1",
            user: {
              image: "./assets/user-images/image-anne.jpg",
              name: "Anne Valentine",
              username: "annev1990",
            },
            date: "2024-07-16T13:00:00Z",
          },
          {
            content:
              "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            replyingTo: "annev1990",
            user: {
              image: "./assets/user-images/image-ryan.jpg",
              name: "Ryan Welles",
              username: "voyager.344",
            },
            date: "2024-07-16T14:00:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Q&A within the challenge hubs",
    category: "feature",
    upvotes: 65,
    status: "suggestion",
    description: "Challenge-specific Q&A would make for easy reference.",
    date: "2024-07-17T10:00:00Z",
    comments: [
      {
        id: 5,
        content:
          "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
        user: {
          image: "./assets/user-images/image-george.jpg",
          name: "George Partridge",
          username: "soccerviewer8",
        },
        date: "2024-07-17T11:00:00Z",
      },
    ],
  },
  {
    id: 4,
    title: "Add image/video upload to feedback",
    category: "enhancement",
    upvotes: 51,
    status: "suggestion",
    description: "Images and screencasts can enhance comments on solutions.",
    date: "2024-07-18T10:00:00Z",
    comments: [
      {
        id: 6,
        content:
          "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
        user: {
          image: "./assets/user-images/image-javier.jpg",
          name: "Javier Pollard",
          username: "warlikeduke",
        },
        date: "2024-07-18T11:00:00Z",
      },
      {
        id: 7,
        content:
          "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior.",
        user: {
          image: "./assets/user-images/image-roxanne.jpg",
          name: "Roxanne Travis",
          username: "peppersprime32",
        },
        date: "2024-07-18T12:00:00Z",
      },
    ],
  },
  {
    id: 5,
    title: "Ability to follow others",
    category: "feature",
    upvotes: 42,
    status: "suggestion",
    description: "Stay updated on comments and solutions other people post.",
    date: "2024-07-19T10:00:00Z",
    comments: [
      {
        id: 8,
        content:
          "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
        user: {
          image: "./assets/user-images/image-victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin",
        },
        date: "2024-07-19T11:00:00Z",
        replies: [
          {
            content:
              "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
            replyingTo: "arlen_the_marlin",
            user: {
              image: "./assets/user-images/image-zena.jpg",
              name: "Zena Kelley",
              username: "velvetround",
            },
            date: "2024-07-19T12:00:00Z",
          },
        ],
      },
      {
        id: 9,
        content:
          "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
        user: {
          image: "./assets/user-images/image-jackson.jpg",
          name: "Jackson Barker",
          username: "countryspirit",
        },
        date: "2024-07-19T13:00:00Z",
      },
    ],
  },
  {
    id: 6,
    title: "Preview images not loading",
    category: "bug",
    upvotes: 3,
    status: "suggestion",
    description:
      "Challenge preview images are missing when you apply a filter.",
    date: "2024-07-20T10:00:00Z",
  },
  {
    id: 7,
    title: "More comprehensive reports",
    category: "feature",
    upvotes: 123,
    status: "planned",
    description:
      "It would be great to see a more detailed breakdown of solutions.",
    date: "2024-07-21T10:00:00Z",
    comments: [
      {
        id: 10,
        content:
          "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
        user: {
          image: "./assets/user-images/image-victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin",
        },
        date: "2024-07-21T11:00:00Z",
      },
      {
        id: 11,
        content:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        user: {
          image: "./assets/user-images/image-james.jpg",
          name: "James Skinner",
          username: "hummingbird1",
        },
        date: "2024-07-21T12:00:00Z",
      },
    ],
  },
]

export const Categories = [
  {
    name: "UI",
    active: false,
  },
  {
    name: "UX",
    active: false,
  },
  {
    name: "Enhancement",
    active: false,
  },
  {
    name: "Bug",
    active: false,
  },
  {
    name: "Feature",
    active: false,
  },
]

type Project = {
    name: string,
    description: string,
    tech: string[],
    live_link: string | null,
    github_link:string,
    image: string
}

const vacayhome = new URL('./src/assets/vacayhome.png', import.meta.url).href;
const socialmedia = new URL('./src/assets/socialmedia.png', import.meta.url).href;
const clothing = new URL('./src/assets/clothing.png', import.meta.url).href;

export const projects:Project[]=[
    {
        "name":"Vacayhomes",
        "description": "• Nextjs user-friendly website which enable travelers to search for accommodations and experiences based on their destination, travel dates, and specific preferences. Authentication  using next/auth and routing with App Router. Make your property a vacation destination buy listing it on the site. ",
        "tech":["React ","Nextjs ","TypeScript ","MongoDB ","Prisma ","Axios ","Tailwindcss "],
        "live_link":"https://vacayhome-iota.vercel.app/",
        "github_link":"https://github.com/Nikhilz7/homeStay",
        "image":vacayhome
    },
    {
        "name":"Syberspace",
        "description": "• A Social media website developed using MERN stack where users can create account, follow other users, post pictures, like their posts and a messaging functionality with followed users. Used React Router for navigation, Redux Toolkit for statemanagement, Material UI for react components with dark mode.",
        "tech":["React ","Redux/toolkit ","MongoDB ","Material UI "],
        "live_link":"https://gleeful-zabaione-60cb7b.netlify.app/",
        "github_link":"https://github.com/Nikhilz7/SocialMedia-MERN-stack",
        "image":socialmedia
    },
    {
        "name":"Clothing Store",
        "description": "• An Ecommerce website for shopping clothes and sneakers. Built using ReactJS v18, NodeJS, Firebase for data storage and Styled Components for styling. Used Firebase for user authentication and JavaScript ES6/7 features such as arrow functions, promises and async await, redux for state management with redux-saga as a middleware.",
        "tech":["React ","Redux ","Styled Components ","Firebase"],
        "live_link":"https://deft-cupcake-9909cd.netlify.app/",
        "github_link":"https://github.com/Nikhilz7/Ecommerce_React",
        "image":clothing
        },
]
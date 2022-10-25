import { v4 as uuidv4 } from 'uuid';

const cv = {
    personal: {
        firstName: "John",
        lastName: "Doe",
        title: "Fullstack Web Developer",
        adress: "Coolname St. 12a",
        phone: "1234567890",
        email: "johndoe@email.com",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    experience: [
        {
            id: uuidv4(),
            from: "2013",
            to: "2015",
            position: "Junior Web Developer",
            company: "Some Hospital",
            location: "MD"
        },
        {
            id: uuidv4(),
            from: "2016",
            to: "2018",
            position: "Junior Project Manager",
            company: "Web Company",
            location: "NY"
        }
    ],
    education: [
        {
            id: uuidv4(),
            from: "1999",
            to: "2005",
            title: "Master of Computer Science",
            location: "University of Maryland"
        },
        {
            id: uuidv4(),
            from: "2008",
            to: "2010",
            title: "Master of Game Design",
            location: "University of Maryland"
        },
    ]
}

export default cv;
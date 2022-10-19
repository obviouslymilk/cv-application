import { v4 as uuidv4 } from 'uuid';

const cv = {
    personal: {
        firstName: "John",
        lastName: "Doe",
        title: "Fullstack Web Developer",
        adress: "Coolname St. 12a",
        phone: "1234567890",
        email: "johndoe@email.com",
        desc: "I'm fullstack web developer with 8 years of experience"
    },
    experience: [
        {
            id: uuidv4(),
            from: "2015",
            to: "2018",
            position: "Junior Web Developer",
            company: "Web Company",
            location: "USA"
        }
    ],
    education: [
        {
            id: uuidv4(),
            from: "2012",
            to: "2017",
            title: "University of Studying",
            location: "London"
        }
    ]
}

export default cv;
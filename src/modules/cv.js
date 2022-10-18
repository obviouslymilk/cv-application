import { v4 as uuidv4 } from 'uuid';

const cv = {
    personal: {
        firstName: "",
        lastName: "",
        title: "",
        adress: "",
        phone: "",
        email: "",
        desc: ""
    },
    experience: [
        {
            id: uuidv4(),
            from: "",
            to: "",
            position: "",
            company: "",
            location: ""
        }
    ],
    education: [
        {
            id: uuidv4(),
            from: "",
            to: "",
            title: "",
            location: ""
        }
    ],
    skills: [
        {
            id: uuidv4(),
            title: "",
            desc: ""
        }
    ]
}

export default cv;
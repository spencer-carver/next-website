import {
    ALEXA_LOGO,
    AWS_LOGO,
    GCP_LOGO,
    GITHUB_LOGO,
    JS_LOGO,
    NEXT_JS_LOGO,
    PYTHON_LOGO,
    REACT_LOGO,
    STITCHES_LOGO,
    TS_LOGO
} from "../../constants/Logos";

export interface Resource {
    image?: string;
    alt: string;
    url?: string;
}

export const enum ProjectType {
    PROJECT = "Project",
    PRESENTATION = "Presentation",
    PUBLICATION = "Publication"
};

export interface Project {
    type: ProjectType;
    title: string;
    description: string;
    extendedDescription?: string;
    imageUrl?: string;
    imageAlt?: string;
    utilizes?: Array<Resource>;
    resources?: Array<Resource>;
}

const PROJECT_DETAILS: { [key: string]: Project } = {
    website: {
        title: "My Website",
        type: ProjectType.PROJECT,
        description: "A React.js website built using Amazon Web Services. You're on it right now!",
        extendedDescription: "This website is a living resume and example of what front-end work I do. It also serves as a public location where I can put anything I make that I find interesting, such as puzzles.",
        imageUrl: "/website.png",
        imageAlt: "This website's logo",
        utilizes: [{
            image: REACT_LOGO,
            alt: "React.js"
        }, {
            image: TS_LOGO,
            alt: "Typescript"
        }, {
            image: AWS_LOGO,
            alt: "Amazon Web Services"
        }, {
            image: NEXT_JS_LOGO,
            alt: "Next.js"
        }, {
            image: STITCHES_LOGO,
            alt: "Stitches"
        }],
        resources: [{
            image: GITHUB_LOGO,
            alt: "Github",
            url: "https://github.com/spencer-carver/next-website"
        }]
    },
    watchdog: {
        title: "Watchdog",
        type: ProjectType.PROJECT,
        description: "An Amazon Alexa App that can track the comings and goings of family members.",
        extendedDescription: "Watchdog is my first published Alexa skill that relies on Amazon's name parsing and dynamoDB to store a single datapoint for referencing when someone left home.",
        imageUrl: "/watchdog.png",
        imageAlt: "The Watchdog alexa skill logo",
        utilizes: [{
            image: JS_LOGO,
            alt: "Javascript"
        },{
            image: AWS_LOGO,
            alt: "Amazon Web Services"
        }],
        resources: [{
            image: ALEXA_LOGO,
            alt: "Amazon Skill Page",
            url: "https://smile.amazon.com/Spencer-Carver-Watch-Dog/dp/B01DKMZ04A/"
        },{
            image: GITHUB_LOGO,
            alt: "Github",
            url: "https://github.com/spencer-carver/watchdog"
        }]
    },
    mail: {
        title: "Serverless Mail",
        type: ProjectType.PROJECT,
        description: "Routes carvers.info emails to my personal gmail using the free tiers of multiple AWS services.",
        extendedDescription: "Amazon SES recieves all incoming messages to carvers.info, and then dumps the contents into s3. A lambda function picks up the change, rewrites message headers, and reroutes to gmail.",
        imageUrl: "/email.png",
        imageAlt: "an envelope",
        utilizes: [{
            image: PYTHON_LOGO,
            alt: "Python"
        },{
            image: AWS_LOGO,
            alt: "Amazon Web Services"
        }]
    },
    blog: {
        title: "Headless Blog",
        type: ProjectType.PROJECT,
        description: "Blog CMS utilizing free tiers of AWS and GCP to upload content to the site without deployments",
        extendedDescription: "A google cloud service role has access to a folder on my Google Drive and looks for '.md' files. An AWS Lambda function is attached to my site API and can utilize this role to fetch posts.",
        imageUrl: "/blog.png",
        imageAlt: "a newspaper",
        utilizes: [{
            image: JS_LOGO,
            alt: "Javascript"
        },{
            image: AWS_LOGO,
            alt: "Amazon Web Services"
        },{
            image: GCP_LOGO,
            alt: "Google Cloud Platform"
        }],
        resources: [{
            image: GITHUB_LOGO,
            alt: "Github",
            url: "https://github.com/spencer-carver/google-drive-blog-api"
        }]
    },
    astrophotography: {
        title: "Asteroid Lightcurve Analysis at the Oakley Southern Sky Observatory: 2011 November-December",
        type: ProjectType.PUBLICATION,
        description: "Published in The Minor Planet Bulletin July 2012.",
        resources: [{
            url: "https://ui.adsabs.harvard.edu/abs/2012MPBu...39..131M/abstract",
            alt: "Publication"
        }]
    },
    "optical-adc": {
        title: "Photonic Analog-to-Digital Converter via Asynchronous Oversampling",
        type: ProjectType.PUBLICATION,
        description: "Poster presentation at SPIE Sensing and Security Conference April 2012.",
        resources: [{
            url: "https://ui.adsabs.harvard.edu/abs/2012SPIE.8397E..0HC/abstract",
            alt: "Publication"
        }]
    },
    "developerweek-2023-talk": {
        title: "Digital Dim Sum: Mastering Microservices for Many Palates",
        type: ProjectType.PRESENTATION,
        description: "Inspired by the Epicurious “4 Levels” video series, presented at DeveloperWeek Conference February 2023.",
        extendedDescription: "This talk aims to equate different styles of building microservice architectures to the “Amateur”, “Home Chef”, and “Professional” labels, while also providing a compare-and-contrast view from the perspective of the “Food Scientist”.",
        resources: [{
            alt: "Presentation",
            url: "https://dumpling.academy/developerweek-2023/slides.pdf"
        }]
    }
};

export default PROJECT_DETAILS;

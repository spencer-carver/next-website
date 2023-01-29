import { Resource } from "./projects";

export interface Publication {
    title: string;
    type: "presentation" | "publication";
    description: string;
    extendedDescription?: string;
    resources?: Array<Resource>;
}

const PUBLICATION_DETAILS: { [key: string]: Publication } = {
    astrophotography: {
        title: "Asteroid Lightcurve Analysis at the Oakley Southern Sky Observatory: 2011 November-December",
        type: "publication",
        description: "",
        resources: [{
            url: "https://ui.adsabs.harvard.edu/abs/2012MPBu...39..131M/abstract",
            image: "",
            alt: "link to publication"
        }]
    },
    "optical-adc": {
        title: "Photonic analog-to-digital converter via asynchronous oversampling",
        type: "publication",
        description: "",
        resources: [{
            url: "https://ui.adsabs.harvard.edu/abs/2012SPIE.8397E..0HC/abstract",
            image: "",
            alt: "link to publication"
        }]
    },
    "developerweek-2023-talk": {
        title: "Digital Dim Sum: Mastering Microservices for Many Palates",
        type: "presentation",
        description: ""
    }
};

export default PUBLICATION_DETAILS;

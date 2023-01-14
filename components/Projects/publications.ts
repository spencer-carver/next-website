export interface Resource {
    url: string;
}

export interface Publication {
    title: string;
    description: string;
    extendedDescription?: string;
    utilizes?: Array<Resource>;
    resources?: Array<Resource>;
}

const PROJECT_DETAILS: { [key: string]: Publication } = {
    astrophotography: {
        title: "Asteroid Lightcurve Analysis at the Oakley Southern Sky Observatory: 2011 November-December",
        description: "",
        resources: [{
            url: "https://ui.adsabs.harvard.edu/abs/2012MPBu...39..131M/abstract"
        }]
    },
    "optical-adc": {
        title: "Photonic analog-to-digital converter via asynchronous oversampling",
        description: "",
        resources: [{
            url: "https://ui.adsabs.harvard.edu/abs/2012SPIE.8397E..0HC/abstract"
        }]
    },
    "developerweek-2023-talk": {
        title: "Digital Dim Sum: Mastering Microservices for Many Palettes",
        description: ""
    }
};

export default PROJECT_DETAILS;

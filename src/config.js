import React from 'react';

export const routes = [
    {
        path: '/home',
        caption: 'Work'
    },
    {
        path: '/about',
        caption: 'About'
    },
    {
        path: '/contact',
        caption: 'Contact'
    }
]

export const services = [
//    {
//        title: '',
//        about_old: 'We strive to create emotional connections through design. 
//         In that process, we shape a logo that captures the story, crafting a colour palette that reflects the brand’s spirit, 
//         and tailor the fonts that give the brand its unique voice. Finally, we trickle down those little drops of charm that makes your 
//         visuality unique and inspiring.',
//        about: ''
//    },
    {
        title: 'Illustration',
        about: `Illustrations are at the heart of our work. 
        We use Illustrations to bring originality and artistic harmony into your product or brand. 
        For us, Illustrations are those little drops of charm that makes your visuality unique and inspiring. 
        We create Patterns, Icons, Infographics, and Editorials
        in various techniques that emphasize your brand's character and vision.`
    },
    {
        title: 'Print & Textile design',
        about: `We love Paper & Fubric. 
        We design Book covers, packages, wallpapers, linen and many other paper & textile goods, 
        striving to create emotional connections through design.
        `
        //[Bringing artistic design into our everyday life]
        // combin texture of paper/fubriq with illustration techniq
    },
    {
        title: 'Editorial Design',
        about: `We bring stories to life while enticeing readers to engage with content. 
        We focus on bringing messages of well-being, senstentbility, harmonius life and mindfullness.
        `
    },


]

export const process = [
    {
        title: 'Introductory call',
        about: `A short call in which we get to know each other, relizing the best way we can help you. 
        After the call, you receive from us a quote with the packages we discussed so you can review all 
        the information, contract, and invoice before signing on.`
    },
    {
        title: 'Research',
        about: `
        
        Our creative process begins with in-depth information gathering about your product, 
        brand or organization, to capture its story, spirit, essence, and uniqness. 
        `
    },
    {
        title: 'Kickoff meeting',
        about: `  

        We meet, preferbly in person, to discuss our discoveries with you as we demonstrate the potential visual direction of your project.
        `
    },
    {
        title: 'Design',
        about: `We start the design process. We work by sprints of one or two weeks, depends on project scale. 
        At the end of each sprint, you can view our progress and provide valiable feedback.
        With your feedback, we then enter one or two rounds of refinements, tweaking the design to match what works best for you. `
    }
]

const magicGardenTeaSeries = {
    id: 'magic-garden-tea-series',
    title: 'Secret Garden tea series',
    services: 'Packaging illustration',
    about: (<>
    Packaging illustration for <i>Lykke</i>, a Danish lifestyle brand. In the main illustration, 
    the teapot object plays a dual role, both as a kettle and as a house. In both of its roles, 
    the teapot's unique design and surrounding reflects the flavor's specific character and gives it a cultural dimension. 
</>),
    client: {
        name: 'Lykke'
    },
    year: '2019',
    thumbnailImage: 'magic-garden-tea-series/3 box close up1.jpg',
    headImage: 'magic-garden-tea-series/pink front and back left side.jpg',
    rows: [
        'magic-garden-tea-series/pink front and back2 .jpg',
        'magic-garden-tea-series/pink back closeup.jpg',
        'magic-garden-tea-series/lots of boxes2.jpg',
        'magic-garden-tea-series/yellow front and side on the right.jpg',
        'magic-garden-tea-series/yellow front and side close up.jpg',
        'magic-garden-tea-series/orange back and side.jpg',
        'magic-garden-tea-series/3 box close up4.jpg',
        'magic-garden-tea-series/night front and side copy.jpg',
        'magic-garden-tea-series/night front and side two packages3.jpg',
        'magic-garden-tea-series/night front and side two packages2 copy.jpg',
        'magic-garden-tea-series/night all sides massy.jpg',
        'magic-garden-tea-series/3 box close up2.jpg'
    ],
    relatedWorks: [
        'vitrage',
        'creatures-of-the-world',
        'fiesta-la-casa'
    ]
}

const creaturesOfTheWorld = {
    id: 'creatures-of-the-world',
    title: 'Creatures of the World',
    services: 'Book Cover Design',
    about: (<>Book cover design for <i>Creatures Of The World</i>, a children’s book series that will be published in Israel. 
    Written by Tal Michael, each book pictures various animals of a specific landscape: Forest, Safari and Arctic. 
    The front and back covers visualize an interplay between day and night. The cover is made of fabric, 
    which gives it its cozy touch and tenderness.</>),
    client: {
        name: 'Koteret Publishers'
    },
    year: '2018',
    thumbnailImage: 'creatures-of-the-world/all-books-closeup.jpg',
    headImage: 'creatures-of-the-world/2-books-1-spine.jpg' ,
    rows: [
        'creatures-of-the-world/safari-front-spine.jpg',
        'creatures-of-the-world/safari-front-back.jpg',
        'creatures-of-the-world/safari-closeup.jpg',
        'creatures-of-the-world/arctic-front-back.jpg',
        'creatures-of-the-world/arctic-closeup.jpg',
        'creatures-of-the-world/woods-front-back.jpg',
        'creatures-of-the-world/woods-closeup.jpg',
        'creatures-of-the-world/all-books-closeup.jpg'
    ],
    relatedWorks: [
        'magic-garden-tea-series',
        'patterns-of-the-netherlands',
        'fiesta-la-casa'
    ]
}

const patternsOfTheNetherlands = {
    id: 'patterns-of-the-netherlands',
    title: 'Patterns of the Netherlands',
    services: 'Pattern Design',
    about: (<>Illustrated collection of housewares for <i>Imballare</i>, an Italy-based store producing paper goods and housewares. 
    The collection is called Gezelligheid (Dutch for Coziness), with illustrations emphasising the Dutch culture. 
    The line included implementations such as plates, mugs, bags, towels, gift wraps and baby shirts.</>),
    client: {
        name: 'Imballare'
    },
    year: '2019',
    thumbnailImage: 'pattern-of-the-netherlands/closeup shirt good size.jpg',
    headImage: 'pattern-of-the-netherlands/giftwrap.jpg',
    rows: [
        'pattern-of-the-netherlands/bag.jpg',
        'pattern-of-the-netherlands/closeup shirt good size.jpg',
        'pattern-of-the-netherlands/mug.jpg',
        'pattern-of-the-netherlands/Towel.jpg',
        'pattern-of-the-netherlands/pattern copy.jpg'
    ],
    relatedWorks: [
        'le-petit',
        'creatures-of-the-world',
        'fiesta-la-casa'
    ]
}

const latinSummer = {
    id: 'fiesta-la-casa',
    title: 'Fiesta la casa',
    services: 'Pattern & Illustration Design',
    about: (<>
        Textile design collection for <i>élite</i>, a boutique Spanish manufacturer of high-quality sheets and fabric.
        The collection, inspired by Latin America colors, pictures a colorful atmosphere of happiness and joy: 
        Blossom flowers are scattered all around, creating a harmonious dance with animals and humans.
        The line included implementations such as linen, sofa cover, lounge chair cover, decorative pillows, bedroom poster, carpets, and curtains.
    </>),
    client: {
        name: 'élite'
    },
    year: '2020',
    thumbnailImage: 'latin-summer/bedroom duvet close up-04.jpg',
    headImage: 'latin-summer/full bedroom colors.jpg',
    rows: [
        'latin-summer/bedroom chair close up-03.jpg',
        'latin-summer/blue.jpg',
        'latin-summer/bedroom picture close up-02.jpg',
        'latin-summer/char-red.jpg',
        'latin-summer/bedroom duvet close up-04.jpg',
        'latin-summer/red.jpg',
        'latin-summer/livingroom.jpg',
        
        'latin-summer/living room close up-09.jpg',
        'latin-summer/living room close up-12.jpg',
        'latin-summer/living room close up cusions-11.jpg',
        'latin-summer/green pattern-12.jpg',
        'latin-summer/character-13-13-12.jpg',
    ],
    relatedWorks: [
        'magic-garden-tea-series',
        'vitrage',
        'patterns-of-the-netherlands'
    ]
}

const vintage = {
    id: 'vitrage',
    title: 'Vitrage App',
    services: 'App illustration',
    about: (<>
        A set of 8 illustrations for <i>Vitrage</i>, an online shop for antique items. Each illustration represents a collection of antique items. 
        The use of grained texture gives the images an authentic aged-look. 
    </>),
    client: {
        name: 'Vitrage'
    },
    year: '2018',
    thumbnailImage: 'vintage/1.jpg',
    thumbnailImageMobile: 'vintage/1 mobile.jpg',
    headImage: 'vintage/2.jpg',
    rows: [
        'vintage/4.jpg',
        'vintage/3.jpg',
        'vintage/9.jpg',
        'vintage/5.jpg',
        'vintage/6.jpg',
        'vintage/7.jpg',
        'vintage/8.jpg',
        'vintage/1.jpg'

    ],
    relatedWorks: [
        'magic-garden-tea-series',
        'le-petit',
        'patterns-of-the-netherlands'
    ]
}

const babyroom = {
    id: 'le-petit',
    title: 'Le Petit',
    services: 'Pattern design, Stationery illustration',
    about: (<>
        A set of 7 illustrations and patterns for le-petit, 
        a French boutique shop for maternity and baby-shopping needs, 
        which provides products and services that are high-quality and uniquely crafted. 
        The illustrations present various characters taken from the world of the newborn.
    </>),
    client: {
        name: 'Le Petit'
    },
    year: '2020',
    thumbnailImage: 'baby-room/1.jpg',
    thumbnailImageMobile: 'baby-room/1.jpg',
    headImage: 'baby-room/1.jpg',
    rows: [
        'baby-room/5.jpg',
        'baby-room/3.jpg',
        'baby-room/6.jpg',
        'baby-room/7.jpg',
        'baby-room/8.jpg',
        'baby-room/9.jpg',
        'baby-room/10.jpg',
        'baby-room/11.jpg',
        'baby-room/12.jpg',
        'baby-room/13.jpg',
        'baby-room/14.jpg',
        'baby-room/15.jpg',
        'baby-room/16.jpg',
    ],
    relatedWorks: [
        'magic-garden-tea-series',
        'creatures-of-the-world',
        'patterns-of-the-netherlands'
    ]
}

const frankie = {
    id: 'frankie',
    title: 'Frankie Magazine',
    services: 'Editorial Design',
    about: (<>
        A cover suggestion for Frankie Magazine.  
        The magazine covers design, art, photography, fashion, travel, music, craft, interiors and real-life stories.
    </>),
    year: '2020',
    thumbnailImage: 'frankie/3.jpg',
    headImage: 'frankie/1.jpg',
    rows: [
        'frankie/3.jpg'
    ],
    relatedWorks: [
        'magic-garden-tea-series',
        'creatures-of-the-world',
        'le-petit'
    ]
}

const ludus = {
    id: 'ludus',
    title: 'Ludus app',
    services: 'UX/UI & Illustrations',
    about: (<>
            UX/UI and Illustrations for Ludus, 
            an educational application that helps elementary school students 
            to improve their skills and test themselves in mathematical subjects 
            in an interactive game-like way. The students are guided by fun and 
            playfull animated figures.
    </>),
    year: '2018',
    thumbnailImage: 'ludus/0.jpg',
    headImage: 'ludus/1.jpg',
    rows: [
        'ludus/2.jpg',
        'ludus/3.jpg',
        'ludus/4.jpg',
        'ludus/5.jpg',
        'ludus/6.jpg',
        'ludus/7.jpg',
        'ludus/8.jpg',
        'ludus/9.jpg',
        'ludus/10.jpg',
        'ludus/11.jpg',
        'ludus/12.jpg',
        'ludus/13.jpg',
        'ludus/14.jpg'
    ],
    relatedWorks: [
        'vitrage',
        'creatures-of-the-world',
        'trips'
    ]
}

const trips = {
    id: 'trips',
    title: 'Trips',
    services: 'Icon Illustration',
    about: (<>
        Illustrated icons for Trips, an app for sharing and exploring trip plans around the world. 
        Used within the app to tag trips with their properties and the equipment they require, 
        the icons follow the brand color palette and add playfulness to the digital experience.
    </>),
    year: '2020',
    thumbnailImage: 'trips/0.jpg',
    headImage: 'trips/0.jpg',
    rows: [
        'trips/1.jpg',
        'trips/2.jpg',
        'trips/3.jpg',
        'trips/4.jpg',
        'trips/5.jpg',
        'trips/6.jpg',
        'trips/7.jpg',
        'trips/8.jpg',
        'trips/9.jpg',
        'trips/10.jpg',
    ],
    relatedWorks: [
        'vitrage',
        'ludus',
        'patterns-of-the-netherlands'
    ]
}



export const works = [
    {
        works: [magicGardenTeaSeries]
    },
    {
        works: [creaturesOfTheWorld]
    },
    {
        works: [ludus]
    },
    {
        works: [frankie]
    },
    {
        works: [trips]
    },
    {
        works: [latinSummer]
    },
    {
        works: [vintage]
    },
    {
        works: [patternsOfTheNetherlands]
    },
    {
        works: [babyroom]
    },
    
]
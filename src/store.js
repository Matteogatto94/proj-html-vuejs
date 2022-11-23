import { reactive } from 'vue'

export const store = reactive({
    menu: [
        {
            text: 'Home',
            href: '#',
        },
        {
            text: 'About',
            href: '#'
        },
        {
            text: 'Services',
            href: '#'
        },
        {
            text: 'Work',
            href: '#'
        },
        {
            text: 'Articles',
            href: '#'
        }
    ],

    houses: [
        {
            img: 'project2.jpg',
            text: 'Florida Heath Facility',
            textTwo: 'Commercial'
        },
        {
            img: 'project1.jpg',
            text: 'Florida Heath Facility',
            textTwo: 'Commercial'
        },
        {
            img: 'project3.jpg',
            text: 'Florida Heath Facility',
            textTwo: 'Commercial'
        }
    ],
    things: [
        {
            image: 'trattore.jpg',
            title: "Redeveloping Florida's Remote Southern Coast",
            date: 'December 7th, 2015',
            description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed',
            note: 'Architecture, Buildings, Construction, News'
        },
        {
            image: 'ponte.jpg',
            title: "How We Manage Large Construction Projects",
            date: 'December 7th, 2015',
            description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed',
            note: 'Architecture, Buildings, Construction, News'
        },
        {
            image: 'cantiere_navale.jpg',
            title: 'Future proofing a modern home',
            date: 'December 6th, 2015',
            description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed',
            note: 'Architecture, Buildings, Construction, News'
        }
    ],
    partners: [
        {
            img: 'home_logo_1.png'
        },
        {
            img: 'home_logo_2.png'
        },
        {
            img: 'home_logo_3.png'
        },
        {
            img: 'home_logo_4.png'
        },
        {
            img: 'home_logo_5.png'
        }
    ],
    specialistIcon: [
        {
            icon: 'fa-solid fa-building',
            title: 'Buildings',
            text: 'Quis autem eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            titleCover: 'ARTFULLY CRAFTED',
            textCover: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
        },
        {
            icon: 'fa-solid fa-arrows-rotate',
            title: 'Renovate',
            text: 'Quis autem eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            titleCover: 'ARTFULLY CRAFTED',
            textCover: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
        },
        {
            icon: 'fa-solid fa-house-chimney',
            title: 'Construct',
            text: 'Quis autem eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            titleCover: 'ARTFULLY CRAFTED',
            textCover: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
        },
        {
            icon: 'fa-solid fa-truck',
            title: 'Exclusive',
            text: 'Quis autem eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
            titleCover: 'ARTFULLY CRAFTED',
            textCover: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
        }

    ],
    homeWorkIcon: [
        {
            icon: 'fa-solid fa-suitcase',
            numb: '3534',
            text: 'PLANNING APPLICATIONS'
        },
        {
            icon: 'fa-solid fa-building',
            numb: '896',
            text: 'COMPLETED PROJECTS'
        },
        {
            icon: 'fa-solid fa-users',
            numb: '172',
            text: 'TRAINED PROFESSIONALS'
        },
        {
            icon: 'fa-solid fa-globe',
            numb: '19',
            text: 'INTERNATIONAL OFFICES'
        }
    ],
    coreItemIcon: [
        {
            icon: 'fa-solid fa-house-chimney',
            title: 'Great Services',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        },
        {
            icon: 'fa-solid fa-gear',
            title: 'Highest Standards',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        },
        {
            icon: 'fa-solid fa-users',
            title: 'Professional Team',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        },
        {
            icon: 'fa-solid fa-lightbulb',
            title: 'Creative Solutions',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        }
    ],
    footerUpItem: [
        {
            icon: 'fa-solid fa-globe',
            text: 'Corporate Location 1600 Amphitheatre Parkway London WC1 1BA'
        },
        {
            icon: 'fa-solid fa-house-chimney',
            text: 'Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA'
        },
        {
            icon: 'fa-solid fa-phone',
            text: '1.800.458.556 / 1.800.532.2112'
        },
        {
            icon: 'fa-solid fa-envelope',
            text: 'info@your-domain.com'
        },
        {
            icon: 'fa-solid fa-clock',
            text: 'Monday - Friday: 9:00 AM - 6:00 PM'
        },
        {
            icon: 'fa-solid fa-clock',
            text: 'Saturday -Sunday: 9:00 AM - 12:00 PM'
        }
    ],

    getImageUrl(name) {
        return new URL(`/src/assets/img/${name}`, import.meta.url).href
    }
})
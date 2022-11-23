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

    getImageUrl(name) {
        return new URL(`/src/assets/img/${name}`, import.meta.url).href
    }
})
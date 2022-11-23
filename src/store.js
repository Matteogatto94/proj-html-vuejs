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

    getImageUrl(name) {
        return new URL(`/src/assets/img/${name}`, import.meta.url).href
    }
})
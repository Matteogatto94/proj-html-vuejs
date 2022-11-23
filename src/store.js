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
            img: 'project2.jpg'
        },
        {
            img: 'project1.jpg'
        },
        {
            img: 'project3.jpg'
        }
    ],

    getImageUrl(name) {
        return new URL(`/src/assets/img/${name}`, import.meta.url).href
    }
})
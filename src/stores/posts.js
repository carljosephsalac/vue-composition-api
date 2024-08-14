import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const usePostsStore = defineStore('posts-store', {
  // Data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'Introduction to JavaScript',
          body: 'JavaScript is a versatile programming language used in web development.',
          author: 'John Doe',
          created_at: 'August 13, 2024',
          is_saved: false
        },
        {
          id: 2,
          title: 'Understanding CSS Grid',
          body: 'CSS Grid is a powerful layout system in CSS.',
          author: 'Jane Smith',
          created_at: 'August 12, 2024',
          is_saved: false
        },
        {
          id: 3,
          title: 'Getting Started with Laravel',
          body: 'Laravel is a PHP framework that makes web development easier.',
          author: 'Chris Johnson',
          created_at: 'August 11, 2024',
          is_saved: false
        },
        {
          id: 4,
          title: 'A Guide to REST APIs',
          body: 'REST APIs allow communication between client and server over HTTP.',
          author: 'Emily Davis',
          created_at: 'August 10, 2024',
          is_saved: false
        },
        {
          id: 5,
          title: 'Exploring Vue.js',
          body: 'Vue.js is a progressive JavaScript framework for building user interfaces.',
          author: 'Michael Brown',
          created_at: 'August 9, 2024',
          is_saved: false
        }
      ]
    }
  },
  // Method
  actions: {
    addPosts(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Carl Joseph Salac',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
    }
  }
})

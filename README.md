# Let's learn VUE JS | Composition API - Script Setup, Vue Router & Pinia in 2023 (Web Developer Path) - Learn with Jon

## DAY 1

### Project Structure:
- `index.html`, root where the browser going to read
- `id="app"`, wrapper of the vue or considered as root
- `src folder`, brain of the vue application
- `App.vue`, root component

### Reactivity:
- `import { ref and reactive }` // for reactivity

## DAY 2

### V-FOR:
- always put unique key when using v-for `:key="post.id"`

### Single File Component:
- `import PostItem from '@/components/PostItem.vue'` 
- `defineProps()`, like @props() in blade
- `<PostItem :post="post" />` , to pass the data from parent component to child
- `<script setup>` , for simplicity

### Vue Router:
- in `router/index.js` directory import the view component from views folder
- `import PostCreate from '@/views/PostCreate.vue'`
- set up the route
  
  ```javascript
    {
      path: '/posts/create',
      name: 'posts.create',
      component: PostCreate
    },
  ```
- in App.vue use `<RouterLink to="/posts/create">Create Post</RouterLink>` to create a link
- `<RouterView />` , renders the component from views folder

### V-MODEL:
- `v-model` , two way binding
- to make the variable reactive
  
  ```javascript
    import { reactive } from 'vue'
    const post = reactive({
        title: '',
        body: ''
    })
  ```
- `computed` (returns something) in options api
  
  ```javascript
    import { reactive, computed } from 'vue'
    const isFormInvalid = computed(() => {
        return post.title === '' || post.body === ''
    })
    <button :disabled="isFormInvalid" class="mt-1 btn btn-neutral">Add</button>
  ```

## DAY 3

### Emit events:
- `emit` , custom event listener
- from child to parent component communication
- `defineEmits([])`, takes an array of custom emits or events

### Pinia (State Management):
- stores folder
- separate the data and logic

### Pinia Actions (Create):
- in `stores/posts` create an action 
- in `PostCreate` view,
  
  ```javascript
    import { usePostsStore } from '@/stores/posts'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const postStore = usePostsStore()

    const submit = () => {
        // usePostsStore().addPosts(post)
        postStore.addPosts(post)
        router.push({ name: 'home' })
    }
  ```

### Pinia Getters:
- `getters:` same as computed

### Using JSON-Server to save the state:
- `npm intall json-server`
- create `db.json` in root directory
- move the post (array of objects) to db.json
- to run json server run this command , `npx json-server db.json -w`
- fetch the data

  ```javascript
    getPost() {
      fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => (this.posts = data))
    },
  ```

import IPost from "@/interfaces/IPost";
import { Ref, ref } from "vue";

class PostService {
  private posts: Ref<Array<IPost>>
  private post: Ref<IPost>

  constructor() {
    this.posts = ref<Array<IPost>>([])
    this.post = ref<IPost>({})
  }

  getPosts(): Ref<Array<IPost>> {
    return this.posts
  }

  getPost(): Ref<IPost> {
    return this.post
  }

  async fetchAll() : Promise<void> {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(url)
      this.posts.value = await response.json()
    } catch (error) {
      console.log("🚀 ~ file: PostServices.ts ~ line 27 ~ PostService ~ fetchAll ~ error", error)
    }
  }

  async fetchById(id: string | Array<string>): Promise<void> {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`
      const response = await fetch(url)
      this.post.value = await response.json()
    } catch (error) {
      console.log("🚀 ~ file: PostServices.ts ~ line 37 ~ PostService ~ fetchById ~ error", error)
    }
  }
}

export default PostService
export interface ProductRequest {
  id: number
  title: string
  category: string
  upvotes: number
  status: string
  description: string
  comments?: Comment[]
  date: string
}

export interface Comment {
  id: number
  content: string
  date: string
  user: User
  replies?: Reply[]
}

export interface Reply {
  content: string
  replyingTo: string
  user: User
  date: string
}

export interface User {
  image: string
  name: string
  username: string
}

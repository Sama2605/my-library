export interface Book {
  id: number
  title: string
  author: string
  published: number
  link: string
  rating: number
  status: 'available' | 'lost' | 'borrowed'
}

export interface BookFormValues {
  title: string
  author: string
  published: number
  link: string
  rating: number
  status: 'available' | 'lost' | 'borrowed'
}

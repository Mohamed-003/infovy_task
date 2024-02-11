import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
 
      fields: [
        { name: 'title', type: 'text' },
        { name: 'content', type: 'richText' }
      ]
  
}

export default Users

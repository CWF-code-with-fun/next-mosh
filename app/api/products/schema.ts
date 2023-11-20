import {z} from 'zod'

const schema= z.object({
    category:z.string().min(3),
    name:z.string().min(3)
})

export default schema;
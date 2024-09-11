import * as contentful from 'contentful'

const client=contentful.createClient({
    accessToken:String(import.meta.env.VITE_ACCESS_TOKEN),
    space:String(import.meta.env.VITE_SPACE_ID),


}
)

export default client
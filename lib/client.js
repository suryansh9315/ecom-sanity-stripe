import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'dt7w2dxt',
    dataset:'production',
    apiVersion:'2022-05-22',
    useCdn:true,
    token:'sk6jjBOknGfDYdre4mGbHxacYiw26OrBn4V1U6aVa3VzetpmEf7GPsNv7tQCnAZ3aeqQxYZeHcD9JWmN0P92wIUtkE8RtqOVFmj74Cud10wVXXRJN5mtk9HGsIopQo1kPM89LXNE3cp8f6n5y5dFrOmmqOHcXUddeDylWDwJEvfo4eZgPOqI'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
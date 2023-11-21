import client from "lib/sanity";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getPaginatedPosts = async(page, limit = 3) => {
    const posts = await client.fetch(`*[_type=="post"]{_createdAt, title, date, 'image': cover_image.asset->url, 'slug':slug.current, 'author': author->{author_name, 'profile': profile.asset->url}, 'category': category->{category_name}} | order(date desc)[${page*limit}...${(page+1)*limit}]`);
    return posts;
}

export const getAllPosts = async(page, limit = 3) => {
    const posts = await client.fetch(`*[_type=="post"]{_createdAt, title, date, 'image': cover_image.asset->url, 'slug':slug.current, 'author': author->{author_name, 'profile': profile.asset->url}, 'category': category->{category_name}} | order(date desc)`);
    return posts;
}


export const getAllCategories = async() => {
    const categories = await client.fetch(`*[_type=="category"]`);
    return categories;
}

export const getPostBySlug = async(slug) => {
    const post = await client.fetch(`*[_type=="post" && slug.current==$slug]{_createdAt, title, date, content[]{...,'asset': asset->}, cover_image, 'slug':slug.current, 'author': author->{author_name, 'profile': profile.asset->url}, 'category': category->{category_name}}`, {slug}
    );
    return post;
}

//get all stories

export const getAllStories = async() => {
    const stories = await client.fetch(`*[_type=="story"]`);
    return stories;
}

import React from 'react';
import BlogPost from './BlogPost/BlogPost';

import data from './data';

import './BlogPosts.sass';

const BlogPosts = () => (
  <section id="BlogPosts" className="pt-5 pb-3">
    <div className="SectionContainer container">
      <div className="SectionRow row">
        <div
          className={'Header col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3'
                     + ' text-center mb-4 mt-2'}
        >
          <h4 className="Text pb-0 pt-1">Blog Posts</h4>
        </div>
        <div className="Filler col-md-2 col-xl-3" />
        {data.map((blogPost) => (

          <BlogPost
            key={blogPost.id}
            id={blogPost.id}
            title={blogPost.title}
            description={blogPost.description}
            link={blogPost.link}
            rightAlign={blogPost.rightAlign}
          />
        ))}
        <a
          className={'ViewAllButton btn btn-dark py-2 px-3 mt-5 mb-5 mx-auto'
                     + ' d-inline-block col-3'}
          href="https://www.compositional-it.com/news-blog/author/alican/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="Text h5 mb-0">
            <i className="fas fa-eye fa-1x" />
            {'  View All'}
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default BlogPosts;

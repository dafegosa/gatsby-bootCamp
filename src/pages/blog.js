import React from 'react'
import LayoutComponent from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            # Assumes you're using title in your frontmatter.
            title
            date
          }
        }
      }
    }
  }`);
  console.log(data);
  return (
    <LayoutComponent>
      <h2>Blog</h2>
      <p>This is the blog room!</p>
      <ul>
      { data.allMarkdownRemark.edges.map((post) => {
        return (
          <li>
            <div style={{marginBottom: "2rem"}}>
              <h3>
                {post.node.frontmatter.title} <br/>
                <span style={{fontSize: "0.8rem"}}>
                  {post.node.frontmatter.date}
                </span>
              </h3>
              <p dangerouslySetInnerHTML={{__html: post.node.html}} />
            </div>
            <hr style={{width: "100%"}}/>
          </li>
        )
      })}
      </ul>
    </LayoutComponent>
  )
}

export default BlogPage;
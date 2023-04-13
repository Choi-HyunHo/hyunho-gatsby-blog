import { Link, StaticQuery, graphql } from 'gatsby';
import Post from '../../models/post';
import PostSearch from '../post-search';
import './style.scss';
import styled, { css } from 'styled-components';
import React, { useCallback, useState, useEffect } from 'react';

const MainWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  ${(props) => props.eleval > 0 && elevalCss}
  background: var(--background-color);
  transition: box-shadow 400ms ease-in-out, transform 400ms ease-in-out;
`;

const elevalCss = css`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  transition: box-shadow 400ms ease-in-out, transform 400ms ease-in-out;
`;

function PageHeader({ siteTitle }) {
  const [eleVal, setEleVal] = useState(false);

  const listener = useCallback(() => {
    if (window.scrollY || window.pageYOffset > 0) {
      setEleVal(true);
    } else {
      setEleVal(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [listener]);

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <MainWrap className="page-header-wrapper" eleval={eleVal}>
          <div className="page-header">
            <div className="front-section">
              <Link className="link" to="/">
                {siteTitle}
              </Link>
            </div>
            <div className="trailing-section">
              <Link className="link" to="/about">
                about
              </Link>
              <Link className="link" to="/posts">
                posts
              </Link>
              <PostSearch
                posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
              />
            </div>
          </div>
        </MainWrap>
      )}
    />
  );
}

export default PageHeader;

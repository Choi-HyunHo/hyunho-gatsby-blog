import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import ProjectSection from '../components/project-section';

function ProjectPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { about } = metaData;
  const { projects } = about;
  return (
    <Layout>
      <Seo title="project" />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default ProjectPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          timestamps {
            date
            activity
            info
            links {
              post
              github
              web
              googlePlay
              appStore
            }
          }

          timestamp {
            date
            activity
            info
            links {
              post
              github
              web
              googlePlay
              appStore
            }
          }

          certificate {
            date
            activity
            info
            links {
              post
              github
              web
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              web
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;

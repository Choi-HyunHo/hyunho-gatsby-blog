import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';
import TimeStamp from '../components/timestamp';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects, timestamp } = about;
  return (
    <Layout>
      <Seo title="About" />
      <Bio author={author} language={language} />
      <TimeStampSection timestamps={timestamps} />
      <TimeStamp timestamps={timestamp} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default AboutPage;

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

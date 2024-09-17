import React from 'react';
import moment from 'moment';
import styles from '../Feed/Feed.module.scss';
import Tags from '../Post/Tags';

const TILFeed = ({ edges, html }) => (
  <div className={styles['feed']}>
    {
      edges.map((edge) => {
        const { html } = edge.node;
        const { frontmatter } = edge.node;
        const { tilTagSlugs } = edge.node.fields;

        return (
          <div className={styles['feed__item']} key={edge.node.fields.slug}>
            <div className={styles['feed__item-meta']}>
              <time className={styles['feed__item-meta-time']} dateTime={moment(frontmatter.date).format('MMMM D, YYYY')}>
                {moment(frontmatter.date).format('MMMM D, YYYY')}
              </time>
            </div>
            <h2 className={styles['feed__item-title']}>
              {frontmatter.title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            {
              frontmatter.tags && tilTagSlugs && <Tags tags={frontmatter.tags} tagSlugs={tilTagSlugs} />
            }
          </div>
        );
      })
    }
  </div>
);

export default TILFeed;

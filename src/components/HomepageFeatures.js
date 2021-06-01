import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Personalized cooling',
    imageUrl: '../../static/img/desk-fans.jpg',
    description: (
      <>
        Fans can provide local and personalized cooling.
      </>
    ),
  },
  {
    title: 'Uniform air flow',
    imageUrl: '../../static/img/ceiling-fans.jpg',
    description: (
      <>
        Ceiling fans can be used to cool a large group of people.
      </>
    ),
  },
  {
    title: 'Efficient',
    imageUrl: '../../static/img/aircon.jpg',
    description: (
      <>
        Air conditioners consume more than 100 the energy needed to run fans.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

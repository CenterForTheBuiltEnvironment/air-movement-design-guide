import React from 'react';
import clsx from 'clsx';
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const ContributorsList = [
  {
    name: <>Paul Raftery</>,
    imageUrl: "img/paul-raftery.jpg",
    role: <>Main author</>,
    profession: <>Professional Researcher at CBE</>,
    link: "https://cbe.berkeley.edu/about-us/people/paul-raftery/",
  },
  {
    name: <>Toby Cheung</>,
    imageUrl: "img/toby.jpg",
    role: <>XXX</>,
    profession: <>Postdoctoral scholar at SinBerBEST</>,
    link: "https://scholar.google.com.sg/citations?user=3aKU-lIAAAAJ&hl=en",
  },
  {
    name: <>Federico Tartarini</>,
    imageUrl: "img/federico.jpg",
    role: <>Website developer</>,
    profession: <>Postdoctoral scholar at SinBerBEST</>,
    link: "https://federicotartarini.github.io",
  },
];

function Contributor({ imageUrl, name, profession, role, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={clsx(
        "avatar avatar--vertical col col--4 text--center",
        styles.features
      )}
    >
      <img
        className="avatar__photo avatar__photo--xl"
        src={imgUrl}
        alt={name}
      />
      <a className="avatar__intro" href={link}>
        <h4 className="avatar__name">{name}</h4>
        <small className="avatar__subtitle">{profession}</small>
        <small className="avatar__subtitle">{role}</small>
      </a>
    </div>
  );
}

export default function HomepageContributors() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Developed and designed by:</h1>
        <div className="row">
          {ContributorsList.map((props, idx) => (
            <Contributor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

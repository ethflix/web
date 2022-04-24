/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import React, { useContext, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';

import { ModalContext } from '../context/ModalContext';
import styles from '../styles/Browse.module.scss';
import { Section } from '../types';
import { ROUTES } from '../config/route';
import { useWeb3 } from '../context/Web3ModalContext';

const List = dynamic(import('../components/List'));
const Modal = dynamic(import('../components/Modal'));
const Layout = dynamic(import('../components/Layout'));
const Banner = dynamic(import('../components/Banner'));

export default function Browse(): React.ReactElement {
  const web3 = useWeb3();
  const router: NextRouter = useRouter();
  const { isModal } = useContext(ModalContext);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const accessTokenExpiry = Number(localStorage.getItem('access_token_expires_at'));
    const now = Date.now();
    if (!accessToken || accessToken.length === 0 || now > accessTokenExpiry) {
      router.push(ROUTES.HOME);
    }
  }, []);

  return (
    <>
      {isModal && <Modal />}
      <Layout>
        <Banner media={sections[0].movies[0]} />
        <div className={styles.contentContainer}>
          {sections.map((item, index) => {
            return (
              <List
                key={index}
                heading={item.heading}
                movies={item.movies}
                defaultCard={item?.defaultCard}
                topList={item?.topList}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

const sections: Section[] = [
  {
    heading: 'Popular on EthFlix',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Horror Movies',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Only on EthFlix',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Trending Now',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Comedies',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Top 10 in US Today',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ],
    topList: true
  },
  {
    heading: 'Action',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'TV Sci-Fi and Horror',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Mystery Movies',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Animation',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  },
  {
    heading: 'Drama',
    movies: [
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: 'a566dc55-7088-4c0e-af37-5c6c257b9df8',
        title: 'Feeta - Hindi drama short film',
        overview: "Feeta is a story of three siblings. An elder sister and two younger brothers. One day while getting ready for school, one of the brothers makes fun of the other that he doesn't know how to tie the shoelace and their sister listens to the whole conversation between them, then she teaches the lesson to the elder brother by comparing the shoelace with his relationship with others.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '965e3a94-3c5f-4860-a6b9-54d2b9644168',
        title: 'Realization - Hindi Drama Short Film',
        overview: "On a day-to-day basis, we shy away from verbally sharing our love with our dads as we end up taking this relationship for granted. Then we spend our lives repenting for that one moment when we could have hugged them and told them how much we loved them.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '9a30d21f-c368-4722-84dc-6b45ebd4c1f2',
        title: 'Equation - Hindi Drama Short Film',
        overview: "Prof. Raman Srinivasan writes a letter to Dr. PK Indurkar, a great mathematician, in the hope of getting an answer to an equation that he hasn't solved despite repeated attempts. In reality, there is a group of people who writes books in the name of Dr. PK Indurkar. No one exists with that name. Srinivasan has already sent a no. of emails and letters to the mathematician but in vain. Unable to answer all the letters, they publish a public obituary stating the demise of Dr. PK Indurkar.",
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      },
      {
        id: '962e9911-992b-4f2f-af1f-6e437bfa9622',
        title: 'Marathi Short Film - Ranati',
        overview: 'This epidemic of humanity, which has gone from human to human, started appearing in the human mind again. This is a story about a subject.',
        poster: 'https://api.lorem.space/image/movie?w=420&h=190',
        banner: 'https://api.lorem.space/image/movie?w=420&h=420',
        rating: 3,
        genre: [
          {
            id: 1,
            name: 'Short Movies'
          }
        ]
      }
    ]
  }
];

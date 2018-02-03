import { Component } from 'react'
import { times } from 'lodash'
import Head from 'next/head'
import Masonry from 'react-masonry-component'
import ReactGA from 'react-ga'

export default class ChickenWaffles extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-113511865-1')
    ReactGA.pageview('/')
  }

  render() {
    return (
      <div className="container">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Bubblegum+Sans"
            rel="stylesheet"
          />
        </Head>

        <div className="header">
          <h1>Chicken and Waffle!</h1>

          <div className="chicken-waffles">
            <img
              className="chicken"
              src="/static/chicken.png"
              alt="Chicken"
              width="300"
            />
            <img
              className="waffle"
              src="/static/waffle.png"
              alt="Waffle"
              width="300"
            />
          </div>
        </div>

        <div className="masonry">
          <Masonry elementType="ul">
            {times(9, i => (
              <li key={i} style={{ listStyle: 'none' }}>
                <img
                  src={`/static/cook/${i + 1}.jpg`}
                  alt="Making Chicken and Waffles"
                  style={{ width: '400px' }}
                />
              </li>
            ))}
          </Masonry>

          <img
            src="/static/cook/10.jpg"
            width="100%"
            alt="Making Chicken and Waffles"
          />
        </div>

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Bubblegum Sans', sans-serif;
            text-align: center;
          }

          h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
          }

          .header {
            padding: 30px 60px;
          }

          .masonry {
            margin: 0 auto;
            max-width: 1280px;
            padding: 0 60px;
            text-align: left;
          }

          .masonry img {
            margin: 10px;
            display: block;
          }

          .chicken-waffles {
            margin-bottom: 30px;
          }

          .chicken {
            animation: spin linear 3s infinite;
            margin: 2rem;
          }

          .waffle {
            animation: spin-counter linear 6s infinite;
            margin: 2rem;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-counter {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
        `}</style>
      </div>
    )
  }
}

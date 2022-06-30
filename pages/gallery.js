import Container from "../components/container";

import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { Card } from "antd";
import Script from "next/script";

export default function Gallery() {
  const { Meta } = Card;
  const image = [
    {
      title: "blog",
      url: "https://drscdn.500px.org/photo/1013482204/m%3D900/v2?sig=e37fc4aec575af82558647188deefa33d3c05f15615694415253da9b4a35693b",
      alt: "Smiling girl by fendy studio on 500px.com",
      title: "Blog",
      description: "My blog",
    },
    {
      title: "blog",
      url: "https://drscdn.500px.org/photo/1013482204/m%3D900/v2?sig=e37fc4aec575af82558647188deefa33d3c05f15615694415253da9b4a35693b",
      alt: "Smiling girl by fendy studio on 500px.com",
      title: "Blog",
      description: "My blog",
    },
    {
      title: "blog",
      url: "https://drscdn.500px.org/photo/1013482204/m%3D900/v2?sig=e37fc4aec575af82558647188deefa33d3c05f15615694415253da9b4a35693b",
      alt: "Smiling girl by fendy studio on 500px.com",
      title: "Blog",
      description: "My blog",
    },
    {
      title: "blog",
      url: "https://drscdn.500px.org/photo/1013482204/m%3D900/v2?sig=e37fc4aec575af82558647188deefa33d3c05f15615694415253da9b4a35693b",
      alt: "Smiling girl by fendy studio on 500px.com",
      title: "Blog",
      description: "My blog",
    },
  ];
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <div className="loading">
            <main>
              <div className="frame">
                <div className="grid-wrap">
                  <div className="grid">
                    {image.map((data, index) => (
                      <a href="#" className="grid__item" key={index}>
                        <div className="grid__item-bg"></div>
                        <div className="grid__item-wrap">
                          <img
                            className="grid__item-img"
                            src={data.url}
                            alt={data.alt}
                          />
                        </div>
                        <h3 className="grid__item-title">{data.title}</h3>
                        <h4 className="grid__item-number">{index}</h4>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="content">
                  {image.map((data, index) => (
                    <div className="content__item" key={index}>
                      <div className="content__item-intro">
                        <img
                          className="content__item-img"
                          src={data.url}
                          alt={data.alt}
                        />
                        <h2 className="content__item-title">{data.title}</h2>
                      </div>
                      <h3 className="content__item-subtitle">
                        {data.description}
                      </h3>
                      <div className="content__item-text"></div>
                    </div>
                  ))}

                  <button className="content__close">Close</button>
                  {/* <svg className="content__indicator icon icon--caret"><use xlink:href="#icon-caret"></use></svg> */}
                </div>
              </div>
            </main>
          </div>
        </Container>
      </Layout>
      <Script
        type="text/javascript"
        src="/js/imagesloaded.pkgd.min.js"
      ></Script>
      <Script type="text/javascript" src="/js/masonry.pkgd.min.js"></Script>
      <Script type="text/javascript" src="/js/charming.min.js"></Script>
      <Script type="text/javascript" src="/js/TweenMax.min.js"></Script>
      <Script type="text/javascript" src="/js/demo.js"></Script>
    </>
  );
}

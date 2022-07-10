import Container from "../components/container";

import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { Card, Image, Row, Col, Carousel, List , Divider} from "antd";
import Script from "next/script";
import GalleryItem from "../components/gallery-item";

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
    {
      title: "blog",
      url: "https://drscdn.500px.org/photo/1013482204/m%3D900/v2?sig=e37fc4aec575af82558647188deefa33d3c05f15615694415253da9b4a35693b",
      alt: "Smiling girl by fendy studio on 500px.com",
      title: "Blog",
      description: "My blog",
    },
    {
      title: "blog",
      url: "https://drscdn.500px.org/photo/1016533209/m%3D900/v2?sig=554b4642ae3680a7f1a74d2e643f2822bfec63bbf425d5111cf26b7164c0987e",
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
          <Row justify="center">
            <Col span={12}>
              <Carousel
                autoplay
                style={{
                  maxHeight: "20vh",
                  backgroundColor: "black",
                  overflow: "hidden",
                }}
              >
                {image.map((data, index) => (
                  <div key={index}>
                    <Image src={data.url} alt={data.name} width={1000} />
                  </div>
                ))}
              </Carousel>
              <Divider>~ Fendy Image ~</Divider>
              <Row>
                <List
                  grid={{ gutter: 10,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3, }}
                  dataSource={image}
                  renderItem={(item) => (
                    <List.Item>
                      <GalleryItem
                        name={item.name}
                        picture={item.url}
                      ></GalleryItem>
                    </List.Item>
                  )}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

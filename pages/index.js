import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { Card, Row} from "antd";
import Link from "next/link";

export default function Index() {
  const { Meta } = Card;
  const info = [
    {
      link: "blog",
      img: "https://drscdn.500px.org/photo/1013482204/m%3D900/v2?sig=e37fc4aec575af82558647188deefa33d3c05f15615694415253da9b4a35693b",
      imgAlt: "Smiling girl by fendy studio on 500px.com",
      title: "Blog",
      description: "My blog",
    },
    {
      link: "portfolio",
      img: "https://drscdn.500px.org/photo/1047833008/m%3D900/v2?sig=33fb40a54359a4c93cb8e5e7d1a59bc3ec92635a873bca310ab65d3d0a59fba4",
      imgAlt: "kimono in snow by fendy studio on 500px.com",
      title: "Portfolio",
      description: "My portfolio",
    },
    {
      link: "gallery",
      img: "https://drscdn.500px.org/photo/1050226083/m%3D900/v2?sig=334fd7364bda2815cab85dbb76557b9d7a0c520b77aa4678f0e64be52fc13668 ",
      imgAlt: "kimono in snow by fendy studio on 500px.com",
      title: "Gallery",
      description: "My Gallery",
    },
  ];
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
        <Row justify="center" > 
        <div style={{display:"flex"}}>
          {info.map((item,index) => (
            <Link href={`/${item.link}`} key={index}>
              <Card 
                hoverable
                style={{ width: 240 , margin:20}}
                cover={<img src={item.img} alt={item.alt} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Link>
          ))}
          </div>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

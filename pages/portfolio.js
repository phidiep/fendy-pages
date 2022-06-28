import { Timeline, Avatar, Layout, Col, Row, Typography , Image } from "antd";
// import Image from 'next/image'
// import avatar from '/assets/portfolio/avatar.jpg'
const { Content } = Layout;
const { Text, Paragraph } = Typography;
export default function Portfolio() {
  const timelineData = [
    {
      key : 1,
      role: "Android Developer",
      companyName: "ITS LAB",
      time: "MAR 2017 - FEB 2018 - Ho Chi Minh, Viet Nam",
      detail: `Create an android app that provides real-time traffic
      information to user and control by voice. Responsibility :
      Android app coding, aws services integrating.`,
      techStack:"Java, Gitlab, Git, AWS, Android, Linux, RESTful API, MongoDB, gitlab, Python, Django",
    },
    {
      key : 2,
      role: "Full Stack Engineer .NET",
      companyName: "SORIMACHI VIET NAM",
      time: "MAR 2017 - JUL 2019 - Ho Chi Minh, Viet Nam (2 years 6 month)",
      detail: `Japanese Company working with accounting web application as
      a member and a few months as a team lead. Responsibility :
      coding, testing, database manager , server manager, member
      manager, document writing. `,
      techStack:"C#, .NET , HTML, CSS, jQuery, Bootstrap , SVN, SQL Server"
    },
    {
      key : 3,
      role: "System integration Engineer",
      companyName: "AXAS CO.,LTD.",
      time: "AUG 2019 - Present - Tokyo, Japan",
      detail: `1. Bank system web app - coding and testing (Tech stack: Javascript, Java, HTML, CSS) 
      2.Video Conference web app - coding, testing, and document writing (Tech stack: Angular,
      RxJS, TypeScript, CSS, HTML).
      3.Architecture sketch web app - coding, testing, and document writing (Tech stack: Angular,
      Java, Javascript, TypeScript, CSS, HTML).
      4.Ticket gate control system - coding and testing ( Tech stack: C, C++,
      Linux ).
      5.Think client system set up - scriptwriting and software set up (Bash script)`,
      techStack: "",
    },
  ];

  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
        <Content>
          <Row style={{ minHeight: "20vh" }}></Row>
          <Row justify="center" style={{ minHeight: "20vh" }}>
            <Col span={4} style={{ textAlign: "center" }}>
              <Avatar size={200} src="/assets/portfolio/avatar.jpg" />
            </Col>
            <Col span={8}>
              <Typography.Title level={1}>Diep Bao Phi</Typography.Title>
              <Typography.Title level={4}>
                FULLSTACK WEB DEVELOPER
              </Typography.Title>
              <Typography.Title level={5} style={{ fontWeight: "lighter" }}>
                I’m a fullstack engineer and try to moving my skill to cloud
                especially AWS
              </Typography.Title>
            </Col>
          </Row>
          <Row justify="center" style={{ minHeight: "80vh" }}>
            <Col span={4}></Col>
            <Col span={8}>
              <Timeline pending="Pending..." reverse={"true"}>
                {timelineData.map((data) => (
                  <Timeline.Item key={data.key}>
                    <Typography.Title level={5}>{data.role}</Typography.Title>
                    <Typography.Title level={5} style={{ fontWeight: "lighter" }}>
                      {data.companyName}
                    </Typography.Title>
                    <Text style={{ fontWeight: "lighter" }} italic></Text>
                    <Paragraph
                      ellipsis={{ rows: 4, expandable: true, symbol: "more" }}
                      style={{ width: 700 }}
                    >{data.detail}</Paragraph>
                    <Paragraph italic style={{ fontWeight: "lighter" }}>
                      TechStack : {data.techStack}
                    </Paragraph>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}


import { Button, Modal , Col, Row, Typography, Divider } from 'antd';
import React, { useState } from 'react';
import { Image,Skeleton } from "antd";
import style from './modal.module.css'
export default function ImageModal ({isModalVisible, setIsModalVisible,data}) {
  // const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        className = {style.modal}
        width= {"100vw -40px"}
        footer ={null}>
        <Row className={style.row}>
        <Col span={16}>
          <div className={style.background}>
          <Image preview= {false} height={500} src={data}></Image>
          </div>
          
          </Col>
        <Col span={6} offset ={1}>
        <Typography.Title  level={5} style={{ margin: 0 }}>
        uyen ne
      </Typography.Title>
      <Divider></Divider>
        <Row>
         lorem
        </Row>
        </Col>
        </Row>
      </Modal>
    </>
  );
}
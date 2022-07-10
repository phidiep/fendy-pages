import Card from "antd/lib/card/Card";
import { Image, Space } from "antd";
import { useState } from "react";
import style from "./gallery-item.module.css";
import ImageModel from "./modal";
import { HeartFilled,CommentOutlined } from "@ant-design/icons";
export default function GalleryItem({ name, picture }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div className={style.background} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <Image
      className={style.image}
        src={picture}
        alt={name}
        preview={false}
        width={200}
      />
      {isModalVisible && (
        <ImageModel
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
          data = {picture}
        ></ImageModel>
      )}
      {isHovering && <div className={style.info} onClick={showModal}>
        <Space size="small">
        <HeartFilled />69
        <CommentOutlined />222
        </Space>

      </div>}
    </div>
  );
}

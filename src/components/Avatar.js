import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, text }) => {
  const imageUrl = src?.includes('default_profile_izly1f') ? 'https://res.cloudinary.com/dmnol3krk/image/upload/v1711113312/media/images/default_profile_izly1f.jpg': src;
  return (
    <span>
      <img
        className={styles.Avatar}
        src={imageUrl}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;
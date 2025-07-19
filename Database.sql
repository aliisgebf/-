CREATE DATABASE IF NOT EXISTS fadfada CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE fadfada;

CREATE TABLE IF NOT EXISTS sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  session_type ENUM('text', 'audio', 'video'),
  gender ENUM('male', 'female'),
  save_session ENUM('yes', 'no'),
  duration FLOAT,
  price DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

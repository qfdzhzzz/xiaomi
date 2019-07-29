/*
 Navicat Premium Data Transfer

 Source Server         : student
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : db_1904

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 26/07/2019 16:35:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for itemb
-- ----------------------------
DROP TABLE IF EXISTS `itemb`;
CREATE TABLE `itemb`  (
  `bid` int(255) NOT NULL AUTO_INCREMENT,
  `bname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banswer` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`bid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of itemb
-- ----------------------------
INSERT INTO `itemb` VALUES (16, ' 1111', '11111');
INSERT INTO `itemb` VALUES (12, ' 九寨沟', '中国·四川');
INSERT INTO `itemb` VALUES (13, ' 泰山', '中国·山东');
INSERT INTO `itemb` VALUES (14, ' 苏州园林', '中国·苏州');
INSERT INTO `itemb` VALUES (15, ' 1', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('root', 'root');
INSERT INTO `users` VALUES ('zzz', 'zzz');
INSERT INTO `users` VALUES ('ddd', 'ddd');
INSERT INTO `users` VALUES ('', '');
INSERT INTO `users` VALUES ('ican', 'ican');
INSERT INTO `users` VALUES ('q', 'q');
INSERT INTO `users` VALUES ('aaaa', 'aaaa');
INSERT INTO `users` VALUES ('eee', 'eee');
INSERT INTO `users` VALUES ('adm', 'adm');
INSERT INTO `users` VALUES ('dzh', 'dzh');
INSERT INTO `users` VALUES ('G2', 'G2');
INSERT INTO `users` VALUES ('qqqq', 'qqqq');
INSERT INTO `users` VALUES ('aaaaa', 'aaaaa');
INSERT INTO `users` VALUES ('zzzz', 'zzzz');
INSERT INTO `users` VALUES ('dzh2', 'dzh2');
INSERT INTO `users` VALUES ('Manager', '111');
INSERT INTO `users` VALUES ('xiaomi', 'xiaomi');

SET FOREIGN_KEY_CHECKS = 1;

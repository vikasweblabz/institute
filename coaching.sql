-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2023 at 12:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coaching`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` text NOT NULL,
  `address` longtext NOT NULL,
  `feedback` text NOT NULL,
  `registration_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `name`, `email`, `phone`, `address`, `feedback`, `registration_date`, `updation_date`) VALUES
(55, 'sahil bisht', 'sahil@gmail.com', '9999999999', 'test', '', '2023-03-01 11:10:02', '2023-03-01 11:10:02'),
(56, 'sahil bisht', 'sahil@gmail.com', '9999999999', 'test', '', '2023-03-01 11:10:24', '2023-03-01 11:10:24'),
(57, 'abhishek vhauhna', 'a@gmail.com', '9999999999', 'test', '', '2023-03-01 11:11:57', '2023-03-01 11:11:57'),
(58, 'kartik vishwakarma', 'k@gmail.com', '9090909090', 'test', '', '2023-03-01 11:12:19', '2023-03-01 11:12:19');

-- --------------------------------------------------------

--
-- Table structure for table `it_weblabz`
--

CREATE TABLE `it_weblabz` (
  `id` int(10) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(40) NOT NULL,
  `mobile` text NOT NULL,
  `message` text NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `data_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `it_weblabz`
--

INSERT INTO `it_weblabz` (`id`, `name`, `email`, `mobile`, `message`, `register_date`, `data_update`) VALUES
(62, 'sahil', 'sahil@gmail.com', '9999999999', 'testing', '2023-03-01 08:45:22', '2023-03-01 08:45:22'),
(63, 'abhishek', 'abhishek@gmail.com', '8888888888', 'test', '2023-03-01 08:45:55', '2023-03-01 08:45:55'),
(64, 'kartik', 'kartik@gmail.com', '9999999999', 'Send From Enquiry Form', '2023-03-01 08:46:15', '2023-03-01 08:46:15');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `first_name`, `last_name`, `email`, `password`, `register_date`, `updation_date`) VALUES
(2, 'sahil', 'Bisht', 'sahil@gmail.com', 'admin', '2023-01-06 11:43:52', '2023-03-01 06:58:49');

-- --------------------------------------------------------

--
-- Table structure for table `weblabz_in`
--

CREATE TABLE `weblabz_in` (
  `id` int(10) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(40) NOT NULL,
  `company_name` text NOT NULL,
  `phone` text NOT NULL,
  `message` text NOT NULL,
  `register_data` timestamp NOT NULL DEFAULT current_timestamp(),
  `updation_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weblabz_in`
--

INSERT INTO `weblabz_in` (`id`, `name`, `email`, `company_name`, `phone`, `message`, `register_data`, `updation_data`) VALUES
(1, 'sahil', 'sahil@gmail.com', 'weblabz', '2147483647', 'test', '2023-03-01 09:38:23', '2023-03-01 09:38:23'),
(4, 'p', 'p@gmail.com', 'www', '9999999999', 'test', '2023-03-01 09:54:54', '2023-03-01 09:54:54'),
(5, 's', 'sahil@gmail.com', 'www', '0000999987', 'tetsttstststst', '2023-03-01 09:56:36', '2023-03-01 09:56:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `it_weblabz`
--
ALTER TABLE `it_weblabz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weblabz_in`
--
ALTER TABLE `weblabz_in`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `it_weblabz`
--
ALTER TABLE `it_weblabz`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `weblabz_in`
--
ALTER TABLE `weblabz_in`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

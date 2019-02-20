-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 20-Fev-2019 às 03:51
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal_noticias`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `noticias`
--

INSERT INTO `noticias` (`id_noticia`, `titulo`, `noticia`, `data_criacao`, `resumo`, `autor`, `data_noticia`) VALUES
(1, 'titulo da noticia', 'conteudo da noticia', '2019-02-20 00:09:40', NULL, NULL, NULL),
(2, 'titul2a', 'conteudo da noticia', '2019-02-20 01:05:49', NULL, NULL, NULL),
(3, 'titu333l2a', 'conteudo da noticia', '2019-02-20 01:05:53', NULL, NULL, NULL),
(4, 'titudsadsadaa', 'conteudo da noticia', '2019-02-20 01:05:58', NULL, NULL, NULL),
(5, 'titu333l2a', 'conteudo da noticia', '2019-02-20 01:06:00', NULL, NULL, NULL),
(6, 'titulo da noticia', 'conteudo da noticia', '2019-02-20 01:06:25', NULL, NULL, NULL),
(7, 'titudsadsadaa', 'conteudo da noticia', '2019-02-20 01:06:38', NULL, NULL, NULL),
(8, 'titulo da noticia agora sim', 'noticia aqui', '2019-02-20 01:15:33', 'breve resumo doido', 'toninho', NULL),
(9, 'a]dnsoandaosndao', 'aaaaaa', '2019-02-20 01:25:18', 'dnsoandaondaondsaono', 'dnsaodnaondaondoa', '2000-06-15'),
(10, 'Título pegando aqui do form', 'vai que vai pombaaaaaaaa', '2019-02-20 01:30:59', 'Será que vai para frente ou não?', 'Toninho da Hornet', '2000-06-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id_noticia`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

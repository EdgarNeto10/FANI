-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 24-Jun-2020 às 17:14
-- Versão do servidor: 8.0.13-4
-- versão do PHP: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ApJT6AICfI`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Caminho`
--

CREATE TABLE `Caminho` (
  `Caminho_id` int(11) NOT NULL,
  `Caminho_path` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `Caminho_narr_id` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Caminho`
--

INSERT INTO `Caminho` (`Caminho_id`, `Caminho_path`, `Caminho_narr_id`) VALUES
(22, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.8981363502499207),
(23, ' M205,267 C450,267 450,349 695,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.8981363502499207),
(24, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.3790276625917868),
(25, ' M595,207 C645,207 645,479 695,479 l-1 0 l-5 -5 m5 5 l-5 5', 0.8317309769001457),
(26, ' M205,267 C450,267 450,349 695,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.8317309769001457),
(27, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.8317309769001457),
(28, ' M205,267 C300,267 300,247 395,247 l-1 0 l-5 -5 m5 5 l-5 5', 0.8686871515557868),
(29, ' M205,267 C450,267 450,377 695,377 l-1 0 l-5 -5 m5 5 l-5 5', 0.8686871515557868),
(30, ' M595,207 C645,207 645,507 695,507 l-1 0 l-5 -5 m5 5 l-5 5', 0.8686871515557868),
(31, ' M877,515 C936,515 936,637 995,637 l-1 0 l-5 -5 m5 5 l-5 5', 0.8686871515557868),
(32, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.5772080115526341),
(33, ' M205,267 C450,267 450,349 695,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.5772080115526341),
(34, ' M205,267 C300,267 300,349 395,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.9671565415704595),
(35, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.9671565415704595),
(36, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.035653355089703576),
(37, ' M205,267 C300,267 300,349 395,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.035653355089703576),
(38, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.5342418824251993),
(39, ' M205,267 C300,267 300,349 395,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.5342418824251993),
(40, ' M205,267 C300,267 300,349 395,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.04051226258197227),
(41, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.04051226258197227),
(42, ' M205,267 C300,267 300,349 395,349 l-1 0 l-5 -5 m5 5 l-5 5', 0.11701972247550074),
(43, ' M205,267 C300,267 300,219 395,219 l-1 0 l-5 -5 m5 5 l-5 5', 0.11701972247550074);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Narrativa`
--

CREATE TABLE `Narrativa` (
  `Narr_id` int(11) NOT NULL,
  `Narr_nome` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Narr_accao` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Narr_personagem` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Narr_script` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Narr_out_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Narr_outCon_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Narr_id_id` double DEFAULT NULL,
  `Narr_X` int(11) DEFAULT NULL,
  `Narr_Y` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Narrativa`
--

INSERT INTO `Narrativa` (`Narr_id`, `Narr_nome`, `Narr_accao`, `Narr_personagem`, `Narr_script`, `Narr_out_id`, `Narr_outCon_id`, `Narr_id_id`, `Narr_X`, `Narr_Y`) VALUES
(86, 'Black Mirror:Bandersnatch', 'Frosties', 'Stefan', 'Stefan on bus.Music?', '0.3tfrxoccu1d1589726692856', '0.1d7tgv5hti71589726692852', 0.6597153426740008, 0, 0),
(87, 'Black Mirror:Bandersnatch', 'x', 'Stefan', 'Films begin.Breakfast?', '0.1d7tgv5hti71589726692852', '1', 0.6597153426740008, 0, 0),
(88, 'Black Mirror:Bandersnatch', 'now 2', 'Stefan', 'Meet Colin  and Pitcth. Offer?', '0.t6i5hpn0e3s1589726692864', '0.3tfrxoccu1d1589726692856', 0.6597153426740008, 0, 0),
(89, 'Black Mirror:Bandersnatch', 'Sugar Puffs', 'Stefan', 'Stefan on bus.Music?', '0.8hgk5hu7p6u1589726692860', '0.1d7tgv5hti71589726692852', 0.6597153426740008, 0, 0),
(90, 'Black Mirror:Bandersnatch', 'now 2', 'Stefan', 'Meet Colin  and Pitcth. Offer?', '0.olyownbxmcc1589726692868', '0.8hgk5hu7p6u1589726692860', 0.6597153426740008, 0, 0),
(91, 'Black Mirror:Bandersnatch', 'Twins', 'Stefan', 'Meet Colin  and Pitcth. Offer?', '0.d4y383txpst1589726692872', '0.3tfrxoccu1d1589726692856', 0.6597153426740008, 0, 0),
(92, 'Black Mirror:Bandersnatch', 'Twins', 'Stefan', 'Meet Colin  and Pitcth. Offer?', '0.ka91okpitlq1589726692876', '0.8hgk5hu7p6u1589726692860', 0.6597153426740008, 0, 0),
(93, 'Black Mirror:Bandersnatch', 'Accept', 'Stefan', 'Game Over', '0.asdfzhq1ygp1589726692880', '0.t6i5hpn0e3s1589726692864', 0.6597153426740008, 0, 0),
(94, 'Black Mirror:Bandersnatch', 'Accept', 'Stefan', 'Game Over', '0.zpv4ovon03m1589726692884', '0.olyownbxmcc1589726692868', 0.6597153426740008, 0, 0),
(95, 'Black Mirror:Bandersnatch', 'Accept', 'Stefan', 'Game Over', '0.72qvs3waahk1589726692892', '0.d4y383txpst1589726692872', 0.6597153426740008, 0, 0),
(96, 'Black Mirror:Bandersnatch', 'Accept', 'Stefan', 'Game Over', '0.kbu0dvxxgwj1589726692888', '0.ka91okpitlq1589726692876', 0.6597153426740008, 0, 0),
(97, 'Black Mirror:Bandersnatch', 'Refuse', 'Stefan', 'Visit therapist. Talk about mom?', '0.ypne32oqdd91589726692896', '0.t6i5hpn0e3s1589726692864', 0.6597153426740008, 0, 0),
(98, 'Black Mirror:Bandersnatch', 'Refuse', 'Stefan', 'Visit therapist. Talk about mom?', '0.neta9edaa9m1589726692900', '0.olyownbxmcc1589726692868', 0.6597153426740008, 0, 0),
(99, 'Black Mirror:Bandersnatch', 'Refuse', 'Stefan', 'Visit therapist. Talk about mom?', '0.gst20r7prht1589726692904', '0.d4y383txpst1589726692872', 0.6597153426740008, 0, 0),
(100, 'Black Mirror:Bandersnatch', 'Refuse', 'Stefan', 'Visit therapist. Talk about mom?', '0.f0znwo29q8w1589726692908', '0.ka91okpitlq1589726692876', 0.6597153426740008, 0, 0),
(193, 'v', '', '', '', '0.gx74xs7f581591312378097', '0.18e6a82tu0t1591311732665', 0.11701972247550074, 400, 260),
(194, 'v', 'Lanc', 'toy', 'ja vou', '0.68tc0tcyf8i1591312378093', '0.18e6a82tu0t1591311732665', 0.11701972247550074, 400, 130),
(195, 'v', '', '', '', '0.6w8qh2181o1591312378089', '1', 0.11701972247550074, 10, 190);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Caminho`
--
ALTER TABLE `Caminho`
  ADD PRIMARY KEY (`Caminho_id`);

--
-- Indexes for table `Narrativa`
--
ALTER TABLE `Narrativa`
  ADD PRIMARY KEY (`Narr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Caminho`
--
ALTER TABLE `Caminho`
  MODIFY `Caminho_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `Narrativa`
--
ALTER TABLE `Narrativa`
  MODIFY `Narr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=196;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Sitio Web Creado por ITred Spa.
-- Direccion: Guido Reni #4190
-- Pedro Agui Cerda - Santiago - Chile
-- contacto@itred.cl o itred.spa@gmail.com
-- https://www.itred.cl
-- Creado, Programado y Diseñado por ITred Spa.
-- BPPJ

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `itredspa_bd`
--
CREATE DATABASE IF NOT EXISTS `itredspa_bd` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `itredspa_bd`;

-- --------------------------------------------------------

-- ------------------------------------------------- --
-- -- ESTRUCTURA DE TABLA PARA LA TABLA `menu_crear` --
-- ------------------------------------------------- --

CREATE TABLE IF NOT EXISTS `menu_crear` (
  `ID` int(100) NOT NULL AUTO_INCREMENT,
  `titulo_menu` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- ------------------------------------------------- --
-- -- ESTRUCTURA DE TABLA PARA LA TABLA `columnas` - --
-- ------------------------------------------------- --

CREATE TABLE IF NOT EXISTS `columnas` (
  `ID` int(100) NOT NULL AUTO_INCREMENT,
  `idMenu` int(100) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_columna` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `url_columna` varchar(50) COLLATE utf8_spanish_ci NOT NULL,  
  `type` int(100) COLLATE utf8_spanish_ci NOT NULL DEFAULT 1,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`idMenu`) REFERENCES `menu_crear`(`ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- ------------------------------------------------- --
-- - ESTRUCTURA DE TABLA PARA LA TABLA `subcolumnas` --
-- ------------------------------------------------- --

CREATE TABLE IF NOT EXISTS `subcolumnas` (
  `ID` int(100) NOT NULL AUTO_INCREMENT,
  `idColumna` int(100) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_subcolumna` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `url_subcolumna` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `type` int(100) COLLATE utf8_spanish_ci NOT NULL DEFAULT 2,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`idColumna`) REFERENCES `columnas`(`ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

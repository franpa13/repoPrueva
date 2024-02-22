CREATE DATABASE IF NOT EXISTS recruitingrh;
USE recruitingrh;

CREATE TABLE `aspirantes` (
  `dni` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `url_linkedin` varchar(255) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `profesion_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aspirantes`
--

INSERT INTO `aspirantes` (`dni`, `nombre`, `apellido`, `email`, `telefono`, `url_linkedin`, `fecha_de_nacimiento`, `sexo`, `imagen`, `profesion_id`, `createdAt`, `updatedAt`) VALUES
(50964685, 'Jose', 'Bonucci', 'josebonucci.12@gmail.com', '3874532629', 'https://www.linkedin.com/in/jose-bonucci-12b90as', '1993-08-26', 'masculino', '', 1, '2024-02-01 11:49:14', '2024-02-01 11:49:14');

-- --------------------------------------------------------

--
-- Table structure for table `profesiones`
--

CREATE TABLE `profesiones` (
  `id` int(11) NOT NULL,
  `profesion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profesiones`
--

INSERT INTO `profesiones` (`id`, `profesion`) VALUES
(1, 'Abogado'),
(2, 'Arquitecto'),
(3, 'Botánico'),
(4, 'Computista'),
(5, 'Economista'),
(6, 'Técnico de sonido'),
(7, 'Profesor'),
(8, 'Linguista');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aspirantes`
--
ALTER TABLE `aspirantes`
  ADD PRIMARY KEY (`dni`);

--
-- Indexes for table `profesiones`
--
ALTER TABLE `profesiones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profesiones`
--
ALTER TABLE `profesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;



drop database  if exists budgetApp_db; 
create database budgetApp_db;
use budgetApp_db;


--
-- Table structure for table `types`
--

drop table if exists `types`;
create table `types` (
`id` int(10) unsigned not null auto_increment,
`name`varchar(50) not null,
primary key (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES  
 (1,'incomes'),
 (2,'expenses') 
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

drop database  if exists budgetApp_db; 
create database budgetApp_db;
use budgetApp_db;


--
-- Table structure for table `categories`
--

drop table if exists `categories`;
create table `categories` (
`id` int(10) unsigned not null auto_increment,
`name`varchar(50) not null,
`type_id` int(10) unsigned not null,
primary key (`id`),
key `categories_type_id_foreign` (`type_id`),
constraint `categories_type_id_foreign` FOREIGN key (`type_id`) references `types` (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES  
 (1,'services',2),
 (2,'living',2),
 (3,'travel',2),
 (4,'health',2),
 (5,'cleaning',2),
 (6,'taxes',2),
 (7,'feeding',2),
 (8,'dress',2),
 (9,'personal care',2),
 (10,'entertainment',2),
 (11,'salary',1),
 (12,'sales',1),
 (13,'rentals',1),
 (14,'loan',1),
 (15,'extraordinary income',1);
  
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `users`
--

drop table if exists `users`; 
create table `users`(
`id` int(10) unsigned not null auto_increment,
`email` varchar(255) collate utf8_unicode_ci unique not null,
`password` varchar(255) not null,
`create_date` timestamp null default null,
`update_date` timestamp null default null,
primary key (`id`) 
)ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */; 
INSERT INTO `users` VALUES  
(1, 'edunford0@ustream.tv', 'T484Zi', '2021-06-23', '2021-11-12'),
(2, 'pvennard1@topsy.com', 'QS7TInE8Mhru', '2021-07-18', '2022-05-29'),
(3, 'adulling2@ftc.gov', '2weDPZRDHWPY', '2021-07-26', '2022-06-11'),
(4, 'uhofer3@delicious.com', 'vFWN9cye', '2021-12-15', '2022-03-15'),
(5, 'mroycroft4@europa.eu', 's5dEEHzT6zzW', '2021-11-04', '2021-04-11'),
(6, 'dcockshott5@cloudflare.com', '1lLBRtXgQWO', '2021-10-31', '2021-04-14'),
(7, 'jstrange6@weibo.com', 'dCBEEWjYeY55', '2021-11-30', '2021-12-03'),
(8, 'nfergusson7@bloglines.com', 'qOlUPGd2dkA', '2021-07-01', '2021-07-17'),
(9, 'abillings8@baidu.com', 'AUtR7ihzbOA', '2021-10-18', '2021-03-13'),
(10, 'tgossart9@comsenz.com', 'guVBSR', '2021-08-03', '2022-04-15'),
(11, 'wbleakmana@yale.edu', '0bssLlbeC3nA', '2021-08-11', '2022-01-12'),
(12, 'fcurbishleyb@wufoo.com', '3GjbzKW', '2021-07-24', '2021-10-03'),
(13, 'sdelahayc@w3.org', 'kB2ERJore0YJ', '2021-07-01', '2021-01-10'),
(14, 'tdelanyd@blogtalkradio.com', 'oAg0RwAoKdsa', '2021-09-03', '2021-04-30'),
(15, 'nolekhove@diigo.com', '1AZxN1RXxcU', '2021-07-19', '2021-09-23'),
(16, 'tnanaf@jugem.jp', 'UqmOkTbL', '2021-12-13', '2022-05-05'),
(17, 'dluetchfordg@illinois.edu', 'sXRIBR', '2021-09-02', '2021-07-20'),
(18, 'vduggenh@naver.com', 'NYFwx7jNe', '2021-10-16', '2022-01-31'),
(19, 'fobali@prnewswire.com', 'F7yCD2', '2021-10-20', '2021-07-13'),
(20, 'vcookleyj@tamu.edu', 'sJdVGVn9VhZJ', '2021-12-01', '2022-02-08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

 

--
-- Table structure for table `operations`
--

drop table if exists `operations`;
create table `operations` (
`id` int(10) unsigned not null auto_increment,
`date`datetime not null not null,
`concept`varchar(255) not null,
`amount`int not null,
`create_date` timestamp null default null,
`update_date` timestamp null default null,
`user_id` int(10) unsigned not null,
`category_id` int(10) unsigned not null,
primary key (`id`),
key `operations_user_id_foreign` (`user_id`),
key `operations_category_id_foreign` (`category_id`),
constraint `operations_user_id_foreign` FOREIGN key (`user_id`) references `users` (`id`),
constraint `operations_category_id_foreign` FOREIGN key (`category_id`) references `categories` (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Dumping data for table `operations`
--

LOCK TABLES `operations` WRITE;
/*!40000 ALTER TABLE `operations` DISABLE KEYS */;
INSERT INTO `operations` VALUES  
(1, '2021-07-02', 'repurpose bleeding-edge infomediaries', 6760.2, '2021-11-02', '2021-02-23', 5, 12),
(2, '2021-10-10', 'aggregate turn-key ROI', 4626.96, '2021-11-14', '2021-02-27', 7, 2),
(3, '2021-03-26', 'exploit wireless relationships', 4431.15, '2021-11-19', '2022-03-28', 11, 3),
(4, '2021-10-03', 'visualize sticky markets', 1918.73, '2021-10-15', '2021-01-11', 6, 5),
(5, '2021-07-25', 'scale world-class eyeballs', 7186.1, '2021-11-22', '2021-09-11', 3, 14),
(6, '2022-03-31', 'grow dot-com partnerships', 3319.76, '2021-09-04', '2021-03-23', 15, 7),
(7, '2022-03-06', 'benchmark clicks-and-mortar infrastructures', 2968.59, '2021-10-21', '2021-06-19', 13, 7),
(8, '2022-01-16', 'envisioneer e-business action-items', 9321.29, '2021-12-17', '2021-02-27', 4, 12),
(9, '2021-08-13', 'innovate collaborative e-business', 3797.12, '2021-09-13', '2021-04-04', 13, 13),
(10, '2022-05-01', 'scale best-of-breed e-tailers', 8203.52, '2021-11-22', '2022-06-13', 14, 12),
(11, '2021-05-25', 'evolve efficient channels', 8187.33, '2021-09-07', '2021-10-12', 4, 6),
(12, '2021-06-06', 'architect next-generation methodologies', 595.92, '2021-08-25', '2021-12-25', 1, 3),
(13, '2022-01-03', 'maximize integrated users', 5866.05, '2021-10-20', '2021-01-27', 7, 9),
(14, '2021-01-06', 'architect frictionless metrics', 8097.06, '2021-09-02', '2021-02-14', 18, 8),
(15, '2022-06-14', 'enhance world-class channels', 6741.98, '2021-07-25', '2021-10-29', 15, 9),
(16, '2022-04-25', 'grow mission-critical platforms', 9861.78, '2021-11-22', '2021-03-14', 19, 7),
(17, '2021-06-19', 'reinvent integrated content', 3555.66, '2021-10-10', '2022-03-16', 17, 7),
(18, '2021-07-14', 'architect cutting-edge channels', 7492.87, '2021-06-20', '2022-01-16', 19, 9),
(19, '2021-12-20', 'streamline wireless paradigms', 3335.93, '2021-12-06', '2021-01-14', 9, 2),
(20, '2022-02-23', 'revolutionize enterprise niches', 2286.33, '2021-11-25', '2021-09-01', 16, 2);
 
/*!40000 ALTER TABLE `operations` ENABLE KEYS */;
UNLOCK TABLES;


 
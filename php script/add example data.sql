CREATE TABLE `movies` (
  `moviename` text NOT NULL,
  `year` int(11) NOT NULL,
  `score` float NOT NULL,
  `description` longtext NOT NULL,
  `imgsrc` longtext NOT NULL COMMENT '"item1", "item2"',
  `iminf` text NOT NULL,
  `trailer` longtext NOT NULL COMMENT 'JSON trailer area'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `movies` (`moviename`, `year`, `score`, `description`, `imgsrc`, `iminf`, `trailer`) VALUES
('Captain Marvel', 2019, 9.9, 'Marvel Studios’ Captain Marvel takes you on a spectacular adventure from the 1990s, tracing the path of Carol Danvers (Brie Larson) as she becomes one of the most powerful heroes in the universe. When a galactic war reaches Earth, she meets young agent Nick Fury (Samuel L. Jackson) at the center of a maelstrom, leading to her ultimate destiny as an Avenger. The Beginning of the Story!', '\"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/1.jpg\",\r\n\"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/2.jpg\",\r\n         \"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/3.jpg\",\r\n\"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/7.jpg\",\r\n           \"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/5.jpg\"\r\n,\r\n\"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/4.jpg\",            \"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/6.jpg\",\"https://sharkbyteprojects.github.io/MovieRating-angular/assets/images/captainMarvel/8.jpg\"', 'Images from marvel.com hosted over https://sharkbyteprojects.github.io/MovieRating-angular/', '{ \"url\": \"https://www.marvel.com/movies/captain-marvel\", \"name\": \"On Marvel.com\" },\r\n            { \"url\": \"https://www.youtube.com/watch?v=Z1BCujX3pw8\", \"name\": \"Trailer 1 Youtube\" },\r\n            { \"url\": \"https://www.youtube.com/watch?v=0LHxvxdRnYc\", \"name\": \"Trailer 2 Youtube\" }');
COMMIT;
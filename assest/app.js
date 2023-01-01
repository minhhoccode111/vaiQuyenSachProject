"use strict";

const data = [
  {
    TITLE: "Tâm lý học tính cách",
    AUTHOR: "Trâu Hoàng Minh",
    PRICE: 110,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Quẳng gánh lo đi mà vui sống",
    AUTHOR: "Dale Carnegie",
    PRICE: 86,
    CATEGORY: "Phát triển bản thân",
  },
  {
    TITLE: "Số đỏ",
    AUTHOR: "Vũ Trọng Phụng",
    PRICE: 30,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Giải mã trí tuệ cảm xúc",
    AUTHOR: "Andrea Bacon và Ali Dawson",
    PRICE: 88,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Lắt léo tiếng việt",
    AUTHOR: "Lê Minh Quốc",
    PRICE: 81,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Heidegger và con hà mã bước qua cổng thiên đường",
    AUTHOR: "Thomas Cathcart, Daniel Klein",
    PRICE: 105,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Nỗi lo âu về địa vị",
    AUTHOR: "Alain de Botton",
    PRICE: 115,
    CATEGORY: "Triết học",
  },
  {
    TITLE: "Những đứa trẻ bị mắc kẹt",
    AUTHOR: "Minato Kanae",
    PRICE: 89,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Quân vương",
    AUTHOR: "Niccolò Machiavelli",
    PRICE: 160,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 5",
    AUTHOR: "Ez Psychology",
    PRICE: 109,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 3",
    AUTHOR: "Ez Psychology",
    PRICE: 146,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 2",
    AUTHOR: "Ez Psychology",
    PRICE: 132,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 4",
    AUTHOR: "Ez Psychology",
    PRICE: 108,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Sao chúng ta lại ngủ",
    AUTHOR: "Mathhew Walker",
    PRICE: 249,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Làm đĩ",
    AUTHOR: "Vũ Trọng Phụng",
    PRICE: 55,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Harvard bốn rưỡi sáng",
    AUTHOR: "Xiu-ying Wei",
    PRICE: 139,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Đảo x2",
    AUTHOR: "Nguyễn Ngọc Tư",
    PRICE: 55,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Nghệ thuật tinh tế của việc đếch quan tâm x2",
    AUTHOR: "Mark Manson",
    PRICE: 128,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Dám bị ghét",
    AUTHOR: "Koga Fumitake, Kishimi Ichiro",
    PRICE: 96,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Cô gái mặc váy tím",
    AUTHOR: "Imamura Natsuko",
    PRICE: 95,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Đánh thức phù thủy trí nhớ trong bạn",
    AUTHOR: "Nguyễn Chu Nam Phương, FUSUSU",
    PRICE: 150,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Nếu biết trăm năm là hữu hạn",
    AUTHOR: "Phạm Lữ Ân",
    PRICE: 94,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Thôi miên bằng ngôn từ",
    AUTHOR: "Joe Vitale",
    PRICE: 149,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Thiên tài bên trái kẻ điên bên phải",
    AUTHOR: "Cao Minh",
    PRICE: 179,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Những điều giữ tôi còn sống",
    AUTHOR: "Matt Haig",
    PRICE: 119,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Truyền sao cho thông",
    AUTHOR: "Andrew Macarthy",
    PRICE: 169,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Con đường trở thành Freelancer Writer",
    AUTHOR: "Linh Phan",
    PRICE: 220,
    CATEGORY: "Marketing - Bán hàng",
  },
  {
    TITLE: "Sự an ủi của triết học",
    AUTHOR: "Alain de Botton",
    PRICE: 109,
    CATEGORY: "Triết học",
  },
  {
    TITLE: "Những lời giáo huấn của Epictetus",
    AUTHOR: "Robin Hard, Christopher Gill",
    PRICE: 239,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Bàn về ham muốn",
    AUTHOR: "William B. Irvine",
    PRICE: 169,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Little stories to have a nice day",
    AUTHOR: "Stacey Riches",
    PRICE: 65,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "How Psychology Works",
    AUTHOR: "Jo Hemmings",
    PRICE: 300,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Chủ nghĩa khắc kỷ",
    AUTHOR: "William B. Irvine",
    PRICE: 125,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Plato và con thú mỏ vịt bước vào quán bar..",
    AUTHOR: "Thomas Cathcart & Daniel Klein",
    PRICE: 100,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Lỗi Error 404 x2",
    AUTHOR: "Plaaastic",
    PRICE: 89,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Để ngôn từ trở thành sức mạnh",
    AUTHOR: "Takahashi Nobuyuki",
    PRICE: 59,
    CATEGORY: "Marketing - Bán hàng",
  },
  {
    TITLE: "Bạn là những gì bạn ăn",
    AUTHOR: "Aya Murayama",
    PRICE: 75,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Cẩm nang phương pháp sư phạm",
    AUTHOR: "Nguyễn Thị Minh Phương",
    PRICE: 150,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Cha mẹ độc hại",
    AUTHOR: "Susan Forward, Craig Buck",
    PRICE: 148,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Sang chấn tâm lý",
    AUTHOR: "Bessel Van Der Kolk, M.D",
    PRICE: 350,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Bàn tay kỳ diệu của Sachi",
    AUTHOR: "Tabata Seiichi, Nobe Akiko, Shizawa Sayoko",
    PRICE: 39,
    CATEGORY: "Truyện",
  },
  {
    TITLE: "Món ngon xứ Huế",
    AUTHOR: "Nguyễn Thị Phiên , Đỗ Thị Phương Nhi",
    PRICE: 139,
    CATEGORY: "Thường thức",
  },
  {
    TITLE: "Tôi đã sinh ra một lần nữa",
    AUTHOR: "Oopsy",
    PRICE: 69,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Nhân tố Enzyme x2",
    AUTHOR: "Hiromi Shinya",
    PRICE: 81,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Tự học 200 từ vựng tiếng anh",
    AUTHOR: "The Windy",
    PRICE: 65,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Tô bình yên vẽ hạnh phúc",
    AUTHOR: "Kulzsc",
    PRICE: 68,
  },
  {
    TITLE: "Hòn đá xanh",
    AUTHOR: "Jimmy Liao",
    PRICE: 99,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Nghệ thuật xử thế của bạn gái",
    AUTHOR: "Thành Khang - Ngọc Yến",
    PRICE: 65,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Ai che lưng cho bạn",
    AUTHOR: "Keith Ferrazzi",
    PRICE: 110,
    CATEGORY: "Phát triển bản thân",
  },
  {
    TITLE: "Đời ngắn đừng ngủ dài",
    AUTHOR: "Robin Sharma",
    PRICE: 60,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Đến Nhật học về cuộc đời",
    AUTHOR: "Lê Nguyễn Nhật Linh",
    PRICE: 85,
    CATEGORY: "Phát triển bản thân",
  },
  {
    TITLE: "Xuân yến",
    AUTHOR: "An Ni BảoBối",
    PRICE: 130,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Có anh ở đây rồi, hạnh phúc cũng ở đây",
    AUTHOR: "Du Phong",
    PRICE: 69,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Nhân tố Enzyme | Phương thức sống lành mạnh",
  },
  {
    TITLE: "Lược sử thời gian",
    AUTHOR: "Stephen Hawking",
    PRICE: 115,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Sức mạnh tiềm thức",
    AUTHOR: "Joseph Murphy, Ph.D., D.D",
    PRICE: 128,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Sức mạnh của tĩnh lặng",
    AUTHOR: "Sức mạnh của tĩnh lặng",
    PRICE: 34,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Một lít nước mắt",
    AUTHOR: "Kito Aya",
    PRICE: 80,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Còn nhớ nhau không",
    AUTHOR: "Lê Minh Hà",
    PRICE: 52,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Người thắp sao trời",
    AUTHOR: "Tự Từ",
    PRICE: 60,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Divergent",
    AUTHOR: "Veronica Roth",
    PRICE: 150,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "How to make someone fall in love with you in 90 minutes or less",
    AUTHOR: "Nicholas Boothman",
    PRICE: 190,
    CATEGORY: "",
  },
  {
    TITLE: "Ngọn đèn không tắt",
    AUTHOR: "Nguyễn Ngọc Tư",
    PRICE: 65,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Tuyển tập truyện ngụ ngôn hay nhất của Aesop 2",
    AUTHOR: "Aesop",
    PRICE: 46,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Tuyển tập những câu chuyện hay nhất của Aesop 1",
    AUTHOR: "Aesop",
    PRICE: 50,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Từ điển tâm lý",
    AUTHOR: "Shozo Shibuya",
    PRICE: 128,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Toàn như tâm lý học",
    AUTHOR: "Motofumi Fukahori",
    PRICE: 126,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Thánh kinh dưỡng da",
    AUTHOR: "Chizu Saeki",
    PRICE: 105,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Truyện Kiều",
    AUTHOR: "Nguyễn Du",
    PRICE: 42,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Những ngày thơ ấu",
    AUTHOR: "Nguyên Hồng",
    PRICE: 39,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Gáy người thì lạnh",
    AUTHOR: "Nguyễn NgọcTư",
    PRICE: 55,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Cảm ơn người lớn",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 110,
    CATEGORY: "Văn Học",
  },
  {
    TITLE: "Ngồi khóc trên cây",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 99,
    CATEGORY: "Văn Học",
  },
  {
    TITLE: "Con nghĩ đi, mẹ không biết",
    AUTHOR: "Mẹ Xu-Sim",
    PRICE: 79,
    CATEGORY: "Nuôi dạy con",
  },
  {
    TITLE: "Nói sao cho trẻ chịu học",
    AUTHOR: "Adele Faber, Elaine Mazlish",
    PRICE: 85,
    CATEGORY: "Nuôi dạy con",
  },
  {
    TITLE: "Nói sao cho trẻ chịu nghe",
    AUTHOR: "Adele Faber, Elaine Mazlish",
    PRICE: 170,
    CATEGORY: "Nuôi dạy con",
  },
  {
    TITLE: "Mắt biếc",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 110,
    CATEGORY: "Văn Học",
  },
  {
    TITLE: "Vụ ám sát quý cô nửa mùa",
    AUTHOR: "Robin Stevens",
    PRICE: 85,
    CATEGORY: "Trinh thám",
  },
  {
    TITLE: "Sáu ngày của thần ưng",
    AUTHOR: "James Grady",
    PRICE: 60,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Cách khen, cách mắng, cách phạt con",
    AUTHOR: "Masami Sasaki, Wakamatsu Aki",
    PRICE: 59,
    CATEGORY: "Nuôi dạy con",
  },
  {
    TITLE: "Thần thoại Hy Lạp",
    AUTHOR: "Nguyễn Văn Khỏa",
    PRICE: 205,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Ngày xưa có một chuyện tình",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 115,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Khi mây đen kéo tới",
    AUTHOR: "Nguyễn Phương Hoa",
    PRICE: 68,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Sen",
    AUTHOR: "Nguyễn Bảo Trung",
    PRICE: 89,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Thăm dò tiềm thức",
    AUTHOR: "Carl Gustav Jung",
    PRICE: 60,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Cỏ dại thênh thang",
    AUTHOR: "Bùi Tiểu Quyên",
    PRICE: 43,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Chuyện kể trăng nghe",
    AUTHOR: "Shin Kyung Sook",
    PRICE: 59,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Du ca đời lá",
  },
  {
    TITLE: "Có một phố vừa đi qua phố",
    AUTHOR: "Đinh Vũ Hoàng Nguyên",
    PRICE: 68,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Những tấm lòng cao cả",
    AUTHOR: "Edmondo De Amicis",
    PRICE: 66,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "20 phút làm chủ thời gian",
    AUTHOR: "Harvard Business Review Press",
    PRICE: 49,
    CATEGORY: "Kỹ năng làm việc",
  },
  {
    TITLE: "Tuổi thơ dữ dội",
    AUTHOR: "Phùng Quán",
    PRICE: 130,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Ngữ pháp tiếng Anh căn bản",
    AUTHOR: "The Windy",
    PRICE: 149,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Chăm sóc sức khỏe không dùng thuốc",
    AUTHOR: "Dr Biswaroop Roy Chowdhury",
    PRICE: 190,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Người nam châm",
    AUTHOR: "Jack Canfield, DD Watkins",
    PRICE: 65,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Hành trang vào đời",
    AUTHOR: "David P Campbell",
    PRICE: 50,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Đi tìm lẽ sống",
    AUTHOR: "Viktor E Frankl",
    PRICE: 78,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Đời thay đổi khi chúng ta thay đổi",
    AUTHOR: "Andrew Matthews",
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Tony buổi sáng - Trên đường băng",
    AUTHOR: "Tony Buổi Sáng",
    PRICE: 75,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Tony buổi sáng - Cà phê cùng Tony",
    AUTHOR: "Tony Buổi Sáng",
    PRICE: 88,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Nghệ thuật mắng",
    AUTHOR: "Ngô Lệ Na",
    PRICE: 32,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Việt nam sử lược",
    AUTHOR: "Trần Trọng Kim",
    PRICE: 450,
    CATEGORY: "Lịch sử",
  },
  {
    TITLE: "Từ điển tiếng Việt",
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Hình vẽ thông minh",
    AUTHOR: "Dan Roam",
    PRICE: 135,
    CATEGORY: "Kỹ năng làm việc",
  },
  {
    TITLE: "Đột nhiên có tiếng gõ cửa",
    AUTHOR: "Etgar Keret",
    PRICE: 79,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Con đường đi đến thành công bằng sự tử tế",
    AUTHOR: "Inamori Kazuo",
    PRICE: 70,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Hài lòng trong công việc bắt đầu từ chính mình",
    AUTHOR: "Xuân Nguyễn",
    PRICE: 80,
    CATEGORY: "Kỹ năng làm việc",
  },
  {
    TITLE: "Taotto-chan bên cửa sổ",
    AUTHOR: "Kuroyanagi Tetsuko",
    PRICE: 98,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Bad luck 1",
    AUTHOR: "Nguyễn Huỳnh Bảo Châu",
    PRICE: 78,
    CATEGORY: "Truyện",
  },
  {
    TITLE: "Cởi trói linh hồn",
    AUTHOR: "Michael A. Singer",
    PRICE: 124,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Hệ miễn dịch - Kiệt tác của sự sống",
    AUTHOR: "Oopsy, Cao Bảo Anh (Cẩm Tú Trường)",
    PRICE: 118,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Trong sa mạc và trong rừng thẳm",
    AUTHOR: "Henryk Sienkiewicz",
    PRICE: 99,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Truyện con chó tên là Trung Thành",
    AUTHOR: "Luis Sepulveda",
    PRICE: 45,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Dạy con trong hoang mang",
    AUTHOR: "TS. Lê Nguyên Phương",
    PRICE: 99,
    CATEGORY: "Nuôi dạy con",
  },
  {
    TITLE: "Hành trình của linh hồn",
    AUTHOR: "TS Michael Newton",
    PRICE: 129,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Thép đã tôi thế đấy",
    AUTHOR: "Nikolai A.Ostrovsky",
    PRICE: 135,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Thay đổi tí hon hiệu quả bất ngờ",
    AUTHOR: "James Clear",
    PRICE: 190,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Nhân tố Enzyme | Trẻ hóa",
    AUTHOR: "Hiromi Shinya",
    PRICE: 79,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Cuộc hẹn bình minh",
    AUTHOR: "Yasushi Kitagawa",
    PRICE: 76,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Ta mù tịt",
    AUTHOR: "Jorge Cham - Daniel Whiteson",
    PRICE: 150,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Thiên nhiên hoang dã",
    AUTHOR: "Nick Arnold",
    PRICE: 52,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Não bộ kể gì về bạn",
    AUTHOR: "David Eagleman",
    PRICE: 149,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Minh triết trong ăn uống của phương Đông ",
    AUTHOR: "Ngô Đức Vượng",
    PRICE: 138,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Hành trình về phương đông",
    AUTHOR: "Baird T. Spalding",
    PRICE: 118,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Đi tìm mảnh ghép gia đình",
    AUTHOR: "Lee Hee Young",
    PRICE: 92,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Nuôi dạy một đứa trẻ hạnh phúc",
    AUTHOR: "Jessica Joelle Alexander & Iben Dissing Sandahl",
    PRICE: 144,
    CATEGORY: "Nuôi dạy con",
  },
  {
    TITLE: "Chiêm tinh học nhập môn",
    AUTHOR: "Chiêm tinh số",
    PRICE: 99,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Người thắp sao trời- cuốn thứ 2",
    AUTHOR: "Tự từ",
    PRICE: 60,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Giữa trời và đất là tình yêu",
    AUTHOR: "Vi Lam",
    PRICE: 78,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Chuyện con mèo dạy hải âu bay",
    AUTHOR: "Luis Sepulveda",
    PRICE: 49,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Chuyện con mèo và con chuột bạn thân của nó",
    AUTHOR: "Luis Sepulveda",
    PRICE: 39,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Lời hứa về một cây bút chì",
    AUTHOR: "Adam Braun",
    PRICE: 159,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Chuyện nhỏ Sài Gòn",
    AUTHOR: "Đàm Hà Phú",
    PRICE: 59,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Người cũ còn thương",
    AUTHOR: "Nguyễn Ngọc Thạch",
    PRICE: 79,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Einstein và vũ trụ giãn nở",
    AUTHOR: "Dr. Mike Goldsmith",
    PRICE: 54,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Diary of a Wimpy Kid - The Ugly Truth",
    AUTHOR: "Jeff Kinney",
    PRICE: 223,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Đi đâu cũng nhớ Sài Gòn và em",
    AUTHOR: "Anh Khang",
    PRICE: 70,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Sức mạnh của hiện tại",
    AUTHOR: "Eckhart Tolle",
    PRICE: 168,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Hiệu ứng chim mồi 1",
    AUTHOR: "Ecoblader",
    PRICE: 75,
    CATEGORY: "Marketing - Bán hàng",
  },
  {
    TITLE: "Hiệu ứng chim mồi 2",
    AUTHOR: "Ecoblader",
    PRICE: 80,
    CATEGORY: "Marketing - Bán hàng",
  },
  {
    TITLE: "Hiệu ứng chim mồi 3",
    AUTHOR: "Ecoblader",
    PRICE: 100,
    CATEGORY: "Marketing - Bán hàng",
  },
  {
    TITLE: "Hùng biện kiểu Ted",
    AUTHOR: "Jeremey Donovan",
    PRICE: 109,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Bí mật của may mắn",
    AUTHOR: "Alex Rovira",
    PRICE: 48,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Ông trăm tuổi trèo qua cửa sổ và biến mất",
    AUTHOR: "Jonas Jonasson",
    PRICE: 170,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Tôi tự học",
    AUTHOR: "Thu Giang - Nguyễn Duy Cần",
    PRICE: 60,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Làm chủ trí nhớ của bạn",
    AUTHOR: "Tony Buzan",
    PRICE: 148,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Phi lý trí",
    AUTHOR: "Dan Ariely",
    PRICE: 169,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Gần như là sống",
    AUTHOR: "Đỗ Phấn",
    PRICE: 95,
    CATEGORY: "Tiểu thuyết",
  },
  {
    TITLE: "Truyện ngắn Nam Cao",
    AUTHOR: "Nam Cao",
    PRICE: 59,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Giao tiếp bất kỳ ai",
    AUTHOR: "Bennie Boughn, Jon Condrill",
    PRICE: 47,
    CATEGORY: "Kỹ năng làm việc",
  },
  {
    TITLE: "Điều cuối cùng ở lại",
    AUTHOR: "Lynh Miêu",
    PRICE: 65,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Nhập môn triết học",
    AUTHOR: "Dave Robinson và Judy Groves",
    PRICE: 32,
    CATEGORY: "Triết học",
  },
  {
    TITLE: "Tế bào gốc",
    AUTHOR: "Paul Knoepfler",
    PRICE: 199,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Mô hình xoán động",
    AUTHOR: "Vũ Phi Yến",
    PRICE: 99,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Bí ẩn của não phải",
    AUTHOR: "Makoto Shichida",
    PRICE: 118,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Ngôn ngữ cơ thể",
    AUTHOR: "no data",
    CATEGORY: "no data",
  },
  {
    TITLE: "Chắc gì ta đã yêu nhau",
    AUTHOR: "Minh Nhật",
    PRICE: 86,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Từ câu sai đến câu hay",
    AUTHOR: "Nguyễn Đức Dân",
    PRICE: 128,
    CATEGORY: "Kiến thức tổng hợp",
  },
  {
    TITLE: "Dẫn luận về Jung",
    AUTHOR: "Anthony Stevens",
    PRICE: 84,
    CATEGORY: "Triết học",
  },
  {
    TITLE: "Không có câu hỏi nào ngớ ngẩn",
    AUTHOR: "10IFS",
    PRICE: 83,
    CATEGORY: "Thiếu nhi",
  },
  {
    TITLE: "Vì sao chúng ta làm việc",
    AUTHOR: "Barry Schwartz",
    PRICE: 55,
    CATEGORY: "Kỹ năng làm việc",
  },
  {
    TITLE: "Chỉ cần mẩu khăn giấy",
    AUTHOR: "Dan Roam",
    PRICE: 150,
    CATEGORY: "Kỹ năng làm việc",
  },
  {
    TITLE: "Chuyện con ốc sên muốn biết tại sao nó chậm chạp",
    AUTHOR: "Luis Sepulveda",
    PRICE: 39,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Phía bên kia nửa đêm",
    AUTHOR: "Sidney Sheldon",
    PRICE: 115,
    CATEGORY: "Trinh thám",
  },
  {
    TITLE: "Paper Towns",
    AUTHOR: "John Green",
    PRICE: 201,
    CATEGORY: "Văn học",
  },
  {
    TITLE: "Ung thư - Tin đồn và sự thật",
    AUTHOR: "Ruy Băng Tím",
    PRICE: 149,
    CATEGORY: "Sức khỏe",
  },
  {
    TITLE: "Lối sống tối giản của người Nhật",
    AUTHOR: "Sasaki Fumio",
    PRICE: 119,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Cẩn trọng cái đầu",
    AUTHOR: "Cẩn trọng cái đầu",
    PRICE: 71,
    CATEGORY: "Kỹ năng sống",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 1",
    AUTHOR: "Nhóm Ezpsychology",
    PRICE: 119,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Dạy con trong hoang mang 2",
    AUTHOR: "TS. Lê Nguyên Phương",
    PRICE: 126,
    CATEGORY: "Nuôi dạy con",
  },
  {
    TITLE: "Ấn độ và Trung hoa cổ đại",
    AUTHOR: "E. O. Plauen",
    PRICE: 50,
    CATEGORY: "Lịch sử",
  },
  {
    TITLE: "Tâm lý học hài hước",
    AUTHOR: "Richard Wiseman",
    PRICE: 89,
    CATEGORY: "Tâm lý",
  },
  {
    TITLE: "Power of force",
    AUTHOR: "David R.Hawkins",
    PRICE: 143,
    CATEGORY: "Kiến thức tổng hợp",
  },
];

function findMatches(wordToMatch, data) {
  return data.filter((book) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return (
      book.AUTHOR?.match(regex) ||
      book.TITLE?.match(regex) ||
      book.CATEGORY?.match(regex)
    );
  });
}

function numberWithCommas(x) {
  if (x == undefined) return;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches(e) {
  if ((e.key === "Backspace" || e.key === "Delete") && e.target.value == "") {
    suggestions.innerHTML = "";
    return;
  }
  const matchArray = findMatches(this.value, data);
  const html = matchArray
    .map((book) => {
      const regex = new RegExp(this.value, "gi");
      const title = book.TITLE?.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const author = book.AUTHOR?.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const category = book.CATEGORY?.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li class="book">
        <span class="name">${title}</span>
        <span class="name"> ${author}</span>
        <span class="name"> ${category}</span>
        <span class="book-price">${numberWithCommas(book.PRICE)}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

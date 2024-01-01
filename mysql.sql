
-- SETUP DATABASE
CREATE DATABASE erp;

-- SETUP TABLE
CREATE TABLE PhongBan
(
  maPhongBan INT AUTO_INCREMENT PRIMARY KEY,
  tenPhongBan NVARCHAR(255),
  diaChi NVARCHAR(255),
  soDienThoai NVARCHAR(20),
  email NVARCHAR(50)
);

CREATE TABLE ChucVu
(
  maChucVu INT AUTO_INCREMENT PRIMARY KEY,
  tenChucVu NVARCHAR(255),
  trangThai NVARCHAR(255),
  maPhongBan INT,
  FOREIGN KEY (maPhongBan) REFERENCES PhongBan(maPhongBan)
);

CREATE TABLE NhanVien 
(
	maNV INT AUTO_INCREMENT PRIMARY KEY,
    hoTen NVARCHAR(255),
    gioiTinh NVARCHAR(10),
    ngaySinh DATE,
    diaChi NVARCHAR(255),
	soCCCD NVARCHAR(50),
    maChucVu INT,
	maPhongBan INT,
	FOREIGN KEY (maPhongBan) REFERENCES PhongBan(maPhongBan),
	FOREIGN KEY (maChucVu) REFERENCES ChucVu(maChucVu)
);

CREATE TABLE QuaTrinhCongTac
(
	maQTCT INT AUTO_INCREMENT PRIMARY KEY,
	maNV INT,
    maCV INT,
	ngayBatDau DATE,
	ngayKetThuc DATE,
	danhGia NVARCHAR(255),
	FOREIGN KEY (maNV) REFERENCES NhanVien(maNV),
	FOREIGN KEY (maCV) REFERENCES ChucVu(maChucVu)
);

CREATE TABLE KhenThuongKyLuat
(
  maKTKL INT AUTO_INCREMENT PRIMARY KEY,
  maNV INT,
  hinhThuc NVARCHAR(255),
  lyDo NVARCHAR(255),
  ngayKTKL DATE,
  FOREIGN KEY (maNV) REFERENCES NhanVien(maNV)
);

CREATE TABLE TrinhDoHocVan
(
  maTDHV INT AUTO_INCREMENT PRIMARY KEY,
  maNV INT,
  loaiTDHV NVARCHAR(255),
  chuyenNganh NVARCHAR(255),
  tinHoc NVARCHAR(255),
  ngoaiNgu NVARCHAR(255),
  FOREIGN KEY (maNV) REFERENCES NhanVien(maNV)
);

CREATE TABLE PhanQuyen
(
  maQuyen INT AUTO_INCREMENT PRIMARY KEY,
  Quyen NVARCHAR(255),
  ghiChu NVARCHAR(255)
);

CREATE TABLE TaiKhoan
(
  maTK INT AUTO_INCREMENT PRIMARY KEY,
  maNV INT,
  tenTK NVARCHAR(255),
  matKhau NVARCHAR(255),
  maQuyen INT,
  FOREIGN KEY (maQuyen) REFERENCES PhanQuyen(maQuyen)
);

CREATE TABLE Kho
(
  maKho INT AUTO_INCREMENT PRIMARY KEY,
  tenKho NVARCHAR(50),
  loaiKho NVARCHAR(50),
  diaChi NVARCHAR(255),
  trangThai NVARCHAR(50)
);

CREATE TABLE NguyenVatLieu
(
  maNVL INT AUTO_INCREMENT PRIMARY KEY,
  tenNVL NVARCHAR(255),
  donViTinh NVARCHAR(50),
  soLuong INT,
  gia DECIMAL(10, 2),
  maKho INT,
  FOREIGN KEY (maKho) REFERENCES Kho(maKho)
);

CREATE TABLE SanPham
(
  maSP INT AUTO_INCREMENT PRIMARY KEY,
  tenSP NVARCHAR(255),
  loaiSP NVARCHAR(50),
  donViTinh NVARCHAR(50),
  soLuong INT,
  gia DECIMAL(10, 2),
  maKho INT,
  FOREIGN KEY (maKho) REFERENCES Kho(maKho)
);

CREATE TABLE PhieuNhap
(
  maPN INT AUTO_INCREMENT PRIMARY KEY,
  maNV INT,
  ngayNhap DATE,
  loaiHang NVARCHAR(50),
  ghiChu NVARCHAR(255),
  FOREIGN KEY (maNV) REFERENCES NhanVien(maNV)
);

CREATE TABLE PhieuXuat
(
  maPX INT AUTO_INCREMENT PRIMARY KEY,
  maNV INT,
  ngayXuat DATE,
  loaiHang NVARCHAR(50),
  ghiChu NVARCHAR(255),
  FOREIGN KEY (maNV) REFERENCES NhanVien(maNV)
);

CREATE TABLE ChiTietPhieuNhap
(
  maPN INT AUTO_INCREMENT PRIMARY KEY,
  maSP INT,
  MaNVL INT,
  soLuong INT,
  ghiChu NVARCHAR(255),
  FOREIGN KEY (maPN) REFERENCES PhieuNhap(maPN)
);

CREATE TABLE ChiTietPhieuXuat
(
  maPX INT AUTO_INCREMENT PRIMARY KEY,
  maSP INT,
  MaNVL INT,
  soLuong INT,
  ghiChu NVARCHAR(255),
  FOREIGN KEY (maPX) REFERENCES PhieuXuat(maPX)
);

-- SETUP BASE DATA TABLE
INSERT INTO PhongBan (tenPhongBan, diaChi, soDienThoai, email)
VALUES
  ('NULL', 'diachi', '0123456789', 'phongban@example.com')

INSERT INTO ChucVu (tenChucVu, trangThai, maPhongBan)
VALUES
  ('EMPLOYEE', 'ACTIVE', 1)

INSERT INTO PhanQuyen (quyen, ghiChu)
VALUES
  ('ADMIN', 'Quản trị hệ thống'),
  ('EMPLOYEE', 'Quản trị nhân viên hệ thống'),
  ('STORE', 'Quản trị kho hệ thống'),
  ('USER', 'Người dùng hệ thống')

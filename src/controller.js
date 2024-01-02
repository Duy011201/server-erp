import constant from "./constant.js";
import { getAll, getByID, create, update, deleteByID } from "./core.js";

// Role
export const getAllRole = (req, res) => {
  const queryCondition = "";
  return getAll(res, constant.tableNameBD.ROLES, queryCondition);
};

export const createRole = (req, res) => {
  const newRole = {
    code: req.body.code,
  };

  return create(req, res, constant.tableNameBD.ROLES, newRole);
};

// Store
export const getAllStore = (req, res) => {
  const queryCondition = `SELECT st.maKho as id, st.loaiKho, st.tenKho, st.diaChi, st.trangThai FROM ${constant.tableNameBD.STORES} as st`;
  let querySearch = "";

  return getAll(res, constant.tableNameBD.STORES, queryCondition, querySearch);
};

export const getStoreByID = (req, res) => {
  const queryCondition = "";

  if (
    req.query.id === undefined ||
    req.query.id === null ||
    req.query.id === ""
  ) {
    console.error(`Error querying get by id table name ${tableName}`);
    res.status(constant.code.SERVER_ERROR).json({
      status: constant.code.SERVER_ERROR,
      query: `Error querying get by id table name ${tableName}`,
      msg: constant.msg.SERVER_ERROR,
    });
    return;
  }

  const data = {
    maKho: req.query.id,
  };

  return getByID(req, res, constant.tableNameBD.STORES, queryCondition, data);
};

export const deleteStoreByID = (req, res) => {
  const deleteColumns = {
    maKho: req.query.id,
  };
  return deleteByID(req, res, constant.tableNameBD.STORES, deleteColumns);
};

export const createStore = (req, res) => {
  const newStore = {
    tenKho: req.body.tenKho,
    loaiKho: req.body.loaiKho,
    diaChi: req.body.diaChi,
    trangThai: constant.statusStore.EMPTY,
  };

  return create(req, res, constant.tableNameBD.STORES, newStore);
};

export const updateStoreByID = (req, res) => {
  const updateStore = {
    tenKho: req.body.tenKho,
    loaiKho: req.body.loaiKho,
    diaChi: req.body.diaChi,
    trangThai: req.body.trangThai,
  };

  const updateColumns = {
    maKho: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.STORES,
    updateStore,
    updateColumns
  );
};

// Product
export const getAllProduct = (req, res) => {
  const queryCondition =
    `SELECT pd.maSP as id, pd.tenSP, pd.loaiSP, pd.donViTinh, pd.soLuong, pd.maKho, pd.gia, sp.tenKho FROM ${constant.tableNameBD.PRODUCTS} as pd` +
    ` INNER JOIN ${constant.tableNameBD.STORES} as sp ON sp.maKho = pd.maKho`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.PRODUCTS,
    queryCondition,
    querySearch
  );
};

export const getProductByID = (req, res) => {
  const queryCondition = `SELECT pd.maSP as id, pd.tenSP, pd.loaiSP, pd.donViTinh, pd.soLuong, pd.maKho, pd.gia FROM ${constant.tableNameBD.PRODUCTS} as pd`;
  const data = {
    maSP: req.query.id,
  };
  return getByID(req, res, constant.tableNameBD.PRODUCTS, queryCondition, data);
};

export const deleteProductByID = (req, res) => {
  const deleteColumns = {
    maKho: req.query.id,
  };
  return deleteByID(req, res, constant.tableNameBD.PRODUCTS, deleteColumns);
};

export const createProduct = (req, res) => {
  const newProduct = {
    tenSP: req.body.tenSP,
    loaiSP: req.body.loaiSP,
    donViTinh: req.body.donViTinh,
    soLuong: req.body.soLuong,
    gia: req.body.gia,
    maKho: req.body.maKho,
  };

  return create(req, res, constant.tableNameBD.PRODUCTS, newProduct);
};

export const updateProductByID = (req, res) => {
  const updateProduct = {
    tenSP: req.body.tenSP,
    loaiSP: req.body.loaiSP,
    donViTinh: req.body.donViTinh,
    soLuong: req.body.soLuong,
    gia: req.body.gia,
    maKho: req.body.maKho,
  };

  const updateColumns = {
    maSP: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.PRODUCTS,
    updateProduct,
    updateColumns
  );
};

// Material
export const getAllMaterial = (req, res) => {
  const queryCondition = `SELECT mt.maNVL as id, mt.tenNVL, mt.donViTinh, mt.soLuong, mt.maKho, mt.gia FROM ${constant.tableNameBD.MATERIALS} as mt`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.MATERIALS,
    queryCondition,
    querySearch
  );
};

export const getMaterialByID = (req, res) => {
  const queryCondition = `SELECT mt.maNVL as id, mt.tenNVL, mt.donViTinh, mt.soLuong, mt.maKho, mt.gia FROM ${constant.tableNameBD.MATERIALS} as mt`;
  const data = {
    maNVL: req.query.id,
  };
  return getByID(
    req,
    res,
    constant.tableNameBD.MATERIALS,
    queryCondition,
    data
  );
};

export const deleteMaterialByID = (req, res) => {
  const deleteColumns = {
    maKho: req.query.id,
  };
  return deleteByID(req, res, constant.tableNameBD.MATERIALS, deleteColumns);
};

export const createMaterial = (req, res) => {
  const newMaterial = {
    tenNVL: req.body.tenNVL,
    donViTinh: req.body.donViTinh,
    soLuong: req.body.soLuong,
    gia: req.body.gia,
    maKho: req.body.maKho,
  };

  return create(req, res, constant.tableNameBD.MATERIALS, newMaterial);
};

export const updateMaterialByID = (req, res) => {
  const updateMaterial = {
    tenNVL: req.body.tenNVL,
    donViTinh: req.body.donViTinh,
    soLuong: req.body.soLuong,
    gia: req.body.gia,
    maKho: req.body.maKho,
  };

  const updateColumns = {
    maNVL: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.MATERIALS,
    updateMaterial,
    updateColumns
  );
};

// Warehouse Receipt
export const getAllWarehouseReceipt = (req, res) => {
  const queryCondition = `SELECT pn.maPN as id, pn.maNV, pn.ngayNhap, pn.loaiHang, pn.ghiChu FROM ${constant.tableNameBD.WAREHOUSE_RECEIPTS} as pn`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPTS,
    queryCondition,
    querySearch
  );
};

export const getWarehouseReceiptByID = (req, res) => {
  const queryCondition = "";
  const data = {
    maPN: req.query.id,
  };
  return getByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPTS,
    queryCondition,
    data
  );
};

export const deleteWarehouseReceiptByID = (req, res) => {
  const deleteColumns = {
    maPN: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPTS,
    deleteColumns
  );
};

export const createWarehouseReceipt = (req, res) => {
  const newWarehouseReceipt = {
    maNV: req.body.maNV,
    ngayNhap: new Date(),
    loaiHang: req.body.loaiHang,
    ghiChu: req.body.ghiChu,
  };

  return create(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPTS,
    newWarehouseReceipt
  );
};

export const updateWarehouseReceiptByID = (req, res) => {
  const updateWarehouseReceipt = {
    maNV: req.body.maNV,
    ngayNhap: new Date(req.body.ngayNhap),
    loaiHang: req.body.loaiHang,
    ghiChu: req.body.ghiChu,
  };

  const updateColumns = {
    maPN: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPTS,
    updateWarehouseReceipt,
    updateColumns
  );
};

// Warehouse Receipt Detail
export const getAllWarehouseReceiptDetail = (req, res) => {
  const queryCondition = `SELECT ctpn.maCTPN as id, ctpn.maPN , ctpn.maSP, ctpn.maNVL, ctpn.soLuong, ctpn.ghiChu FROM ${constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS} as ctpn`;
  let querySearch = "";
  querySearch += ` WHERE ctpn.maPN = ${req.body.warehouseReceiptID}`;

  return getAll(
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS,
    queryCondition,
    querySearch
  );
};

export const getWarehouseReceiptDetailByID = (req, res) => {
  const queryCondition = "";
  const data = {
    maCTPN: req.query.id,
  };
  return getByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS,
    queryCondition,
    data
  );
};

export const deleteWarehouseReceiptDetailByID = (req, res) => {
  const deleteColumns = {
    maCTPN: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS,
    deleteColumns
  );
};

export const createWarehouseReceiptDetail = (req, res) => {
  const newWarehouseReceiptDetail = {
    maPN: req.body.maPN,
    maSP: req.body.maSP,
    maNVL: req.body.maNVL,
    soLuong: req.body.soLuong,
    ghiChu: req.body.ghiChu,
  };

  return create(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS,
    newWarehouseReceiptDetail
  );
};

export const updateWarehouseReceiptDetailByID = (req, res) => {
  const updateWarehouseReceiptDetail = {
    maPN: req.body.maPN,
    maSP: req.body.maSP,
    maNVL: req.body.maNVL,
    soLuong: parseInt(req.body.soLuong),
    ghiChu: req.body.ghiChu,
  };

  const updateColumns = {
    maCTPN: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS,
    updateWarehouseReceiptDetail,
    updateColumns
  );
};

// Auth
export const checkLogin = (req, res) => {
  const queryCondition =
    `SELECT ac.maTK as id, ac.tenTK, ac.maQuyen, rl.quyen FROM ${constant.tableNameBD.ACCOUNTS} as ac` +
    ` INNER JOIN ${constant.tableNameBD.ROLES} as rl ON rl.maQuyen = ac.maQuyen`;

  let querySearch = "";
  if (req.body.email && req.body.email !== "") {
    querySearch += ` WHERE ac.tenTK = '${req.body.email}'`;
  }

  if (req.body.password && req.body.password !== "") {
    querySearch += ` AND ac.matKhau = '${req.body.password}'`;
  }

  return getAll(
    res,
    constant.tableNameBD.ACCOUNTS,
    queryCondition,
    querySearch
  );
};

export const register = async (req, res) => {
  const queryCondition = `SELECT * FROM ${constant.tableNameBD.ACCOUNTS} as ac`;
  let querySearch = "";
  if (req.body.email && req.body.email !== "") {
    querySearch += ` WHERE ac.tenTK = '${req.body.email}'`;
  }

  return getAll(
    res,
    constant.tableNameBD.ACCOUNTS,
    queryCondition,
    querySearch
  );
};

export const createRegister = async (req, res) => {
  const newUser = {
    maNV: req.body.maNV,
    tenTK: req.body.email,
    matKhau: req.body.password,
    maQuyen: constant.role.USER.code,
  };

  return create(req, res, constant.tableNameBD.ACCOUNTS, newUser);
};

export const updatePassword = (req, res) => {
  const updateUser = {
    matKhau: req.body.password,
  };

  const updateColumns = {
    maTK: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.ACCOUNTS,
    updateUser,
    updateColumns
  );
};

// Employee
export const getEmployeeByID = (req, res) => {
  const queryCondition = `SELECT nv.maNV as id, nv.hoTen, nv.soCCCD, nv.diaChi, nv.gioiTinh, nv.maChucVu, nv.maPhongBan FROM ${constant.tableNameBD.EMPLOYEES} as nv`;
  const data = {
    maNV: req.query.id,
  };
  return getByID(
    req,
    res,
    constant.tableNameBD.EMPLOYEES,
    queryCondition,
    data
  );
};

export const updateEmployeeByID = (req, res) => {
  const updateEmployee = {
    hoTen: req.body.hoTen,
    gioiTinh: req.body.gioiTinh,
    ngaySinh: new Date(),
    diaChi: req.body.diaChi,
    soCCCD: req.body.soCCCD,
    maChucVu: req.body.maChucVu,
    maPhongBan: req.body.maPhongBan,
  };

  const updateColumns = {
    maNV: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.EMPLOYEES,
    updateEmployee,
    updateColumns
  );
};

export const deleteEmployeeByID = (req, res) => {
  const deleteColumns = {
    maNV: req.query.id,
  };
  return deleteByID(req, res, constant.tableNameBD.EMPLOYEES, deleteColumns);
};

export const createEmployee = (req, res) => {
  const newEmployee = {
    hoTen: req.body.hoTen,
    gioiTinh: req.body.gioiTinh,
    ngaySinh: new Date(),
    diaChi: req.body.diaChi,
    soCCCD: req.body.soCCCD,
    maChucVu: req.body.maChucVu,
    maPhongBan: req.body.maPhongBan,
  };

  return create(req, res, constant.tableNameBD.EMPLOYEES, newEmployee);
};

export const getAllEmployee = (req, res) => {
  let queryCondition = `SELECT nv.maNV as id, nv.hoTen , nv.gioiTinh, nv.ngaySinh, nv.diaChi, nv.soCCCD, nv.maChucVu, nv.maPhongBan, ps.tenChucVu, dp.tenPhongBan FROM ${constant.tableNameBD.EMPLOYEES} as nv`;
  queryCondition += ` INNER JOIN ${constant.tableNameBD.POSITIONS} as ps ON ps.maChucVu = nv.maChucVu`;
  queryCondition += ` INNER JOIN ${constant.tableNameBD.DEPARTMENTS} as dp ON dp.maPhongBan = nv.maPhongBan`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.EMPLOYEES,
    queryCondition,
    querySearch
  );
};

// RewardDiscipline
export const getRewardDisciplineByID = (req, res) => {
  const queryCondition = `SELECT ktkl.maKTKL as id,nv.hoTen, ktkl.maNV, ktkl.hinhThuc, ktkl.lyDo, ktkl.ngayKTKL FROM ${constant.tableNameBD.REWARD_DISCIPLINES} as ktkl`;
  queryCondition += ` INNER JOIN ${constant.tableNameBD.EMPLOYEES} as nv ON nv.maNV = ktkl.maNV`;
  const data = {
    maKTKL: req.query.id,
  };
  return getByID(
    req,
    res,
    constant.tableNameBD.REWARD_DISCIPLINES,
    queryCondition,
    data
  );
};

export const updateRewardDisciplineByID = (req, res) => {
  const updateRewardDiscipline = {
    maNV: req.body.maNV,
    hinhThuc: req.body.hinhThuc,
    lyDo: req.body.lyDo,
    ngayKTKL: req.body.ngayKTKL,
  };

  const updateColumns = {
    maKTKL: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.REWARD_DISCIPLINES,
    updateRewardDiscipline,
    updateColumns
  );
};

export const deleteRewardDisciplineByID = (req, res) => {
  const deleteColumns = {
    maKTKL: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.REWARD_DISCIPLINES,
    deleteColumns
  );
};

export const createRewardDiscipline = (req, res) => {
  const newRewardDiscipline = {
    maNV: req.body.maNV,
    hinhThuc: req.body.hinhThuc,
    lyDo: req.body.lyDo,
    ngayKTKL: req.body.ngayKTKL,
  };

  return create(
    req,
    res,
    constant.tableNameBD.REWARD_DISCIPLINES,
    newRewardDiscipline
  );
};

export const getAllRewardDiscipline = (req, res) => {
  let queryCondition = `SELECT ktkl.maKTKL as id, ktkl.maNV, ktkl.hinhThuc, ktkl.lyDo, ktkl.ngayKTKL, nv.hoTen FROM ${constant.tableNameBD.REWARD_DISCIPLINES} as ktkl`;
  queryCondition += ` INNER JOIN ${constant.tableNameBD.EMPLOYEES} as nv ON nv.maNV = ktkl.maNV`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.REWARD_DISCIPLINES,
    queryCondition,
    querySearch
  );
};

// Position
export const getAllPosition = (req, res) => {
  const queryCondition = `SELECT dp.maChucVu as id, dp.tenChucVu , dp.trangThai, dp.maPhongBan FROM ${constant.tableNameBD.POSITIONS} as dp`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.POSITIONS,
    queryCondition,
    querySearch
  );
};
export const getPositionByID = (req, res) => {
  const queryCondition = ``;
  return getByID(
    req,
    res,
    constant.tableNameBD.POSITIONS,
    queryCondition
  );
};

export const updatePositionByID = (req, res) => {
  const updatePosition = {
    maChucVu: req.body.maChucVu,
    tenChucVu: req.body.tenChucVu,
    trangThai: req.body.trangThai,
    maPhongBan: req.body.maPhongBan
  };

  const updateColumns = {
    maChucVu: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.POSITIONS,
    updatePosition,
    updateColumns
  );
};

export const deletePositionByID = (req, res) => {
  const deleteColumns = {
    maChucVu: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.POSITIONS,
    deleteColumns
  );
};

export const createPosition = (req, res) => {
  const newPosition = {
    maChucVu: req.body.maChucVu,
    tenChucVu: req.body.tenChucVu,
    trangThai: req.body.trangThai,
    maPhongBan: req.body.maPhongBan,
  };

  return create(
    req,
    res,
    constant.tableNameBD.POSITIONS,
    newPosition
  );
};

// Department
export const getAllDepartment = (req, res) => {
  const queryCondition = `SELECT ps.maPhongBan as id, ps.tenPhongBan , ps.diaChi, ps.soDienThoai, ps.email FROM ${constant.tableNameBD.DEPARTMENTS} as ps`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.DEPARTMENTS,
    queryCondition,
    querySearch
  );
};
export const getDepartmentByID = (req, res) => {
  const queryCondition = ``;
  return getByID(
    req,
    res,
    constant.tableNameBD.DEPARTMENTS,
    queryCondition
  );
};;
export const updateDepartmentID = (req, res) => {
  const updateDepartment = {
    maPhongBan: req.body.maPhongBan,
    tenPhongBan: req.body.tenPhongBan,
    diaChi: req.body.diaChi,
    soDienThoai: req.body.soDienThoai,
    email: req.body.email,
  };

  const updateColumns = {
    maPhongBan: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.DEPARTMENTS,
    updateDepartment,
    updateColumns
  );
};

export const deleteDepartmentByID = (req, res) => {
  const deleteColumns = {
    maPhongBan: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.DEPARTMENTS,
    deleteColumns
  );
};

export const createDepartment = (req, res) => {
  const newDepartment = {
    maPhongBan: req.body.maPhongBan,
    tenPhongBan: req.body.tenPhongBan,
    diaChi: req.body.diaChi,
    soDienThoai: req.body.soDienThoai,
    email: req.body.email,
  };

  return create(
    req,
    res,
    constant.tableNameBD.DEPARTMENTS,
    newDepartment
  );
};

// Warehouse exports
export const getAllWarehouseExport = (req, res) => {
  const queryCondition = `SELECT px.maPX as id, px.maNV, px.ngayXuat, px.loaiHang, px.ghiChu FROM ${constant.tableNameBD.WAREHOUSE_EXPORTS} as px`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.WAREHOUSE_EXPORTS,
    queryCondition,
    querySearch
  );
};

export const getWarehouseExportByID = (req, res) => {
  const queryCondition = "";
  const data = {
    maCTPX: req.query.id,
  };
  return getByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORTS,
    queryCondition,
    data
  );
};

export const deleteWarehouseExportByID = (req, res) => {
  const deleteColumns = {
    maPX: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORTS,
    deleteColumns
  );
};

export const createWarehouseExport = (req, res) => {
  const newWarehouseExport = {
    maNV: req.body.maNV,
    loaiHang: req.body.loaiHang,
    ngayXuat: new Date(),
    ghiChu: req.body.ghiChu,
  };

  return create(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORTS,
    newWarehouseExport
  );
};

export const updateWarehouseExportByID = (req, res) => {
  const updateWarehouseExport = {
    maNV: req.body.maNV,
    loaiHang: req.body.loaiHang,
    ngayXuat: new Date(req.body.ngayXuat),
    ghiChu: req.body.ghiChu,
  };

  const updateColumns = {
    maPX: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORTS,
    updateWarehouseExport,
    updateColumns
  );
};

// Warehouse Export Detail
export const getAllWarehouseExportDetail = (req, res) => {
  const queryCondition = `SELECT ctpx.maCTPX as id, ctpx.maPX , ctpx.maSP, ctpx.maNVL, ctpx.soLuong, ctpx.ghiChu FROM ${constant.tableNameBD.WAREHOUSE_EXPORT_DETAILS} as ctpx`;
  let querySearch = ` WHERE ctpx.maPX = ${req.body.warehouseExportID}`;

  return getAll(
    res,
    constant.tableNameBD.WAREHOUSE_EXPORT_DETAILS,
    queryCondition,
    querySearch
  );
};

export const getWarehouseExportDetailByID = (req, res) => {
  const queryCondition = "";
  const data = {
    maCTPX: req.query.id,
  };
  return getByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORT_DETAILS,
    queryCondition,
    data
  );
};

export const deleteWarehouseExportDetailByID = (req, res) => {
  const deleteColumns = {
    maCTPX: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORT_DETAILS,
    deleteColumns
  );
};

export const createWarehouseExportDetail = (req, res) => {
  const newWarehouseExportDetail = {
    maPX: req.body.maPX,
    maSP: req.body.maSP,
    maNVL: req.body.maNVL,
    soLuong: req.body.soLuong,
    ghiChu: req.body.ghiChu,
  };

  return create(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORT_DETAILS,
    newWarehouseExportDetail
  );
};

export const updateWarehouseExportDetailByID = (req, res) => {
  const updateWarehouseExportDetail = {
    maPX: req.body.maPX,
    maSP: req.body.maSP,
    maNVL: req.body.maNVL,
    soLuong: parseInt(req.body.soLuong),
    ghiChu: req.body.ghiChu,
  };

  const updateColumns = {
    maCTPX: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_EXPORT_DETAILS,
    updateWarehouseExportDetail,
    updateColumns
  );
};
//workingprocess

export const getAllworkingprocess = (req, res) => {
  const queryCondition = `SELECT wp.maQTCT as id, wp.maNV , wp.maCV, wp.ngayBatDau, wp.ngayKetThuc,
  , wp.danhGia FROM ${constant.tableNameBD.WORKING_PROCESS} as wp`;
  let querySearch = "";
  if (req.body.workingprocessExportID && req.body.workingprocessExportID !== "") {
    querySearch += ` WHERE wp.maQTCT = ${req.body.workingprocessExportID}`;
  }

  return getAll(
    res,
    constant.tableNameBD.WORKING_PROCESS,
    queryCondition,
    querySearch
  );
};

export const getworkingprocessByID = (req, res) => {
  const queryCondition = "";
  return getByID(
    req,
    res,
    constant.tableNameBD.WORKING_PROCESS,
    queryCondition
  );
};

export const deleteworkingprocessByID = (req, res) => {
  const deleteColumns = {
    maQTCT: req.query.id,
  };
  return deleteByID(
    req,
    res,
    constant.tableNameBD.WORKING_PROCESS,
    deleteColumns
  );
};

export const createworkingprocess = (req, res) => {
  const newworkingprocess = {
    maQTCT: req.body.maQTCT,
    maNV: req.body.maNV,
    maCV: req.body.maCV,
    ngayBatDau: req.body.ngayBatDau,
    ngayKetThuc: req.body.ngayKetThuc,
    danhGia: req.body.danhGia,

  };

  return create(
    req,
    res,
    constant.tableNameBD.WORKING_PROCESS,
    newworkingprocess
  );
};

export const updateworkingprocessByID = (req, res) => {
  const updateworkingprocess = {
    maQTCT: req.body.maQTCT,
    maNV: req.body.maNV,
    maCV: req.body.maCV,
    ngayBatDau: req.body.ngayBatDau,
    ngayKetThuc: req.body.ngayKetThuc,
    danhGia: req.body.danhGia,
  };

  const updateColumns = {
    maQTCT: req.body.id,
  };

  return update(
    req,
    res,
    constant.tableNameBD.WORKING_PROCESS,
    updateworkingprocess,
    updateColumns
  );
};
//test
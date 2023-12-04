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
  return getByID(req, res, constant.tableNameBD.STORES, queryCondition);
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
  const queryCondition = `SELECT pd.maSP as id, pd.tenSP, pd.loaiSP, pd.donViTinh, pd.soLuong, pd.maKho, pd.gia FROM ${constant.tableNameBD.PRODUCTS} as pd`;
  let querySearch = "";

  return getAll(
    res,
    constant.tableNameBD.PRODUCTS,
    queryCondition,
    querySearch
  );
};

export const getProductByID = (req, res) => {
  const queryCondition = "";
  return getByID(req, res, constant.tableNameBD.PRODUCTS, queryCondition);
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
  const queryCondition = "";
  return getByID(req, res, constant.tableNameBD.MATERIALS, queryCondition);
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
  return getByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPTS,
    queryCondition
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
  if (req.body.warehouseReceiptID && req.body.warehouseReceiptID !== "") {
    querySearch += ` WHERE ctpn.maPN = ${req.body.warehouseReceiptID}`;
  }

  return getAll(
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS,
    queryCondition,
    querySearch
  );
};

export const getWarehouseReceiptDetailByID = (req, res) => {
  const queryCondition = "";
  return getByID(
    req,
    res,
    constant.tableNameBD.WAREHOUSE_RECEIPT_DETAILS,
    queryCondition
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
  console.log(req.body);

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

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

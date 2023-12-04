const constant = {
  msg: {
    CREATE_SUCCESS: "Created data successfully",
    UPDATE_SUCCESS: "Updated data successfully",
    DELETE_SUCCESS: "Deleted data successfully",
    GET_SUCCESS: "Get data successfully",

    SERVER_ERROR: "Internal Server Error",
  },
  code: {
    OK: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  },
  statusStore: {
    EMPTY: "Empty",
    FULL: "Full",
    IN_USE: "In Use",
  },
  tableNameBD: {
    ROLES: "phanquyen",
    STORES: "kho",
    PRODUCTS: "sanpham",
    MATERIALS: "nguyenvatlieu",
    WAREHOUSE_RECEIPTS: "phieunhap",
    WAREHOUSE_RECEIPT_DETAILS: "chitietphieunhap",
  },
};

export default constant;

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
    EMPTY: "EMPTY",
    FULL: "FULL",
    IN_USE: "IN_USE",
  },
  role: {
    ADMIN: {code: 1, name:"ADMIN"},
    EMPLOYEE: {code: 2, name:"EMPLOYEE"},
    STORE:  {code: 3, name:"STORE"},
    USER:  {code: 4, name:"USER"},
  },
  tableNameBD: {
    ROLES: "phanquyen",
    STORES: "kho",
    PRODUCTS: "sanpham",
    MATERIALS: "nguyenvatlieu",
    WAREHOUSE_RECEIPTS: "phieunhap",
    WAREHOUSE_RECEIPT_DETAILS: "chitietphieunhap",
    WAREHOUSE_EXPORTS: "phieuxuat",
    WAREHOUSE_EXPORT_DETAILS: "chitietphieuxuat",
    ACCOUNTS: "taikhoan",
    EMPLOYEES: "nhanvien",
    DEPARTMENTS: "phongban",
    POSITIONS: "chucvu",
    REWARD_DISCIPLINES: "khenthuongkyluat",
    WORKING_PROCESS:"quatrinhcongtac",
  },
};

export default constant;

import mysql from "mysql2";
import dotenv from "dotenv";
import _ from "jquery";
import constant from "./constant.js";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// (không chỉnh sửa đoạn code bên dưới)

/**
 *
 * @param {response api} res
 * @param {table name in database} tableName
 * @param {query condition} queryCondition
 * @param {query search} querySearch
 */
export const getAll = (res, tableName, queryCondition, querySearch) => {
  let query = "";
  if (
    queryCondition === undefined ||
    queryCondition === null ||
    queryCondition.length === 0
  ) {
    query = `SELECT * FROM ${tableName}`;
    query += querySearch;
  } else {
    query += queryCondition;
    query += querySearch;
  }

  connection.query(query, (error, results) => {
    if (error) {
      console.error(`Error querying get all table name ${tableName}`, error);
      res.status(constant.code.SERVER_ERROR).json({
        status: constant.code.SERVER_ERROR,
        query: `Error querying get all table name ${tableName}`,
        msg: constant.msg.SERVER_ERROR,
      });
      return;
    }
    return res.status(constant.code.OK).json({
      status: constant.code.OK,
      msg: constant.msg.GET_SUCCESS,
      data: results,
    });
  });
};

export const getByID = (req, res, tableName, queryCondition) => {
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

  let query = "";
  if (
    queryCondition === undefined ||
    queryCondition === null ||
    queryCondition.length === 0
  ) {
    query = `SELECT * FROM ${tableName} WHERE ${req.query.id}`;
  } else {
    query += queryCondition;
  }

  connection.query(query, (error, results) => {
    if (error) {
      console.error(`Error querying get by id table name ${tableName}`, error);
      res.status(constant.code.SERVER_ERROR).json({
        status: constant.code.SERVER_ERROR,
        query: `Error querying get by id table name ${tableName}`,
        msg: constant.msg.SERVER_ERROR,
      });
      return;
    }
    return res.status(constant.code.OK).json({
      status: constant.code.OK,
      msg: constant.msg.GET_SUCCESS,
      data: results,
    });
  });
};

export const deleteByID = (req, res, tableName) => {
  if (
    req.query.id === undefined ||
    req.query.id === null ||
    req.query.id === ""
  ) {
    console.error(`Error querying delete by id table name ${tableName}`);
    res.status(constant.code.SERVER_ERROR).json({
      status: constant.code.SERVER_ERROR,
      query: `Error querying delete by id table name ${tableName}`,
      msg: constant.msg.SERVER_ERROR,
    });
    return;
  }

  connection.query(
    `DELETE FROM ${tableName} WHERE id = ?`,
    req.query.id,
    (error, results) => {
      if (error) {
        console.error(
          `Error querying delete by id table name ${tableName}`,
          error
        );
        res.status(constant.code.SERVER_ERROR).json({
          status: constant.code.SERVER_ERROR,
          query: `Error querying delete by id table name ${tableName}`,
          msg: constant.msg.SERVER_ERROR,
        });
        return;
      }
      return res
        .status(constant.code.OK)
        .json({ status: constant.code.OK, msg: constant.msg.DELETE_SUCCESS });
    }
  );
};

export const create = (req, res, tableName, newData) => {
  for (let key in newData) {
    if (newData[key] === undefined || newData[key] === null) {
      console.error(`Error querying create data table name ${tableName}`);
      return res.status(constant.code.SERVER_ERROR).json({
        status: constant.code.SERVER_ERROR,
        msg: constant.msg.SERVER_ERROR,
      });
    }
  }

  connection.query(
    `INSERT INTO ${tableName} SET ?`,
    newData,
    (error, result) => {
      if (error) {
        console.error("Error creating role:", error);
        res.status(constant.code.SERVER_ERROR).json({
          status: constant.code.SERVER_ERROR,
          query: `Error querying create data table name ${tableName}`,
          msg: constant.msg.SERVER_ERROR,
        });
        return;
      }

      return res.json({
        status: constant.code.OK,
        message: constant.msg.CREATE_SUCCESS,
        newDataId: result.insertId,
      });
    }
  );
};

export const update = (req, res, tableName, updateData) => {
  if (
    updateData.id === undefined ||
    updateData.id === null ||
    updateData.id === ""
  ) {
    console.error(`Error querying update by id table name ${tableName}`);
    return res.status(constant.code.SERVER_ERROR).json({
      status: constant.code.SERVER_ERROR,
      query: `Error querying update by id table name ${tableName}`,
      msg: constant.msg.SERVER_ERROR,
    });
  }

  for (let key in updateData) {
    if (updateData[key] === undefined || updateData[key] === null) {
      console.error(`Error querying update data table name ${tableName}`);
      return res.status(constant.code.SERVER_ERROR).json({
        status: constant.code.SERVER_ERROR,
        msg: constant.msg.SERVER_ERROR,
      });
    }
  }

  connection.query(
    `UPDATE ${tableName} SET ? WHERE id = ?`,
    [updateData, updateData.id],
    (error, result) => {
      if (error) {
        console.error("Error creating role:", error);
        return res.status(constant.code.SERVER_ERROR).json({
          status: constant.code.SERVER_ERROR,
          query: `Error querying update data table name ${tableName}`,
          msg: constant.msg.SERVER_ERROR,
        });
      }

      return res.status(constant.code.OK).json({
        status: constant.code.OK,
        msg: constant.msg.UPDATE_SUCCESS,
        updateDataId: result.affectedRows,
      });
    }
  );
};

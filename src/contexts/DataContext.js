import { createContext, useEffect, useState } from "react";
import requestOptions from "./RequestOptions";
import React from 'react'

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const [quocGiaData, setQuocGiaData] = useState([])
  const [tinhThanhData, setTinhThanhData] = useState([])
  const [noiCapData, setNoiCapData] = useState([])
  const [quanHuyenData, setQuanHuyenData] = useState([])
  const [phuongXaData, setPhuongXaData] = useState([])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetDanhSachQuocGia?trangThaiKichHoat=2", requestOptions)
      .then(response => response.json())
      .then(data => setQuocGiaData(data.result))
      .catch(error => console.log('error', error));

  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoCapHanhChinh?capHanhChinh=1", requestOptions)
      .then(response => response.json())
      .then(data => setTinhThanhData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListNoiCap", requestOptions)
      .then(response => response.json())
      .then(data => setNoiCapData(data.result))
      .catch(error => console.log('error', error));
  }, [])


  const getQuanHuyen = (id) => {
    console.log('getquanhuyen', id);
    fetch(`http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => setQuanHuyenData(data.result))
      .catch(error => console.log('error', error));
  }

  const getPhuongXa = (id) => {
    fetch(`http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => setPhuongXaData(data.result))
      .catch(error => console.log('error', error));
  }


  const todoDataContext = { quocGiaData, tinhThanhData, noiCapData, quanHuyenData, phuongXaData, getQuanHuyen, getPhuongXa }

  return (
    <DataContext.Provider value={todoDataContext}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider

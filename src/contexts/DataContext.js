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
  const [loaiXeData, setLoaiXeData] = useState({})
  const [nhanHieuData, setNhanHieuData] = useState({})
  const [khuKinhTeData, setKhuKinhTeData] = useState({})
  const [bienTheoTinhData, setBienTheoTinhData] = useState({})
  const [bienQuocGiaData, setBienQuocGiaData] = useState({})
  const [seriChuData, setSeriChuData] = useState({})
  const [mauBienData, setMauBienData] = useState({})

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetDanhSachQuocGia?trangThaiKichHoat=2", requestOptions)
      .then(response => response.json())
      .then(data => setQuocGiaData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListNoiCap", requestOptions)
      .then(response => response.json())
      .then(data => setNoiCapData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaLoaiXe", requestOptions)
      .then(response => response.json())
      .then(data => setLoaiXeData(data.result))
      .catch(error => console.log('error', error));

    console.log(loaiXeData)
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaNhanHieu", requestOptions)
      .then(response => response.json())
      .then(data => setNhanHieuData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/getListKhuKTDB?dvCsgtId=29", requestOptions)
      .then(response => response.json())
      .then(data => setKhuKinhTeData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienTheoTinh/29", requestOptions)
      .then(response => response.json())
      .then(data => setBienTheoTinhData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienQuocGia/1", requestOptions)
      .then(response => response.json())
      .then(data => setBienQuocGiaData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListOtoSeriChu?trongNuoc=1&khuKtDbId=201", requestOptions)
      .then(response => response.json())
      .then(data => setSeriChuData(data.result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListMauBien?maLoaiXeId=103&seriId=238", requestOptions)
      .then(response => response.json())
      .then(data => setMauBienData(data.result))
      .catch(error => console.log('error', error));
  }, [])


  const getTinhThanh = (id) => {
    if (id) {
      fetch("http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoCapHanhChinh?capHanhChinh=1", requestOptions)
        .then(response => response.json())
        .then(data => setTinhThanhData(data.result))
        .catch(error => console.log('error', error));
    } else {
      setTinhThanhData([])
      setQuanHuyenData([])
      setPhuongXaData([])
    }
  }

  const getQuanHuyen = (id) => {
    if (id) {
      fetch(`http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => setQuanHuyenData(data.result))
        .catch(error => console.log('error', error));
    } else {
      setQuanHuyenData([])
      setPhuongXaData([])
    }
  }

  const getPhuongXa = (id) => {
    if (id) {
      fetch(`http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => setPhuongXaData(data.result))
        .catch(error => console.log('error', error));
    } else {
      setPhuongXaData([])
    }
  }

  const todoDataContext = { quocGiaData, tinhThanhData, noiCapData, quanHuyenData, phuongXaData, getTinhThanh, getQuanHuyen, getPhuongXa, loaiXeData, nhanHieuData, khuKinhTeData, bienTheoTinhData, bienQuocGiaData, seriChuData, mauBienData }

  return (
    <DataContext.Provider value={todoDataContext}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider

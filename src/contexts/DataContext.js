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
  const [loaiXeData, setLoaiXeData] = useState([])
  const [nhanHieuData, setNhanHieuData] = useState([])
  const [khuKinhTeData, setKhuKinhTeData] = useState([])
  const [bienTheoTinhData, setBienTheoTinhData] = useState([])
  const [bienQuocGiaData, setBienQuocGiaData] = useState([])
  const [seriChuData, setSeriChuData] = useState([])
  const [mauBienData, setMauBienData] = useState([])
  const [coQuanCapLPTB, setCoQuanCapLPTB] = useState([])
  const [coQuanCapKTCLXX, setCoQuanCapKTCLXX] = useState([])

  const mapData = (dataMap) => {
    return { value: dataMap.id, label: dataMap.ten }
  }

  const mapDataLoaiXe = (dataMap) => {
    return { value: dataMap.id, label: dataMap.tenLoai }
  }

  const mapDataDauBien = (dataMap) => {
    return { value: dataMap.id, label: dataMap.dauBienTheoTinh }
  }

  const mapDataDauBienQG = (dataMap) => {
    return { value: dataMap.id, label: dataMap.dauBienQuocGia }
  }

  const mapDataSeri = (dataMap) => {
    return { value: dataMap.id, label: dataMap.seriChu }
  }

  const mapDataMauBien = (dataMap) => {
    return { value: dataMap.id, label: dataMap.dienGiai }
  }

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetDanhSachQuocGia?trangThaiKichHoat=2", requestOptions)
      .then(response => response.json())
      .then(data => setQuocGiaData(data.result?.map(mapData)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListNoiCap", requestOptions)
      .then(response => response.json())
      .then(data => setNoiCapData(data.result?.map(mapData)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaLoaiXe", requestOptions)
      .then(response => response.json())
      .then(data => setLoaiXeData(data.result?.map(mapDataLoaiXe)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaNhanHieu", requestOptions)
      .then(response => response.json())
      .then(data => setNhanHieuData(data.result?.map(mapData)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/getListKhuKTDB?dvCsgtId=29", requestOptions)
      .then(response => response.json())
      .then(data => setKhuKinhTeData(data.result?.map(mapData)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienTheoTinh/29", requestOptions)
      .then(response => response.json())
      .then(data => setBienTheoTinhData(data.result?.map(mapDataDauBien)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienQuocGia/1", requestOptions)
      .then(response => response.json())
      .then(data => setBienQuocGiaData(data.result?.map(mapDataDauBienQG)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListOtoSeriChu?trongNuoc=1&khuKtDbId=201", requestOptions)
      .then(response => response.json())
      .then(data => setSeriChuData(data.result?.map(mapDataSeri)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListMauBien?maLoaiXeId=103&seriId=238", requestOptions)
      .then(response => response.json())
      .then(data => setMauBienData(data.result?.map(mapDataMauBien)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/getListCoQuanCap?coQuanCap=LPTB", requestOptions)
      .then(response => response.json())
      .then(data => setCoQuanCapLPTB(data.result?.map(mapData)))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch("http://10.0.25.184:8089/DkOtoFull/api/getListCoQuanCap?coQuanCap=PKTCLXX", requestOptions)
      .then(response => response.json())
      .then(data => setCoQuanCapKTCLXX(data.result?.map(mapData)))
      .catch(error => console.log('error', error));
  }, [])

  const getTinhThanh = (id) => {
    if (id) {
      fetch("http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoCapHanhChinh?capHanhChinh=1", requestOptions)
        .then(response => response.json())
        .then(data => setTinhThanhData(data.result?.map(mapData)))
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
        .then(data => setQuanHuyenData(data.result?.map(mapData)))
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
        .then(data => setPhuongXaData(data.result?.map(mapData)))
        .catch(error => console.log('error', error));
    } else {
      setPhuongXaData([])
    }
  }

  const todoDataContext = { quocGiaData, tinhThanhData, noiCapData, quanHuyenData, phuongXaData, getTinhThanh, getQuanHuyen, getPhuongXa, loaiXeData, nhanHieuData, khuKinhTeData, bienTheoTinhData, bienQuocGiaData, seriChuData, mauBienData, coQuanCapLPTB, coQuanCapKTCLXX }

  return (
    <DataContext.Provider value={todoDataContext}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider

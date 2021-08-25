import { createContext, useEffect, useState } from "react";
import React from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [quocGiaList, setQuocGiaList] = useState([]);
    const [tinhThanhList, setTinhThanhList] = useState([]);
    const [noiCapList, setNoiCapList] = useState([]);
    const [quanHuyenList, setQuanHuyenList] = useState([]);
    const [phuongXaList, setPhuongXaList] = useState([]);
    const [loaiXeList, setLoaiXeList] = useState([]);
    const [nhanHieuList, setNhanHieuList] = useState([]);
    const [khuKinhTeList, setKhuKinhTeList] = useState([]);
    const [bienTheoTinhList, setBienTheoTinhList] = useState([]);
    const [bienQuocGiaList, setBienQuocGiaList] = useState([]);
    const [seriChuList, setSeriChuList] = useState([]);
    const [mauBienList, setMauBienList] = useState([]);
    const [coQuanCapLptbList, setCoQuanCapLptbList] = useState([]);
    const [coQuanCapKtclxxList, setCoQuanCapKtclxxList] = useState([]);

    const [apiKey, setApiKey] = useState("");

    const [rpConfirm, setRpConfirm] = useState();
    const [licensePlate, setLicensePlate] = useState();
    const [paper, setPaper] = useState({});

    const [tableAllData, setTableAllData] = useState({});

    const [snackbar, setSnackbar] = useState();

    const [tableList, setTableList] = useState([]);

    const mapData = (dataMap, valueKey, labelKey) => {
        return dataMap.result.map((list) => ({
            value: list[valueKey],
            label: list[labelKey],
        }));
    };

    // call api, logic để vào trong 1 hook
    const getDataTable = (searchData) => {
        if (searchData) {
            let arrStr = "";
            if (searchData.trangThaiHoSo) {
                arrStr = searchData.trangThaiHoSo.map((value) => {
                    return value.maThamso;
                });
            }

            fetch(
                `http://10.0.25.184:8089/DkOtoFull/api/QuanLyHoSoXe/TimKiemHoSoXe?` +
                    new URLSearchParams({
                        limit: "1000",
                        page: "1",
                        trangThaiHoSo: arrStr,
                        trangThaiDangKy: "01",
                        bienSo: searchData.bienSo,
                        soKhung: searchData.soKhung,
                        soMay1: searchData.soMay1,
                    }),
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    typeof data.result.data === "string"
                        ? setSnackbar(data.result.data)
                        : data.result
                        ? setTableAllData(data.result)
                        : setTableAllData([]);
                })
                .catch((error) => console.log("error", error));
        } else {
            fetch(
                "http://10.0.25.184:8089/DkOtoFull/api/QuanLyHoSoXe/TimKiemHoSoXe?limit=1000&page=1",
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    typeof data.result.data === "string"
                        ? setSnackbar(data.result.data)
                        : data.result
                        ? setTableAllData(data.result)
                        : setTableAllData([]);
                })
                .catch((error) => console.log("error", error));
        }
    };

    //Get table data
    useEffect(() => {
        if (apiKey) {
            getDataTable();
        }
    }, [apiKey]);

    useEffect(() => {
        if (apiKey) {
            fetch(
                "http://10.0.25.184:8089/DkOtoFull/api/GetListTrangThaiHoSo?limit=20&page=1&boQuaTrangThaiHoSo=04",
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => setTableList(data.result.data))
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    // inGiay hen
    const printPaperApi = (data) => {
        fetch("http://10.0.25.184:8089/DkOtoFull/api/InGiayHen", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                api_key: apiKey,
            },
            body: JSON.stringify(data),
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((response) => setPaper(response))
            .catch((error) => console.log("error", error));
    };
    // console.log("paper", paper);

    // Cấp biển
    const submitLicensePlate = (data) => {
        fetch("http://10.0.25.184:8089/DkOtoFull/api/DangKyLanDau", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                api_key: apiKey,
            },
            body: JSON.stringify(data),
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((response) => setLicensePlate(response))
            .catch((error) => console.log("error", error));
    };

    // console.log("licensePlate", licensePlate);

    //Chuẩn bị cấp biển
    const submitConfirm = (data) => {
        fetch("http://10.0.25.184:8089/DkOtoFull/api/ChuanBiCapBien", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                api_key: apiKey,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((response) => setRpConfirm(response))
            .catch((error) => console.log("error", error));
    };
    // console.log("rpConfirm", rpConfirm);

    useEffect(() => {
        if (apiKey) {
            fetch(
                "http://10.0.25.184:8089/DkOtoFull/api/GetDanhSachQuocGia?trangThaiKichHoat=2",
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => setQuocGiaList(mapData(data, "id", "ten")))
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    useEffect(() => {
        if (apiKey) {
            fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListNoiCap", {
                headers: {
                    api_key: apiKey,
                },
            })
                .then((response) => response.json())
                .then((data) =>
                    setNoiCapList(
                        data.result.map((rp) => ({
                            value: rp.id,
                            label: rp.ten,
                            loaiNoiCap: rp.loai,
                        }))
                    )
                )
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    useEffect(() => {
        if (apiKey) {
            fetch("http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaLoaiXe", {
                headers: {
                    api_key: apiKey,
                },
            })
                .then((response) => response.json())
                .then((data) =>
                    setLoaiXeList(
                        data.result.map((rp) => ({
                            value: rp.id,
                            label: `${rp.id}. ${rp.tenLoai}`,
                            type: rp.dienGiaiNhomXe,
                        }))
                    )
                )
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    useEffect(() => {
        if (apiKey) {
            fetch(
                "http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaNhanHieu",
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => setNhanHieuList(mapData(data, "id", "ten")))
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    useEffect(() => {
        if (apiKey) {
            fetch(
                "http://10.0.25.184:8089/DkOtoFull/api/getListKhuKTDB?dvCsgtId=29",
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => setKhuKinhTeList(mapData(data, "id", "ten")))
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    const getBienTheoTinh = (id) => {
        fetch(
            `http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienTheoTinh/${id}`,
            {
                headers: {
                    api_key: apiKey,
                },
            }
        )
            .then((response) => response.json())
            .then((data) =>
                data.result
                    ? setBienTheoTinhList(
                          mapData(data, "id", "dauBienTheoTinh")
                      )
                    : setBienTheoTinhList([])
            )
            .catch((error) => console.log("error", error));
    };

    const getBienQuocGia = (id) => {
        fetch(
            `http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienQuocGia/${id}`,
            {
                headers: {
                    api_key: apiKey,
                },
            }
        )
            .then((response) => response.json())
            .then((data) =>
                data.result
                    ? setBienQuocGiaList(mapData(data, "id", "dauBienQuocGia"))
                    : setBienQuocGiaList([])
            )
            .catch((error) => console.log("error", error));
    };

    const getSeriChu = (quocGiaId, param) => {
        fetch(
            `http://10.0.25.184:8089/DkOtoFull/api/GetListOtoSeriChu?trongNuoc=${quocGiaId}&${param}`,
            {
                headers: {
                    api_key: apiKey,
                },
            }
        )
            .then((response) => response.json())
            .then((data) =>
                data.result
                    ? setSeriChuList(mapData(data, "id", "seriChu"))
                    : setSeriChuList([])
            )
            .catch((error) => console.log("error", error));
    };
    const getMauBien = (maxLoai, seri) => {
        fetch(
            `http://10.0.25.184:8089/DkOtoFull/api/GetListMauBien?maLoaiXeId=${maxLoai}&seriId=${seri}`,
            {
                headers: {
                    api_key: apiKey,
                },
            }
        )
            .then((response) => response.json())
            .then((data) =>
                data.result
                    ? setMauBienList(
                          data.result.map((rp) => ({
                              value: rp.maThamso,
                              label: rp.dienGiai,
                              code: rp.id,
                          }))
                      )
                    : setMauBienList([])
            )
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        if (apiKey) {
            fetch(
                "http://10.0.25.184:8089/DkOtoFull/api/getListCoQuanCap?coQuanCap=LPTB",
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) =>
                    setCoQuanCapLptbList(mapData(data, "ma", "ten"))
                )
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    useEffect(() => {
        if (apiKey) {
            fetch(
                "http://10.0.25.184:8089/DkOtoFull/api/getListCoQuanCap?coQuanCap=PKTCLXX",
                {
                    headers: {
                        api_key: apiKey,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) =>
                    setCoQuanCapKtclxxList(mapData(data, "ma", "ten"))
                )
                .catch((error) => console.log("error", error));
        }
    }, [apiKey]);

    const getTinhThanh = () => {
        fetch(
            "http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoCapHanhChinh?capHanhChinh=1",
            {
                headers: {
                    api_key: apiKey,
                },
            }
        )
            .then((response) => response.json())
            .then((data) =>
                data.result
                    ? setTinhThanhList(
                          data.result.map((rp) => ({
                              value: rp.id,
                              label: rp.ten,
                              code: rp.ma,
                          }))
                      )
                    : setTinhThanhList([])
            )
            .catch((error) => console.log("error", error));
    };

    const getQuanHuyen = (id) => {
        fetch(
            `http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/${id}`,
            {
                headers: {
                    api_key: apiKey,
                },
            }
        )
            .then((response) => response.json())
            .then((data) =>
                data.result
                    ? setQuanHuyenList(mapData(data, "id", "ten"))
                    : setQuanHuyenList([])
            )
            .catch((error) => console.log("error", error));
    };

    const getPhuongXa = (id) => {
        fetch(
            `http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/${id}`,
            {
                headers: {
                    api_key: apiKey,
                },
            }
        )
            .then((response) => response.json())
            .then((data) =>
                data.result
                    ? setPhuongXaList(mapData(data, "id", "ten"))
                    : setPhuongXaList([])
            )
            .catch((error) => console.log("error", error));
    };

    const value = {
        quocGiaList,
        tinhThanhList,
        noiCapList,
        quanHuyenList,
        phuongXaList,
        getTinhThanh,
        getQuanHuyen,
        getPhuongXa,
        getBienTheoTinh,
        getBienQuocGia,
        getSeriChu,
        getMauBien,
        loaiXeList,
        nhanHieuList,
        khuKinhTeList,
        bienTheoTinhList,
        bienQuocGiaList,
        seriChuList,
        mauBienList,
        coQuanCapLptbList,
        coQuanCapKtclxxList,
        setApiKey,
        submitConfirm,
        rpConfirm,
        submitLicensePlate,
        licensePlate,
        printPaperApi,
        paper,
        tableList,
        tableAllData,
        getDataTable,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export default DataContextProvider;

let arrStr = "";
if (dataTimKiem.trangThaiHoSo) {
    arrStr = dataTimKiem.trangThaiHoSo.map((value) => {
        return value.maThamso;
    });
}
console.log(arrStr);

fetch(
    `http://10.0.25.184:8089/DkOtoFull/api/QuanLyHoSoXe/TimKiemHoSoXe?` +
        new URLSearchParams({
            limit: "400",
            page: "1",
            trangThaiHoSo: arrStr,
            trangThaiDangKy: "01",
            bienSo: dataTimKiem.bienSo,
            soKhung: dataTimKiem.soKhung,
            soMay1: dataTimKiem.soMay1,
        }),
    {
        headers: {
            api_key: dangNhap,
        },
    }
)
    .then((response) => response.json())
    .then((result) => {
        if (result.result.currentTotalRecord) {
            setDanhSachXeDaDangKy(chuyenDoi(result.result.data));
        } else {
            setDanhSachXeDaDangKy([]);
        }
    });
    getRowClassName={(params) => {
      if (params.row) {
          return Number(params.row.trangthaiHoso) === 1
              ? "redRow"
              : Number(params.row.trangthaiHoso) === 2
              ? "violetRow"
              : Number(params.row.trangthaiHoso) === 6
              ? "blueRow"
              : "";
      }
  }}
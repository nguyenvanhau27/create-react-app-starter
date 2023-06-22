import "./styles.css";
import logo from "../../img/logo.ico";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid p-0 my-1 mx-0 lineFooter"></div>
        <div className="jumbotron text-center m-0 p-0 qifooterbgcolor">
          <div className="container" id="CenterFooter">
            <div className="row">
              <div className="col-sm-2">
                <div className="LogoBotoom">
                  <img
                    className="img-responsive"
                    alt
                    src="https://adminpgd.hcm.edu.vn/UploadImages/Config/pgdphunhuan/logo phong gd 2.png"
                  />
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <div className="infoFooter">
                  <div>
                    <strong>
                      <span>PHÒNG GIÁO DỤC VÀ ĐÀO TẠO QUẬN PHÚ NHUẬN</span>
                    </strong>
                  </div>
                  <div>
                    <span>Email: pgdphunhuan@moet.edu.vn</span>
                  </div>
                  <p>
                    <span>
                      Địa chỉ: 15 NGUYỄN THỊ HUỲNH, PHƯỜNG 8, QUẬN PHÚ NHUẬN
                    </span>
                  </p>
                  <div>
                    <span>
                      Điện thoại: Văn thư:&nbsp;08 38.443.764 - Tổ Phổ
                      thông:&nbsp;08 38.440.314 - Tổ Mầm non: 08 38.445.798 - Tổ
                      hành chánh, kế toán: 08 38.424.546
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

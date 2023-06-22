import "./styles.css";
const Header = () => {
  const handleClick = () => {};
  return (
    <>
      <header class="main-header">
        <div class="row m-2 d-flex align-items-center row-header">
          <div class="col-12 col-md-2 col-lg-1 div-logo"></div>
          <div class="col-12 col-md-10 col-lg-8">
            <div class="tt-title-hq">
              PHÒNG GIÁO DỤC VÀ ĐÀO TẠO QUẬN PHÚ NHUẬN
            </div>
            <div class="tt-title">
              Cổng thông tin tra cứu văn bằng chứng chỉ
            </div>
          </div>
          <div className="col-12 col-xl-2 col-lg-3 form-inline d-flex justify-content-around">
            <p className="tt-link">
              <span className="tt-text">Tra cứu</span>
            </p>
            <span className="tt-link">
              <span className="tt-text">Cấp bản sao</span>
              <i
                className="fa fa-solid fa-angle-down"
                id="icon"
                onClick={handleClick}
              />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

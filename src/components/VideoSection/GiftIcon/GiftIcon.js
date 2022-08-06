import "./GiftIcon.scss";

const GiftIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-center text-light my-5">
            <strong>CLICK ME !!!</strong>
          </h3>
        </div>
        <div class="col-12 mt-5 d-flex justify-content-center">
          <div class="box">
            <div class="box-body">
              <div class="box-lid">
                <div class="box-bowtie"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftIcon;

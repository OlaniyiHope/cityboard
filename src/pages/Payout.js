import React from "react";
import Footer from "./Footer";
import parkwell from "./new.png";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
const Payout = () => {
  return (
    <>
      <body class="d-flex flex-column h-100">
        <div
          class="modal fade"
          id="bankModal"
          tabindex="-1"
          aria-labelledby="bankModalLabel"
          aria-hidden="false"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="bankModalLabel">
                  Add Bank Account
                </h5>
                <button
                  type="button"
                  class="close-model-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="uil uil-multiply"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="model-content main-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Account Name*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Account Number*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Bank Name*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">BSB code*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder="XXY-ZZZ"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">SWIFT/BIC code*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">ABA Routing*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">
                          International Bank Account Number*
                        </label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="co-main-btn min-width btn-hover h_40"
                  data-bs-target="#aboutModal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="main-btn min-width btn-hover h_40">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <DashboardHeader />

        <Sidebar />

        <div class="wrapper wrapper-body">
          <div class="dashboard-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="d-main-title">
                    <h3>
                      <i class="fa-solid fa-credit-card me-3"></i>Payouts
                    </h3>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="main-card mt-5">
                    <div class="dashboard-wrap-content p-4">
                      <h5 class="mb-4">Added Bank Account (1)</h5>
                      <div class="d-md-flex flex-wrap align-items-center">
                        <div class="dashboard-date-wrap">
                          <div class="form-group">
                            <div class="relative-input position-relative">
                              <input
                                class="form-control h_40"
                                type="text"
                                placeholder="Search by coupon name"
                                value=""
                              />
                              <i class="uil uil-search"></i>
                            </div>
                          </div>
                        </div>
                        <div class="rs ms-auto mt_r4">
                          <button
                            class="main-btn btn-hover h_40 w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#bankModal"
                          >
                            Add Bank Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="all-promotion-list">
                    <div class="main-card mt-4 p-4 pt-0">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          <div class="bank-card p-4 mt-4">
                            <h5>Bank Name</h5>
                            <h6>John Doe</h6>
                            <span>****1234</span>
                            <div class="card-actions">
                              <a href="#" class="action-link">
                                <i class="fa-solid fa-pen"></i>
                              </a>
                              <a href="#" class="action-link">
                                <i class="fa-solid fa-trash-can"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Payout;

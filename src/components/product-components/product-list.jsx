import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";


export default function ProductsList() {
  return (
    <>
      <div className="" style={{backgroundColor: 'rgb(250,250,250)'}}>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className="">
            <h3 className="fw-bold">Product List</h3>
          </div>
          <div className="text-end">
            <button className='btn btn-primary fw-bold px-4'>Add Product</button>
          </div>
        </div>
      

        <div className='table-responsive bg-white mt-4 rounded-3'>
            <div className="d-flex border-bottom  align-items-center justify-content-between flex-wrap">
                <div className='d-flex align-items-center'>
                    <a href="#" className='text-decoration-none fw-bold p-3 border-bottom border-primary'>All</a>
                    <a href="#" className='text-decoration-none fw-bold p-3 text-secondary'>Active</a>
                    <a href="#" className='text-decoration-none fw-bold p-3 text-secondary'>Draft</a>
                    <a href="#" className='text-decoration-none fw-bold p-3 text-secondary'>Archive</a>
                </div>
                <div>
                    <a href='#' className="text-decoration-none fs-6 text-dark p-0 m-0 me-3 fw-bold d-flex align-items-center">
                      <i className="material-icons">filter_alt</i>
                      Filter
                    </a>
                </div>    
            </div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <div class="form-check pt-1 ms-2 ">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <th scope="col" style={{minWidth: '180px'}}>
                        <h6 className="text-secondary fw-bold p-0 m-0">Product</h6>
                    </th>
                    <th scope="col">
                        <h6 className="text-secondary fw-bold p-0 m-0">SKU</h6>
                    </th>
                    <th scope="col">
                        <h6 className="text-secondary fw-bold p-0 m-0">Status</h6>
                    </th>
                    <th scope="col" style={{minWidth: '95px'}}>
                        <h6 className="text-secondary fw-bold p-0 m-0">Inventory</h6>
                    </th>
                    <th scope="col">
                        <h6 className="text-secondary fw-bold p-0 m-0">Stock</h6>
                    </th>
                    <th scope="col">
                        <h6 className="text-secondary fw-bold p-0 m-0">Available</h6>
                    </th>
                    <th scope="col">
                        <h6 className="text-secondary fw-bold p-0 m-0">Category</h6>
                    </th>
                    <th scope="col" style={{minWidth: '100px'}}>
                        <h6 className="text-secondary fw-bold p-0 m-0">Rating</h6>
                    </th>
                    <th scope="col">
                        <h6 className="text-secondary fw-bold p-0 m-0">Action</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div class="form-check pt-2 ms-2">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <td>
                     <div className='d-flex align-items-center'>
                        <img src="/assets/01.jpg" width={40} className='rounded-3'/>
                        <h6 className="p-0 m-0 ms-2 fw-bold">MacBook Pro 14 inch M2 2023</h6>
                      </div>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">#2022356</h6>
                    </td>
                    <td>
                        <span className='badge rounded-pill mt-2 fw-bold' style={{background: '#5bef9066', color: '#004c1a', fontSize: '13px'}}>Active</span>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">4 Variants</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1500</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1200</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">Electronic</h6>
                    </td>
                    <td >
                        <div className='d-flex align-items-center pt-2'>
                            <i className="material-icons fs-5">star</i>
                            <h6 className="p-0 m-0 fw-bold ms-1">4.50</h6>
                        </div>
                    </td>
                    <td classname='text-end'>
                      <i className="material-icons fs-5 mt-2">more_vert</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="form-check pt-2 ms-2">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <td>
                     <div className='d-flex align-items-center'>
                        <img src="/assets/01.jpg" width={40} className='rounded-3'/>
                        <h6 className="p-0 m-0 ms-2 fw-bold">MacBook Pro 14 inch M2 2023</h6>
                      </div>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">#2022356</h6>
                    </td>
                    <td>
                        <span className='badge rounded-pill mt-2 fw-bold' style={{background: 'rgb(222 209 3 / 26%)', color: 'rgb(216 161 0)', fontSize: '13px'}}>Draft</span>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">4 Variants</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1500</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1200</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">Electronic</h6>
                    </td>
                    <td >
                        <div className='d-flex align-items-center pt-2'>
                            <i className="material-icons fs-5">star</i>
                            <h6 className="p-0 m-0 fw-bold ms-1">4.50</h6>
                        </div>
                    </td>
                    <td classname='text-end'>
                      <i className="material-icons fs-5 mt-2">more_vert</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="form-check pt-2 ms-2">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <td>
                     <div className='d-flex align-items-center'>
                        <img src="/assets/01.jpg" width={40} className='rounded-3'/>
                        <h6 className="p-0 m-0 ms-2 fw-bold">MacBook Pro 14 inch M2 2023</h6>
                      </div>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">#2022356</h6>
                    </td>
                    <td>
                        <span className='badge rounded-pill mt-2 fw-bold' style={{background: '#5bef9066', color: '#004c1a', fontSize: '13px'}}>Active</span>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">4 Variants</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1500</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1200</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">Electronic</h6>
                    </td>
                    <td >
                        <div className='d-flex align-items-center pt-2'>
                            <i className="material-icons fs-5">star</i>
                            <h6 className="p-0 m-0 fw-bold ms-1">4.50</h6>
                        </div>
                    </td>
                    <td classname='text-end'>
                      <i className="material-icons fs-5 mt-2">more_vert</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="form-check pt-2 ms-2">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <td>
                     <div className='d-flex align-items-center'>
                        <img src="/assets/01.jpg" width={40} className='rounded-3'/>
                        <h6 className="p-0 m-0 ms-2 fw-bold">MacBook Pro 14 inch M2 2023</h6>
                      </div>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">#2022356</h6>
                    </td>
                    <td>
                        <span className='badge rounded-pill mt-2 fw-bold' style={{background: '#5bef9066', color: '#004c1a', fontSize: '13px'}}>Active</span>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">4 Variants</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1500</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1200</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">Electronic</h6>
                    </td>
                    <td >
                        <div className='d-flex align-items-center pt-2'>
                            <i className="material-icons fs-5">star</i>
                            <h6 className="p-0 m-0 fw-bold ms-1">4.50</h6>
                        </div>
                    </td>
                    <td classname='text-end'>
                      <i className="material-icons fs-5 mt-2">more_vert</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="form-check pt-2 ms-2">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <td>
                     <div className='d-flex align-items-center'>
                        <img src="/assets/01.jpg" width={40} className='rounded-3'/>
                        <h6 className="p-0 m-0 ms-2 fw-bold">MacBook Pro 14 inch M2 2023</h6>
                      </div>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">#2022356</h6>
                    </td>
                    <td>
                        <span className='badge rounded-pill mt-2 fw-bold' style={{background: 'rgb(222 209 3 / 26%)', color: 'rgb(216 161 0)', fontSize: '13px'}}>Draft</span>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">4 Variants</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1500</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1200</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">Electronic</h6>
                    </td>
                    <td >
                        <div className='d-flex align-items-center pt-2'>
                            <i className="material-icons fs-5">star</i>
                            <h6 className="p-0 m-0 fw-bold ms-1">4.50</h6>
                        </div>
                    </td>
                    <td classname='text-end'>
                      <i className="material-icons fs-5 mt-2">more_vert</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="form-check pt-2 ms-2">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <td>
                     <div className='d-flex align-items-center'>
                        <img src="/assets/01.jpg" width={40} className='rounded-3'/>
                        <h6 className="p-0 m-0 ms-2 fw-bold">MacBook Pro 14 inch M2 2023</h6>
                      </div>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">#2022356</h6>
                    </td>
                    <td>
                        <span className='badge rounded-pill mt-2 fw-bold' style={{background: '#5bef9066', color: '#004c1a', fontSize: '13px'}}>Active</span>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">4 Variants</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1500</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1200</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">Electronic</h6>
                    </td>
                    <td >
                        <div className='d-flex align-items-center pt-2'>
                            <i className="material-icons fs-5">star</i>
                            <h6 className="p-0 m-0 fw-bold ms-1">4.50</h6>
                        </div>
                    </td>
                    <td classname='text-end'>
                      <i className="material-icons fs-5 mt-2">more_vert</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="form-check pt-2 ms-2">
                        <input class="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <td>
                     <div className='d-flex align-items-center'>
                        <img src="/assets/01.jpg" width={40} className='rounded-3'/>
                        <h6 className="p-0 m-0 ms-2 fw-bold">MacBook Pro 14 inch M2 2023</h6>
                      </div>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">#2022356</h6>
                    </td>
                    <td>
                        <span className='badge rounded-pill mt-2 fw-bold' style={{background: '#5bef9066', color: '#004c1a', fontSize: '13px'}}>Active</span>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">4 Variants</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1500</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">1200</h6>
                    </td>
                    <td>
                        <h6 className="p-0 m-0 fw-bold pt-2">Electronic</h6>
                    </td>
                    <td >
                        <div className='d-flex align-items-center pt-2'>
                            <i className="material-icons fs-5">star</i>
                            <h6 className="p-0 m-0 fw-bold ms-1">4.50</h6>
                        </div>
                    </td>
                    <td classname='text-end'>
                      <i className="material-icons fs-5 mt-2">more_vert</i>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
      </div>
      <CustomizedPagination />
    </>
  );
}

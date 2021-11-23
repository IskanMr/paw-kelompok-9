import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Employee = (props) => (
  <tr>
    <td>{props.employee.name}</td>
    <td>{props.employee.position}</td>
    <td>{props.employee.points}</td>
    <td>
      <div
        className={props.employee.active === true ? "dot active" : "dot"}
      ></div>
    </td>
    <td>
      <Link to={"/edit/" + props.employee._id}>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.209 0.0908055C23.956 0.145613 23.5419 0.290351 23.2888 0.412499C22.8665 0.616293 22.2214 1.24134 15.417 8.03976C11.3405 12.1127 7.97366 15.5263 7.93508 15.6256C7.85474 15.8324 7.2918 20.535 7.29188 20.9984C7.29195 21.4125 7.58095 21.7176 7.97663 21.7215C8.12563 21.7229 9.41012 21.6067 10.8311 21.4632L13.4147 21.2022L20.6917 13.9369C26.0945 8.54266 28.0583 6.53842 28.3166 6.15498C29.4279 4.50537 29.1634 2.39429 27.6723 1.01333C26.7558 0.164449 25.461 -0.180471 24.209 0.0908055ZM26.1394 1.70374C26.6454 1.95136 27.0851 2.39188 27.3168 2.88309C27.4742 3.21704 27.5004 3.3685 27.5004 3.94526C27.5004 4.94985 27.3656 5.19203 26.0868 6.48532L25.0625 7.52121L23.2817 5.74159L21.5009 3.96197L22.3377 3.09992C23.696 1.70069 24.1467 1.44422 25.1722 1.4872C25.62 1.50596 25.8326 1.55355 26.1394 1.70374ZM4.26514 2.96169C2.13507 3.31674 0.426377 5.04849 0.0762861 7.20716C-0.0254287 7.83441 -0.0254287 24.061 0.0762861 24.6883C0.401179 26.6916 1.78626 28.2333 3.81567 28.8506C4.17878 28.9611 4.94493 28.9734 12.7422 28.9943C18.601 29.0101 21.4261 28.9933 21.7654 28.9408C22.8941 28.7663 23.7372 28.3401 24.5665 27.5253C25.3892 26.7169 25.8638 25.8062 26.0452 24.6883C26.092 24.3995 26.1193 22.1898 26.1196 18.6562L26.1201 13.0799H25.3769H24.6337V18.7653C24.6337 24.9659 24.6397 24.8655 24.2253 25.6435C23.9795 26.1051 23.2141 26.8708 22.7527 27.1167C21.955 27.5419 22.3474 27.5254 13.0636 27.5245C5.9252 27.5237 4.50608 27.5075 4.18678 27.4224C2.94468 27.0917 1.95281 26.1257 1.61907 24.9219C1.49456 24.4725 1.48776 24.0098 1.48776 15.9464C1.48776 6.65767 1.47127 7.04975 1.89618 6.25192C2.14201 5.79031 2.90738 5.02463 3.36881 4.7787C4.1465 4.36417 4.04613 4.37012 10.2443 4.37012H15.9274V3.62661V2.88309L10.2825 2.89138C7.17777 2.89591 4.46998 2.92756 4.26514 2.96169ZM18.4047 14.1715L12.7776 19.7949L10.8311 19.9987C9.03405 20.1869 8.88293 20.1934 8.86297 20.0834C8.85108 20.0179 8.93941 19.1243 9.05925 18.0976L9.27712 16.231L14.8849 10.6192L20.4926 5.00742L22.2622 6.77777L24.0318 8.54811L18.4047 14.1715Z"
            fill="#4779B8"
          />
        </svg>
      </Link>{" "}
      <a
        href="#"
        onClick={() => {
          const result = window.confirm("Want to delete?");
          if (result) {
            props.deleteEmployee(props.employee._id);
          }
        }}
      >
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.01567 0.0550228C8.27695 0.197068 7.52979 0.764682 7.21534 1.42275C7.00234 1.86848 6.92738 2.25038 6.92738 2.88992V3.39195H4.67971C3.39277 3.39195 2.29907 3.41664 2.12082 3.44978C1.04215 3.6501 0.215235 4.49223 0.0316105 5.57739C-0.142066 6.60388 0.413144 7.67873 1.37198 8.17215L1.76878 8.37633L1.80499 8.70182C1.82483 8.88085 2.17923 13.0287 2.59246 17.9193C3.00563 22.8099 3.36681 26.908 3.39503 27.0263C3.60474 27.9051 4.41991 28.6982 5.32953 28.9082C5.85918 29.0306 20.1408 29.0306 20.6705 28.9082C21.5801 28.6982 22.3959 27.9045 22.6048 27.0263C22.633 26.908 22.9941 22.8099 23.4075 17.9193C23.8208 13.0287 24.1752 8.88085 24.1951 8.70182L24.2312 8.37633L24.628 8.17215C25.5869 7.67873 26.1421 6.60388 25.9684 5.57739C25.7848 4.49223 24.9578 3.6501 23.8792 3.44978C23.7009 3.41664 22.6072 3.39195 21.3203 3.39195H19.0726V2.88992C19.0726 2.61387 19.0461 2.25078 19.0136 2.08313C18.8166 1.06593 17.9778 0.244473 16.939 0.051568C16.5575 -0.0192847 9.38587 -0.0161696 9.01567 0.0550228ZM16.8764 1.80686C17.2217 1.97937 17.3376 2.24908 17.3376 2.87995V3.39195H13H8.66242V2.87995C8.66242 2.25916 8.77884 1.98152 9.11127 1.80963C9.31982 1.70185 9.45781 1.69777 12.9879 1.69534C16.5448 1.6929 16.6546 1.69607 16.8764 1.80686ZM23.8165 5.20506C24.0732 5.33329 24.2777 5.65958 24.2777 5.94061C24.2777 6.22164 24.0732 6.54792 23.8165 6.67615C23.5902 6.7892 23.4978 6.79016 13 6.79016C2.50224 6.79016 2.40976 6.7892 2.18346 6.67615C1.92684 6.54792 1.72228 6.22164 1.72228 5.94061C1.72228 5.66824 1.92696 5.33408 2.17114 5.20784C2.38408 5.09774 2.54799 5.09604 12.9879 5.09355C23.5004 5.09105 23.5902 5.09202 23.8165 5.20506ZM22.4524 8.72997C22.4357 8.86239 22.086 12.9551 21.6752 17.825C20.8661 27.4147 20.9311 26.8725 20.5576 27.1451L20.3943 27.2644H13H5.60569L5.44237 27.1451C5.06887 26.8725 5.13388 27.4147 4.32483 17.825C3.91404 12.9551 3.56425 8.86239 3.5476 8.72997L3.51735 8.48926H13H22.4827L22.4524 8.72997ZM7.37369 10.3065C7.22968 10.3809 7.11419 10.5016 7.03571 10.6599L6.91645 10.9002L7.35594 17.893C7.84736 25.7108 7.79259 25.248 8.25353 25.4783C8.54577 25.6243 8.77907 25.6243 9.07131 25.4783C9.23041 25.3988 9.33931 25.288 9.4219 25.1216L9.54167 24.8801L9.10161 17.8882C8.60973 10.0718 8.66438 10.5338 8.20379 10.3037C7.91566 10.1597 7.65592 10.1606 7.37369 10.3065ZM12.5813 10.3052C12.4492 10.3735 12.3199 10.5038 12.2488 10.6402C12.1341 10.8604 12.1325 10.9624 12.1325 17.891C12.1325 24.8224 12.1341 24.9215 12.2489 25.142C12.3798 25.3933 12.713 25.5936 13 25.5936C13.287 25.5936 13.6202 25.3933 13.7511 25.142C13.8659 24.9215 13.8675 24.8224 13.8675 17.891C13.8675 10.9596 13.8659 10.8604 13.7511 10.64C13.5377 10.2303 13.0153 10.0808 12.5813 10.3052ZM17.7839 10.3065C17.3374 10.5373 17.3886 10.0985 16.8984 17.8882L16.4583 24.8801L16.5781 25.1216C16.6607 25.288 16.7696 25.3988 16.9287 25.4783C17.2209 25.6243 17.4542 25.6243 17.7465 25.4783C18.2074 25.248 18.1526 25.7108 18.6441 17.893L19.0835 10.9002L18.9642 10.6596C18.7516 10.2311 18.231 10.0754 17.7839 10.3065Z"
            fill="#FF4C4C"
          />
        </svg>
      </a>
    </td>
  </tr>
);

export default function ListEmployee(props) {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/employees")
      .then((response) => {
        response.data.sort((a, b) => b.points - a.points);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deleteEmployee = (id) => {
    axios
      .delete("http://localhost:3000/api/employees/" + id)
      .then((response) => {
        console.log(response.data);
      });

    setEmployee(employee.filter((el) => el._id !== id));
  };

  const employeeList = () => {
    return employee.map((currentEmployee) => {
      return (
        <Employee
          employee={currentEmployee}
          deleteEmployee={deleteEmployee}
          key={currentEmployee._id}
        />
      );
    });
  };

  return (
    <ListEmployeeContainer>
      <div className="list-content">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nama </th>
              <th>Posisi</th>
              <th>point</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{employeeList()}</tbody>
        </table>
      </div>
    </ListEmployeeContainer>
  );
}

const ListEmployeeContainer = styled.div`
  min-height: 100vh;
  padding: 7rem 0 3rem 0;
  width: 100%;
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  .list-content {
    background-color: white;
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: 3px 0px 25px 10px rgba(0, 0, 0, 0.025);
    overflow: hidden;
  }
  .table {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .thead-light {
    width: 100%;
    padding: 2rem 5rem 0 5rem;
    box-shadow: 3px 0px 25px 10px rgba(0, 0, 0, 0.05);
    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      th {
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  tbody {
    width: 100%;
    padding: 2rem 5rem 1rem 5rem;
    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      td {
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          margin: 0 1rem;
        }
        .dot {
          width: 1rem;
          height: 1rem;
          background-color: red;
          border-radius: 1rem;
        }
        .active {
          background-color: green;
        }
      }
    }
  }
`;
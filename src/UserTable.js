import { useMemo } from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { makeStyles, createStyles } from "@mui/styles";

const URL = "https://jsonplaceholder.typicode.com/users";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
          "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
        },
      },
    },
  })
);

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  const fetchUsers = async (URL) => {
    try {
      const response = await fetch(URL);
      const userData = await response.json();
      if (userData.length > 0) {
        setUsers(userData);
      }
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers(URL);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 40,
        position: "sticky",
        left: 0,
        background: "black",
      },
      { field: "name", headerName: "Name", width: 200 },
      {
        field: "email",
        headerName: "Email",
        width: 200,
      },
      { field: "street", headerName: "Street", width: 150 },
      { field: "suite", headerName: "Suite", width: 120 },
      { field: "zipcode", headerName: "Zipcode", width: 120 },
      { field: "geoLat", headerName: "GeoLat", width: 100 },
      { field: "geoLng", headerName: "GeoLng", width: 100 },
      { field: "phone", headerName: "Phone", width: 200 },
      { field: "website", headerName: "Website", width: 150 },
      { field: "companyName", headerName: "Company Name", width: 180 },
      {
        field: "companyCatchphrase",
        headerName: " Company Catch Phrase",
        width: 300,
      },
      { field: "companyBs", headerName: "Business Service", width: 300 },
    ],
    []
  );

  const rows = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    street: user.address.street,
    suite: user.address.suite,
    zipcode: user.address.zipcode,
    geoLat: user.address.geo.lat,
    geoLng: user.address.geo.lng,
    phone: user.phone,
    website: user.website,
    companyName: user.company.name,
    companyCatchphrase: user.company.catchPhrase,
    companyBs: user.company.bs,
  }));

  console.log(users);

  return (
    <div sx={{ height: 600, widtsh: "100%" }}>
      <DataGrid
        className={classes.root}
        autoHeight
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default UserTable;

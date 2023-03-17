import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Fragment } from "react";

const UserData = (props) => {
  return (
    <>
      {props.users.map((user) => {
        const { id, name, email, address, phone, website, company } = user;
        return (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{address.street}</TableCell>
            <TableCell>{address.suite}</TableCell>
            <TableCell>{address.city}</TableCell>
            <TableCell>{address.zipcode}</TableCell>
            <TableCell>{address.geo.lat}</TableCell>
            <TableCell>{address.geo.lng}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{website}</TableCell>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.catchPhrase}</TableCell>
            <TableCell>{company.bs}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default UserData;

// <TableContainer component={Paper}>
//         <Table>
//           <TableHead className={styles.tableHead}>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Street</TableCell>
//               <TableCell>Suite</TableCell>
//               <TableCell>City</TableCell>
//               <TableCell>Zipcode</TableCell>
//               <TableCell>Geo-lat</TableCell>
//               <TableCell>Geo-lng</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Website</TableCell>
//               <TableCell>Company Name</TableCell>
//               <TableCell>Company Catchphrase</TableCell>
//               <TableCell>Company BS</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {/* <UserData users={props.users} /> */}
//             <CollapsibleRow users={props.users} />
//           </TableBody>
//         </Table>
//       </TableContainer>

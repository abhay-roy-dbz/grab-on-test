import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import PopupForm from "./PopupForm";

const columns = [
  { id: "userId", label: "UserId", minWidth: 20, align: "center" },
  { id: "id", label: "Id", minWidth: 20, align: "center" },
  { id: "title", label: "Title", minWidth: 50, align: "center" },
  { id: "body", label: "Body", minWidth: 10, align: "center" },
  { id: "controls", label: "controls", minWidth: 20, align: "center" },
];

const DataTable = ({ articles, deleteArticle, updateArticle }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [articleToUpdate, setArticleToUpdate] = React.useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFormState = (id) => {
    setArticleToUpdate(id);
    setIsFormOpen(!isFormOpen);
  };
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440, minWidth: "80%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#3F3B3B",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {articles
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((article) => {
                return (
                  <TableRow
                    key={article.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{article.userId}</TableCell>
                    <TableCell align="center">{article.id}</TableCell>
                    <TableCell align="center">{article.title}</TableCell>
                    <TableCell align="center">{article.body}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ margin: "2px" }}
                        onClick={() => handleFormState(article.id)}
                      >
                        Edit
                      </Button>
                      {isFormOpen && (
                        <PopupForm
                          id={articleToUpdate}
                          updateArticle={updateArticle}
                          handleFormState={handleFormState}
                        />
                      )}
                      <Button
                        variant="contained"
                        sx={{ margin: "2px" }}
                        onClick={() => deleteArticle(article.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={articles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;

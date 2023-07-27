import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../components/Table";
import { Button } from "@mui/material";
import PopupForm from "../components/PopupForm";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchAllArticle = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/articles/getAllArticles`
      );
      console.log("data=", data);
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createArticle = async (description) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/articles/createArticle`,
        description
      );
      fetchAllArticle();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArticle = async (id) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/articles/deleteArticle/${id}`
      );
      fetchAllArticle();
    } catch (error) {
      console.log(error);
    }
  };

  const updateArticle = async (id, description) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/articles/updateArticle/${id}`,
        description
      );
      fetchAllArticle();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormState = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    console.log("useEffect called");
    fetchAllArticle();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Button
        variant="contained"
        sx={{ margin: "20px" }}
        onClick={handleFormState}
      >
        Create New Article
      </Button>
      {isFormOpen && (
        <PopupForm
          userId={articles[0].userId}
          id={articles.length + 1}
          createArticle={createArticle}
          handleFormState={handleFormState}
        />
      )}
      <DataTable
        articles={articles}
        deleteArticle={deleteArticle}
        updateArticle={updateArticle}
      />
    </div>
  );
};

export default ArticlePage;

import React, { Component, useState, useEffect } from "react";

function SORT({ articles }) {
  const [aux, setAux] = useState([...articles]);
  const [filter, setFilter] = useState("upvoted");
  const upVoted = () => {
    setFilter(" ");
    setFilter("upvoted");
  };
  const recent = () => {
    setFilter(" ");
    setFilter("date");
  };

  useEffect(() => {
    if (filter === "upvoted") {
      console.log(filter);
      setAux(" ");
      setAux([...articles]);
      const newArr = aux.sort((a, b) => b.upvotes - a.upvotes);
      setAux(newArr);
    } else if (filter === "date") {
      console.log(filter);
      setAux([...articles]);
      const newArr = aux.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAux(newArr);
    }
    setFilter(" ");
  }, [filter, aux, articles]);

  return (
    <div>
      <button data-testid="most-recent-link" onClick={recent}>
        Most Recent
      </button>
      <button data-testid="most-upvoted-link" onClick={upVoted}>
        Most UpVoted
      </button>
      <table>
        <tr>
          <th>Title</th>
          <th>Upvotes</th>
          <th>Date</th>
        </tr>
        {aux &&
          aux.map((i, index) => {
            return (
              <tr data-testid="article">
                <td data-testid="article-title">{i.title}</td>{" "}
                <td data-testid="article-upvotes">{i.upvotes}</td>
                <td data-testid="article-date">{i.date}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default SORT;

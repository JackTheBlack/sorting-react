import React, { useState, useEffect } from "react";

function SORT({ articles }) {
  const [aux, setAux] = useState([...articles]);
  const [filter, setFilter] = useState({
    upvote: false,
    recent: false,
  });
  const upVoted = () => {
    setFilter((i) => {
      return {
        ...i,
        upvote: true,
        recent: false,
      };
    });
  };
  const recent = () => {
    setFilter((i) => {
      return {
        ...i,
        upvote: false,
        recent: true,
      };
    });
  };

  useEffect(() => {
    if (filter.upvote) {
      setAux([...articles]);
      const newArr = articles.sort((a, b) => b.upvotes - a.upvotes);
      setAux(newArr);
    } else if (filter.recent) {
      setAux([...articles]);
      const newArr = articles.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setAux(newArr);
    } else {
      setAux([...articles]);
      const newArr = articles.sort((a, b) => b.upvotes - a.upvotes);
      setAux(newArr);
    }
  }, [filter, articles]);

  return (
    <div>
      <button data-testid="most-upvoted-link" onClick={upVoted}>
        Most upVoted{" "}
      </button>
      <button data-testid="most-recent-link" onClick={recent}>
        Most Recents
      </button>
      <table>
        <tr>
          <th>Title</th>
          <th>Upvotes</th>
          <th>Date</th>
        </tr>
        {aux.map((item, index) => {
          return (
            <tr data-testid="article">
              <td data-testid="article-title">{item.title}</td>{" "}
              <td data-testid="article-upvotes">{item.upvotes}</td>
              <td data-testid="article-date">{item.date}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default SORT;
